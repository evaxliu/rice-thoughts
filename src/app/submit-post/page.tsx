// import Image from "next/image";
// import Logout from "@/src/app/components/logout";
// import { auth } from "@/src/lib/auth";
// import { redirect } from "next/navigation";
// import type { Session } from "next-auth";

const SubmitPost: React.FC = async () => {
//     const session: Session | null = await auth();

//     if (!session?.user) redirect("/login");

    return (
      <div className="flex flex-col items-center m-4">
        {/* {session.user.image && (
            <Image
                src={session.user.image}
                alt={session.user.name ?? "Profile"}
                width={72}
                height={72}
                className="rounded-full"
            />
        )}
        <Logout /> */}
      </div>
    );
};

export default SubmitPost;
