import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePostWizard } from "~/app/_components/create-post";
import { api } from "~/trpc/server";
import { PostView } from "./_components/postview";


export default async function Home() {
  noStore();

  const data = await api.post.getAll.query();

  const user = await currentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="w-full flex flex-col items-center justify-center ">
          {...data?.map((fullPost) => (
              <PostView {...fullPost}  key={fullPost.post.id}/>
            ))
          }
          {!user && <SignInButton />}
          {!!user && <SignOutButton />}
          <CrudShowcase />
        </div>
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest.query();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.content}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePostWizard />
    </div>
  );
}