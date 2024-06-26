import { BsChat, BsHeart } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import type { RouterOutputs } from "~/trpc/shared";
import Link from "next/link"
import { api } from "~/trpc/react"
type PostWithUser = RouterOutputs["post"]["getAll"][number];

export function PostView(props: PostWithUser) {
  const { post, author } = props;
  const {data} = api.post.getChildPosts.useQuery({postId: post.id});


  return (
    <div
      key={post.id}
      className="flex min-h-36 w-full flex-row gap-3 border-t border-t-slate-500 bg-black p-4"
    >
      <div className={""}>
        <Link href={`/${author.username}`}>
          <img src={author.imageUrl} className="h-10 w-10 rounded-full" />
        </Link>
      </div>
      <div className={"flex flex-1 flex-col justify-between"}>
        <div className={"flex h-10 w-full flex-row justify-between"}>
          <p>{`@${author.username}`}</p>
          <p>{post.createdAt.toLocaleDateString()}</p>
        </div>
        <div className="max-h-24 w-full grow">
          <p>{post.content}</p>
        </div>
        <div
          className={
            "flex h-6 w-full flex-row items-center justify-between px-[20%]"
          }
        >
          <div className={"flex flex-row items-center gap-2 w-1/3 h-full"}>
            <BsChat />
            {data?.length}
          </div>
          <div className={"flex flex-row items-center gap-2 w-1/3 h-full"}>
            <AiOutlineRetweet />
            {Math.floor(Math.random() * 100)}
          </div>
          <div className={"flex flex-row items-center gap-2 w-1/3 h-full"}>
            <button>
              <BsHeart />
            </button>
            
            {Math.floor(Math.random() * 100)}
          </div>
        </div>
      </div>
    </div>
  );
}
