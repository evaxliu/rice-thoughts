# Check supabase/functions.sql for more detail on supabase.rpc functions
import os
from supabase import create_client, Client
from dotenv import load_dotenv
import voyageai
import time

load_dotenv()
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_SECRET_KEYS")
supabase: Client = create_client(url, key)

# Grab blog_articles that dont exist in blog_embeddings
orphaned_articles_response = supabase.rpc("get_orphaned_parent_articles").execute()

# Voyage AI setup
vo = voyageai.Client()
# This will automatically use the environment variable VOYAGE_API_KEY.

# Create and insert embedding for the orphaned blog_article
for row in orphaned_articles_response.data:
  blog_articles = vo.embed(row["title"] + row["subtitle"] + row["content"], model="voyage-4-lite", input_type="document").embeddings
  time.sleep(20)
  supabase.table("blog_articles").update({"embedding": blog_articles[0]}).eq("id", row["id"]).execute()

all_articles_response = supabase.table("blog_articles").select("id, embedding").execute()

# Get and insert top 3 similar articles to current article
for row in all_articles_response.data:
  # Grab ids of top 3 articles similar to row["id"]
  top_similar_response = supabase.rpc("match_articles", {
      "query_embedding": row["embedding"],
      "match_threshold": 0.5,
      "current_article_id": row["id"]
  }).execute()

  # Insert array of top 3 articles to recc_articles col of row["id"]
  similar_arr = []
  for id_row in top_similar_response.data:
    similar_arr.append(id_row["id"])
  supabase.table("blog_articles").update({"recc_articles": similar_arr}).eq("id", row["id"]).execute()
  print(similar_arr)