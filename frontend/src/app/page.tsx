// import Posts from './components/article-block'
import { wisp } from "@/src/lib/wisp";
// import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const result = await wisp.getPosts({ limit: "all" });
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-5">
      <ul>
        {result.posts.map((post) => (
          <li key={post.id}>
            <Link
              href={`blog/${post.slug}`}
              className="group block wrap-break-word py-6"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="grid grid-cols-1 gap-3">
                  <div className="text-xs font-medium uppercase tracking-wide text-[#a1a1aa]">
                    {Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }).format(new Date(post.publishedAt || post.createdAt))}
                  </div>
                  <h2 className="font-sans text-2xl font-semibold tracking-tight text-[#f8fafc] md:text-3xl">
                    {post.title}
                  </h2>
                  <div className="line-clamp-4 leading-relaxed text-[#d4d4d8] md:text-lg">
                    {post.description}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2 text-sm">
                    {post.tags.map((tag) => (
                      <span
                        key={tag.id}
                        className="rounded-md bg-[#2d2444] px-2 py-1 text-[#d8b4fe]"
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                <span className="mt-1 text-2xl text-[#d4d4d8] transition-transform group-hover:translate-x-1 group-hover:text-white">
                  →
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}