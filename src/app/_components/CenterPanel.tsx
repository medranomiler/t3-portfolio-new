import { CreatePostWizard } from "~/app/_components/create-post";
import { api } from "~/trpc/react";

import { PostView } from "./postview";

export function CenterPanel() {
  const { data, isLoading, error } = api.post.getAll.useQuery();

  if (isLoading || error) {
    return (
      <div
        className="flex h-full w-full max-w-xl flex-col items-center overflow-y-scroll overscroll-none border-x border-slate-500 pt-12"
        style={{ scrollbarWidth: "none" }}
      >
        {" "}
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div
      className="h-screen w-full overflow-y-scroll overscroll-none border-x border-slate-500 bg-black pb-24 md:min-w-[30rem] md:max-w-xl md:pb-16"
      style={{ scrollbarWidth: "none" }}
    >
      <CreatePostWizard />
      {data?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
      {data?.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
}