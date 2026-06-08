"use client";
import { GetPostResult } from "@/src/lib/wisp";
import Link from "next/link";
import sanitize, { defaults } from "sanitize-html";

export const PostContent = ({ content }: { content: string }) => {
  const sanitizedContent = sanitize(content, {
    allowedTags: [
      "b",
      "br",
      "i",
      "em",
      "strong",
      "a",
      "img",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "p",
      "li",
      "ul",
      "ol",
      "blockquote",
      // tables
      "td",
      "th",
      "table",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "small",
      "div",
      "iframe",
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      "*": ["style"],
      iframe: ["src", "allowfullscreen", "style"],
      a: ["href", "target", "rel"],
      p: ["align", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <div
      className="mx-auto"
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
    ></div>
  );
};

export const BlogPostContent = ({ post }: { post: GetPostResult["post"] }) => {
  if (!post) return null;

  const { title, publishedAt, createdAt, content, tags } = post;

  return (
    <article className="mx-auto w-full max-w-3xl px-6 pt-10 pb-20">
      <Link
        href="/"
        className="mb-8 inline-block text-base text-[#64748b] hover:text-[#111827] dark:text-[#94a3b8] dark:hover:text-white"
      >
        ← Back to all posts
      </Link>

      <div className="mb-4 flex items-center gap-2 text-sm">
        {/* <span className="font-medium uppercase text-[#2563eb]">
          {tags[0]?.name}
        </span>
        <span className="text-[#94a3b8]">•</span> */}
        <span className="text-[#64748b] dark:text-[#94a3b8]">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(publishedAt || createdAt))}
        </span>
      </div>

      <h1 className="mb-5 text-3xl font-medium tracking-tight text-[#111827] dark:text-[#f8fafc]">
        {title}
      </h1>

      <div className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/tag/${tag.name}`}
            className="rounded bg-[#f3f4f6] px-2.5 py-1 text-sm text-[#64748b] no-underline dark:bg-[#1e293b] dark:text-[#cbd5e1]"
          >
            {tag.name}
          </Link>
        ))}
      </div>

      <div className="prose prose-neutral max-w-none text-base leading-7 text-[#374151] dark:prose-invert dark:text-[#cbd5e1] prose-p:text-[#374151] dark:prose-p:text-[#cbd5e1] prose-a:text-[#2563eb] dark:prose-a:text-[#93c5fd] prose-headings:text-[#111827] dark:prose-headings:text-[#f8fafc] prose-blockquote:border-l-[#94a3b8] prose-code:bg-[#f3f4f6] prose-code:px-1.5 prose-code:py-1 prose-code:rounded dark:prose-code:bg-[#1e293b]">
        <PostContent content={content} />
      </div>

      <div className="mt-16 border-t border-[#e5e7eb] pt-8 dark:border-[#1f2937]">
        <Link
          href="/"
          className="inline-block text-base text-[#64748b] hover:text-[#111827] dark:text-[#94a3b8] dark:hover:text-white"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
};