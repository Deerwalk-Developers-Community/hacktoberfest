import React from "react";

// import Image from "next/image";
// import logo from "@/assets/Logo.svg";
// import Logo from "../modules/participatingSection/assets/Logo";
import HeroLevel from "./HeroLevel";
interface HeroHeaderProp {
  level: string;
  logo: boolean;
}

const Header: React.FC<HeroHeaderProp> = ({ level, logo }) => {
  return (
    <header className="flex relative flex-wrap gap-5 mt-12 mx-auto justify-between items-center w-full text-4xl text-center text-white max-w-[1681px] max-md:max-w-full p-5">
      {logo && <p className="w-32 md:w-48 lg:w-fit">Deertober</p>}
      {/* <HeroLevel
        className="w-32 text-lg md:text-xl lg:text-2xl md:w-48 lg:w-fit"
        level={level}
      /> */}
    </header>
  );
};

export default Header;
