import React from "react";
import StartArrow from "@/modules/hero/assets/startArrow";

interface HeroLevelIndicatorProps {
  className?: string;
  level: string;
}

const LevelIndicator: React.FC<HeroLevelIndicatorProps> = ({
  className,
  level,
}) => {
  return (
    <div className={`${className} flex gap-10 items-center self-end`}>
      <div className="flex flex-row self-stretch items-center  pb-2 my-auto w-[93px]">
        <StartArrow className="w-full" />
        <div className="w-2">{level}</div>
      </div>
    </div>
  );
};

export default LevelIndicator;
