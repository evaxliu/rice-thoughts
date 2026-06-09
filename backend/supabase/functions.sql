-- Install vector extension for vector database handling
CREATE EXTENSION IF NOT EXISTS vector;

-- =====================
-- get_orphaned_parent_articles
-- =====================
DROP FUNCTION IF EXISTS get_orphaned_parent_articles();

CREATE OR REPLACE FUNCTION get_orphaned_parent_articles()
RETURNS TABLE(id uuid, title varchar, subtitle varchar, content varchar, tags varchar[]) AS $$
  SELECT id, title, subtitle, content, tags
  FROM blog_articles
  WHERE embedding IS NULL;
$$ LANGUAGE sql;

-- =====================
-- match_articles
-- =====================
-- Match articles using cosine distance (<=>)
DROP FUNCTION match_articles;
CREATE OR REPLACE FUNCTION match_articles (
  query_embedding vector(1024),
  match_threshold float,
  current_article_id uuid
)

RETURNS TABLE(id uuid, slug varchar, title varchar) AS $$
  SELECT id, slug, title
  FROM blog_articles
  WHERE (blog_articles.id != current_article_id) and ((blog_articles.embedding <=> query_embedding) < (1 - match_threshold))
  ORDER by blog_articles.embedding <=> query_embedding ASC
  LIMIT 3;
$$ LANGUAGE sql;