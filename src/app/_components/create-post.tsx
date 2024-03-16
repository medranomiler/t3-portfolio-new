"use client";
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { api } from "~/trpc/react";

export function CreatePostWizard() {
  const router = useRouter();
  const [content, setContent] = useState("");
  const { user } = useUser()

  if(!user){
    return null
  }

  // const createPost = api.post.create.useMutation({
  //   onSuccess: () => {
  //     router.refresh();
  //     setContent("");
  //   },
  // });

  return (
    <div className="flex w-full gap-3">
      <img 
        src={user.imageUrl}
        alt="Profile-image"
        className="h-14 w-14 rounded-full"
        />
        <input 
          placeholder="What's happening?" 
          className="bg-transparent outline-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
    </div>
    // <form
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     createPost.mutate({ content });
    //   }}
    //   className="flex flex-col gap-2"
    // >
    //   <input
    //     type="text"
    //     placeholder="Title"
    //     value={content}
    //     onChange={(e) => setContent(e.target.value)}
    //     className="w-full rounded-full px-4 py-2 text-black"
    //   />
    //   <button
    //     type="submit"
    //     className="rounded-full bg-white/10 px-10 py-3 font-semibold transition hover:bg-white/20"
    //     disabled={createPost.isLoading}
    //   >
    //     {createPost.isLoading ? "Submitting..." : "Submit"}
    //   </button>
    // </form>
  );
}
