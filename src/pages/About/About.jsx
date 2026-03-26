import React from "react";
import writting from "../../assets/Images/writting.png";
import icon1 from "../../assets/Images/team.png";
import icon2 from "../../assets/Images/client.png";
import icon3 from "../../assets/Images/testimonial.png";

const About = () => {
  const servicesData = [
    {
      id: 1,
      title: "Our Team",
      description:
        "Our team of expert UI/UX designers has a proven track record of creating innovative design solutions that transform businesses across various industries and geographies.",
      icon: icon1,
    },
    {
      id: 2,
      title: "Client-Centric Design",
      description:
        "At ZeeFrames, our unique design approach focuses on understanding client needs and collaborating to create exceptional, goal-driven digital products.",
      icon: icon2,
    },
    {
      id: 3,
      title: "Testimonials Showcase",
      description:
        "Don't just take our word for it—see what satisfied clients say. Explore testimonials and case studies showcasing how our design solutions help businesses achieve their goals.",
      icon: icon3,
    },
  ];
  return (
    <>
      <section className="container">
        <div className="w-full flex self-stretch items-start gap-[80px] px-[100px] py-[80px]">
          <div className="h-[391.259px] w-[390px]">
            <img src={writting} alt="Writting" width={390} height={391.259} />
          </div>
          <div className="flex flex-1 flex-col items-start justify-center gap-[48px]">
            <div className="flex flex-col items-start gap-[16px]">
              <span className="text-center font-['Inter'] text-[14px] font-medium uppercase text-[#F3FE00]">
                About
              </span>
              <h1 className="text-center font-['Geologica'] text-[40px] font-bold leading-[40px] text-[#FFF]">
                Who We Are
              </h1>
              <p className="w-[570px] font-['Inter'] text-[14px] font-normal leading-[21px] text-[#D5D5D5]">
                ZeeFrames is a specialized UI UX design agency with a focus on
                creating exceptional digital experiences. ZeeFrames is committed
                to delivering the best user experience possible for your
                business.
              </p>
            </div>
            <div className="flex self-stretch items-start gap-[24px]">
              {servicesData.map((card) => {
                return (
                  <div
                    key={card.id}
                    className="flex w-[240.999px] flex-col items-start gap-[24px] rounded-[12px] border border-[#373737] bg-[#0B0B0B] p-[16px]"
                  >
                    <img src={card.icon} alt={card.title} />
                    <div className="flex self-stretch flex-col items-start gap-[8px]">
                      <h3 className="text-center font-['Geologica'] text-[18px] font-normal leading-[30px] text-[#FFF]">
                        {card.title}
                      </h3>
                      <p className="self-stretch font-['Plus_Jakarta_Sans'] text-[14px] font-normal leading-[21px] text-[#D5D5D5]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
