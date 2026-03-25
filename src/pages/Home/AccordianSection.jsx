import React, { useState } from "react";
import CluchLogo from "../../assets/Images/clutch_logo.png";
import Button from "../../compnents/Button";
import ReviewStar from "../../assets/Images/ReviewStar.png";
import ReviewStar1 from "../../assets/Images/ReviewStar1.png";
import Arrow from "../../assets/Images/ArrowVector.svg";
import { useNavigate } from "react-router-dom";

const AccordianSection = () => {
  const [activeId, setActiveId] = useState(null);
const navigate = useNavigate();
  const stars = [
    { id: 1, image: ReviewStar },
    { id: 2, image: ReviewStar },
    { id: 3, image: ReviewStar },
    { id: 4, image: ReviewStar },
    { id: 5, image: ReviewStar1 },
  ];

  const accordionData = [
    {
      id: 1,
      title: "What is UI UX design, and why is it important?",
      content:
        "UX design, or user experience design, is designing digital products that are easy to use and provide a positive experience for the user. It is important because a good UX design can increase user satisfaction, engagement, and conversions.",
    },
    {
      id: 2,
      title: "What is the UX design process, and how long does it take?",
      content:
        "Our process typically follows four key phases: Discovery, Strategy, Design, and Testing. A standard project can take anywhere from 4 to 12 weeks depending on complexity.",
    },
    {
      id: 3,
      title: "What types of UX design services do you offer?",
      content:
        "We provide end-to-end design solutions, including User Research, Information Architecture, Wireframing, UI Visual Design, and Interaction Prototyping.",
    },
    {
      id: 4,
      title:
        "How does ZeeFrames UI UX Design differ from other design solutions?",
      content:
        "Unlike 'cookie-cutter' agencies, ZeeFrames blends data-driven psychology with aesthetic excellence. We focus on 'Conversion-Centered Design'.",
    },
    {
      id: 5,
      title:
        "Are there any customer reviews or case studies available for ZeeFrames UI UX Design?",
      content:
        "Absolutely! We maintain a comprehensive Portfolio and Case Study library showcasing our impact across Fintech, Healthcare, and E-commerce sectors.",
    },
  ];

  const toggleAccordian = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="container">
      <div className="flex self-stretch justify-center items-start gap-[48px] px-[100px] py-[80px]">
        {/* Left Section */}
        <div className="flex flex-col items-start gap-[32px] w-1/2">
          <div>
            <span className="text-[#F3FE00] font-['Inter'] text-[14px] font-medium uppercase">
              FAQS
            </span>
          </div>
          <div className="flex flex-col items-start gap-[12px]">
            <h1 className="text-[#FFF] font-['Geologica'] text-[40px] font-bold leading-[40px]">
              Got Question?
            </h1>
            <p className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px] whitespace-nowrap">
              We begin with meaningful conversations that drive design
              decisions.
            </p>
          </div>
          <div className="flex items-center gap-[32px] self-stretch">
            <Button
              text={"Book a free call"}
              onClick={() => navigate("/contact")}
              hoverText="Let's Talk!"
              variant="primary"
              arrow={<img src={Arrow} alt="Arrow" width={20} height={20} />}
              gapClass="gap-2"
            />
            <div className="flex items-start gap-[16px]">
              <div className="w-[32px] h-[32px]">
                <img src={CluchLogo} alt="Cluch_Logo" />
              </div>
              <div className="flex flex-col items-start gap-[6px]">
                <div className="flex w-[116px] justify-between items-center">
                  {stars.map((star) => (
                    <img
                      key={star.id}
                      src={star.image}
                      alt={`Star ${star.id}`}
                    />
                  ))}
                </div>
                <p className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px] whitespace-nowrap">
                  Rating 5, 20 reviews
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Accordion) */}
        <div className="flex flex-col gap-[16px]">
          {accordionData.map((item) => {
            const isOpen = activeId === item.id;
            return (
              <div
                key={item.id}
                style={{ width: "739px" }}
                className={`rounded-[12px] border transition-all duration-500 ease-in-out flex flex-col p-[20px] overflow-hidden ${
                  isOpen
                    ? "border-[#F3FE00] bg-[#0D0D0D] max-h-[500px]"
                    : "border-[#1F1F1F] bg-[#0D0D0D] max-h-[64px]"
                }`}
              >
                <div
                  onClick={() => toggleAccordian(item.id)}
                  className="flex items-center justify-between cursor-pointer w-full"
                >
                  <span className="text-[#FFF] font-['Inter'] text-[16px] font-medium ">
                    {item.title}
                  </span>
                  <div
                    className={`rounded-[6px] w-6 h-6 border grid place-items-center transition-all duration-500 flex-shrink-0 ${
                      isOpen
                        ? "bg-[#F3FE00] text-[#000] border-[#C9D202] "
                        : "bg-[#222] text-[#666] border-transparent "
                    }`}
                  >
                    <span className="text-lg font-bold leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-400 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 " : "grid-rows-[0fr] "
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px] pt-[10.5px] ">
                      {item.content}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AccordianSection;
