import { getSortedPostsData } from "@/src/lib/posts"
import ListItem from "./article-item"

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