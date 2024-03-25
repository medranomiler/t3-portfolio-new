"use client";

import { useEffect, useRef } from "react";
import type { ElementRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { BsX } from "react-icons/bs";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div className={"absolute top-0 bottom-0 right-0 left-0 bg-[#ffffff40] flex flex-row justify-center items-center z-50"}>
      <dialog ref={dialogRef} className={"w-[90%] max-w-[500px] p-4 bg-black rounded-xl"} onClose={onDismiss}>
        <div className={"w-full"}>
        <button onClick={onDismiss} className="close-button">
          <BsX className={"h-6 w-6 text-white"}/>
        </button>
        </div>
        {children}
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
