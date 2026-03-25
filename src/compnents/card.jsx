import React from "react";
import cardDot from "../../src/assets/Images/cardDot.png";

const Card = ({ image, heading, paragraph }) => {
  return (
    <div className="flex flex-col items-start self-stretch">
      <div className="border-[2px] border-[#333] rounded-[12px] w-[392px] h-[512px] flex flex-col overflow-hidden bg-[#0D0D0D]">
        <div className="h-[227px] w-full shrink-0 overflow-hidden">
          <img
            src={image}
            alt="card"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
        <div className="flex flex-col p-6 items-start gap-[20px] flex-1">
          <div className="flex flex-col items-start gap-[8px] self-stretch">
            <h3 className="text-[#FFF] font-['Geologica'] text-[24px] font-medium leading-tight">
              {heading}
            </h3>
            <p className="text-[#D5D5D5] font-['Inter'] text-[16px] font-normal leading-[24px] line-clamp-3">
              {paragraph}
            </p>
          </div>
          <div className="mt-auto flex items-center gap-[8px] text-[#D5D5D5] text-[14px]">
            <span className="text-[#E7E7E7] font-['Inter'] text-[14px] font-normal leading-[21px]">
              7 min read
            </span>
            <img src={cardDot} alt="Dot" className="w-1 h-1" />
            <span className="text-[#E7E7E7] font-['Inter'] text-[14px] font-normal leading-[21px]">
              Jan 23, 2025
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
