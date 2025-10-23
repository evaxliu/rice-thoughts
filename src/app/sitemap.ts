import type { MetadataRoute } from "next";
import { getSortedPostsData } from "@/src/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ricethoughts.com";
  const posts = getSortedPostsData();

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    ...posts.map(post => ({
      url: `${base}/posts/${post.id}`,
      lastModified: post.date,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}