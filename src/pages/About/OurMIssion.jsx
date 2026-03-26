import React from "react";
import Projects from "../../assets/Images/projects.png";
import Clients from "../../assets/Images/clients.png";
import Experts from "../../assets/Images/Experts.png";
import Rating from "../../assets/Images/rating.png";

const OurMIssion = () => {
  return (
    <section className="container">
      <div className="flex self-stretch flex-col items-start gap-[80px] bg-[#090909] px-[100px] py-[80px]">
        <div className="flex w-full max-w-[981px] flex-col items-start gap-[24px]">
          <span className="text-center font-['Inter'] text-[14px] font-medium uppercase text-[#F3FE00]">
            Our Mission
          </span>
          <span className="font-['Geologica'] text-[32px] font-light leading-[46px] text-[#FFF]">
            ZeeFrames strives to be a leading UI/UX design agency known for
            innovative solutions that deliver exceptional user experiences and
            drive busi
            <span className="font-['Geologica'] text-[32px] font-light leading-[46px] text-[#8F8F8F]">
              ness growth. We blend creativity and user-centered design to craft
              intuitive, standout products and partner with clients to achieve
              lasting impact.
            </span>
          </span>
        </div>
        <div className="flex self-stretch items-start justify-between">
          <span className="text-center font-['Inter'] text-[14px] font-normal uppercase text-[#FFF]">
            Since 2020, what we get...
          </span>
          <div className="flex w-[512px] flex-wrap items-center content-center gap-[72px]">
            <div className="flex h-[147.415px] w-[220px] shrink-0 items-center justify-center">
              <img src={Projects} alt="Projects" width={220} height={147.415} />
            </div>
            <div className="flex h-[147.415px] w-[220px] shrink-0 items-center justify-center">
              <img src={Clients} alt="Clients" width={220} height={147.415} />
            </div>
            <div className="flex h-[147.415px] w-[220px] shrink-0 items-center justify-center">
              <img src={Experts} alt="Experts" width={220} height={147.415} />
            </div>
            <div className="flex h-[147.415px] w-[220px] shrink-0 items-center justify-center">
              <img src={Rating} alt="Rating" width={220} height={147.415} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMIssion;
