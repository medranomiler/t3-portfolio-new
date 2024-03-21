import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePostWizard } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { PostView } from "./_components/postview";


export default async function Home() {
  noStore();

  const data = await api.post.getAll.query();
  console.log(data)

  const user = await currentUser();

  return (
    <main className="flex h-screen flex-row w-screen items-center justify-center bg-black text-white">
      <div className="flex flex-col min-w-24 flex-1 h-full border-white">
        sidebar
      </div>
      <div className="w-full max-w-xl flex flex-col items-center border-x border-slate-500 h-full">
        <div className={"h-16 w-full"}>tabs</div>
        <CreatePostWizard />
          {...data?.map((fullPost) => (
              <PostView {...fullPost}  key={fullPost.post.id}/>
            ))
          }
          
        </div>
      <div className="md:flex flex-col flex-1 h-full hidden">
        discover
      </div>
    </main>
  );
}
