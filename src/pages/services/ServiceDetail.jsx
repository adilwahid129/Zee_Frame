import React from "react";
import StarVector from "../../assets/Images/StarVector.png";
import vector from "../../assets/Images/Vector.svg";
import Button from "../../compnents/Button";
import ImpactImage from "../../assets/Images/ImpactImage.png";

import RatedImage from "../../assets/Images/RatedImage.png";
import servicesrating from "../../assets/Images/servicesrating.png";
import lightningboltY from "../../assets/Images/lightningboltY.png";
import ContactUs from "../../compnents/ContactUs";

const ServiceDetail = ({
  heroHeading = "",
  heroParagraph = "",
  impactHeading = "",
  impactParagraph = "",
  impactFeatures = [],
  processheading = "",
  processServiceSteps = [],
  ratingHeading = "",
  ratingFeatures = [],
}) => {
  const handleCalendlyClick = () => {
    window.open(
      "https://calendly.com/contact-zeeframes/30min?month=2026-03",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <section className="container">
        <div className="flex relative overflow-hidden w-full min-h-[580px] flex-col items-center gap-[64px] bg-[#030303] px-[100px] py-[80px]">
          <span className="absolute top-[223px] left-[225px]">
            <img src={StarVector} alt="StarVector" />
          </span>

          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute  bg-[#F3FE00] top-[139px] left-[17px] rotate-[-30deg] ml-[37px] blur-[160px]"
          />
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute  bg-[#F3FE00] top-[191px] left-[53px] rotate-[-30deg] ml-[37px] blur-[160px]"
          />
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute  bg-[#F3FE00] top-[210px] right-[115px] rotate-[-30deg] mr-[37px] blur-[160px]"
          />
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute  bg-[#F3FE00] top-[273px] right-[67px] rotate-[-30deg] mr-[37px] blur-[160px]"
          />
          <div className="flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center gap-[12px]">
              <h1 className="text-center max-w-[775px] font-['Geologica'] text-[72px] font-extrabold uppercase leading-[96px] text-[#FFF]">
                {heroHeading}
              </h1>
              <p className="text-center max-w-[679px] font-['Inter'] text-[18px] font-normal leading-[27px] text-[#FFF]">
                {heroParagraph}
              </p>
            </div>
            <Button
              text="Book a Free Call"
              onClick={handleCalendlyClick}
              variant="outline"
              hoverText={"Book a Demo"}
            />
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex self-stretch items-start gap-[80px] bg-[#0B0B0B] px-[100px] py-[80px]">
          <div className="max-w-[502px] w-full rounded-[12px] ">
            <img src={ImpactImage} alt="ImpactImage" width={502} height={361} />
          </div>
          <div className="flex flex-1 shrink-0 flex-col items-start justify-center gap-[48px]">
            <div className="flex flex-col items-start gap-[32px] self-stretch">
              <span className="text-center font-['Geologica'] text-[14px] font-normal uppercase leading-normal text-[#F3FE00]">
                IMPACT
              </span>
              <div className="flex self-stretch flex-col items-start gap-[16px]">
                <span className="self-stretch font-['Geologica'] text-[40px] font-bold leading-[48px] text-[#FFF]">
                  {impactHeading}
                </span>
                <span className="max-w-[570px] w-full font-['Inter'] text-[14px] font-normal leading-[21px] text-[#BDBDBD]">
                  {impactParagraph}
                </span>
              </div>
              <div className="grid grid-cols-2 content-start  gap-x-[32px] gap-y-[16px]">
                {impactFeatures.map((items, index) => {
                  return (
                    <div key={index} className="flex items-start  gap-[12px]">
                      <span className="w-6 h-6 shrink-0">
                        <img
                          src={items.icon}
                          width={24}
                          height={24}
                          alt="lightningbolt"
                        />
                      </span>
                      <span className="font-['Plus_Jakarta_Sans'] text-[14px] font-medium leading-[21px] text-[#FFF] whitespace-nowrap">
                        {items.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex self-stretch flex-col items-center gap-[80px] bg-[#090909] px-[100px] py-[80px]">
          <div className="flex self-stretch flex-col items-center gap-[32px]">
            <span className="text-center font-['Geologica'] text-[14px] font-normal uppercase leading-normal text-[#F3FE00]">
              our process
            </span>
            <span className="max-w-[677px] w-full text-center font-['Geologica'] text-[40px] font-bold leading-[48px] text-[#FFF]">
              {processheading}
            </span>
          </div>
          <div className="flex items-start gap-[20px]">
            {processServiceSteps.map((items, index) => {
              return (
                <div
                  key={index}
                  className="group max-w-[301px] w-full  relative flex flex-col items-start gap-[32px] rounded-[16px] bg-[#121212] hover:bg-[#F3FE00] p-[24px] shadow-[0_16px_23px_0_rgba(243,254,0,0.06)] transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <span className="absolute top-5 right-5">{items.number}</span>
                  <div className="w-10 h-10 relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:opacity-100">
                    <img src={items.icon} alt="Icons" width={40} height={40} />
                  </div>
                  <div className="flex max-w-[253px] w-full flex-col items-start gap-[16px] relative z-10">
                    <span className="font-['Plus_Jakarta_Sans'] text-[18px] font-medium leading-[21px] text-white transition-colors duration-300 group-hover:text-black">
                      {items.title}
                    </span>
                    <span className="self-stretch max-w-[253px] w-full min-h-[42px] h-full font-['Inter'] text-[14px] font-normal leading-[21px] text-white/70 transition-colors duration-300 group-hover:text-black/80">
                      {items.description}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container">
        <div className="flex self-stretch items-start gap-[80px] bg-[#0B0B0B] px-[100px] py-[80px]">
          <div className="flex w-[659px] flex-col items-start gap-[24px]">
            <h1 className="self-stretch font-['Geologica'] text-[40px] font-bold leading-[48px] text-[#FFF]">
              {ratingHeading}
            </h1>

            <div className="flex self-stretch flex-col items-start gap-[12px]">
              {ratingFeatures.map((item) => (
                <div
                  key={item.id}
                  className="group flex self-stretch flex-col items-start gap-[12px] p-[12px] cursor-pointer bg-[#121212] rounded-[8px] transition-all duration-300"
                >
                  <div className="flex items-center gap-[12px]">
                    <span>
                      <img
                        src={lightningboltY}
                        alt="lightningboltY"
                        width={36}
                        height={36}
                      />
                    </span>
                    <span className="font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[21px] text-[#FFF]">
                      {item.title}
                    </span>
                  </div>

                  {/* Transitioning description container */}
                  <div className="max-h-0 overflow-hidden transition-all duration-700 ease-in-out group-hover:max-h-[100px]">
                    <p className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#BDBDBD] pl-[48px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <img
              src={RatedImage}
              alt="RatedImage"
              width={502}
              height={405}
              className="rounded-6"
            />
            <div className="absolute max-w-[222px] w-full left-[33.5px] bottom-[49px] flex items-center gap-[12px] rounded-[8px] bg-[#FFF] p-[12px] shadow-[0_4px_32px_0_rgba(0,0,0,0.20)]">
              <span>
                <img
                  src={servicesrating}
                  alt="servicesrating"
                  width={32}
                  height={32}
                />
              </span>
              <span className="font-['Plus_Jakarta_Sans'] text-[16px] font-semibold leading-[21px] text-[#000] whitespace-nowrap">
                4.9 Rated Company
              </span>
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
};

export default ServiceDetail;
