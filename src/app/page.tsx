import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  noStore();

  const data = await api.post.getAll.query();

  const user = await currentUser();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <div className="w-full flex flex-col items-center justify-center ">
          {data ? (
            data.map(({ post, author }) => (
              <div
                key={post.id}
                className="h-48 w-full sm:w-96 sm:rounded-lg sm:border sm:border-white bg-black p-2 flex flex-col my-2"
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row">
                    <img
                      src={author.imageUrl}
                      className="mr-4 h-12 w-12 rounded-full"
                    />

                    <p>@{author.username}</p>
                  </div>
                  <p>{post.createdAt.toLocaleDateString()}</p>
                </div>
                <div className="w-full grow p-2">
                  <p>{post.content}</p>
                </div>
              </div>
            ))
          ) : (
            <p>You have no posts yet.</p>
          )}
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

      <CreatePost />
    </div>
  );
}
