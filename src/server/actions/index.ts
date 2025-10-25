'use server';
import { signIn, signOut } from "@/src/lib/auth";

export async function doSocialLogin(formData: FormData) {
  const action = formData.get("action");
  
  if (typeof action !== "string") {
    throw new Error("Invalid action");
  }

  await signIn(action, { redirectTo: "/login" });
}

export async function doLogout(): Promise<void> {
  await signOut({ redirectTo: "/" });
}