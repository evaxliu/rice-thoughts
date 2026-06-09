"use client";
import { GetPostResult } from "@/src/lib/wisp";
import Link from "next/link";
import { useEffect, useState } from "react";
import sanitize, { defaults } from "sanitize-html";

type RecArticle = {
  id: string;
  slug: string;
  title: string;
};

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

export const BlogPostContent = (props: { post: GetPostResult["post"]; slug: string; }) => {
  const post = props.post
  const slug = props.slug

  const [recs, setRecs] = useState<RecArticle[]>([]);

  useEffect(() => {
    if (!slug) return;
    
    fetch(`https://rice-thoughts-production.up.railway.app/recs?slug=${slug}`)
    // fetch(`http://127.0.0.1:8000/recs?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => setRecs(data[0]?.rec_articles ?? []))
      .catch((error) => console.error("Error fetching recommendations:", error));
    }, [slug]);

  if (!post) return null;
  const { title, publishedAt, createdAt, content, tags } = post;

  return (
    <div>
      <div className="prose prose-neutral lg:prose-xl dark:prose-invert mx-auto max-w-[65ch] leading-[1.8] text-[1.15rem] text-[#d4d4d8] prose-h1:text-3xl lg:prose-h1:text-3xl prose-headings:font-bold prose-headings:leading-[1.3] prose-headings:text-[#f8fafc] prose-p:mb-[1.35rem] prose-p:text-[#d4d4d8] prose-a:text-[#c084fc] prose-a:font-medium prose-a:underline prose-a:underline-offset-[3px] prose-code:bg-[#1f2330] prose-code:text-[#f8fafc] prose-code:px-[0.45em] prose-code:py-[0.25em] prose-code:rounded prose-blockquote:border-l-[#c084fc] prose-blockquote:text-[#d4d4d8] prose-blockquote:italic mb-10 lg:mt-20 wrap-break-word">
        <h1>{title}</h1>

        <div className="text-sm opacity-40 mt-4">
          {Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(new Date(publishedAt || createdAt))}
        </div>
        
        <div className="text-sm mt-4">
          {tags.map((tag) => (
            <span
              key={tag.id}
              className="rounded-md bg-[#2d2444] px-2 py-1 text-[#d8b4fe] mr-2"
            >
              #{tag.name}
            </span>
          ))}
        </div>
        
        <PostContent content={content} />

        <h4>
          Similar Articles
        </h4>
        {
          recs.map((rec) => (
            <Link
              key={rec.id}
              href={rec.slug}
              className="text-primary mr-2"
            >
              {rec.title}
            </Link>
          ))
        }
      </div>
    </div>
  );
};