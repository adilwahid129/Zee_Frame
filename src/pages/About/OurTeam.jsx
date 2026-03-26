import React from "react";

const OurTeam = () => {
  return (
    <>
      <section className="container">
        <div className="flex self-stretch flex-col items-center gap-[64px] bg-[#090909] py-[80px]">
          <div className="flex flex-col items-center gap-[16px] px-[100px]">
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
        </div>
      </section>
    </>
  );
};

export default OurTeam;
