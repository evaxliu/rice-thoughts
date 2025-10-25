import { doSocialLogin } from "@/src/server/actions";

export default function SignIn() {
  return (
    <form action={doSocialLogin}>
      <button className="bg-black text-white p-1 rounded-md m-1 text-lg" type="submit" name="action" value="google">
        Sign In With Google
      </button>
    </form>
  );
};