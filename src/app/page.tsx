import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";

import { Mdx } from "~/components/mdx-components";

import "~/styles/mdx.css";

export default async function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });

  return (
    <main className="mx-auto max-w-lg">
      hello
      <div className="mt-7">
        {posts.map((post) => {
          return (
            <div key={post.slug}>
              <Mdx code={post.body.code} />
            </div>
          );
        })}
      </div>
    </main>
  );
}
