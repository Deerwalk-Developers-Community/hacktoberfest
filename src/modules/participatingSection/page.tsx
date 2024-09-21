import React from "react";
import Header from "./components/Header";
import ParticipationInfo from "./components/ParticipationInfo";
import Stars from "./assets/Stars";
import Arrow from "./assets/Arrow";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col justify-center py-8 font-bold bg-neutral-950">
      <div className="flex relative flex-col px-14 pt-2.5 pb-7 w-full min-h-[1016px] max-md:px-5 max-md:max-w-full">
        <Stars className="object-cover absolute inset-0 size-full" />
        <Header />
        <main className="flex  relative gap-10 items-start justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-row items-center gap-5">
            <Arrow className="object-contain shrink-0 mt-20 max-w-full aspect-[1.96]  w-[116px] max-md:mt-10" />
            <h1 className="grow shrink mt-24 text-2xl text-white w-[293px] max-md:mt-10 max-md:text-4xl">
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
