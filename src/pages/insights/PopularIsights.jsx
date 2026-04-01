import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { allBlogs } from "../../data/blogsData";
import EllipseLarge from "../../assets/Images/EllipseLarge.png";
import EllipseSmall from "../../assets/Images/EllipseSmall.png";
import card1 from "../../assets/Images/card1.png";
import cardDot from "../../assets/Images/cardDot.png";
import EllipseGreen from "../../assets/Images/EllipseGreen.png";
import EllipseGreenSmall from "../../assets/Images/EllipseGreenSmall.png";

const PopularInsights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Design");

  const categories = [
    { name: "Design" },
    { name: "Product" },
    { name: "Software Development" },
    { name: "Customer Success" },
    { name: "Leadership" },
    { name: "Management" },
  ];

  const filteredBlogs = useMemo(() => {
    return allBlogs.filter(
      (blog) =>
        blog.category === selectedCategory &&
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [selectedCategory, searchQuery]);

  return (
    <section className="w-full bg-black min-h-screen">
      <div className="container relative overflow-hidden mx-auto">
        <div className="absolute left-[-99px] top-[-78px] z-0 pointer-events-none">
          <img
            src={EllipseSmall}
            alt="Glow Small"
            className="w-[728px] h-auto"
          />
        </div>
        <div className="absolute left-[-116px] top-[-131px] z-0 pointer-events-none">
          <img
            src={EllipseLarge}
            alt="Glow Large"
            className="w-[1249px] h-auto"
          />
        </div>
        <div className="absolute left-[-107px] bottom-[-250px] z-0 pointer-events-none">
          <img
            src={EllipseGreen}
            alt="Glow Large"
            className="w-[749px] h-auto"
          />
        </div>
        <div className="absolute right-[0px] top-[-0px] z-0 pointer-events-none">
          <img
            src={EllipseGreenSmall}
            alt="Glow Large"
            className="w-[449px] h-auto"
          />
        </div>
        <div className="flex flex-col items-start gap-[60px] pb-[100px] px-[100px] relative z-10">
          <div className="flex items-start gap-[45px]">
            <div className="flex w-[510px] flex-col items-start gap-[48px] pt-[150px]">
              <div className="flex flex-col items-start gap-[24px]">
                <span className="text-[14px] uppercase text-[#F3FE00] font-['Geologica']">
                  Popular insights
                </span>
                <h1 className="text-[40px] font-bold text-white font-['Geologica']">
                  Trending Articles You Need To Read
                </h1>
              </div>

              <div className="flex flex-col gap-[12px] w-[364px]">
                <span className="text-white font-['Inter']">
                  Blog categories
                </span>
                <input
                  type="search"
                  placeholder="Search any Insights"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="h-[48px] bg-white/10 border border-white/20 rounded-full px-6 text-white text-[14px] outline-none"
                />
                <ul className="flex flex-col gap-[4px] list-none p-0">
                  {categories.map((cat) => (
                    <li key={cat.name}>
                      <button
                        onClick={() => setSelectedCategory(cat.name)}
                        className={`w-full text-left px-[12px] py-[6px] rounded-[6px] text-[14px] transition-all ${
                          selectedCategory === cat.name
                            ? "text-[#F3FE00] "
                            : "text-[#BDBDBD] hover:text-[#F3FE00]"
                        }`}
                      >
                        {cat.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-[24px] pt-[150px]">
              {filteredBlogs.map((blog) => (
                <Link
                  to={`/blog/${blog.id}`}
                  key={blog.id}
                  className="no-underline group"
                >
                  {/* Yahan overflow-hidden aur relative add kiya hai taake border image ke upar render ho */}
                  <div className="flex h-[218px] w-[685px] items-center justify-between rounded-[16px] border-2 border-white/20 bg-white/10 pr-[20px] backdrop-blur-[6px] transition-all duration-300 hover:border-[#F3FE00] relative overflow-hidden">
                    {/* Image Container */}
                    <div className="h-[218px] w-[302px] shrink-0 overflow-hidden">
                      <img
                        src={card1}
                        className="h-full w-full object-cover rounded-l-[15px] hover:scale-103 transition-all duration-500"
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col pl-6 gap-[12px] relative z-10">
                      <h2 className="text-[20px] font-semibold text-white font-['Geologica']">
                        {blog.title}
                      </h2>
                      <p className="text-[14px] text-[#BDBDBD] ">{blog.desc}</p>
                      <div className="flex items-center gap-2 text-[14px] text-[#E7E7E7]">
                        <span>{blog.readTime}</span>
                        <img src={cardDot} className="w-1 h-1" alt="" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularInsights;
