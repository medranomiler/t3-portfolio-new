import { BsChat, BsHandThumbsUpFill, BsHeart, BsRecycle } from "react-icons/bs";
import { AiOutlineRetweet } from "react-icons/ai";
import type { RouterOutputs } from "~/trpc/shared";

type PostWithUser = RouterOutputs["post"]["getAll"][number];
export function PostView(props: PostWithUser) {
  const { post, author } = props;
  return (
    <div
      key={post.id}
      className="flex min-h-36 w-full flex-row gap-3 border-b border-b-slate-500 bg-black p-4"
    >
      <div className={""}>
        <img src={author.imageUrl} className="h-10 w-10 rounded-full" />
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
          <div className={"flex flex-row items-center gap-2"}>
            <BsChat />
            {Math.floor(Math.random() * 100)}
          </div>
          <div className={"flex flex-row items-center gap-2"}>
            <AiOutlineRetweet />
            {Math.floor(Math.random() * 100)}
          </div>
          <div className={"flex flex-row items-center gap-2"}>
            <BsHeart />
            {Math.floor(Math.random() * 100)}
          </div>
        </div>
      </div>
    </div>
  );
}
