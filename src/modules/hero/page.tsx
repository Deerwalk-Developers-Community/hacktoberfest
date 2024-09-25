import React from "react";
import Hero from "./components/HeroSection";
import Stars from "@/components/Stars";
import Header from "@/components/HeroHeader";
import Alien from "./assets/Aliens";

const Page = () => {
  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950  overflow-hidden p-0 m-0">
      <Stars className="absolute inset-0 min-h-[100vh] w-fit lg:h-full object-cover z-0" />
      <Alien className="absolute top-0 right-96 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] min-h-[50vh] object-cover z-[1] transform translate-y-[20vh] translate-x-[10vw] hidden xl:block" />
      <div className="relative flex flex-col w-full  max-md:px-5 max-md:max-w-full z-10 p-0 mb-20">
        <Header logo={true} />
        <main className="mt-36 mb-0 pb-0">
          <Hero />
        </main>
      </div>
    </div>
  );
};

export default Page;
