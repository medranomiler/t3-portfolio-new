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
      <div className="flex h-screen w-full max-w-xl flex-col items-center border-x border-slate-500 overflow-y-scroll pt-12 overscroll-none" style={{scrollbarWidth: "none"}}>
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
        ))}        {...data?.map((fullPost) => (
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

export function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const navItems = ["🏠 Home", "🔍 Explore", "🔔 Notifications", "✉️ Messages", "📋 Lists", "🔖 Bookmarks", "👥 Communities", "🤦‍♂️ Profile"]
  return (
    <div className="hidden h-screen flex-1 flex-col items-end lg:items-center md:flex px-4">
      <div className={"h-16 w-16  md:w-full md:px-8 p-4"}>
        <img
          src={
            "https://upload.wikimedia.org/wikipedia/commons/9/95/Twitter_new_X_logo.png?20230802142353"
          }
          className={"h-8 w-8 object-contain"}
        />
      </div>
        {
          navItems.map((navItem, index) => (
            <button onClick={()=> {setSelectedIndex(index)}} key={index} className={"h-16 w-16 md:w-full md:px-8 p-4 lg:flex flex-row lg:justify-start lg:w-64 hidden"}>
            <p className={ `text-xl ${selectedIndex === index ? "font-semibold" : "font-normal"}`}>{navItem}</p>
            
          </button>
          ))
        }
                {
          navItems.map((navItem, index) => (
            <button onClick={()=> {setSelectedIndex(index)}} key={index} className={"h-16 w-16 md:w-full md:px-8 p-4 flex flex-row lg:hidden justify-end"}>
            <p className={ `text-xl ${selectedIndex === index ? "font-semibold" : "font-normal"}`}>{navItem.slice(0, 1)}</p>
            
          </button>
          ))
        }
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

export function SearchPanel() {
  return (
    <div className="hidden h-screen flex-1 flex-col md:flex py-1 px-4">
      <input className={"w-full rounded-full bg-[#242424] h-10 hidden lg:flex px-4 py-2"} placeholder={"search"}/>
      
    </div>
  );
}
