// import Link from "next/link"
import { BlogPostContent } from "@/src/app/components/BlogPostContent";
import { wisp } from "@/src/lib/wisp";

interface Params {
  slug: string;
}

export default async function BlogPost({
  params: { slug },
}: {
  params: Params;
}) {
  const result = await wisp.getPost(slug);

  return <BlogPostContent post={result.post} />;
}