import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import "~/styles/mdx.css";
import Navigation from "./_components/navigation";

export default async function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className="mx-auto max-w-2xl">
      <div className="pt-28">
        <Navigation posts={posts} />
      </div>
    </main>
  );
}
