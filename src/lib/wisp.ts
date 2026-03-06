import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "83f9f471-9804-41ce-8e32-b70c442c75d7",
});

export type { GetPostsResult, GetPostResult };