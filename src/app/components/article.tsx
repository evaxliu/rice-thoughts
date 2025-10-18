import { getSortedPostsData } from "@/src/lib/posts"
import ListItem from "./list-item"

export default function Posts() {
  const posts = getSortedPostsData()

  return (
    <section className="mt-6 mx-auto max-w-2xl">
      <ul className="w-full">
        {posts.map(post => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  )
}