import {
  buildWispClient,
  GetPostsResult,
  GetPostResult,
} from "@wisp-cms/client";

export const wisp = buildWispClient({
  blogId: "10eac2c0-5873-49de-b7e7-55d3a5602357",
});

export type { GetPostsResult, GetPostResult };