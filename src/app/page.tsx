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
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">

      {!user && <SignInButton/>}
      {!!user && <SignOutButton/>}
      
        <div className="w-full max-w-lg flex flex-col items-center justify-center ">
        <CreatePostWizard />
          {...data?.map((fullPost) => (
              <PostView {...fullPost}  key={fullPost.post.id}/>
            ))
          }
          
        </div>

    </main>
  );
}
