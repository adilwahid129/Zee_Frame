import React, { useState, useMemo } from "react";
import Arrow from "../../assets/Images/ArrowVector.svg";
import Image1 from "../../assets/Images/Rectangle1.png";
import Image2 from "../../assets/Images/Rectangle2.png";
import Image3 from "../../assets/Images/Rectangle3.png";
import Image4 from "../../assets/Images/Rectangle4.png";
import Image5 from "../../assets/Images/Rectangle5.png";
import Image6 from "../../assets/Images/Rectangle6.png";
import Image7 from "../../assets/Images/Rectangle7.png";
import Image8 from "../../assets/Images/Rectangle8.png";
import Image9 from "../../assets/Images/Rectangle9.png";
import Image10 from "../../assets/Images/Rectangle10.png";
import Image11 from "../../assets/Images/Rectangle11.png";
import Image12 from "../../assets/Images/Rectangle12.png";

const FilteredProjects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "AI",
    "Enterprise",
    "Fin-Tech",
    "SaaS",
    "Crypto & Web3",
    "Automotive",
    "Ed-Tech",
    "Mar-Tech",
    "IT/Consulting",
    "Health Tech",
    "E-Commerce",
    "Construction Tech",
    "Legal Tech",
    "Freight & Logistics",
    "Social Media",
  ];

  const projects = [
    {
      id: 1,
      name: "Bloom Money",
      title: "Empowering communities with financial solutions.",
      image: Image1,
      categories: ["Fin-Tech", "SaaS"],
    },
    {
      id: 2,
      name: "Alfan",
      title: "The Platform for Content Creators",
      image: Image2,
      categories: ["Social Media", "Mar-Tech"],
    },
    {
      id: 3,
      name: "Earpoint",
      title: "The Best Place To Find Productivity Tools",
      image: Image3,
      categories: ["SaaS", "Enterprise"],
    },
    {
      id: 4,
      name: "Finnecta",
      title: "Wallet application to streamline digital transactions",
      image: Image4,
      categories: ["Fin-Tech", "AI"],
    },
    {
      id: 5,
      name: "Trivo",
      title: "Clearbit, a business intelligence platform",
      image: Image5,
      categories: ["Enterprise", "Mar-Tech"],
    },
    {
      id: 6,
      name: "Fastgo",
      title: "Fastgo's scooter rental app to drive adoption",
      image: Image6,
      categories: ["Automotive", "SaaS"],
    },
    {
      id: 7,
      name: "Cnvrt",
      title: "Social Ties, progress tracking and customizations",
      image: Image7,
      categories: ["Social Media", "Enterprise"],
    },
    {
      id: 8,
      name: "Fankee",
      title: "Whenever passion meets expertise",
      image: Image8,
      categories: ["Mar-Tech", "Social Media"],
    },
    {
      id: 9,
      name: "Olvent",
      title: "Simplify sustainable procurement with Solvent",
      image: Image9,
      categories: ["SaaS", "Fin-Tech"],
    },
    {
      id: 10,
      name: "Arrive",
      title: "The Quickee media platform originates from Ghana",
      image: Image10,
      categories: ["Social Media", "Fin-Tech"],
    },
    {
      id: 11,
      name: "Zuus AI",
      title: "An AI-powered tool for automated",
      image: Image11,
      categories: ["AI", "Enterprise", "SaaS"],
    },
    {
      id: 12,
      name: "Your Lead",
      title: "Construction Lead Generation Platform",
      image: Image12,
      categories: ["Construction Tech", "Enterprise"],
    },
  ];

  const filteredProjects = useMemo(() => {
    return selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory),
        );
  }, [selectedCategory]);
  return (
    <>
      <section>
        <div className="container">
          <div className="flex w-full flex-col items-start gap-[24px] bg-[#090909] px-[100px] pb-[32px] pt-[80px]">
            <span className="font-['Inter'] text-[14px] font-medium uppercase text-[#F2F2F2]">
              Choose your industry
            </span>
            <div className="flex self-stretch flex-wrap items-start content-start gap-[16px]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex h-[48px] items-center justify-center gap-[10px] rounded-[24px] px-[24px] py-[12px] font-['Inter'] text-[16px] transition-all duration-300 ${
                    selectedCategory === category
                      ? "border border-[#FFF] bg-[rgba(255,255,255,0.90)] text-[#000]"
                      : "border border-[rgba(60,60,60,0.72)] bg-[#111] text-[#FFF]"
                  }`}
                >
                  {category === "All" ? "All Niches" : category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="w-full px-[20px] md:px-[100px] py-[80px] flex flex-col gap-[64px] items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 w-full">
            {filteredProjects.map((project, index) => {
              // Staggered effect logic
              const isOdd = index % 2 === 1;

              return (
                <div
                  key={project.id}
                  className={`flex flex-col gap-[24px] group transition-all max-w-[600px] duration-500 
                  ${isOdd ? "md:mt-[120px]" : "md:mt-0"}`}
                >
                  <div className="relative w-full aspect-[4/5] md:h-[685px] overflow-hidden rounded-[32px] bg-[#111] border border-white/5">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col w-full max-w-[600px]">
                    <p className="text-[#FFF] font-['Inter'] text-[14px] leading-normal opacity-60">
                      {project.name}
                    </p>
                    <div className="flex items-end justify-between w-full">
                      <h3 className="text-[#FFF] font-['Inter'] text-2xl font-medium whitespace-nowrap overflow-hidden text-ellipsis flex-1">
                        {project.title}
                      </h3>
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
    </>
  );
};

export default FilteredProjects;
