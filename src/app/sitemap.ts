import type { MetadataRoute } from "next";
import { getPostData } from "@/src/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ricethoughts.com";
  const posts = getAllPostMeta();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...posts.map(post => ({
      url: `${base}/post/${post.slug}`,
      lastModified: post.updated || post.date,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
  ];
}