import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { Mdx } from "~/components/mdx-components";
import BackButton from "./_components/back-button";

import "~/styles/mdx.css";
import { env } from "~/env";

function getPost(slug: string) {
  return allPosts.find((p) => p.slugAsParams === slug);
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams,
  }));
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = getPost(params.slug);

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      images: [
        {
          url: `${env.NEXT_PUBLIC_APP_URL}/og?title=${post?.title}`,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
    },
  };
}

export default async function PostsPage(props: Props) {
  const params = await props.params;
  const post = getPost(params.slug);
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
