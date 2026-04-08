import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import DiscoveryIcon from "../../../assets/Images/DiscoveryIcon.png";
import DesignIcon from "../../../assets/Images/DesignIcon.png";
import PrototypeIcon from "../../../assets/Images/PrototypeIcon.png";
import RefineIcon from "../../../assets/Images/RefineIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const UIUXDesign = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "UI aesthetics",
    },
    {
      icon: lightningbolt,
      text: "Visual hierarchy",
    },
    {
      icon: lightningbolt,
      text: "Interaction logic",
    },
    {
      icon: lightningbolt,
      text: "Accessibility consistency",
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Create High-Fidelity Designs That Convert",
      description:
        "Our visual approach focuses on turning visitors into customers through engaging interfaces and persuasive design elements.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Focus on Usability and Brand Identity",
      description:
        "We balance aesthetic beauty with functional logic, ensuring your brand stands out while remaining easy for users to navigate.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Design With a Goal-Oriented Approach",
      description:
        "Every element we place has a purpose—aimed at achieving specific business goals and enhancing the overall user journey.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Discover",
      description:
        "Define design vision, audience expectations, and success metrics.",
      icon: DiscoveryIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Design",
      description: "Create elegant, structured layouts with clear usability.",
      icon: DesignIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Prototype",
      description: "Build interactive experiences that demonstrate flow and engagement.",
      icon: PrototypeIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Refine",
      description: "Review, validate, and enhance every detail for a flawless experience.",
      icon: RefineIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="UI/UX DESIGN"
        heroParagraph="Where Aesthetics Meet Functional Excellence. We Create Beautiful, High-Performing Interfaces That Engage and Retain Users."
        impactHeading="Designing for Engagement and Conversion"
        impactParagraph="We combine stunning visuals with seamless usability to create digital products that don’t just look good—they work perfectly for your users."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our UI/UX Design Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default UIUXDesign;