import { FaqSection } from "@/modules/faq";
import { ParticipatingSection } from "@/modules/participatingSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" bg-black">
      {/* <FaqSection /> */}
      <ParticipatingSection />
    </div>
  );
}
