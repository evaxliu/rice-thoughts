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
    <div>
      <div className="prose prose-neutral lg:prose-xl dark:prose-invert mx-auto max-w-[65ch] leading-[1.8] text-[1.15rem] prose-h1:text-3xl lg:prose-h1:text-3xl prose-headings:font-bold prose-headings:leading-[1.3] prose-p:mb-[1.35rem] prose-a:text-blue-600 dark:prose-a:text-blue-300 prose-a:font-medium prose-a:underline prose-a:underline-offset-[3px] prose-code:bg-gray-200 dark:prose-code:bg-gray-700 prose-code:text-black dark:prose-code:text-white prose-code:px-[0.45em] prose-code:py-[0.25em] prose-code:rounded prose-blockquote:border-l-blue-600 prose-blockquote:text-inherit prose-blockquote:italic mb-10 lg:mt-20 wrap-break-word">
        <h1>{title}</h1>
        <PostContent content={content} />

        <div className="mt-10 opacity-40 text-sm">
          {tags.map((tag) => (
            <Link
              key={tag.id}
              href={`/tag/${tag.name}`}
              className="text-primary mr-2"
            >
              #{tag.name}
            </Link>
          ))}
        </div>
        <div className="text-sm opacity-40 mt-4">
          {Intl.DateTimeFormat("en-US").format(
            new Date(publishedAt || createdAt)
          )}
        </div>
      </div>
    </div>
  );
};