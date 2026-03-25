import React from "react";
import SectionHeader from "../../compnents/sectionHeader";
import Arrow from "../../assets/Images/ArrowVector.svg";
import Image1 from "../../assets/Images/Rectangle1.png";
import Image2 from "../../assets/Images/Rectangle2.png";
import Image3 from "../../assets/Images/Rectangle3.png";
import Image4 from "../../assets/Images/Rectangle4.png";
import Image5 from "../../assets/Images/Rectangle5.png";
import Image6 from "../../assets/Images/Rectangle6.png";

const DesignWorkflow = () => {
  const projects = [
    {
      id: 1,
      client: "Bloom Money",
      title: "Empowering communities with financial solutions.",
      image: Image1,
    },
    {
      id: 2,
      client: "Rijon",
      title: "The Platform for Content Creators",
      image: Image2,
    },
    {
      id: 3,
      client: "Earpoint",
      title: "The Best Place To Find Productivity Tools",
      image: Image3,
    },
    {
      id: 4,
      client: "Fimecta",
      title: "Wallet application to streamline digital transactions",
      image: Image4,
    },
    {
      id: 5,
      client: "Tidio",
      title: "Clearbit, a business intelligence platform",
      image: Image5,
    },
    {
      id: 6,
      client: "Fastgo",
      title: "Fastgo's scooter rental app to drive adoption",
      image: Image6,
    },
  ];

  return (
    <section className="container mx-auto">
      <div className="w-full px-[20px] md:px-[100px] py-[80px] flex flex-col gap-[64px] items-center">
        <SectionHeader
          p1={"how we helped others succeed"}
          h1={"Our Creative Showcase"}
          p2={
            "We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
          }
        />

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
          {projects.map((project, index) => {
            // Staggered effect logic
            const isOdd = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`flex flex-col gap-[24px] group transition-all max-w-[600px] duration-500 
                  ${isOdd ? "md:mt-[120px]" : "md:mt-0"}`}
              >
                {/* Image Container */}
                <div className="relative w-full aspect-[4/5] md:h-[685px] overflow-hidden rounded-[32px] bg-[#111] border border-white/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Project Info - Fixed 600px constraint */}
                <div className="flex flex-col w-full max-w-[600px]">
                  {/* Client Name */}
                  <p className="text-[#FFF] font-inter-tight text-[14px] leading-normal opacity-60">
                    {project.client}
                  </p>

                  {/* Title & Arrow Wrapper - Perfect Alignment */}
                  <div className="flex items-end justify-between w-full">
                    {/* Project Title - Fixed line-clamp for overflow */}
                    <h3 className="text-[#FFF] font-inter-tight text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                      {project.title}
                    </h3>

                    {/* Arrow Button - Baseline Aligned */}
                    <div className="pb-1 shrink-0">
                      <div className="w-8 h-8 rounded-full border border-[#333] flex items-center justify-center transition-all duration-500 ease-in-out group-hover:bg-white group-hover:border-white">
                        <img
                          src={Arrow}
                          alt="Arrow"
                          className="w-4 h-4 transition-all duration-500 invert brightness-100 group-hover:brightness-0 group-hover:invert-0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DesignWorkflow;
