import time
from client.supabase import supabase
from client.voyage import vo

def backfill_embeddings():
  # Grab blog_articles that dont have embeddings
  orphaned_articles_response = supabase.rpc("get_orphaned_parent_articles").execute()

  # Create and insert embedding for orphaned blog_articles
  for row in orphaned_articles_response.data:
    blog_articles = vo.embed(row["title"] + row["subtitle"] + row["content"], model="voyage-4-lite", input_type="document").embeddings
    time.sleep(20)
    supabase.table("blog_articles").update({"embedding": blog_articles[0]}).eq("id", row["id"]).execute()

if __name__ == "__main__":
  backfill_embeddings()