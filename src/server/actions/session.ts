import { auth } from "@/src/lib/auth";
import type { Session } from "next-auth";

export async function getSession(): Promise<Session | null> {
  return await auth();
}