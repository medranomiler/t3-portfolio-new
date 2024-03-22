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
      <div className={"flex flex-1 flex-col"}>
        <div className={"flex h-10 w-full flex-row justify-between"}>
          <p>{`@${author.username}`}</p>
          <p>{post.createdAt.toLocaleDateString()}</p>
        </div>
        <div className="w-full grow">
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  );
}
