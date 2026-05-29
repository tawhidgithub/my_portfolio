import React from "react";
import CustomButton from "../custom_component/CustomButton";
import ContactFirstLeftBoxAnimation from "../animation/contactFirstLeftBoxAnimation";
import ContactFirstRightBoxAnimation from "../animation/contactFirstRightBoxAnimation";
import InfoBox from "../custom_component/infoBox";
import { Box, MonitorCheck, PenTool } from "lucide-react";
import { clientData } from "@/data";
import TickerAnimations from "../animation/contactClientTicker";

const ProductSection = () => {
  return (
    <div className="flex w-full flex-col h-auto min-h-screen py-20 bg-linear-to-t from-primaryBg to-primaryDarkBg to-50% from-50%">
      {/* first box */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 w-full px-4 lg:px-0">
        {/* left box */}
        <ContactFirstLeftBoxAnimation />
        {/* right box */}
        <ContactFirstRightBoxAnimation />
      </div>
      {/* second box */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-20 justify-center items-center mt-8 px-4 lg:px-0">
        <InfoBox
          title={"Product Design"}
          icon={<Box />}
          counter={10}
          derection="left"
        />
        <InfoBox title={"App Development"} icon={<PenTool />} counter={4} />
        <InfoBox
          title={"Full stack  Developer"}
          icon={<MonitorCheck />}
          counter={4}
          derection="right"
        />
      </div>
      {/* thred box */}
      <div className="flex w-full justify-center mt-20">
        <div className="w-full px-4 md:w-[80vw] lg:w-[60vw] h-20 flex items-center overflow-hidden">
          <TickerAnimations TickerData={clientData} />
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
