import React from "react";
import CardImage from "../../assets/Images/CardImage.png";
import cardDot from "../../assets/Images/cardDot.png";

const CardSection = () => {
  return (
    <>
      <section className="w-full overflow-hidden">
        <div className="container">
          <div className="flex w-full h-full items-center gap-[48px] px-[100px] py-[80px] cursor-pointer relative ">
            <div className="h-[406px] w-[588px] rounded-[12px]">
              <img src={CardImage} alt="CardImage" />
            </div>
            <div className="flex w-[596px] flex-col items-start gap-[24px]">
              <div className="flex self-stretch flex-col items-start gap-[12px]">
                <h1 className="self-stretch font-['Geologica'] text-[48px] font-semibold leading-normal text-[#FFF]">
                  How Thinking Like a Product Designer Changed My Design
                  Handoffs
                </h1>
                <p className="self-stretch font-['Inter'] text-[20px] font-normal leading-[150%] text-[#FFF]">
                  Five lessons I’ve learned about deliverables that Junior
                  Designer Me could’ve never imagined.
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
            <div className="absolute bottom-[-393px] left-[26px] h-[457px] w-[1388px] rounded-[1388px] bg-[#F3FE00] opacity-25 blur-[177.65px] "></div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CardSection;
