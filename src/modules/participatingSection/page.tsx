import React from "react";
import Header from "../../components/Header";
import ParticipationInfo from "./components/ParticipationInfo";
import Stars from "../../components/Stars";
import Arrow from "../../components/Arrow";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950 min-h-screen overflow-hidden">
      <Stars className="absolute inset-0 w-fit h-full  min-h-[100vh] object-cover z-0" />{" "}
      <div className="relative flex flex-col w-full min-h-dvh max-md:min-h-screen max-md:px-5 max-md:max-w-full z-10">
        {" "}
        <Header level="2" logo={false} />
        <main className="flex 2lg:flex-row flex-col relative 2lg:gap-10 items-center 2lg:items-start justify-start 2lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full p-10 pb-0">
          <div className="flex flex-row gap-3 lg:gap-5 items-center justify-center  md:gap-2 mr-10">
            <Arrow className="object-contain shrink-0 mt-20 max-w-full aspect-[1.96] w-[116px] max-md:mt-10 max-md:w-[80px]" />
            <h1 className="grow shrink 2lg:text-4xl mt-24 text-3xl text-white w-[293px] max-md:mt-10 max-md:text-3xl max-md:w-full ">
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
