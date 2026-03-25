import { Link } from "react-router-dom";
import React from "react";
import heading from "../../src/assets/Images/Footerheading.png";
import US from "../../src/assets/Images/USA.png";
import UK from "../../src/assets/Images/UK.png";
import KSA from "../../src/assets/Images/KSA.png";
import PK from "../../src/assets/Images/PK.png";
import Be from "../../src/assets/Images/Be.png";
import Dribbler from "../../src/assets/Images/basketBall.png";
import LinkedIn from "../../src/assets/Images/L_In.png";
import Insta from "../../src/assets/Images/Insta.png";
import FB from "../../src/assets/Images/Fb.png";
import Twitter from "../../src/assets/Images/X.png";

const Footer = () => {
  const socialLinks = [
    {
      name: "Behance",
      icon: Be,
      link: "https://www.behance.net/",
      alt: "Behance Profile",
    },
    {
      name: "Dribbble",
      icon: Dribbler,
      link: "https://dribbble.com/",
      alt: "Dribbble Portfolio",
    },
    {
      name: "LinkedIn",
      icon: LinkedIn,
      link: "https://www.linkedin.com/",
      alt: "LinkedIn Profile",
    },
    {
      name: "Instagram",
      icon: Insta,
      link: "https://www.instagram.com/",
      alt: "Instagram Profile",
    },
    {
      name: "Facebook",
      icon: FB,
      link: "https://www.facebook.com/",
      alt: "Facebook Profile",
    },
    {
      name: "Twitter",
      icon: Twitter,
      link: "https://twitter.com/",
      alt: "Twitter Profile",
    },
  ];
  const officeLocations = [
    {
      region: "North America",
      flag: US,
      address: "1832 Norfolk st Houston Texas 77098",
      phone: "+1 (480) 920-1123",
    },
    {
      region: "Europe",
      flag: UK,
      address: "West Tower, 371 Deansgate, Manchester M15 4UP, United Kingdom",
      phone: "+44 (746) 0766-922",
    },
    {
      region: "Middle East",
      flag: KSA,
      address:
        "8640 Umat Al Karim, 4006, Al Majd District, Yanbu Al Bahr 46431",
      phone: "+966 (56) 592-3840",
    },
    {
      region: "Asia",
      flag: PK,
      address:
        "144/2, Block B, Bankers Society Near DHA Phase 4, Lahore, 54792",
      phone: "042-37888403",
    },
  ];

  return (
    <div className="container">
      <div className="flex w-full flex-col items-center gap-[32px] border-t border-[#2A2A2A] px-[100px] py-[32px]">
        <div className="flex h-[180.457px] w-[1240px] items-center justify-center">
          <img src={heading} alt="heading" width={1240} height={180} />
        </div>
        <div className="flex flex-col items-start gap-[34px] self-stretch">
          <div className="flex items-start gap-[101px] self-stretch">
            <p className="w-[393px] font-['Inter'] text-[18px] font-normal leading-[27px] text-[#D5D5D5]">
              We transform ideas into user-centered digital experiences for
              businesses worldwide, from Fortune 500s to startups, using Figma,
              Webflow, and no-code solutions.
            </p>
            <div className="flex flex-1 shrink-0 basis-0 items-start gap-[48px]">
              <div className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[20px]">
                <h4 className="font-['Inter'] text-[16px] font-semibold leading-[20px] text-[#FFF]">
                  Company
                </h4>
                <ul className="flex flex-col items-start gap-[14px] list-none">
                  <li className="self-stretch">
                    <Link
                      to="/"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/about"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      About
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/services"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Services
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/work"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Work
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/insights"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Insights
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[20px]">
                <h4 className="font-['Inter'] text-[16px] font-semibold leading-[20px] text-[#FFF]">
                  Services
                </h4>
                <ul className="flex flex-col items-start gap-[14px] list-none">
                  <li className="self-stretch">
                    <Link
                      to="/"
                      className="text-[#E7E7E7] font-['Inter'] text-[14px] font-normal leading-[21px] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/about"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      UX Research
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/services"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Design system
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/work"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Web App Design
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/insights"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Mobile App Design
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[20px]">
                <h4 className="font-['Inter'] text-[16px] font-semibold leading-[20px] text-[#FFF]">
                  Reviews
                </h4>
                <ul className="flex flex-col items-start gap-[14px] list-none">
                  <li className="self-stretch">
                    <Link
                      to="/"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Clutch{" "}
                      <span className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#FFF]">
                        (4.8)
                      </span>
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/about"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Good Firms{" "}
                      <span className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#FFF]">
                        (4.9)
                      </span>
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/services"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Webflow{" "}
                      <span className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#FFF]">
                        (4.7)
                      </span>
                    </Link>
                  </li>
                  <li className="self-stretch">
                    <Link
                      to="/work"
                      className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#E7E7E7] no-underline hover:text-[#F3FE00] transition-all"
                    >
                      Dribbble{" "}
                      <span className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#FFF]">
                        (4.8)
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex self-stretch items-start gap-[16px] rounded-[16px] bg-[#171717] p-[24px]">
            <div className="flex flex-1 shrink-0 basis-0 self-stretch items-start gap-[48px] rounded-[16px] p-[20px]">
              {/* Mapping starts here */}
              {officeLocations.map((office, index) => (
                <div
                  key={index}
                  className="flex flex-1 shrink-0 basis-0 flex-col items-start gap-[12px]"
                >
                  {/* Flag Section - Updated with img tag */}
                  <div className="w-[32px] h-[24px] overflow-hidden rounded-[2px]">
                    <img
                      src={office.flag}
                      alt={`${office.region} flag`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex flex-col items-start gap-[8px] self-stretch">
                    <h3 className="font-['Inter'] text-[20px] font-semibold leading-[28px] text-[#FFF]">
                      {office.region}
                    </h3>

                    <p className="self-stretch font-['Inter'] text-[14px] font-normal leading-[21px] text-[#999]">
                      {office.address}
                    </p>

                    <p className="self-stretch font-['Inter'] text-[16px] font-medium leading-[24px] text-[#FFF]">
                      {office.phone}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[20px] self-stretch">
          <div className="flex flex-1 shrink-0 basis-0 items-center gap-[4px]">
            <span className="font-['Inter'] text-[14px] font-normal leading-[21px] text-[#8F8F8F]">
              © ZeeFrames (Private) Limited. All Rights Reserved.
            </span>
          </div>
          <div className="flex items-start gap-[16px]">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#242323] border border-[#373737] transition-all hover:border-[#F3FE00] hover:bg-[#171717]"
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="h-[20px] w-[20px] object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
