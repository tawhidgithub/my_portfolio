import React from "react";

interface InfoBoxProps {
  title: string;
  icon: React.ReactNode;
  counter: number;
}

const InfoBox = ({ title, icon, counter }: InfoBoxProps) => {
  return (
    <div className=" h-55 w-55 bg-primaryLightBg shadow-xl rounded-sm flex  items-end justify-center hover:scale-105 hover:bg-secondaryBg transition cursor-pointer gap-2">
      <div className="flex gap-3 w-full justify-center mb-6">
        <div className="text-2xl">{icon}</div>

        <div className="flex flex-col justify-center">
          <div className="text-lg font-bold wrap-break-word w-32 mb-4">
            {title}.
          </div>
          <div className="text-sm  text-gray-400">{counter} Project</div>
        </div>
      </div>
    </div>
  );
};

export default InfoBox;
