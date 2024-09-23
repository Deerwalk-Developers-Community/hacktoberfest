import React from "react";
import Header from "@/components/Header";
import Stars from "@/components/Stars";
import FooterList from "./components/footerlist";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-between font-bold bg-neutral-950 overflow-hidden">
      <Stars className="absolute inset-0 w-fit h-full min-h-[100vh] object-cover z-0" />
      <div className="relative flex flex-col w-full flex-grow z-10">
        <Header level="4" logo={false}/>
        <main className="flex-grow flex lg:flex-row flex-col relative lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full">
          {/* Your main content here */}
          <FooterList />
        </main>
        
      </div>
    </div>
  );
};

export default HacktoberfestPage;
