import { FaqSection } from "@/modules/faq";
import { HeroSection } from "@/modules/hero";
import { ParticipatingSection } from "@/modules/participatingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-black">
      <HeroSection />
      <ParticipatingSection />
      <FaqSection />
    </div>
  );
}
