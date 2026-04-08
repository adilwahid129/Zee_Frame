import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import DiscoveryIcon from "../../../assets/Images/DiscoveryIcon.png";
import AnalysisIcon from "../../../assets/Images/AnalysisIcon.png";
import StrategyIcon from "../../../assets/Images/StrategyIcon.png";
import ValidationIcon from "../../../assets/Images/ValidationIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const UIUXAuditAndOptimization = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "Identify usability friction",
    },
    {
      icon: lightningbolt,
      text: "Visual & brand alignment check",
    },
    {
      icon: lightningbolt,
      text: "Performance & accessibility audit",
    },
    {
      icon: lightningbolt,
      text: "Conversion rate optimization",
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Identify and Fix Hidden Usability Friction",
      description:
        "We pinpoint exactly where users are getting stuck and provide clear solutions to create a smoother, more intuitive journey.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Optimize for Higher Engagement and Conversions",
      description:
        "By refining interactions and layouts, we help you turn more visitors into loyal customers through data-backed design changes.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Ensure Your Product Meets Modern Standards",
      description:
        "From accessibility to performance, we make sure your interface is fast, inclusive, and visually aligned with current industry best practices.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Review",
      description: "A deep dive into your current product to identify visual and functional gaps.",
      icon: DiscoveryIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Analyze",
      description: "Evaluate user data, heatmaps, and feedback to understand behavior patterns.",
      icon: AnalysisIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Optimize",
      description: "Redesign and refine key elements to improve usability and brand impact.",
      icon: StrategyIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Enhance",
      description: "Finalize improvements and provide a roadmap for long-term product health.",
      icon: ValidationIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="UI/UX Audit & Optimization"
        heroParagraph="Fix Friction, Enhance Performance, And Elevate Results. We Deep-Dive Into Your Product To Uncover Opportunities For Growth."
        impactHeading="Turn Insights Into Higher Performance"
        impactParagraph="Our UI/UX Audit & Optimization service is designed to identify the 'why' behind user drop-offs. We provide a comprehensive evaluation of your product's usability, accessibility, and visual health to drive better business outcomes."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our UI/UX Audit Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default UIUXAuditAndOptimization;