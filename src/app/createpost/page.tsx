"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export const runtime = "edge";

export default function CreatePostPage() {
  const router = useRouter();

  useEffect(() => {
    function redirect() {
      router.push("/");
    }
    redirect();
  }, [router]);

  return <div>redirecting...</div>;
}
