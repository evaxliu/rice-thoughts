// Old implementation of the article list, used in the home page to list all posts. This is now replaced by the implementation in the page.tsx file, which is more consistent with the rest of the app and allows for better styling and layout.
import { getSortedPostsData } from "@/src/lib/posts"
import ListItem from "./ArticleBlock"

export default function Posts() {
  const posts = getSortedPostsData()

  return (
    <section>
      <ul>
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}