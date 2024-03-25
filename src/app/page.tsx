/* eslint-disable react/jsx-key */
"use client";

import {
  SignInButton,
  useUser,
  UserButton,
} from "@clerk/nextjs";
import {
  BsFillHouseDoorFill,
  BsSearch,
  BsBell,
  BsEnvelope,
  BsCardList,
  BsBookmark,
  BsFillPeopleFill,
  BsFillPersonFill,
  BsThreeDots,
  BsTwitterX,
  BsBoxArrowInRight,
  BsGear,
} from "react-icons/bs";

import { unstable_noStore as noStore } from "next/cache";
import Link from "next/link";

import { CreatePostWizard } from "~/app/_components/create-post";
import { api } from "~/trpc/react";

import { PostView } from "./_components/postview";
import { useState } from "react";

export default function Home() {
  noStore();

  return (
    <main className="flex h-screen w-screen flex-col overflow-hidden overscroll-none bg-black text-white">
      <TabFilters />
      <div className={"flex grow flex-col md:flex-row md:bg-black"}>
        <SideBar />
        <CenterPanel />
        <SearchPanel />
      </div>
      <BottomNavbar />
    </main>
  );
}

function SideBar() {
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const { user } = useUser();
  console.log(user);
  const navItems = [
    <div className={"flex flex-row items-center space-x-2"}>
      <BsFillHouseDoorFill className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Home</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsSearch className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Exlpore</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsBell className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Notifications</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsEnvelope className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Messages</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsCardList className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Lists</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsBookmark className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Bookmarks</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsFillPeopleFill className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Communities</p>
    </div>,
    <div className={"flex flex-row items-center space-x-2"}>
      <BsFillPersonFill className={"h-6 w-6"} />
      <p className={"hidden text-xl font-semibold lg:block"}>Profile</p>
    </div>,
  ];

  return (
    <div className="hidden justify-between bg-black pb-16 md:flex md:flex-1 md:flex-col">
      <div className={"flex h-fit w-full flex-col items-end px-4"}>
        {navItems.map((navItem, index) => (
          <button
            // onClick={() => {
            //   setSelectedIndex(index);
            // }}
            key={index}
            className={"h-16 w-16 flex-row p-4 lg:block lg:w-64"}
          >
            {navItem}
          </button>
        ))}
        <button
          type="submit"
          className={
            "hidden w-full max-w-64 rounded-full bg-blue-50 px-6 py-4 font-bold text-black lg:block"
          }
        >
          Post
        </button>
      </div>

      <div className={"hidden h-24 w-full flex-row justify-end p-4 lg:flex"}>
        {user ? (
          <div className={"flex h-full w-64 flex-row justify-between"}>
            <div className={"flex w-fit flex-row gap-x-3"}>
              <img src={user?.imageUrl} className={"h-10 w-10 rounded-full"} />
              <p>@{user?.username}</p>
            </div>
            <BsThreeDots className={""} />
          </div>
        ) : (
          <button
            className={
              "w-full max-w-64 rounded-full border border-white text-blue-300"
            }
          >
            <SignInButton>
              <p>Sign In</p>
            </SignInButton>
          </button>
        )}
      </div>
      <div className={"flex h-fit w-full flex-col items-end px-2 lg:hidden"}>
        <button className={"h-16 w-16 flex-row lg:block lg:w-64"}>
          {user ? (
            <img
              src={user?.imageUrl}
              className={"block h-10 w-10 rounded-full"}
            />
          ) : (
            <SignInButton>
              <BsBoxArrowInRight className={"h-6 w-6"} />
            </SignInButton>
          )}
        </button>
      </div>
    </div>
  );
}

function SearchPanel() {
  return (
    <div className="hidden items-start justify-start bg-black md:flex md:flex-1 md:flex-col">
      <div
        className={
          "hidden w-full max-w-[20rem] gap-y-4 bg-black p-4 lg:flex lg:flex-col"
        }
      >
        <div
          className={
            "flex w-full flex-col items-start space-y-2 rounded-2xl bg-[#242424] p-3"
          }
        >
          <p className={"text-xl font-bold"}>Subscribe to Premium</p>
          <p className={"text-sm font-light"}>
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </p>
          <button
            type="submit"
            className={
              "w-fit max-w-36 rounded-full bg-blue-50 px-4 py-2 font-bold text-black"
            }
          >
            Subscribe
          </button>
        </div>
        <div
          className={
            "flex w-full flex-col items-start space-y-2 rounded-2xl bg-[#242424] p-3"
          }
        >
          <p className={"text-xl font-bold"}>Whats Happening</p>
          <p className={"text-sm font-light"}>#EndTheFed</p>
          <p className={"text-sm font-light"}>#Bitcoin</p>
          <p className={"text-sm font-light"}>#buybitcoin</p>
          <p className={"text-sm font-light"}>#bitcoinnotshitcoin</p>
        </div>
      </div>
    </div>
  );
}

function CenterPanel() {
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

function BottomNavbar() {
  const bottomNavItems = [
    <BsFillHouseDoorFill className={"h-6 w-6"} />,
    <BsSearch className={"h-6 w-6"} />,
    <BsCardList className={"h-6 w-6"} />,
    <BsBell className={"h-6 w-6"} />,
    <BsEnvelope className={"h-6 w-6"} />,
  ];

  return (
    <div
      className={
        "fixed bottom-0 flex h-16 w-full flex-row justify-center border-t border-t-slate-500 bg-black sm:hidden"
      }
    >
      {bottomNavItems.map((navItem, index) => (
        <button
          key={index}
          className={"h-16 w-16 flex-row p-4 lg:block lg:w-full"}
        >
          {navItem}
        </button>
      ))}
    </div>
  );
}

function TabFilters() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { user } = useUser();
  const tabs = ["For you", "Following"];

  return (
    <div className={"flex w-full flex-row md:h-16"}>
      <div className="hidden justify-between bg-black md:flex md:flex-1 md:flex-col">
        <div className={"flex h-fit w-full flex-col items-end px-4"}>
          <button
            className={"h-16 w-16 flex-row justify-center p-4 lg:block lg:w-64"}
          >
            <BsTwitterX className={"h-6 w-6"} />
          </button>
        </div>
      </div>

      <div
        className={
          "w-full border-x border-b border-x-slate-500 border-b-slate-500 bg-black md:min-w-[30rem] md:max-w-xl"
        }
      >
        <div
          className={
            "flex w-full flex-row items-center justify-between p-4 md:hidden"
          }
        >
          <div className={"flex w-1/2 flex-row items-center gap-4"}>
            {user ? (
              <UserButton/>
            ) : (
              <SignInButton>
                <BsBoxArrowInRight className={"h-6 w-6"} />
              </SignInButton>
            )}
            <p className={"text-lg font-bold"}>Home</p>
          </div>
          <BsGear className={"w-6 h-6"}/>
        </div>
        <div className={"flex w-full flex-row md:h-full"}>
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={
                "flex w-1/2 flex-col items-center justify-end"
              }
            >
              <button
                className={`flex flex-col items-center justify-end p-2 ${selectedIndex === index ? "border-b-4 border-b-blue-500 font-bold text-white" : "border-b-4 border-b-black text-slate-500"}`}
                onClick={() => {
                  setSelectedIndex(index);
                }}
              >
                <p className={"text-center"}>{tab}</p>
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden items-start justify-center bg-black md:flex md:flex-1 md:flex-col">
        <div
          className={
            "hidden h-10 w-full max-w-[20rem] bg-black px-4 pt-1 lg:block"
          }
        >
          <div
            className={
              "flex h-full w-full flex-row items-center rounded-full bg-[#242424] px-4 py-2"
            }
          >
            <BsSearch className={"w-1/5"} />
            <input
              className={"w-4/5 bg-[#242424] outline-none"}
              placeholder={"search"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
