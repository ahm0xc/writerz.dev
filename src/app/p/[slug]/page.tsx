import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";

import { Mdx } from "~/components/mdx-components";
import BackButton from "./_components/back-button";

import "~/styles/mdx.css";

type Props = {
  params: { slug: string };
};

export default function PostsPage({ params }: Props) {
  const post = allPosts.find((p) => p.slugAsParams === params.slug);
  if (!post) return notFound();

  return (
    <div>
      <div className="mx-auto max-w-2xl pb-20 pt-20">
        <div className="mb-4">
          <BackButton />
        </div>
        <div aria-label="heading" className="">
          <h1 className="text-2xl font-semibold">{post.title}</h1>
          <p className="mt-2 text-sm text-secondary-foreground/70">
            {new Date(post.date).toDateString()}
          </p>
        </div>
        <section className="mt-8">
          <Mdx code={post.body.code} />
        </section>
      </div>
    </div>
  );
}
