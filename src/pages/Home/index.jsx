import React from "react";
import backgroundBubble from "../../assets/Images/backgroundBubble.svg";
import vector from "../../assets/Images/Vector.svg";
import Shield from "../../assets/Images/Shield.svg";
import Adobe from "../../assets/Images/adobe_xd.png";
import Figma from "../../assets/Images/figma-icon.png";
import Bubble from "../../assets/Images/bubble.png";
import vectorImg from "../../assets/Images/VectorImg.png";
import sketch from "../../assets/Images/sketch-2.png";
import dualArrow from "../../assets/Images/duoArrow.png";
import StarVector from "../../assets/Images/StarVector.png";
import { useState, useEffect } from "react";
import Button from "../../compnents/Button";
import LogoSliderComponent from "../../compnents/LogoSliderComponent";
import VedioSection from "../../pages/Home/VedioSection";
import ServicesSection from "../../pages/Home/servicesSection";
import IdeaToExecution from "../../pages/Home/IdeaToExecution";
import DesignWorkflow from "../../pages/Home/DesignWorkflow";
import VisionBanner from "../../pages/Home/VisionBanner";
const HomePage = () => {
  const variables = [
    { name: "stunning" },
    { name: "enggaging" },
    { name: "impactful" },
  ];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % variables.length);
        setShow(true);
      }, 900);
    }, 3500);

    return () => clearInterval(interval);
  }, [variables.length]);
  return (
    <div className="container !pt-[30px] !pb=[80px]">
      <div className=" relative">
        <img
          src={backgroundBubble}
          alt="Background Bubble"
          width={431}
          className="absolute h-[429px] left-[225px] top-[-38px] mix-blend-luminosity"
        />
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
      </div>
      <div className="relative flex flex-col items-center gap-[88px] self-stretch">
        <div className="flex flex-col items-center gap-[48px] self-stretch">
          <span className="absolute top-[350px] left-[225px]">
            <img src={StarVector} alt="StarVector" />
          </span>
          <div className="flex p-2 items-center gap-3 border border-[#1F1F1F] rounded-[8px]">
            <img src={Shield} alt="Shield" />
            <p className="text-white text-center font-[inter] text-[16px] font-normal leading-[24px]">
              Trusted by startups to craft $100M+ designs with
            </p>
            <div className="flex items-center -space-x-[7px] group">
              {[Figma, sketch, Adobe, dualArrow, vectorImg, Bubble].map(
                (logo, index) => (
                  <div
                    key={index}
                    className="flex w-[32px] h-[32px] justify-center items-center shrink-0 rounded-full border-[1.5px] border-[#0D0D0C] bg-[#303030] 
                 transition-all duration-350 ease-in-out 
                 hover:z-50  hover:-translate-x-1 cursor-pointer"
                  >
                    <img src={logo} alt="tool-logo" />
                  </div>
                ),
              )}
            </div>
          </div>
          <div className="relative">
            <h1 className="text-white text-center font-[geologica] text-[72px] font-[800] leading-[96px] uppercase self-stretch ">
              Creative Intelligence
              <br /> in Every Pixel
            </h1>
            <div className="absolute flex items-center gap-[12px] right-[-42.449px] top-[13px] py-[6px] px-[8px] rotate-[6.388deg] rounded-[8px] bg-[#F3FE00]">
              <span className="text-[#0B0B0B] text-center font-[geologica] text-[12px] font-[500] uppercase leading-normal">
                NO CODE
              </span>
            </div>
            <div className="flex justify-center items-start gap-[5px]">
              <p className="text-white text-center font-[inter] text-[20px] font-normal capitalize leading-normal">
                We Craft
              </p>

              {/* Ye container left se right khulega */}
              <div
                className={`overflow-hidden transition-all duration-900 ease-in-out origin-left ${
                  show ? "max-w-[200px] opacity-100" : "max-w-0 opacity-0"
                }`}
              >
                <span className="text-[#F3FE00] text-center font-[inter] text-[20px] font-normal leading-normal whitespace-nowrap px-1">
                  {variables[index].name}
                </span>
              </div>

              <p className="text-white text-center font-[inter] text-[20px] font-normal capitalize leading-normal">
                designs for businesses worldwide.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <Button
              text={"Schedule Call"}
              bgcolor={"bg-white"}
              color={"text-black"}
              border={"border border-white"}
            />
            <Button
              text={"© 2025 Work"}
              bgcolor={"bg-black"}
              color={"text-white"}
              border={" border border-white"}
            />
          </div>
          <LogoSliderComponent />
          <VedioSection />
          <ServicesSection />
          <IdeaToExecution />
          <DesignWorkflow/>
          <VisionBanner />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
