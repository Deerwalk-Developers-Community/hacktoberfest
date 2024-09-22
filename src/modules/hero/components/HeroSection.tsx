import React from "react";
import ClubLogo from "../assets/Club_Logo";

const Hero = () => {
  return (
    <div className="flex flex-col gap-2 lg:pl-36 pl-10 items-center lg:items-start">
      <div className="text-white text-center lg:text-left">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-white">
          Celebrate our
        </p>
        <p className="text-xl md:text-5xl lg:text-7xl font-bold text-[#43FC5A]">
          7th year
        </p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold">supporting</p>
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold">
          open source!
        </p>

        <div className="mt-7 flex flex-col justify-center items-center md:items-center lg:items-start">
          <h4 className="text-base md:text-2xl lg:text-3xl font-semibold text-[#F5725D]">
            PRESENTED BY
          </h4>
          <ClubLogo className="w-[80px] h-[60px] md:w-[115px] md:h-[82px]" />
        </div>

        <p className="text-base md:text-lg lg:text-xl mt-6">
          Hacktoberfest registration is open now!
        </p>
      </div>

      <button className="mt-4 w-44 md:w-44 bg-white text-lg md:text-xl text-black font-bold py-3 px-6 border-r-3 flex justify-center md:justify-start items-center gap-3 hover:bg-gray-200">
        REGISTER
        <span className="text-lg md:text-xl">→</span>
      </button>
    </div>
  );
};

export default Hero;
