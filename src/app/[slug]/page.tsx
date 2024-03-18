import Head from "next/head";
import { api } from "~/trpc/server"
import { PostView } from "../_components/postview"

const ProfileFeed = async (props: { userId: string }) => {
  const data = await api.post.getPostsByUserId.query({
    userId: props.userId,
  });

  return (
    <div className="flex flex-col">
      {data.map((fullPost) => (
        <PostView {...fullPost} key={fullPost.post.id} />
      ))}
    </div>
  );
};

export default async function ProfilePage({ params }: { params: { slug: string } }){
  const username = decodeURIComponent(params.slug).replace("@", "")
  console.log({username})
  const data = await api.profile.getUserByUsername.query({
    username,
  });


  if (!data) return <div>404</div>;
  return (
    <>
      <Head>
        <title>{data.username}</title>
      </Head>
      
        <div className="relative h-36 bg-slate-600">
          <img
            src={data.imageUrl}
            alt={`${
              data.username ?? "unknown"
            }'s profile pic`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-black bg-black"
          />
        </div>
        <div className="h-[64px]"></div>
        <div className="p-4 text-2xl font-bold">{`@${
          data.username ?? "unknown"
        }`}</div>
        <div className="w-full border-b border-slate-400" />
        <ProfileFeed userId={data.id} />
      
    </>
  );
};