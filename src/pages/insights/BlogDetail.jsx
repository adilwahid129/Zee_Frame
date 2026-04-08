import React, { useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { allBlogs } from "../../data/blogsData";
import blogImage from "../../assets/Images/blog.png";
import cardDot from "../../assets/Images/cardDot.png";
import subBlog from "../../assets/Images/subBlog.png";
import card1 from "../../assets/Images/card1.png";
import LatestInsights from "./LatestInsights";
const BlogDetail = () => {
  const { id } = useParams();
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

  const blog = allBlogs.find((b) => b.id === id);

  if (!blog) return <div className="p-20 text-white">Blog not found.</div>;

  return (
    <>
      <section className="w-full">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[66px] self-stretch bg-gradient-to-t from-white/[0.03] to-white/0 px-[115px] py-[100px]">
            <div className="flex w-[1210px] flex-col items-start gap-[40px]">
              <div className="flex flex-col items-start gap-[24px] self-stretch">
                <span className="text-center font-['Inter'] text-[18px] font-normal leading-normal text-[#CDCDCD]">
                  Posted by: Admin
                </span>
                <div className="flex flex-col items-start gap-[20px] self-stretch">
                  <h1 className="self-stretch font-['Geologica'] text-[48px] font-semibold leading-[120%] text-[#FFF]">
                    {blog.title}
                  </h1>
                  <p className="self-stretch font-['Inter'] text-[20px] font-normal leading-[24px] text-[#CDCDCD]">
                    {blog.content}
                  </p>
                </div>
              </div>
              <div className="flex h-[60px] items-center justify-between self-stretch border-y border-[#252525] py-[18px]">
                <div className="flex items-center gap-[8px]">
                  <span className="text-center font-['Inter'] text-[18px] font-normal leading-normal text-[#CDCDCD]">
                    {blog.readTime}
                  </span>
                  <img src={cardDot} className="w-1 h-1" alt="" />
                  <span className="text-center font-['Inter'] text-[18px] font-normal leading-normal text-[#CDCDCD]">
                    {blog.date}
                  </span>
                </div>
                <div className="flex items-center justify-center gap-[6px] rounded-[29px] border border-[#252525] px-[12px] cursor-pointer py-[6px]">
                  <div className="h-[20px] w-[20px] aspect-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M17.5 5.41699C17.5 6.7977 16.3807 7.91699 15 7.91699C13.6192 7.91699 12.5 6.7977 12.5 5.41699C12.5 4.03628 13.6192 2.91699 15 2.91699C16.3807 2.91699 17.5 4.03628 17.5 5.41699Z"
                        stroke="#CDCDCD"
                        stroke-width="1.5"
                      />
                      <path
                        d="M7.5 10C7.5 11.3807 6.38071 12.5 5 12.5C3.61929 12.5 2.5 11.3807 2.5 10C2.5 8.61925 3.61929 7.5 5 7.5C6.38071 7.5 7.5 8.61925 7.5 10Z"
                        stroke="#CDCDCD"
                        stroke-width="1.5"
                      />
                      <path
                        d="M17.5 14.583C17.5 15.9638 16.3807 17.083 15 17.083C13.6192 17.083 12.5 15.9638 12.5 14.583C12.5 13.2023 13.6192 12.083 15 12.083C16.3807 12.083 17.5 13.2023 17.5 14.583Z"
                        stroke="#CDCDCD"
                        stroke-width="1.5"
                      />
                      <path
                        d="M7.27344 8.95857L12.6901 6.45898M7.27344 11.0423L12.6901 13.5419"
                        stroke="#CDCDCD"
                        stroke-width="1.5"
                      />
                    </svg>
                  </div>
                  <span className="text-center font-['Inter'] text-[12px] font-normal leading-normal text-[#CDCDCD]">
                    Share
                  </span>
                </div>
              </div>
            </div>
            <div className="h-[539px] w-[1210px] rounded-[24px]">
              <img
                src={blogImage}
                alt="card1"
                className="w-full h-full object-cover rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container">
          <div className="flex items-start gap-[40px] self-stretch p-[80px]">
            <div className="flex flex-1 shrink-0 flex-col max-w-[899px] items-center gap-[40px] rounded-[16px] backdrop-blur-[6px]">
              <div className="flex flex-col items-start gap-[8px] self-stretch">
                <h1 className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                  Let me paint you a picture of Junior Me.
                </h1>
                <p className="self-stretch font-['Inter'] text-[16px] font-normal leading-[24px] text-[#ECECEC]">
                  I’d whip up a design, slap together a shiny mockup, and send
                  it off to the developers, feeling pretty damn proud of myself.
                  I’d whip up a design, slap together a shiny mockup, and send
                  it off to the developers, feeling pretty damn proud of myself.
                </p>
                <p className="self-stretch font-['Inter'] text-[16px] font-normal leading-[24px] text-[#ECECEC]">
                  Junior Me thought, “Hey, if it looks good, we’re good, right?”
                </p>
                <h1 className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                  Wrong. So very wrong.
                </h1>
                <p className="self-stretch font-['Inter'] text-[16px] font-normal leading-[24px] text-[#ECECEC]">
                  Fast-forward to now, and my deliverables are unrecognizable
                  compared to those plain mockups of the past. I’ve learned —
                  sometimes the hard way — that the job doesn’t stop at making
                  things look pretty. As a product designer and now product
                  manager, I’ve realized that great deliverables anticipate
                  problems, answer questions, and make the dev team’s life a
                  whole lot easier. Here are five lessons I’ve learned about
                  deliverables that Junior Me could’ve never imagined.
                </p>
                <p className="self-stretch font-['Inter'] text-[16px] font-normal leading-[24px] text-[#ECECEC]">
                  Fast-forward to now, and my deliverables are unrecognizable
                  compared to those plain mockups of the past. I’ve learned —
                  sometimes the hard way — that the job doesn’t stop at making
                  things look pretty.
                  <br />
                  <br />
                  As a product designer and now product manager, I’ve realized
                  that great deliverables anticipate problems, answer questions,
                  and make the dev team’s life a whole lot easier.
                  <br />
                  <br />
                  Here are five lessons I’ve learned about deliverables that
                  Junior Me could’ve never imagined.
                </p>
              </div>
              <div className="h-[439px] self-stretch rounded-[24px]">
                <img
                  src={subBlog}
                  alt="subBlog"
                  className="w-full h-full rounded-[24px]"
                />
              </div>
              <div className="flex flex-col items-start gap-[8px] self-stretch">
                <h1 className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                  Best practices for working with big data tables
                </h1>
                <p className="self-stretch font-['Inter'] text-[16px] font-normal leading-[24px] text-[#ECECEC]">
                  Designing tables for large datasets is a whole different
                  story. Big data tables need optimized designs and smart
                  interactions to make sure users can navigate and analyze data
                  efficiently. Here are some best practices to keep in mind when
                  working with big data tables:
                  <br />
                  <br />
                  <h2 className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                    1. Enable advanced sorting and filtering
                  </h2>
                  <br />
                  When you’re working with big data sets, it’s important to have
                  effective ways to sift through all that information. Sorting
                  and filtering are key tools for helping users find relevant
                  data quickly.
                  <br />
                  <br />
                  <span className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                    Multi-level sorting :
                  </span>
                  Let users sort by multiple columns at the same time. For
                  instance, users might want to sort first by department, then
                  by revenue and then by date.
                  <br />
                  <br />
                  <span className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                    Dynamic filters :
                  </span>
                  give users the option to filter as they type or select
                  options. Filters should be simple to understand, easy to use
                  and flexible, so users can easily customize their views of the
                  data.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center sticky top-[92px] gap-[24px]">
              <h1 className="self-stretch font-['Poppins'] text-[18px] font-medium leading-normal text-[#ECECEC]">
                Trending Blogs
              </h1>
              <div className="flex flex-col items-start justify-center gap-[20px]">
                {filteredBlogs.map((blog) => (
                  <Link
                    to={`/blog/${blog.id}`}
                    key={blog.id}
                    className="no-underline group"
                  >
                    {/* Yahan overflow-hidden aur relative add kiya hai taake border image ke upar render ho */}
                    <div className="flex w-[341px] items-start gap-[12px] rounded-[16px] border border-white/20 bg-white/5 p-[6px] backdrop-blur-[6px] overflow-hidden hover:border-[#F3FE00]">
                      <div className="w-[104px] h-[104px] shrink-0 self-stretch rounded-[12px]">
                        <img
                          src={card1}
                          alt="card1"
                          className="w-full h-full rounded-[12px]"
                        />
                      </div>
                      <div className="flex w-[211px] shrink-0 flex-col items-start gap-[12px] py-[6px]">
                        <span className="text-center font-['Inter'] text-[12px] font-normal leading-normal text-[#FFF]">
                          ZeeFrames
                        </span>
                        <div className="flex h-[38px] flex-col justify-center self-stretch">
                          <h2 className="overflow-hidden  font-['Geologica'] text-[14px] font-medium leading-normal text-[#FFF]">
                            {blog.title}
                          </h2>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <span className="text-center font-['Inter'] text-[12px] font-normal leading-normal text-[#FFF]">
                            {blog.readTime}
                          </span>
                          <img src={cardDot} className="w-1 h-1" alt="" />
                          <span className="text-center font-['Inter'] text-[12px] font-normal leading-normal text-[#FFF]">
                            {blog.date}
                          </span>
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
      <LatestInsights />
    </>
  );
};

export default BlogDetail;
