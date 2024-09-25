import React from "react";

const IntroductionSection: React.FC = () => {
  return (
    <div>
      <div className="py-10 px-4 md:px-10 lg:pl-28 flex justify-center">
        <p className="text-[#FFBDDE] text-lg md:text-2xl lg:text-4xl max-w-full lg:max-w-[1250px] lg:h-[406px]">
          This year marks the 7th anniversary of DDC and <br />
          we're calling on your support!
          <br />
          <br />
          Whether it's your first time participating or you have <br />
          previously participated, it's almost time to hack out <br />
          four pristine pull/merge requests as we continue our <br />
          month of support for open source.
        </p>
      </div>
    </div>
  );
};

export default IntroductionSection;
