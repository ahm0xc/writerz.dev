import type { Post } from ".contentlayer/generated/types";

export default function Posts({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col">
      {posts.map((post) => {
        return <div key={`post-item-${post._id}`}>{post.title}</div>;
      })}
    </div>
  );
}
