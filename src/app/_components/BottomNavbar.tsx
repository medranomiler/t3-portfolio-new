/* eslint-disable react/jsx-key */
"use client";

import {
  BsFillHouseDoorFill,
  BsSearch,
  BsBell,
  BsEnvelope,
  BsCardList,
} from "react-icons/bs";


export function BottomNavbar() {
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