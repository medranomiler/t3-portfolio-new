/* eslint-disable react/jsx-key */
"use client";

import { SignInButton, useUser, UserButton } from "@clerk/nextjs";
import {
  BsSearch,
  BsTwitterX,
  BsBoxArrowInRight,
  BsGear,
  BsArrowLeft,
} from "react-icons/bs";

import Link from "next/link";

import { useState } from "react";
import { useParams } from "next/navigation";

export function TabFilters() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const { user } = useUser();
  const tabs = ["For you", "Following"];
  const param = useParams();

  return (
    <div className={"flex w-full flex-row md:h-16"}>
      <div className="hidden justify-between bg-black sm:flex sm:flex-1 sm:flex-col">
        <div className={"flex h-fit w-full flex-col items-end px-4"}>
          <button
            className={"h-16 w-16 flex-row justify-center p-4 lg:block lg:w-64"}
          >
            <BsTwitterX className={"h-6 w-6"} />
          </button>
        </div>
      </div>

      {param.slug ? (
        <div
          className={
            "w-full border-x border-b border-x-slate-500 border-b-slate-500 bg-black sm:min-w-[30rem] sm:max-w-xl"
          }
        >
          <div
            className={
              "flex w-full flex-row items-center justify-start gap-3 p-4"
            }
          >
            <Link href={"/"}>
              <BsArrowLeft className={"h-6 w-6"} />
            </Link>
            <p className={"text-lg font-bold"}>{param.slug}</p>
          </div>
        </div>
      ) : (
        <div
          className={
            "w-full border-x border-b border-x-slate-500 border-b-slate-500 bg-black sm:min-w-[30rem] sm:max-w-xl"
          }
        >
          <div
            className={
              "flex w-full flex-row items-center justify-between p-4 sm:hidden"
            }
          >
            <div className={"flex w-1/2 flex-row items-center gap-4"}>
              {user ? (
                <UserButton />
              ) : (
                <SignInButton>
                  <BsBoxArrowInRight className={"h-6 w-6"} />
                </SignInButton>
              )}
              <p className={"text-lg font-bold"}>Home</p>
            </div>
            <BsGear className={"h-6 w-6"} />
          </div>
          <div className={"flex w-full flex-row md:h-full"}>
            {tabs.map((tab, index) => (
              <div
                key={index}
                className={"flex w-1/2 flex-col items-center justify-end"}
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
      )}
      <div className="hidden items-start justify-center bg-black sm:flex sm:flex-1 sm:flex-col">
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