# Check supabase/functions.sql for more detail on supabase.rpc functions
import os
from supabase import create_client, Client
from dotenv import load_dotenv
import voyageai
import time
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000", "https://ricethoughts.com/"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

load_dotenv()
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_SECRET_KEYS")
supabase: Client = create_client(url, key)

# Voyage AI call client
vo = voyageai.Client()
# This will automatically use the environment variable VOYAGE_API_KEY.

@app.get("/")
def read_root():
  return {"message": "FastAPI backend is running"}

@app.get("/articles")
def get_articles():
  response = supabase.table("blog_articles").select("*").execute()

  if not response:
      return {"error": "Article not found"}
  
  return response

@app.get("/recs")
def get_recommendations_of_article(slug: str):
  rec_articles_response = supabase.table("blog_articles").select("rec_articles").eq("slug", slug).execute().data

  if not rec_articles_response:
    return {"error": "Recommendations not found"}

  return rec_articles_response

@app.post("/backfill_embeddings")
def backfill_embeddings():
  # Grab blog_articles that dont have embeddings
  orphaned_articles_response = supabase.rpc("get_orphaned_parent_articles").execute()

  # Create and insert embedding for orphaned blog_articles
  for row in orphaned_articles_response.data:
    blog_articles = vo.embed(row["title"] + row["subtitle"] + row["content"], model="voyage-4-lite", input_type="document").embeddings
    time.sleep(20)
    supabase.table("blog_articles").update({"embedding": blog_articles[0]}).eq("id", row["id"]).execute()

@app.post("/backfill_generate_rec")
def backfill_generate_recommendations():
  # Grab id and embedding of all articles
  all_articles_response = supabase.table("blog_articles").select("id, embedding").execute()

  # Match and insert top 3 similar articles to current article
  for article_row in all_articles_response.data:
    # Grab id, slug and title of top 3 articles similar to article_row["id"]
    top_similar_response = supabase.rpc("match_articles", {
        "query_embedding": article_row["embedding"],
        "match_threshold": 0.5,
        "current_article_id": article_row["id"]
    }).execute()

    # Insert array of top 3 articles to rec_articles col of article_row["id"]
    similar_arr = []
    for rec_article_row in top_similar_response.data:
      # {'id': '***', 'slug': 'please-stop-betting-on-baseball', 'title': 'Please Stop Betting on Baseball'}
      similar_arr.append(rec_article_row)
    supabase.table("blog_articles").update({"rec_articles": similar_arr}).eq("id", article_row["id"]).execute()