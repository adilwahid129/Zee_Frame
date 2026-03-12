import React from "react";
import adi from "../../src/assets/Images/LogoSlider/adi_qat.png";
import arctic from "../../src/assets/Images/LogoSlider/arcticIntelligence.png";
import bankOfNamibia from "../../src/assets/Images/LogoSlider/BankofNamibia.png";
import cisco from "../../src/assets/Images/LogoSlider/cisco.png";
import ministry from "../../src/assets/Images/LogoSlider/MinistryofHumanResources&Emiratisation.png";
import nissan from "../../src/assets/Images/LogoSlider/nissanMotorCorporation.png";
import repurpose from "../../src/assets/Images/LogoSlider/Repurpose.png";
import trafilea from "../../src/assets/Images/LogoSlider/trafilea.png";
import walmart from "../../src/assets/Images/LogoSlider/walmart.png";
import yallaMotor from "../../src/assets/Images/LogoSlider/yallaMotorLogo.png";

const logos = [
  adi,
  arctic,
  bankOfNamibia,
  cisco,
  ministry,
  nissan,
  repurpose,
  trafilea,
  walmart,
  yallaMotor,
];

const LogoSliderComponent = () => {
  const allLogos = [...logos, ...logos];

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-6 mt-[60px] mb-[80px]">
          <p className="text-[#E7E7E7] text-center font-inter text-[14px] font-medium uppercase">
            Trusted by Industry Leaders & Fast-Growing Startups
          </p>

          <div className="w-full overflow-hidden">
            <div className="flex w-max items-center animate-scroll hover:[animation-play-state:paused]">
              {allLogos.map((logo, index) => (
                <div
                  key={index}
                  className="flex flex-shrink-0 items-center justify-center px-[30px]"
                >
                  <img
                    src={logo}
                    alt="Partner Logo"
                    className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSliderComponent;
