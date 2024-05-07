import { type Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import Footer from "~/components/footer";
import Navigation from "./_components/navigation";

import "~/styles/mdx.css";

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
    <main className="h-screen flex flex-col px-4">
      <div className="pt-28 mx-auto max-w-2xl w-full">
        <Navigation posts={posts as Post[]} />
      </div>
      <div className="mt-auto pb-8">
        <Footer />
      </div>
    </main>
  );
}
