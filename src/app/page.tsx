"use client";

import { unstable_noStore as noStore } from "next/cache";

import { CenterPanel } from "./_components/CenterPanel";

export default function Home() {
  noStore();

  return <CenterPanel />;
}










