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
      className="w-[80%] text-white disabled:underline"
    >
      {faqData.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-2xl md:text-3xl font-bold">
            {faq.title}
          </AccordionTrigger>
          <AccordionContent>{faq.description}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FaqList;
