import React, { useState } from "react";
import StarVector from "../../assets/Images/StarVector.png";
import Button from "../../compnents/Button";
import vector from "../../assets/Images/Vector.svg";
import ContactUs from "../../compnents/ContactUs";
import CardSection from "./CardSection";
import LatestInsights from "./LatestInsights";
import PopularInsights from "./PopularIsights";

const InsightsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCalendlyClick = () => {
    window.open(
      "https://calendly.com/contact-zeeframes/30min?month=2026-03",
      "_blank",
      "noopener,noreferrer",
    );
  };

  // Search Logic Function
  const handleSearch = (e) => {
    e.preventDefault(); // Page refresh hone se rokta hai
    if (searchQuery.trim()) {
      console.log("Searching for:", searchQuery);
      // We can make a search API call here
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <>
      <section className="container overflow-hidden">
        <div className="flex relative w-full h-full min-h-[580px] flex-col items-center gap-[64px] bg-[#030303] px-[100px] py-[80px]">
          <span className="absolute top-[223px] left-[225px]">
            <img src={StarVector} alt="StarVector" />
          </span>

          {/* Background Vectors */}
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute bg-[#F3FE00] top-[139px] left-[17px] rotate-[-30deg] ml-[37px] blur-[160px]"
          />
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute bg-[#F3FE00] top-[191px] left-[53px] rotate-[-30deg] ml-[37px] blur-[160px]"
          />
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute bg-[#F3FE00] top-[210px] right-[115px] rotate-[-30deg] mr-[37px] blur-[160px]"
          />
          <img
            src={vector}
            alt="Vector"
            width={105}
            height={160}
            className="absolute bg-[#F3FE00] top-[273px] right-[67px] rotate-[-30deg] mr-[37px] blur-[160px]"
          />

          <div className="flex flex-col items-center gap-[32px]">
            <div className="flex flex-col items-center gap-[12px]">
              <h1 className="text-center max-w-[766px] font-['Geologica'] text-[72px] font-extrabold uppercase leading-[96px] text-[#FFF]">
                Stay Updated With Our insights
              </h1>
              <p className="text-center font-['Inter'] text-[18px] font-normal capitalize leading-[27px] text-[#FFF]">
                Read our thoughts and insights on UI UX design
              </p>
            </div>

            {/* --- Search Component Start --- */}
            <search>
              <form
                onSubmit={handleSearch}
                className="flex h-[48px] w-[364px] items-center justify-between rounded-[9999px] border border-[#2D2D2D] bg-[rgba(255,255,255,0.10)] pb-[6px] pl-[24px] pr-[6px] pt-[6px]"
              >
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search any Insights"
                  className="w-full bg-transparent outline-none font-['Plus_Jakarta_Sans'] text-[16px] font-normal text-[#FFF] opacity-60 placeholder:text-white [&::-webkit-search-cancel-button]:appearance-none"
                />

                <button
                  type="submit"
                  className="flex h-[36px] w-[36px] shrink-0 items-center justify-center gap-[10px] rounded-[100px] bg-[rgba(255,255,255,0.10)] hover:bg-[rgba(255,255,255,0.20)] transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M15.5833 15.5833L19.25 19.25M17.4167 10.0833C17.4167 8.13841 16.6441 6.27315 15.2688 4.89788C13.8935 3.52262 12.0283 2.75 10.0833 2.75C8.13841 2.75 6.27315 3.52262 4.89788 4.89788C3.52262 6.27315 2.75 8.13841 2.75 10.0833C2.75 12.0283 3.52262 13.8935 4.89788 15.2688C6.27315 16.6441 8.13841 17.4167 10.0833 17.4167C12.0283 17.4167 13.8935 16.6441 15.2688 15.2688C16.6441 13.8935 17.4167 12.0283 17.4167 10.0833Z"
                      stroke="white"
                      strokeOpacity="0.6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
            </search>
            {/* --- Search Component End --- */}
          </div>
        </div>
      </section>
      <CardSection />
      <LatestInsights />
      <PopularInsights />
      <ContactUs />
    </>
  );
};

export default InsightsPage;
