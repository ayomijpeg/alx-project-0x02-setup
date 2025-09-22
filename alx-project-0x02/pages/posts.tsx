import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";

interface APIResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PostsPage: React.FC = () => {
  const [posts, setPosts] = useState<APIResponse[]>([]);

 useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((ayos) => ayos.json())
    .then((data) => setPosts(data))
    .catch((error) => console.error("Error fetching posts:", error));
 }, []);

  return (
    <>
      <Header />
      <main className="p-6 grid gap-4 md:grid-cols-2">
        <h1 className="text-3xl font-bold col-span-full mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
};

export default PostsPage;
