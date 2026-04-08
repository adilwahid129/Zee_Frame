import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import DiscoveryIcon from "../../../assets/Images/DiscoveryIcon.png"; // Icon as per your existing structure
import PlanIcon from "../../../assets/Images/PlanIcon.png";
import ValidationIcon from "../../../assets/Images/ValidationIcon.png";
import DeliverIcon from "../../../assets/Images/DeliverIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const ProductRoadmapping = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "Vision alignment",
    },
    {
      icon: lightningbolt,
      text: "Feature prioritization",
    },
    {
      icon: lightningbolt,
      text: "Execution milestones",
    },
    {
      icon: lightningbolt,
      text: "Resource planning",
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Discover",
      description: "Understand your goals, market context, and user needs.",
      icon: DiscoveryIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Plan",
      description: "Structure features, releases, timelines, and dependencies.",
      icon: PlanIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Validate",
      description: "Ensure feasibility across design, dev, and strategy.",
      icon: ValidationIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Deliver",
      description: "Finalize a detailed, ready-to-execute roadmap.",
      icon: DeliverIcon,
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Align Teams Around a Common Vision",
      description: "Everyone moves with clarity, design, dev, and strategy in sync.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Help You Prioritize What Matters Most",
      description: "Focus on high-impact features that drive user value and business growth.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Deliver Clear, Visual, and Actionable Roadmaps",
      description: "Simplified execution plans that bridge the gap between concept and delivery.",
      icon: lightningbolt,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="PRODUCT STRATEGY & ROADMAPPING"
        heroParagraph="Plan With Clarity And Move With Confidence. We Design Roadmaps That Turn Ideas Into Successful Products."
        impactHeading="A Clear Path to Product Success"
        impactParagraph="We align goals, prioritize features, and create structured plans that make delivery predictable and efficient."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our Product Roadmapping Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default ProductRoadmapping;