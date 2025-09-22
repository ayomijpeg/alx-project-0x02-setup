import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex gap-4">
      <Link href="/" className="hover:underline">
        Main
      </Link>
      <Link href="/home" className="hover:underline">
        Home Page
      </Link>
      <Link href="/about" className="hover:underline">
        About
      </Link>
      <Link href="/posts" className="hover:underline">
        Post
      </Link>
    </header>
  );
};

export default Header;
