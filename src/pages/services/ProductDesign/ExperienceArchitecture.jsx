import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import DefineIcon from "../../../assets/Images/DefineIcon.png";
import MapIcon from "../../../assets/Images/MapIcon.png";
import StructureIcon from "../../../assets/Images/StructureIcon.png";
import ValidationIcon from "../../../assets/Images/ValidationIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const ExperienceArchitecture = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "Information hierarchy",
    },
    {
      icon: lightningbolt,
      text: "Navigation clarity",
    },
    {
      icon: lightningbolt,
      text: "Flow optimization",
    },
    {
      icon: lightningbolt,
      text: "Wireframe logic",
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Design Experiences That Feel Naturally Effortless",
      description:
        "Every flow we create reduces confusion and supports faster, frictionless navigation, resulting in greater user satisfaction overall.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Build Architectures Based on Real User Logic",
      description:
        "Our structural decisions are guided by how users actually think and move, ensuring the digital environment feels intuitive and familiar.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Create Scalable Frameworks for Future Design Growth",
      description:
        "We build flexible systems that allow your product to grow and evolve without losing its core structural integrity or usability.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Define",
      description:
        "Gather requirements, objectives, and user expectations carefully.",
      icon: DefineIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Map",
      description:
        "Sketch visual paths and logical flows across different interactions.",
      icon: MapIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Structure",
      description:
        "Organize navigation hierarchy, user goals, screen layouts clearly.",
      icon: StructureIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Validate",
      description:
        "Test flow usability and adjust for better engagement efficiency.",
      icon: ValidationIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="EXPERIENCE ARCHITECTURE"
        heroParagraph="Simplify Complexity Through Structured Design Logic. We Create Intuitive User Flows That Make Navigation Effortless."
        impactHeading="Blueprinting Seamless Digital Experiences"
        impactParagraph="We create structures that make digital experiences intuitive and fluid, reducing friction and improving usability across all screens."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our Experience Architecture Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default ExperienceArchitecture;
