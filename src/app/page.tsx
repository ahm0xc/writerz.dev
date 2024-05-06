import { type Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import "~/styles/mdx.css";
import Navigation from "./_components/navigation";

export default async function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .map((obj) => ({
      _id: obj._id,
      published: obj.published,
      slugAsParams: obj.slugAsParams,
      slug: obj.slug,
      title: obj.title,
      date: obj.date,
      tags: obj.tags,
      type: obj.type,
    }))
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className="mx-auto max-w-2xl">
      <div className="pt-28">
        <Navigation posts={posts as Post[]} />
      </div>
    </main>
  );
}
