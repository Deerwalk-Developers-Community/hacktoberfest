import React from "react";
import FaqList from "./components/FaqList";
import Header from "@/components/Header";
import Stars from "@/components/Stars";
import Arrow from "@/components/Arrow";

const Page = () => {
  const faqData = [
    {
      title: "What is your return policy?",
      description:
        "You can return any item within 30 days of purchase for a full refund.",
    },
    {
      title: "How long does shipping take?",
      description:
        "Shipping usually takes 5-7 business days, depending on your location.",
    },
    {
      title: "Do you offer international shipping?",
      description: "Yes, we offer shipping to several countries worldwide.",
    },
    {
      title: "How can I track my order?",
      description:
        "You can track your order using the tracking link provided in your confirmation email.",
    },
    {
      title: "What payment methods do you accept?",
      description: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];

  return (
    <div className="relative flex flex-col justify-center font-bold bg-neutral-950 min-h-screen overflow-hidden">
      <Stars className="absolute inset-0 w-fit h-full  min-h-[100vh] object-cover z-0" />{" "}
      <div className="relative flex flex-col w-full min-h-[1016px] max-md:min-h-screen max-md:px-5 max-md:max-w-full z-10">
        {" "}
        <Header level="3" />
        <main className="flex  flex-col relative lg:gap-10 items-center lg:items-start justify-start lg:justify-center self-center mt-16 ml-4 w-full max-w-[1654px] max-md:mt-10 max-md:max-w-full p-10">
          <div className="flex flex-row items-center justify-center gap-5 max-md:flex-col max-md:gap-2">
            <Arrow className="object-contain shrink-0 mt-20 max-w-full aspect-[1.96] w-[116px] max-md:mt-10 max-md:w-[80px]" />
            <h1 className="grow shrink mt-24 text-2xl text-white w-[293px] max-md:mt-10 max-md:text-3xl max-md:w-full text-center">
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
