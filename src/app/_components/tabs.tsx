import { useState } from "react";

export function TabFilters() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const tabs = ["For you", "Following"];

  return (
    <div
      className={
        "fixed top-0 flex h-12 w-full max-w-xl flex-row border-x border-b border-x-slate-500 border-b-slate-500 bg-black"
      }
    >
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={"flex flex-1 flex-col items-center justify-end"}
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
  );
}
