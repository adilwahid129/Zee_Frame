import React from "react";
import clutch_logo from "../../assets/Images/Clutch.png";
import GoodFirms from "../../assets/Images/GoodFirms.png";
import Upwork from "../../assets/Images/Upworklogo.png";
import BlackStar from "../../assets/Images/BlackStar.png";
import semiBlackStar from "../../assets/Images/semiBlackStar.png";

const Ratting = () => {
  const stars = [
    { id: 1, image: BlackStar },
    { id: 2, image: BlackStar },
    { id: 3, image: BlackStar },
    { id: 4, image: BlackStar },
    { id: 5, image: semiBlackStar },
  ];
  const ratingData = [
    {
      id: 1,
      platform: "Clutch",
      logo: clutch_logo,
      stars: 5,
      reviews: "41 Reviews",
      color: "text-[#FF4136]",
    },
    {
      id: 2,
      platform: "GoodFirms",
      logo: GoodFirms,
      stars: 5,
      reviews: "41 Reviews",
      color: "text-[#4A90E2]",
    },
    {
      id: 3,
      platform: "Upwork",
      logo: Upwork,
      stars: 5,
      reviews: "41 Reviews",
      color: "text-[#65B32E]",
    },
  ];

  return (
    <section className="w-full">
      <div className="flex flex-col items-center bg-[#0D0D0D] px-[20px] gap-[72px] md:px-[100px] py-[80px]">
        <div className="flex flex-wrap justify-center items-center gap-[60px] md:gap-[72px]">
          {ratingData.map((item) => (
            <div key={item.id} className="flex flex-col gap-4">
              {/* Line 1: Reviewed on + Stars (Fixed Alignment) */}
              <div className="flex items-baseline gap-2 whitespace-nowrap">
                <span className="font-['Inter'] text-[16px] text-[#D5D5D5]">
                  Reviewed on
                </span>
                <div className={`flex ${item.color} items-center`}>
                  {[...Array(item.stars)].map((_, i) => (
                    <span key={i} className="text-[20px] leading-none">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Line 2: Logo + Review count */}
              <div className="flex items-center gap-5">
                <img
                  src={item.logo}
                  alt={item.platform}
                  className="h-7 object-contain "
                />
                <span className="font-['Inter'] text-[16px] text-[#D5D5D5] whitespace-nowrap">
                  {item.reviews}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-[1030px] items-center justify-center gap-[72px] rounded-[12px] bg-[#F3FE00] p-[32px]">
          <div className="flex items-center gap-[20px]">
            <span className="text-center font-['Inter'] text-[40px] font-extrabold text-[#0B0B0B]">
              224
            </span>
            <p className="w-[87px] text-center font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0B0B0B]">
              Reviews on 3 platforms
            </p>
          </div>

          <div className="flex items-center gap-[16px]">
            <span className="text-center font-['Inter'] text-[40px] font-extrabold text-[#0B0B0B]">
              4.9
            </span>
            <div className="flex w-[116px] justify-between items-center">
              {stars.map((star) => (
                <img key={star.id} src={star.image} alt={`Star ${star.id}`} />
              ))}
            </div>
            <p className="text-center font-['Inter'] text-[16px] font-normal leading-[24px] text-[#0B0B0B]">
              Average Rating
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ratting;
