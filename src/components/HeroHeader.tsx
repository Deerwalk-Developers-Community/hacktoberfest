import React from "react";

// import Image from "next/image";
// import logo from "@/assets/Logo.svg";
// import Logo from "../modules/participatingSection/assets/Logo";
// import HeroLevel from "./HeroLevel";
interface HeroHeaderProp {
  level?: string;
  logo: boolean;
}

const Header: React.FC<HeroHeaderProp> = ({ logo }) => {
  return (
    <header className="hidden md:flex relative flex-wrap gap-5 mt-0 p-5 mx-auto justify-between items-center w-full text-lg md:text-2xl lg:text-4xl text-center text-white max-md:max-w-full">
      {logo && <p className="w-16 md:w-32 lg:w-32">Deertober</p>}
      {/* <HeroLevel
        className="w-16 text-lg text-lg md:text-xl lg:text-2xl md:w-48 lg:w-fit"
        level={level}
      /> */}
    </header>
  );
};

export default Header;
