import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

interface Faq {
  title: string;
  description: string;
}

interface FaqListProp {
  faqData: Faq[];
}

const FaqList: React.FC<FaqListProp> = ({ faqData }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="md:w-[60%]  text-white disabled:underline"
    >
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left md:text-4xl font-medium">
            {faq.title}
          </AccordionTrigger>
          <AccordionContent className="font-thin text-2xl text-left">
            {faq.description}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
