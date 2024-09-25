import React from "react";
import FaqList from "./components/FaqList";
import Header from "@/components/Header";
import Stars from "@/components/Stars";
import Arrow from "@/components/Arrow";

const Page = () => {
  const faqData = [
    {
      title: "Do pull/merge requests made on my own repositories count?",
      description:
        "Yes, but we strongly encourage you to make quality contributions to other repositories.",
    },
    {
      title: "Your PR/MRs must be within the bounds",
      description:
        "Your PR/MRs must be created between October 1 and October 31.",
    },
    {
      title: "Do multiple pull/merge requests to the same repository count?",
      description: "Yes, each pull/merge request will count separately.",
    },
    {
      title: "Bad repositories will be excluded.",
      description:
        "PR/MRs should be useful to maintainers. Repos that encourage simplistic PR/MRs (like adding a name or profile to a list or arbitrarily curating content) will be excluded from Hacktoberfest. Remember: quantity is fun, quality is key.",
    },
    {
      title:
        "Your PR/MRs must be merged, have the “hacktoberfest-accepted” label, or have an overall approving review.",
      description:
        "Your PR/MR must not be a draft to be considered accepted.If your PR/MR is being accepted for Hacktoberfest via an overall approving review it must also not be closed.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950 min-h-screen overflow-hidden pb-10 pt-0">
      <Stars className="absolute inset-0 w-fit h-full  min-h-[100vh] object-cover z-0" />{" "}
      <div className="relative flex flex-col w-full lg:min-h-[1016px]  max-md:px-5 max-md:max-w-full z-10">
        {" "}
        <Header level="3" logo={false} />
        <main className="flex  flex-col relative gap-5 lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full p-10 pt-0">
          <div className="flex flex-row items-center justify-center gap-3 lg:gap-5  md:gap-2">
            <Arrow className="object-contain shrink-0 mt-20 max-w-full aspect-[1.96] w-[116px] max-md:mt-10 max-md:w-[80px]" />
            <h1 className="grow shrink mt-24 text-4xl lg:text-6xl text-white w-[293px] max-md:mt-10 max-md:text-3xl max-md:w-full ">
              FAQ
            </h1>
          </div>
          <FaqList faqData={faqData} />
        </main>
      </div>
    </div>
  );
};

export default Page;
