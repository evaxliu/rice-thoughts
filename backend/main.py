from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from client.supabase import supabase

app = FastAPI()

app.add_middleware(
  CORSMiddleware,
  allow_origins=["http://localhost:3000", "https://ricethoughts.com"],
  allow_credentials=True,
  allow_methods=["*"],
  allow_headers=["*"],
)

@app.get("/")
def read_root():
  return {"message": "FastAPI backend is running"}

@app.get("/articles")
def get_articles():
  response = supabase.table("blog_articles").select("title, subtitle, author, tags, slug, created_date").execute().data

  if not response:
    raise HTTPException(status_code=404, detail="Articles not found")
  
  return {
    "articles": response
  }

@app.get("/recs")
def get_recommendations_of_article(slug: str):
  response = supabase.table("blog_articles").select("rec_articles").eq("slug", slug).execute().data

  if not response:
    raise HTTPException(status_code=404, detail="Recommendations not found")

  return {
    "recommendations": response[0]["rec_articles"]
  }