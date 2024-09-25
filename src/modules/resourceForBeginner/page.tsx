import React from "react";
import Header from "../../components/Header";
import BeginnerResource from "./components/BeginnerResource";
import Stars from "../../components/Stars";
// import Arrow from "../../components/Arrow";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950 min-h-screen overflow-hidden pt-0 pb-0">
      <Stars className="absolute inset-0 w-fit h-full  min-h-[100vh] object-cover z-0" />{" "}
      <div className="relative flex flex-col w-full min-h-[1016px] max-md:min-h-screen max-md:px-5 max-md:max-w-full z-10">
        {" "}
        <Header level="2" logo={false} />
        <main className="flex lg:flex-row flex-col relative lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full p-10">
          <BeginnerResource />
        </main>
      </div>
    </div>
  );
};

export default HacktoberfestPage;
