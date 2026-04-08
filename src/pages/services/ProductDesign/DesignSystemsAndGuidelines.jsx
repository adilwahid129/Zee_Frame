import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import AuditIcon from "../../../assets/Images/AuditIcon.png"; // Ensure these icons exist
import CreateIcon from "../../../assets/Images/CreateIcon.png";
import DocumentIcon from "../../../assets/Images/DocumentIcon.png";
import IntegrateIcon from "../../../assets/Images/IntegrateIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const DesignSystemsAndGuidelines = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "Design libraries & tokens",
    },
    {
      icon: lightningbolt,
      text: "System scalability & team alignment",
    },
    {
      icon: lightningbolt,
      text: "UI documentation & accessibility",
    },
    {
      icon: lightningbolt,
      text: "Visual and brand consistency",
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Build Systems That Empower Every Design Team",
      description:
        "We design libraries that speed up delivery, reduce rework, and improve productivity across all creative departments consistently.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Create Foundations That Scale Seamlessly Over Time",
      description:
        "Our systems are built to grow with your product, ensuring that adding new features never breaks your visual or functional core.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Ensure Unified Visual and Functional Harmony Everywhere",
      description:
        "By standardizing components and patterns, we eliminate fragmented user experiences and technical debt.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Audit",
      description:
        "Evaluate existing design assets, patterns, and inconsistencies.",
      icon: AuditIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Create",
      description:
        "Develop reusable UI components, styles, and tokens for flexible scaling.",
      icon: CreateIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Document",
      description:
        "Establish design rules and documentation to enhance collab.",
      icon: DocumentIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Integrate",
      description:
        "Implement, train teams, and ensure smooth workflow adoption.",
      icon: IntegrateIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="Design Systems & Guidelines"
        heroParagraph="Design Smarter, Scale Faster, And Stay Consistent. We Create Scalable Systems That Bring Unity To Your Brand Experiences."
        impactHeading="Building Foundations for Scalable Design"
        impactParagraph="Our Design Systems service establishes visual and functional harmony across your entire digital ecosystem. We standardize UI components, documentation, and interaction patterns to strengthen brand consistency."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our Design System Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default DesignSystemsAndGuidelines;