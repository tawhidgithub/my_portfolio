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
    <section className="relative h-122.5 overflow-hidden mt-2 border-2 border-white">
      {/* Background Image with Framer Motion */}
      <HeroBGAnimation />
      {/* Content */}
      <div className="relative flex justify-center items-center gap-42 mt-30">
        {/* Left */}
        <HeroLeftContent />

        {/* Right */}
        <HeroRightAnimation />
      </div>
    </section>
  );
};

export default HeroSection;
