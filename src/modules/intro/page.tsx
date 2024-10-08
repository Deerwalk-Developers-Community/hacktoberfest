import React from "react";
import IntroductionSection from "./components/introduction";
import Header from "../../components/Header";
import Stars from "../../components/Stars";
import Arrow from "../../components/Arrow";
import Threearrows from "./assets/threearrow";

const HacktoberfestPage: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950 overflow-hidden">
      <Stars className="absolute inset-0 w-fit h-full  min-h-[100dvh] object-cover z-0" />{" "}
      <div className="relative flex flex-col w-full max-md:px-5 max-md:max-w-full z-10">
        {" "}
        <Header level="2" logo={false} />
        <main className="flex lg:flex-col flex-col relative lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-5 lg:mt-16 ml-4 w-full max-w-[1654px] p-10">
          <div className="w-full flex flex-row pl-0 gap-96 lg:gap-96 items-center justify-between">
            <div className="flex flex-row items-center justify-center">
              <Arrow className="w-16 lg:w-24 " />
              <h1 className="lg:text-6xl  flex text-3xl text-[#42FD5C] w-[454px] h-[90px]  max-md:text-3xl max-md:w-full">
                <span className="my-auto">Deertober24</span>
              </h1>
            </div>

            <div>
              <Threearrows className="hidden xl:block " />
            </div>
          </div>
          <IntroductionSection />
        </main>
      </div>
    </div>
  );
};

export default HacktoberfestPage;
