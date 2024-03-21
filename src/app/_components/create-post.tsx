"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreatePostWizard() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const { user } = useUser();

  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
      setContent("");
    },
  });

  if (!user) {
    return null;
  }

  return (
    <div className="w-full border-y border-slate-500 p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createPost.mutate({ content });
        }}
        className="flex h-36 w-full flex-col justify-between gap-2"
      >
        <div className={"flex w-full grow flex-row items-start gap-3"}>
          <img
            src={user.imageUrl}
            alt="Profile-image"
            className="h-10 w-10 rounded-full"
          />
          <textarea
            placeholder="What is happening?!"
            className="grow resize-none bg-transparent text-lg outline-none py-2"
            rows={2}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className={"flex w-full flex-row justify-end py-2"}>
          <button
            type="submit"
            disabled={createPost.isLoading}
            className={
              "w-fit rounded-full bg-blue-50 px-6 py-2 font-bold text-black"
            }
          >
            {createPost.isLoading ? "posting..." : "post"}
          </button>
        </div>
      </form>
    </div>
  );
}
