import React from "react";
import Header from "../participatingSection/components/Header";
import Stars from "../participatingSection/assets/Stars";
import FooterList from "./components/footerlist";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-between font-bold bg-neutral-950 min-h-screen overflow-hidden">
      <Stars className="absolute inset-0 w-fit h-full min-h-[100vh] object-cover z-0" />
      <div className="relative flex flex-col w-full flex-grow z-10">
        <Header />
        <main className="flex-grow flex lg:flex-row flex-col relative lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full">
          {/* Your main content here */}
        </main>
        <FooterList />
      </div>
    </div>
  );
};

export default HacktoberfestPage;
