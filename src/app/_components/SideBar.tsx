/* eslint-disable react/jsx-key */
"use client";

import { SignInButton, useUser } from "@clerk/nextjs";
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
  BsBoxArrowInRight,
  BsFeather,
} from "react-icons/bs";

import { useRouter } from "next/navigation";

export function SideBar() {
    const { user } = useUser();
    const router = useRouter()

    const navItems = [
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsFillHouseDoorFill className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Home</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsSearch className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Exlpore</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsBell className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Notifications</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsEnvelope className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Messages</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsCardList className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Lists</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsBookmark className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Bookmarks</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsFillPeopleFill className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Communities</p>
      </div>,
      <div className={"flex flex-row items-center space-x-2 justify-center lg:justify-start"}>
        <BsFillPersonFill className={"h-6 w-6"} />
        <p className={"hidden text-xl font-semibold lg:block"}>Profile</p>
      </div>,

    ];
  
    return (
      <div className="hidden justify-between bg-black pb-16 sm:flex sm:flex-1 sm:flex-col">
        <div className={"flex h-fit w-full flex-col items-end px-4"}>
          {navItems.map((navItem, index) => (
            <button
              key={index}
              className={"h-16 w-16 flex-row p-4 lg:block lg:w-64 rounded-full hover:bg-[#242424]"}
            >
              {navItem}
            </button>
          ))}
          <button
            onClick={() => {router.push("/createpost")}}
            className={
              "lg:w-full lg:max-w-64 rounded-full bg-blue-50 lg:px-6 lg:py-4 font-bold text-black w-16 h-16 flex flex-row items-center justify-center"
            }
          >
            <p className={"hidden lg:block"}>Post</p>
            <BsFeather className={"h-6 w-6 lg:hidden"} />
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