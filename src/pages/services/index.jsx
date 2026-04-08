import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

// Renamed image imports to avoid conflict with Icon component names
import ProductDesignImg from "../../assets/Images/ProductDesign.png";
import BrandingSolutionsImg from "../../assets/Images/BrandingSolutions.png";
import NoCodeDevImg from "../../assets/Images/NoCodeDev.png";

import {
  ProductStrategyConsulting,
  UX_Research_and_Insights,
  Product_Strategy_and_Roadmapping,
  ExperienceArchitecture,
  UI_UX_Design,
  DesignSystems,
  PrototypingTesting,
  InteractionMotion,
  UXAuditOptimization,
  BrandIdentityIcon,
  BrandStrategyIcon,
  CreativeDirIcon,
  VisualCommIcon,
  RebrandingIcon,
  WebflowIcon,
  FramerIcon,
  BubbleIcon,
  FigmaSitesIcon,
  MaintenanceIcon,
} from "../../assets/Images/CustomIcons";

const Index = () => {
  const location = useLocation();

  const MENU_DATA = [
    {
      label: "Product Design",
      icon: ProductDesignImg,
      items: [
        {
          id: 1,
          title: "Product Strategy Consulting",
          desc: "Shape your product vision with insights, market analysis, and growth strategies.",
          path: "/services/ProductStrategyConsulting",
          icon: <ProductStrategyConsulting />,
        },
        {
          id: 2,
          title: "UX Research & Insights",
          desc: "Uncover user needs and behaviors through research that drives design decisions.",
          path: "/services/UXResearchAndInsights",
          icon: <UX_Research_and_Insights />,
        },
        {
          id: 3,
          title: "Product Strategy & Roadmapping",
          desc: "Align goals and deliverables into a strategic roadmap for market success.",
          path: "/services/ProductRoadmapping",
          icon: <Product_Strategy_and_Roadmapping />,
        },
        {
          id: 4,
          title: "Experience Architecture",
          desc: "Design intuitive structures and user flows that make products effortless.",
          path: "/services/ExperienceArchitecture",
          icon: <ExperienceArchitecture />,
        },
        {
          id: 5,
          title: "UI/UX Design",
          desc: "Deliver striking, functional interfaces that enhance user satisfaction.",
          path: "/services/UIUXDesign",
          icon: <UI_UX_Design />,
        },
        {
          id: 6,
          title: "Design Systems & Guidelines",
          desc: "Develop scalable ecosystems that ensure brand consistency across platforms.",
          path: "/services/DesignSystemsAndGuidelines",
          icon: <DesignSystems />,
        },
        {
          id: 7,
          title: "Prototyping & User Testing",
          desc: "Turn ideas into prototypes, validate with users, and refine before launch.",
          path: "/services/PrototypingAndUserTesting",
          icon: <PrototypingTesting />,
        },
        {
          id: 8,
          title: "Interaction & Motion Design",
          desc: "Enrich experiences with animations that bring interfaces to life.",
          path: "/services/InteractionAndMotionDesign",
          icon: <InteractionMotion />,
        },
        {
          id: 9,
          title: "UX Audit & Product Optimization",
          desc: "Identify usability challenges and unlock opportunities through evaluations.",
          path: "/services/UIUXAuditAndOptimization",
          icon: <UXAuditOptimization />,
        },
      ],
    },
    {
      label: "Branding Solutions",
      icon: BrandingSolutionsImg,
      items: [
        {
          id: 10,
          title: "Brand Identity Design",
          desc: "Craft brand visuals — logo, typography, and color, reflecting your purpose.",
          path: "/services/UIUXAuditAndOptimization",
          icon: <BrandIdentityIcon />,
        },
        {
          id: 11,
          title: "Brand Strategy & Positioning",
          desc: "Define how your brand communicates and connects across touchpoints.",
          path: "/services/ExperienceArchitecture",
          icon: <BrandStrategyIcon />,
        },
        {
          id: 12,
          title: "Creative Direction",
          desc: "Develop cohesive visual direction aligning design, story, and values.",
          path: "/services/ExperienceArchitecture",
          icon: <CreativeDirIcon />,
        },
        {
          id: 13,
          title: "Visual Communication Design",
          desc: "Deliver cohesive assets from social to campaigns, reinforcing consistency.",
          path: "/services/ExperienceArchitecture",
          icon: <VisualCommIcon />,
        },
        {
          id: 14,
          title: "Rebranding & Evolution",
          desc: "Transform existing identities into modern, future-ready brand systems.",
          path: "/services/PrototypingAndUserTesting",
          icon: <RebrandingIcon />,
        },
      ],
    },
    {
      label: "No-Code Development",
      icon: NoCodeDevImg,
      items: [
        {
          id: 20,
          title: "Webflow Development",
          desc: "Build responsive, pixel-perfect websites with seamless no-code performance.",
          path: "/services/UXResearchAndInsights",
          icon: <WebflowIcon />,
        },
        {
          id: 21,
          title: "Framer Development",
          desc: "Create fast, interactive sites with motion and creative precision.",
          path: "/services/ProductRoadmapping",
          icon: <FramerIcon />,
        },
        {
          id: 22,
          title: "Bubble App Development",
          desc: "Turn complex ideas into scalable, powerful no-code web apps.",
          path: "/services/ExperienceArchitecture",
          icon: <BubbleIcon />,
        },
        {
          id: 23,
          title: "Figma Sites",
          desc: "Bring Figma designs to life with unmatched pixel-perfect accuracy.",
          path: "/services/PrototypingAndUserTesting",
          icon: <FigmaSitesIcon />,
        },
        {
          id: 24,
          title: "Platform Maintenance & Support",
          desc: "Keep platforms stable with regular updates and performance care.",
          path: "/services/InteractionAndMotionDesign",
          icon: <MaintenanceIcon />,
        },
      ],
    },
  ];

  // Persistence Logic for Sidebar Tab
  const [activeTab, setActiveTab] = useState(() => {
    const saved = localStorage.getItem("activeServiceTab");
    return saved !== null ? parseInt(saved) : 0;
  });

  const handleTabHover = (index) => {
    setActiveTab(index);
    localStorage.setItem("activeServiceTab", index);
  };

  return (
    <div className="container mx-auto">
      <div className="flex w-full items-start gap-[24px] pb-[100px] px-[20px] lg:px-[100px] pt-[40px]">
        {/* Sidebar */}
        <aside className="w-[279px] shrink-0">
          <div className="flex flex-col items-start">
            {MENU_DATA.map((category, index) => (
              <div
                key={index}
                onMouseEnter={() => handleTabHover(index)}
                className={`flex self-stretch items-center gap-[12px] rounded-[8px] p-[16px] cursor-pointer transition-all duration-300 
                ${
                  activeTab === index
                    ? "bg-[rgba(243,254,0,0.08)]"
                    : "bg-transparent hover:bg-[rgba(243,254,0,0.02)]"
                }`}
              >
                <img
                  src={category.icon}
                  alt={category.label}
                  className="w-6 h-6 object-contain"
                />
                <span
                  className={`font-['Inter'] text-[16px] font-semibold leading-[24px] whitespace-nowrap ${
                    activeTab === index ? "text-[#F3FE00]" : "text-white"
                  }`}
                >
                  {category.label}
                </span>
              </div>
            ))}
          </div>
        </aside>

        {/* Main Content Grid */}
        <main className="flex-1">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px] w-full list-none p-0 m-0">
            {activeTab !== null &&
              MENU_DATA[activeTab]?.items.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `flex w-full items-start gap-[12px] rounded-[6px] p-[20px] cursor-pointer transition-all duration-200 decoration-0
                      ${
                        isActive || location.pathname === item.path
                          ? "bg-[rgba(243,254,0,0.08)]"
                          : "bg-transparent hover:bg-[rgba(243,254,0,0.08)]"
                      }`
                    }
                  >
                    <div className="w-6 h-6 shrink-0 text-[#F3FE00]">
                      {item.icon}
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start gap-[4px]">
                      <span className="font-['Inter'] text-[16px] font-semibold leading-[24px] text-white">
                        {item.title}
                      </span>
                      <p className="font-['Inter'] text-[14px] font-normal leading-[22px] text-white/70">
                        {item.desc}
                      </p>
                    </div>
                  </NavLink>
                </li>
              ))}
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Index;
