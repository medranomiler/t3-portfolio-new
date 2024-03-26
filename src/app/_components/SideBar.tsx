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
} from "react-icons/bs";

import { useRouter } from "next/navigation";

export function SideBar() {
    // const [selectedIndex, setSelectedIndex] = useState(0);
    const { user } = useUser();
    const router = useRouter()

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
            onClick={() => {router.push("/createpost")}}
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