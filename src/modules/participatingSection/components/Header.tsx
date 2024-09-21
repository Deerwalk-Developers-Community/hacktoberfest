import React from "react";
import LevelIndicator from "./LevelIndicator";
import Image from "next/image";
import logo from "@/assets/Logo.svg";
import Logo from "../assets/Logo";

const Header: React.FC = () => {
  return (
    <header className="flex relative flex-wrap gap-5 justify-between items-center w-full text-4xl text-center text-white max-w-[1681px] max-md:max-w-full">
      <Logo className="w-32 md:w-48 lg:w-fit" />
      <LevelIndicator className="w-32 text-lg md:text-xl lg:text-2xl md:w-48 lg:w-fit" />
    </header>
  );
};

export default Header;
