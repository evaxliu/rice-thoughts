import { getSession } from "@/src/server/actions/session";
import AuthorPage from "../components/author-page";
import UserPage from "../components/user-page";
import SignIn from "../components/signin";

export default async function LoginForm() {
  const session = await getSession();
  let Page = <SignIn/>

  if (session?.user) {
    Page = session?.user?.email === "ricethoughts.communications@gmail.com"
      ? <AuthorPage/>
      : <UserPage name={session?.user?.name ?? ""}/>;
  }

  return (
    Page
  );
};