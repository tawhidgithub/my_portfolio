import React from "react";
import { Button } from "../ui/button";
import { ArrowBigRight } from "lucide-react";

interface CustomButtonProps {
  btnText: string;
  onClick?: () => void;
}

const CustomButton = ({ btnText, onClick }: CustomButtonProps) => {
  return (
    <div className="flex justify-start">
      <Button
        onClick={onClick}
        className="bg-transparent border-2 border-black text-secondaryBg flex items-center gap-2 hover:scale-110 transition cursor-pointer"
      >
        {btnText} <ArrowBigRight size={32} />
      </Button>
    </div>
  );
};

export default CustomButton;
