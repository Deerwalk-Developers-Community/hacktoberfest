import React from "react";

interface LevelIndicatorProps {
  className?: string;
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({ className }) => {
  return (
    <div className={`${className} flex gap-10 items-center self-end`}>
      <div className="flex flex-col self-stretch pb-2 my-auto w-[93px]">
        <div>level 2</div>
        <div className="flex shrink-0 h-2.5 bg-indigo-300 " />
      </div>
    </div>
  );
};

export default LevelIndicator;
