import React from "react"; // Added imports
import StarVector from "../../assets/Images/StarVector.png";
import Button from "../../compnents/Button";
import vector from "../../assets/Images/Vector.svg";
import ContactUs from "../Home/ContactUs";
import FilteredProjects from "./FilteredProjects";

const WorkPage = () => {
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
        <div className="flex relative overflow-hidden w-full flex-col items-center gap-[64px] bg-[#030303] px-[100px] py-[80px]">
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
              <h1 className="text-center max-w-[717px] font-['Geologica'] text-[72px] font-extrabold uppercase leading-[96px] text-[#FFF]">
                We’re Proud of What We’ve Built.
              </h1>
              <p className="text-center max-w-[571px] font-['Inter'] text-[18px] font-normal leading-[27px] text-[#FFF]">
                No matter the industry you’re in, or the asset you need, we can
                design it for you
              </p>
            </div>
            <Button
              text="Schedule Call"
              onClick={handleCalendlyClick}
              variant="outline"
              hoverText={"Book a Demo"}
            />
          </div>
        </div>
      </section>
      <FilteredProjects />
      <ContactUs />
    </>
  );
};

export default WorkPage;
