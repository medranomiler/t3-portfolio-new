"use client";

import { SignInButton, SignOutButton, currentUser } from "@clerk/nextjs";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePostWizard } from "~/app/_components/create-post";
import { api } from "~/trpc/react";

import { TabFilters } from "./_components/tabs";
import { PostView } from "./_components/postview";
import { useState } from "react";

export default function Home() {
  noStore();
  const { data, isLoading, error } = api.post.getAll.useQuery();

  if (isLoading || error) {
    return null;
  }

  return (
    <main className="flex min-h-screen w-screen flex-row items-center justify-center bg-black text-white">
      <SideBar />
      <div
        className="flex h-screen w-full max-w-xl flex-col items-center overflow-y-scroll overscroll-none border-x border-slate-500 pt-12"
        style={{ scrollbarWidth: "none" }}
      >
        <TabFilters />
        <CreatePostWizard />
        {...data?.map((fullPost) => (
          <PostView {...fullPost} key={fullPost.post.id} />
        ))}
        {...data?.map((fullPost) => (
          <PostView {...fullPost} key={fullPost.post.id} />
        ))}
        {...data?.map((fullPost) => (
          <PostView {...fullPost} key={fullPost.post.id} />
        ))}{" "}
        {...data?.map((fullPost) => (
          <PostView {...fullPost} key={fullPost.post.id} />
        ))}
        {...data?.map((fullPost) => (
          <PostView {...fullPost} key={fullPost.post.id} />
        ))}
      </div>
      <SearchPanel />
    </main>
  );
}

function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navItems = [
    "🏠 Home",
    "🔍 Explore",
    "🔔 Notifications",
    "✉️ Messages",
    "📋 Lists",
    "🔖 Bookmarks",
    "👥 Communities",
    "🤦‍♂️ Profile",
  ];
  return (
    <div className="hidden h-screen flex-1 flex-col items-end px-4 md:flex lg:items-center">
      <div className={"h-16 w-16  p-4 md:w-full md:px-8"}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png?20230802142353"
          }
          className={"h-8 w-8 object-contain"}
        />
      </div>
      {navItems.map((navItem, index) => (
        <button
          onClick={() => {
            setSelectedIndex(index);
          }}
          key={index}
          className={
            "hidden h-16 w-16 flex-row p-4 md:w-full md:px-8 lg:flex lg:w-64 lg:justify-start"
          }
        >
          <p
            className={`text-xl ${selectedIndex === index ? "font-semibold" : "font-normal"}`}
          >
            {navItem}
          </p>
        </button>
      ))}
      {navItems.map((navItem, index) => (
        <button
          onClick={() => {
            setSelectedIndex(index);
          }}
          key={index}
          className={
            "flex h-16 w-16 flex-row justify-end p-4 md:w-full md:px-8 lg:hidden"
          }
        >
          <p
            className={`text-xl ${selectedIndex === index ? "font-semibold" : "font-normal"}`}
          >
            {navItem.slice(0, 1)}
          </p>
        </button>
      ))}
      <button
        type="submit"
        className={
          "w-full max-w-48 rounded-full bg-blue-50 px-6 py-4 font-bold text-black"
        }
      >
        Post
      </button>
    </div>
  );
}

function SearchPanel() {
  return (
    <div className="hidden h-screen flex-1 flex-col px-4 py-1 md:flex">
      <input
        className={
          "hidden h-10 w-full rounded-full bg-[#242424] px-4 py-2 lg:flex"
        }
        placeholder={"search"}
      />
    </div>
  );
}
