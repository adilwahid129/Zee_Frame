import React from "react";
import Arrow from "../../assets/Images/ArrowVector.svg";
import bgImage from "../../assets/Images/bgImage.png";
import SectionHeader from "../../compnents/sectionHeader";

const ServicesSection = () => {
  const cards = [
    { sub: "FOR DIGITAL EXPERIENCES", title: "UX UI Design" },
    { sub: "FOR STARTUPS & EXISTING COMPANIES", title: "Product Revamp" },
    { sub: "FOR VISUAL STORYTELLERS", title: "Brand Design" },
    { sub: "FOR RAPID APP BUILDERS", title: "No Code Development" },
    { sub: "FOR STARTUPS & FOUNDERS", title: "MVP Design" },
    { sub: "DEDICATED UX UI TEAM", title: "Team Extension" },
  ];

  return (
    <div className="w-full bg-black py-20 px-10">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16">
        <SectionHeader
          p1={"WE are great at"}
          h1={"Our Services"}
          p2={"Designs with Exceptional User Experiences"}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] w-full max-w-[1240px]">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden w-full md:w-[604px] h-[162px] flex flex-col justify-center cursor-pointer border-t border-b border-[#1F1F1F] backdrop-blur-[6px]"
            >
              {/* Animated Border */}
              <div
                className={`
                  absolute top-0 w-[2px] bg-[#1F1F1F] z-30
                  transition-all duration-1000 ease-in-out
                  h-0 group-hover:h-full
                 
                `}
              />

              {/* Background Image - Updated Animation */}
              <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <img
                  src={bgImage}
                  alt="background"
                  className="absolute h-full w-auto top-0 left-1/2 -translate-x-1/2 opacity-0 transition-all duration-1000 ease-in-out group-hover:left-[75%] group-hover:opacity-100 object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="relative z-10 flex flex-col gap-2 transition-all duration-1000 ease-in-out pl-0 group-hover:pl-8">
                <p className="text-[#E7E7E7] font-[inter] text-[14px] font-normal leading-tight uppercase">
                  {card.sub}
                </p>
                <h2 className="text-white font-[geologica] text-[28px] font-medium leading-tight">
                  {card.title}
                </h2>
              </div>

              {/* Arrow Button */}
              <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20">
                <div className="w-[48px] h-[48px] rounded-full border border-[#333] flex items-center justify-center transition-all duration-1000 ease-in-out group-hover:bg-white group-hover:border-white group-hover:-translate-x-6">
                  <img
                    src={Arrow}
                    alt="Arrow"
                    className="w-5 h-5 transition-all duration-1000 opacity-80 invert brightness-100 group-hover:opacity-100 group-hover:brightness-0 group-hover:invert-0"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
