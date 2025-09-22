import React from "react";
import Header from "../components/layout/Header";
import Button from "../components/common/Button";

const AboutPage: React.FC = () => {
  return (
    <>
        <Header />
       <main className="p-6 space-y-4">
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <div className="flex gap-4 flex-wrap">
          <Button size="small" shape="rounded-sm">
            Small Rounded-SM
          </Button>
          <Button size="medium" shape="rounded-md">
            Medium Rounded-MD
          </Button>
          <Button size="large" shape="rounded-full">
            Large Rounded-Full
          </Button>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
