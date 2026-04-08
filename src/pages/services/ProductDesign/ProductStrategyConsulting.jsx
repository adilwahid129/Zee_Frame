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

const ProductStrategyConsulting = () => {
  const impactfeatures = [
    {
      icon: lightningbolt, // Aapka import kiya hua icon
      text: "Defining product vision and goals",
    },
    {
      icon: lightningbolt,
      text: "Identifying audience needs and pain points",
    },
    {
      icon: lightningbolt,
      text: "Setting clear, actionable strategies",
    },
    {
      icon: lightningbolt,
      text: "Mapping the business and design alignment",
    },
    {
      icon: lightningbolt,
      text: "Feature & Outcome Prioritization",
    },
  ];
  const roadmapFeatures = [
    {
      id: 1,
      title: "We Align Product Goals With Market Reality",
      description:
        "We simplify complex challenges into actionable roadmaps — ensuring your team knows what to build, when, and why.",
      icon: lightningbolt, // Yahan string khtam kar ke direct variable use kiya hai
    },
    {
      id: 2,
      title: "We Turn Vision Into Actionable Roadmaps",
      description:
        "Our strategic approach converts abstract ideas into concrete execution plans, bridging the gap between concept and reality.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Build Scalable Systems for Future Growth",
      description:
        "We design robust architectures and processes that evolve with your business, ensuring long-term stability and performance.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Discovery",
      description:
        "Understand business goals, target audience, and market potential.",
      icon: DiscoveryIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Analysis",
      description:
        "Evaluate data, trends, and competitors for key opportunities.",
      icon: AnalysisIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Strategy",
      description: "Define roadmap, positioning, and value proposition.",
      icon: StrategyIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Validation",
      description: "Refine through feedback and finalize the execution plan.",
      icon: ValidationIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="Product Strategy Consulting"
        heroParagraph="We help you design with purpose and direction. Through data-driven strategy, we turn your vision into a roadmap for lasting success."
        impactHeading="Transform Vision into Measurable Product Success"
        impactParagraph="Our Product Strategy Consulting bridges the gap between design, business, and technology. We define clear goals, align user needs with business outcomes, and guide your product from concept to market success."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our Product Strategy Consulting Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default ProductStrategyConsulting;
