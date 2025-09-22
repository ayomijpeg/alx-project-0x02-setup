import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

const HomePage: React.FC = () => {
  const [posts, setPosts] = useState([
    { title: "First Card", content: "This is the content of the first card." },
    { title: "Second Card", content: "Here is some more content for the second card." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Header />
      <main className="p-6">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add New Post
          </button>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleAddPost}
        />
      </main>
    </>
  );
};

export default HomePage;
