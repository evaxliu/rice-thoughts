import Link from "next/link"

type Props = {
  post: BlogPost
}

export default function ListItem({ post }: Props) {
  const { id, title, date, author } = post

  return (
    <li className="text-xl dark:text-white/90 light:text-black/90">
      <main className="p-10 m-5 dark:text-white light:text-black flex items-center justify-center border">
        <section className="w-full flex-none">
          <h1>
            {title}
          </h1>
          <p className="text-base mt-1">
            {author}
          </p>
          <p className="text-sm mt-1">{new Intl.DateTimeFormat('en-US', { dateStyle: 'long' }).format(new Date(date))}</p>
          <Link className="underline dark:hover:text-white light:hover:text-black hover:underline cursor-pointer float-right" href={`/posts/${id}`}>Read More...</Link>
        </section>
      </main>
    </li>
  )
}