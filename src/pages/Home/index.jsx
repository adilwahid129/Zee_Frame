// import { SiFigma } from "react-icons/si";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
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
import Button from "../../compnents/Button";
import LogoSliderComponent from "../../compnents/LogoSliderComponent";
import VedioSection from "../../pages/Home/VedioSection";
import ServicesSection from "../../pages/Home/servicesSection";
import IdeaToExecution from "../../pages/Home/IdeaToExecution";
import DesignWorkflow from "../../pages/Home/DesignWorkflow";
import VisionBanner from "../../pages/Home/VisionBanner";
import AccordianSection from "./AccordianSection";
import OurInsights from "./OurInsights";
import ContactUs from "../../compnents/ContactUs";
const HomePage = () => {
  const variables = [
    { name: "stunning" },
    { name: "enggaging" },
    { name: "impactful" },
  ];
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
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
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi path change ho (e.g., / sa /contact ya wapis /), screen top par jaye
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="container !pt-[30px] !pb=[80px] overflow-hidden">
      <div className=" relative ">
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
              text="Schedule Call"
              onClick={() => navigate("/contact")}
              hoverText="Let's Talk!"
              variant="secondary"
            />

            <Button
              text="© 2025 Work"
              onClick={() => navigate("/contact")}
              variant="outline"
              hoverText={
                <div className="flex items-center gap-[15px]">
                  Open
                  <svg
                    width="12"
                    height="18"
                    viewBox="0 0 38 57"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V28.5Z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M0 47.5C0 42.2533 4.2467 38 9.5 38C14.7533 38 19 42.2533 19 47.5C19 52.7467 14.7533 57 9.5 57C4.2467 57 0 52.7467 0 47.5Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M19 0H28.5C33.7467 0 38 4.2467 38 9.5C38 14.7533 33.7467 19 28.5 19H19V0Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M0 9.5C0 4.2467 4.2467 0 9.5 0H19V19H9.5C4.2467 19 0 14.7533 0 9.5Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M0 28.5C0 23.2533 4.2467 19 9.5 19H19V38H9.5C4.2467 38 0 33.7467 0 28.5Z"
                      fill="#A259FF"
                    />
                  </svg>
                </div>
              }
            />
          </div>
          <LogoSliderComponent />
          <VedioSection />
          <ServicesSection />
          <IdeaToExecution />
          <DesignWorkflow />
          <VisionBanner />
          <AccordianSection />
          <OurInsights />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
