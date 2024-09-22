import React from "react";

interface LevelIndicatorProps {
  className?: string;
  level: string;
}

const LevelIndicator: React.FC<LevelIndicatorProps> = ({
  className,
  level,
}) => {
  return (
    <div className={`${className} flex gap-10 items-center self-end`}>
      <div className="flex flex-col self-stretch pb-2 my-auto w-[93px]">
        <div>level {level}</div>
        <div className="flex shrink-0 h-2.5 bg-indigo-300 " />
      </div>
    </div>
  );
};

export default LevelIndicator;
