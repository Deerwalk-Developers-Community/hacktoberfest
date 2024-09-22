import React from "react";
import Window from "@/modules/participatingSection/assets/Window";
import Box from "../assets/Box";
import Arrow from "@/modules/faq/assets/Arrow";
import Threearrows from "../assets/threearrow";

const IntroductionSection = () => {
  return (
    <div className="relative min-h-screen">
      {/* Main content row with Arrow and Text */}
      <div className="flex flex-row gap-5 lg:gap-96 items-center justify-center md:gap-2">
        <div className="flex gap-3">
          {/* Arrow Icon */}
          <Arrow className="object-contain shrink-0 mt-20 max-w-full aspect-[1.96] w-[116px] max-md:mt-10 max-md:w-[80px]" />

          {/* Heading text */}
          <h1 className="grow shrink lg:text-4xl mt-24 text-3xl text-[#FFBDDE] w-[642px] max-md:mt-10 max-md:text-3xl max-md:w-full ">
            This year marks the 7th anniversary of DDC, and we’re calling on
            your support! Whether it’s your first time participating—or you have
            previously participated, it’s almost time to hack out four pristine
            pull/merge requests as we continue our month of support for open
            source.
          </h1>
        </div>

        {/* Three Arrows (right) */}
        <div>
          <Threearrows />
        </div>
      </div>

      {/* Box positioned at the bottom-right */}
      <div className="absolute bottom-0 w-[600px] h-[350px] right-10 text-white">
        <Box className="relative bottom-0 right-40" />
        <p className="relative right-0  bottom-60 font-thin text-4xl">
          Join other members of the open- source community on the Hacktoberfest
          Discord. <br /> <br />
          <span className="text-2xl">JOIN THE DISCORD</span>
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
