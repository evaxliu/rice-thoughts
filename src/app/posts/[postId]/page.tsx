import { getSortedPostsData, getPostData } from "@/src/lib/posts"
import { notFound } from "next/navigation"
import Link from "next/link"

export function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    postId: post.id
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ postId: string }> }) {
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

export default async function Post({ params }: { params: Promise<{ postId: string }> }) {
  const posts = getSortedPostsData()
  const { postId } = await params

  if (!posts.find(post => post.id === postId)) notFound()

  const { title, date, author, contentHtml } = await getPostData(postId)

  const pubDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))

  return (
    <div>
      <main className="">
        <div className="block sm:hidden overflow-y-scroll">
          {/* Mobile */}
          <h1 className="text-3xl">{title}</h1>
          <p>
            {author}
          </p>
          <p className="mt-0 pb-5">
            {pubDate}
          </p>
          <article className="max-h-[60vh]">
            <section
              className="prose prose-slate dark:prose-invert text-gray-400 dark:text-white light:text-black text-xl"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <p className="float-right cursor-pointer pt-10 pb-10">
              <Link href="/">← Back to home</Link>
            </p>
          </article>
        </div>

        {/* Desktop + Tablets */}
        <div className="hidden sm:block">
          <h1 className="text-3xl mt-4 mb-0">{title}</h1>
          <p>
            {author}
          </p>
          <p className="mt-0 pb-5">
            {pubDate}
          </p>
          <article className="max-h-[60vh]">
            <section
              className="prose prose-slate dark:prose-invert text-gray-400 dark:text-white light:text-black text-xl"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
            <p className="float-right cursor-pointer pt-10 pb-10">
              <Link href="/">← Back to home</Link>
            </p>
          </article>
        </div>
      </main>
    </div>
  )
}