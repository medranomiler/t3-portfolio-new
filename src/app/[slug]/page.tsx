"use client";

import Head from "next/head";
import { api } from "~/trpc/react";
import { PostView } from "../_components/postview";

function ProfileFeed(props: { userId: string }) {
  const { data, isLoading, error } = api.post.getPostsByUserId.useQuery({
    userId: props.userId,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) return <div>404</div>;

  return data.map((fullPost) => (
    <PostView {...fullPost} key={fullPost.post.id} />
  ));
}

export default function ProfilePage({ params }: { params: { slug: string } }) {
  const username = decodeURIComponent(params.slug).replace("@", "");
  const { data, error, isLoading } = api.profile.getUserByUsername.useQuery({
    username,
  });

  if (isLoading) {
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

  if (error) return <div>404</div>;

  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      <div
        className="h-screen w-full overflow-y-scroll overscroll-none border-x border-slate-500 bg-black pb-24 md:min-w-[30rem] md:max-w-xl md:pb-16"
        style={{ scrollbarWidth: "none" }}
      >
        <div className={"h-1/2 w-full border-b border-slate-500 bg-black flex flex-col"}>
          <div className={"h-48 w-full bg-yellow-500"}>
            <img src={"https://placehold.co/300x100"} className={"w-full h-full object-cover"}/>
            <img src={data.imageUrl} className={"w-36 h-36 rounded-full object-cover relative bottom-16 left-4"} />
          </div>
          <div className={"grow w-full bg-black flex flex-col p-4"}>
            
            <div className={"w-full flex flex-row justify-end h-fit"}>
              <button className={"bg-white w-24 rounded-full h-fit px-4 py-2"}>
                <p className={"text-black text-center font-semibold"}>Follow</p>
              </button>
            </div>
            <div className={"w-full flex flex-row justify-start h-24 pt-8"}>
              <p className={"font-bold text-lg"}>@{data.username ?? data.externalUsername}</p>
            </div>
            <div className={"grow w-full flex flex-row justify-start"}>
              <p className={""}>I am using this app</p>
            </div>
          </div>
        </div>
        <ProfileFeed userId={data.id} />
      </div>
    </>
  );
}
