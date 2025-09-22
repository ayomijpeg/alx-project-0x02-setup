import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <>
      <Header />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        <h1 className="text-3xl font-bold col-span-full mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
            id={post.id}
          />
        ))}
      </main>
    </>
  );
};

export default PostsPage;

// ✅ Static data fetching
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();

  type ApiPost = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };

  const posts: PostProps[] = data.map((post: ApiPost) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return {
    props: { posts },
  };
}
