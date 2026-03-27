import React from "react";
import NasirAli from "../../assets/Images/NasirAli.png";
import MohammadAli from "../../assets/Images/MohammadAli.png";
import Muhammad_Babar from "../../assets/Images/Muhammad_Babar.png";
import UmarIslam from "../../assets/Images/UmarIslam.png";
import NashraMaqsood from "../../assets/Images/NashraMaqsood.png";
import GoherAyub from "../../assets/Images/GoherAyub.png";
import RaoAbdullah from "../../assets/Images/RaoAbdullah.png";
import MariamHashmi from "../../assets/Images/MariamHashmi.png";
import RanaMubashir from "../../assets/Images/RanaMubashir.png";
import MustafaAfridi from "../../assets/Images/MustafaAfridi.png";
import BilalYounas from "../../assets/Images/BilalYounas.png";
import MuhammadYousaf from "../../assets/Images/MuhammadYousaf.png";
const OurTeam = () => {
  return (
    <>
      <section className="container">
        <div className="flex self-stretch flex-col items-center gap-[64px] bg-transparent ">
          <div className="flex flex-col items-center gap-[16px] px-[100px] w-full sticky top-3 relative bg-[#090909] py-[80px]">
            <span className="text-center font-['Inter'] text-[14px] font-medium uppercase text-[#F3FE00]">
              Our Team
            </span>
            <h1 className="w-[436px] text-center font-['Geologica'] text-[40px] font-bold leading-[40px] text-[#FFF]">
              Meet the people behind the magic
            </h1>
            <p className="w-[570px] text-center font-['Inter'] text-[14px] font-normal leading-[21px] text-[#D5D5D5]">
              Rest assured. Your project is in good hands.
            </p>
          </div>
          <div className="max-w-[1241px] w-full bg-transparent pb-[80px] relative z-10">
            <div className="flex  ml-[310px]  ">
              <div className="flex flex-col gap-4">
                <img
                  src={NasirAli}
                  alt="NasirAli"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Nasir Ali
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    CEO & Founder
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 ml-[311px] mt-[100px]">
                <img
                  src={MohammadAli}
                  alt="MohammadAli"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Mohammad Ali
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    Sales Director
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  mr-[401px]  ">
              <div className="flex flex-col gap-4">
                <img
                  src={Muhammad_Babar}
                  alt="Muhammad_Babar"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Muhammad Babar
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 ml-[220px] mt-[100px]">
                <img
                  src={MohammadAli}
                  alt="MohammadAli"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Mohammad Ali
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    Sales Director
                  </span>
                </div>
              </div>
            </div>
            <div className="flex  mr-[196px] ml-[105px]">
              <div className="flex flex-col gap-4">
                <img
                  src={NashraMaqsood}
                  alt="NashraMaqsood"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Nashra Maqsood
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-[100px] ml-[320px] gap-4">
                <img
                  src={GoherAyub}
                  alt="GoherAyub"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Goher Ayub
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col mt-[70px] gap-4">
                <img
                  src={RaoAbdullah}
                  alt="RaoAbdullah"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Rao Abdullah
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
              <div className="flex ml-[110px] flex-col gap-4">
                <img
                  src={MariamHashmi}
                  alt="MariamHashmi"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit mt-[370px]  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Mariam Hashmi
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-[170px] ml-[201px] gap-4">
                <img
                  src={RanaMubashir}
                  alt="RanaMubashir"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Rana Mubashir
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex flex-col mt-[270px] gap-4">
                <img
                  src={MuhammadYousaf}
                  alt="MuhammadYousaf"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Muhammad Yousaf
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
              <div className="flex ml-[157px] mt-[170px] flex-col gap-4">
                <img
                  src={MustafaAfridi}
                  alt="MustafaAfridi"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Mustafa Afridi
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
              <div className="flex flex-col mt-[70px] ml-[154px] gap-4">
                <img
                  src={BilalYounas}
                  alt="BilalYounas"
                  width={310}
                  height={360}
                  className="rounded-3 h-fit  grayscale hover:grayscale-0"
                />
                <div className="flex justify-between items-center">
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#FFF]">
                    Bilal Younas
                  </span>
                  <span className="text-center font-['Inter'] text-[16px] font-normal leading-[21px] text-[#EFEFEF]">
                    UX UI Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
