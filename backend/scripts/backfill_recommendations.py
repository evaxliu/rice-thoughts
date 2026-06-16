from client.supabase import supabase

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

if __name__ == "__main__":
  backfill_generate_recommendations()