# Obtain supabase postgres database info
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
# CREATE OR REPLACE FUNCTION get_orphaned_parent_ids()
# RETURNS TABLE(id uuid) AS $$
#   SELECT a.id
#   FROM blog_articles a
#   LEFT JOIN blog_embeddings e ON e.id = a.id
#   WHERE e.id IS NULL;
# $$ LANGUAGE sql;
orphaned_articles_response = supabase.rpc("get_orphaned_parent_articles").execute()

# Voyage AI setup
vo = voyageai.Client()
# This will automatically use the environment variable VOYAGE_API_KEY.

# Create and insert embeddings for the orphaned blog_article ids to blog_embeddings
for row in orphaned_articles_response.data:
  blog_embeddings = vo.embed(row["title"] + row["subtitle"] + row["content"], model="voyage-4-lite", input_type="document").embeddings
  time.sleep(20)
  insert_response = supabase.table("blog_embeddings").insert({"id": row["id"], "embedding": blog_embeddings[0]}).execute()

# Get top 3 similar articles to current article
query = "Insert"
query_embedding = vo.embed([query], model="voyage-4-lite", input_type="query").embeddings[0:2]
print(query_embedding)

# response = supabase.rpc("match_documents", {
#     "query_embedding": query_embedding,
#     "match_threshold": 0.7,
#     "match_count": 5
# }).execute()

# print(response.data)