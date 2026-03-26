import React from "react";
import img1 from "../../assets/Images/Team1.png";
import img2 from "../../assets/Images/Team2.png";
import img3 from "../../assets/Images/Team3.png";
import img4 from "../../assets/Images/Team4.png";
import img5 from "../../assets/Images/Team5.png";
import img6 from "../../assets/Images/Team6.png";
import img7 from "../../assets/Images/Team7.png";

const imagesData = [img1, img2, img3, img4, img5, img6, img7];

const OurCulture = () => {
  return (
    <>
      <section className="container">
        <div className="flex self-stretch flex-col items-center gap-[64px] bg-[#0B0B0B] pt-[80px]">
          <div className="flex flex-col items-center gap-[16px] px-[100px]">
            <span className="text-center font-['Inter'] text-[14px] font-medium uppercase text-[#F3FE00]">
              Our Culture
            </span>
            <h1 className="text-center font-['Geologica'] text-[40px] font-bold leading-[40px] text-[#FFF]">
              Behind The Scenes
            </h1>
            <p className="w-[570px] font-['Inter'] text-[14px] font-normal leading-[21px] text-[#D5D5D5]">
              We believe in clear communication, proactive problem solving, and
              full transparency..
            </p>
          </div>

          <div className="flex self-stretch items-start gap-[8px] overflow-hidden">
            <div className="flex animate-[scrollMarquee_30s_linear_infinite] gap-[8px]">
              {/* Pehla Set */}
              {imagesData.map((img, index) => (
                <div
                  key={`set1-${index}`}
                  className="w-[281.8px] h-[360px] flex-shrink-0"
                >
                  <img
                    src={img}
                    alt="culture"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}

              {/* Dusra Set (Infinite loop ke liye copy) */}
              {imagesData.map((img, index) => (
                <div
                  key={`set2-${index}`}
                  className="w-[281.8px] h-[360px] flex-shrink-0"
                >
                  <img
                    src={img}
                    alt="culture"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurCulture;
