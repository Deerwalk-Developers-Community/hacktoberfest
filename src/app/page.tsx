import { FaqSection } from "@/modules/faq";
import { HeroSection } from "@/modules/hero";
import { ParticipatingSection } from "@/modules/participatingSection";
import { BeginnerResource } from "@/modules/resourceForBeginner";
// import Image from "next/image";
import { FooterSection } from "@/modules/footer";
import { IntroductionSection } from "@/modules/intro";

export default function Home() {
  return (
    <div className=" bg-black">
      <HeroSection />
      <IntroductionSection />
      <BeginnerResource />
      <ParticipatingSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
