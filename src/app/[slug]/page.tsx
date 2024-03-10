import { unstable_noStore as noStore } from "next/cache";
import { api } from "~/trpc/server";


export default async function Profile({ params }: { params: { slug: string } }) {
  noStore();
  // const userHandle = params.slug.replace("@", "")
  const data = await api.profile.getUserByUsername.query({userId: params.slug})
  

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            {data.id}
      </div>
    </main>
  );
}
