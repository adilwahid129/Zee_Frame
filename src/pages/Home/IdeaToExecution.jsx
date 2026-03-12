import React, { useState, useEffect, useRef, useCallback } from "react";
import SectionHeader from "../../compnents/sectionHeader";

const IdeaToExecution = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [totalScrollRatio, setTotalScrollRatio] = useState(0);
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  const steps = [
    {
      id: "01",
      title: "Discovery",
      sub: "Research & Domain Analysis",
      desc: "Don't ignore the crucial step of Research & Development in the UX Design Process! Discover and solve user problems to launch a successful product. Gather data on the target audience and analyze customer feedback. Improve user experience.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "02",
      title: "Flows",
      sub: "User Journey Map Sitemap",
      desc: "Create successful user flows for your product in the UX design process by mapping user journeys and interactions. Define product ideas and goals, tailored to user needs, behavior, and expectations. Test with real users for optimization.",
      image: "/2nd_image.png",
    },
    {
      id: "03",
      title: "Wireframes",
      sub: "Low - Fidelity Design",
      desc: "Define the content and functionality of your product with wireframes in the UX Design process. Brainstorm multiple ideas, get feedback, and refine for high fidelity wireframes. Enhance the user interface for a natural and intuitive look.",
      image:
        "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "04",
      title: "Mockups",
      sub: "High - Fidelity Design",
      desc: "Visualize your product's appearance with mockups in the UX Design. Detailed design for every screen gets reviewed by stakeholders and the design team. Get it tested with users for improved design based on their needs and expectations.",
      image:
        "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "05",
      title: "Prototyping",
      sub: "Interaction Design",
      desc: "UX Designers create clickable prototypes for your product using tools like Invision to assess product functionality. Gather user feedback and collaborate with development team to create improved version of the design for implementation.",
      image:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "06",
      title: "Testing",
      sub: "Usability Testing",
      desc: "UX designers focus on improving product usability by testing with real users. Define the testing goals and scenarios and recruit a target audience. Conduct usability tests, analyze results, and make changes for optimal user experience.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const startTrigger = windowHeight * 0.5;
    const distanceScrolled = startTrigger - rect.top;
    const totalHeight = rect.height - windowHeight * 0.2;
    const ratio = Math.max(0, Math.min(1, distanceScrolled / totalHeight));
    setTotalScrollRatio(ratio);

    const sectionElements = document.querySelectorAll(".step-content");
    let currentActive = 0;
    sectionElements.forEach((el, index) => {
      const sRect = el.getBoundingClientRect();
      if (sRect.top <= windowHeight * 0.5) currentActive = index;
    });
    setActiveStep(currentActive);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  return (
    <section className="container">
      <div className="w-full px-10 md:px-20 flex flex-col gap-[64px]">
        <SectionHeader
          p1={"Our process, Your Advantage"}
          h1={" From Idea To Execution"}
          p2={
            "We have become experts in creating top-notch digital products. We design beautifully and develop excellently. And we care deeply about what we do."
          }
        />

        {/* Main Section */}
        <div
          ref={containerRef}
          className="relative flex w-full items-start justify-between"
        >
          {/* Vertical ruler — bg track */}
          <div className="absolute left-[41px] top-0 bottom-0 z-0 w-0.5 bg-[#1F1F1F]">
            <div
              className="absolute top-0 left-0 w-full bg-[#F3FE00] z-10 transition-[height] duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
              style={{ height: `${totalScrollRatio * 100}%` }}
            />
          </div>

          {/* Left steps */}
          <div className="relative z-20 flex w-full flex-col items-start justify-end gap-[100px] self-stretch pb-[100px] md:w-[55%]">
            {steps.map((step, index) => (
              <div key={index} className="step-content flex w-full items-start">
                {/* Step number */}
                <div className="w-[30px] shrink-0 flex justify-end pt-1">
                  <span
                    className={`text-base font-bold font-[Inter] transition-colors duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      activeStep >= index ? "text-white" : "text-[#8F8F8F]"
                    }`}
                  >
                    {step.id}
                  </span>
                </div>

                <div className="ml-[11px] w-0.5 shrink-0" />

                {/* Inner content box */}
                <div
                  className={`ml-[21px] flex flex-col items-start gap-4 self-stretch
                    transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                    ${
                      activeStep === index
                        ? "opacity-100 translate-y-0"
                        : "opacity-[0.4] translate-y-[6px]"
                    }`}
                >
                  {/* Title — Geologica 36px 600 */}
                  <h3
                    className={`m-0 font-[Geologica] text-[36px] font-semibold leading-normal uppercase transition-colors duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      activeStep === index ? "text-white" : "text-[#8F8F8F]"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Sub — Inter 18px 400 */}
                  <p
                    className={`m-0 font-[Inter] text-lg font-normal leading-[27px] transition-colors duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                      activeStep === index ? "text-[#D5D5D5]" : "text-[#8F8F8F]"
                    }`}
                  >
                    {step.sub}
                  </p>

                  {/* Desc — Inter 16px 400 */}
                  <div className="flex w-[553px] min-h-20 flex-col justify-center">
                    <p
                      className={`m-0 font-[Inter] text-base font-normal leading-6 transition-colors duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] ${
                        activeStep === index ? "text-white" : "text-[#8F8F8F]"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right sticky image */}
          <div className="hidden md:block sticky top-[140px] self-start w-[527px] z-30">
            <div className="relative h-[506px] w-[527px] overflow-hidden rounded-[20px] border border-[#1F1F1F]">
              {steps.map((imgStep, idx) => (
                <img
                  key={idx}
                  src={imgStep.image}
                  alt={imgStep.title}
                  className={`absolute inset-0 h-full w-full object-cover
                    transition-[opacity,transform,filter] duration-[850ms] ease-[cubic-bezier(0.4,0,0.2,1)]
                    ${
                      activeStep === idx
                        ? "opacity-100 scale-100 blur-none"
                        : "opacity-0 scale-[1.04] blur-[4px]"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaToExecution;
