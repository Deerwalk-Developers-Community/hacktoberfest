import React from "react";
import Header from "./components/Header";
import ParticipationInfo from "./components/ParticipationInfo";
import Stars from "./assets/Stars";
import Arrow from "./assets/Arrow";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950 min-h-screen overflow-hidden">
      <Stars className="absolute inset-0 w-fit h-full  min-h-[100vh] object-cover z-0" />{" "}
      <div className="relative flex flex-col w-full min-h-[1016px] max-md:min-h-screen max-md:px-5 max-md:max-w-full z-10">
        {" "}
        <Header />
        <main className="flex lg:flex-row flex-col relative lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-row items-center justify-center gap-5 max-md:flex-col max-md:gap-2">
            <Arrow className="object-contain shrink-0 mt-20 max-w-full aspect-[1.96] w-[116px] max-md:mt-10 max-md:w-[80px]" />
            <h1 className="grow shrink mt-24 text-2xl text-white w-[293px] max-md:mt-10 max-md:text-3xl max-md:w-full text-center">
              Participating in <br /> Hacktoberfest
            </h1>
          </div>
          <ParticipationInfo />
        </main>
      </div>
    </div>
  );
};

export default HacktoberfestPage;
