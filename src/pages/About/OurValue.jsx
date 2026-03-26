import React from "react";

const OurValue = () => {
  const valuesData = [
    {
      id: "01",
      title: "Crafted, not copied",
      description:
        "No two problems are exactly alike, that's why we believe every project deserves a specific tailored solution, including yours.",
    },
    {
      id: "02",
      title: "Seamless collaboration",
      description:
        "We ensure all the deliverables are met timely because we love smooth-sailing projects. Our project managers are always ready to discuss and provide updates for you.",
    },
    {
      id: "03",
      title: "Stay flexible",
      description:
        "Just like cats, we are flexible. We remain adaptable to any urgent needs or changes as your project evolves.",
    },
    {
      id: "04",
      title: "Transparent pricing",
      description:
        "We provide a clear breakdown of invoices, so no hidden fees! Whether you do project-based or recurring partnership, you can cancel anytime.",
    },
  ];

  return (
    <>
      <section className="container ">
        <div className="flex self-stretch bg-[#0D0D0D] flex-col items-start gap-[80px] px-[100px] py-[80px]">
          <div className="flex w-[981px] flex-col items-start gap-[24px]">
            <span className="text-center font-['Inter'] text-[14px] font-medium uppercase text-[#F3FE00]">
              Our Value
            </span>
            <span className="font-['Geologica'] text-[32px] font-light leading-[46px] text-[#FFF]">
              Together, we make perfect partners. We offer worry-free
              partnerships and deliver your vis
              <span className="font-['Geologica'] text-[32px] font-light leading-[46px] text-[#8F8F8F]">
                ion into reality with our top-tier creativity. No fluff, just
                the good stuff.
              </span>
            </span>
          </div>
          <div className="flex self-stretch flex-col items-start">
            {valuesData.map((row) => {
              return (
                <div
                  key={row.id}
                  className="group flex h-[120px] w-full items-center  gap-[80px] px-[24px]  transition-all duration-500 overflow-hidden"
                >
                  <span className="w-10 shrink-0 font-['Inter'] text-[18px] font-normal uppercase text-[#FFF]">
                    {row.id}
                  </span>
                  <div className="flex flex-1 items-center transition-all duration-500">
                    {/* Hover Image: Starts with w-0 and expands on hover */}
                    <div className="h-[58px] w-0 opacity-0 transition-all duration-500 group-hover:w-[58px] group-hover:mr-6 group-hover:opacity-100 rounded-md bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070')] bg-cover bg-center bg-no-repeat shrink-0"></div>

                    <span className="font-['Geologica'] text-[32px] font-extralight text-[#FFF] whitespace-nowrap">
                      {row.title}
                    </span>
                  </div>
                  <span className="w-[424px] shrink-0 font-['Inter'] text-[16px] font-normal leading-[24px] text-[#FFF]">
                    {row.description}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurValue;
