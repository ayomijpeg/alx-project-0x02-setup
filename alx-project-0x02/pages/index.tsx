import Head from "next/head";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to ALX Project 2</title>
      </Head>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-semibold">Welcome to ALX Project 2 🚀</h2>
        <p className="mt-4 text-gray-700">
          This is your Next.js + TypeScript + Tailwind CSS setup.
        </p>
      </main>
    </>
  );
}
