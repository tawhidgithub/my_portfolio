import React from "react";
import Image from "next/image";
import myImage from "@/public/image/myImage.png";
import { Button } from "@/components/ui/button";
import { ArrowBigRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin } from "@fortawesome/free-regular-svg-icons";
import { HeroBGAnimation } from "../animation/heroBGanimation";
import HeroLeftContent from "../animation/heroLeftContent";
import HeroRightAnimation from "../animation/heroRightAnimation";

const HeroSection = () => {
  return (
    <section className="relative h-auto min-h-screen lg:min-h-0 lg:h-122.5 overflow-hidden mt-2 py-10 lg:py-0">
      {/* Background Image with Framer Motion */}
      <HeroBGAnimation />
      {/* Content */}
      <div className="relative flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-42 mt-10 lg:mt-30 px-4 lg:px-0">
        {/* Left */}
        <HeroLeftContent />

        {/* Right */}
        <HeroRightAnimation />
      </div>
    </section>
  );
};

export default HeroSection;
