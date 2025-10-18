import getFormattedDate from "@/src/lib/getFormattedDate"
import { getSortedPostsData, getPostData } from "@/src/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = await params

  const post = posts.find(post => post.id === postId)

  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
  }
}

export default async function Post({ params }: { params: { postId: string } }) {
  const posts = getSortedPostsData()
  const { postId } = await params

  if (!posts.find(post => post.id === postId)) notFound()

  const { title, date, author, contentHtml } = await getPostData(postId)

  const pubDate = getFormattedDate(date)

  return (
    <main className="px-6 mx-auto max-w-4xl flex flex-col items-center justify-center">
      <div className="w-full flex-none">
        <h1 className="text-3xl mt-4 mb-0">{title}</h1>
        <p>
          {author}
        </p>
        <p className="mt-0 pb-5">
          {pubDate}
        </p>
        <article>
          <section
            className="prose prose-slate dark:prose-invert max-w-none max-h-[60vh] overflow-y-auto pr-4 text-white"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
          <p className="float-right cursor-pointer pt-10">
            <Link href="/">← Back to home</Link>
          </p>
        </article>
      </div>
    </main>
  )
}