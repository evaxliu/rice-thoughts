// import Link from "next/link"
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
  if (!result.post) return null;
  const { title, publishedAt, createdAt, content, tags } = result.post;
  return (
    <div>
      <div className="prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words">
        <h1>{title}</h1>
        <div
          className="blog-content mx-auto"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
        <div className="mt-10 opacity-40 text-sm">
          {tags.map((tag) => (
            <span key={tag.id}>#{tag.name}</span>
          ))}
        </div>
        <div className="text-sm opacity-40 mt-4">
          {Intl.DateTimeFormat("en-US").format(
            new Date(publishedAt || createdAt),
          )}
        </div>
      </div>
    </div>
  );
}