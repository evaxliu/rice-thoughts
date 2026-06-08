import { wisp } from "@/src/lib/wisp";
import Link from "next/link";

export default async function Home() {
  const result = await wisp.getPosts({ limit: "all" });

  return (
    <main className="mx-auto w-full max-w-3xl px-6">
      <section className="pt-10">
        <p className="mb-6 max-w-2xl text-base leading-7 text-[#4b5563] dark:text-[#94a3b8]">
          A guy who likes rice and thinks. An essay on food, society and
          politics.
        </p>

        <ul>
          {result.posts.map((post) => (
            <li
              key={post.id}
              className="border-b border-[#e5e7eb] py-8 dark:border-[#1f2937]"
            >
              <Link href={`blog/${post.slug}`} className="group block">
                <div className="mb-3 text-base text-purple-400 dark:text-purple-400">
                  {/* <span className="font-medium uppercase text-[#2563eb]">
                    {post.tags[0]?.name}
                  </span>
                  <span className="text-[#9ca3af]">•</span> */}
                  {Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  }).format(new Date(post.publishedAt || post.createdAt))}
                </div>

                <h2 className="mb-3 text-2xl font-medium tracking-tight text-[#111827] group-hover:underline dark:text-[#f8fafc]">
                  {post.title}
                </h2>

                <p className="mb-4 line-clamp-2 text-base leading-7 text-[#4b5563] dark:text-[#94a3b8]">
                  {post.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="rounded bg-[#f3f4f6] px-2.5 py-1 text-sm text-[#64748b] dark:bg-[#1e293b] dark:text-[#cbd5e1]"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>

                <span className="text-base font-medium text-[#111827] dark:text-[#e5e7eb]">
                  Read more →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}