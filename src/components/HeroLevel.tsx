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
      <div className="flex flex-row gap-5 self-stretch pb-2 my-auto w-[93px]">
        <StartArrow className="w-[23px] h-[41px]" />
        <div className="w-[67px] h-[39px]">{level}</div>
      </div>
    </div>
  );
};

export default LevelIndicator;
