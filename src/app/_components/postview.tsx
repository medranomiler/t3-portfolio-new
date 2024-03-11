import type { RouterOutputs } from "~/trpc/shared";

type PostWithUser = RouterOutputs["post"]["getAll"][number]
export function PostView(props: PostWithUser){

  const  { post, author }   = props
  return (
    <div
    key={post.id}
    className="h-48 w-full sm:w-96 sm:rounded-lg sm:border sm:border-white bg-black p-2 flex flex-col my-2"
  >
    <div className="flex flex-row justify-between">
      <div className="flex flex-row">
        <img
          src={author.imageUrl}
          className="mr-4 h-12 w-12 rounded-full"
        />

        <p>{`@${author.username}`}</p>
      </div>
      <p>{post.createdAt.toLocaleDateString()}</p>
    </div>
    <div className="w-full grow p-2">
      <p>{post.content}</p>
    </div>
  </div>
  )
}