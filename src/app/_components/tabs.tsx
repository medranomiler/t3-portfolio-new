import { useState } from "react";

export function TabFilters() {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
  
    const tabs = ["For you", "Following"];
  
    return (
      <div className={"flex h-12 w-full max-w-xl flex-row top-0 fixed bg-black border-x border-x-slate-500 border-b border-b-slate-500"}>
        {tabs.map((tab, index) => (
            <div key={index} className={"flex flex-1 flex-col items-center justify-end"}>
  <button
          
          className={`flex flex-col items-center justify-end p-2 ${selectedIndex === index ? "text-white font-bold border-b-4 border-b-blue-500" : "text-slate-500 border-b-4 border-b-black"}`}
          onClick={() => {setSelectedIndex(index)}}
        >
          <p className={"text-center"}>{tab}</p>
        </button>
            </div>
        ))}
      </div>
    );
  }          
