import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import PlanIcon from "../../../assets/Images/PlanIcon.png";
import CollectIcon from "../../../assets/Images/CollectIcon.png";
import AnalyzeIcon from "../../../assets/Images/AnalyzeIcon.png";
import DeliverIcon from "../../../assets/Images/DeliverIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const UXResearchAndInsights = () => {
  const impactfeatures = [
    {
      icon: lightningbolt, // Aapka import kiya hua icon
      text: "User behavior & motivation",
    },
    {
      icon: lightningbolt,
      text: "Problem discovery",
    },
    {
      icon: lightningbolt,
      text: "Usability validation",
    },
    {
      icon: lightningbolt,
      text: "Insight-based design direction",
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Plan",
      description: "Define clear objectives and target audience.",
      icon: PlanIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Collect",
      description: "Gather relevant qualitative and quantitative data.",
      icon: CollectIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Analyze",
      description: "Find actionable insights and emerging trends.",
      icon: AnalyzeIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Deliver",
      description: "Present data-backed design recommendations.",
      icon: DeliverIcon,
    },
  ];
  const roadmapFeatures = [
    {
      id: 1,
      title: "We Base Every Decision on Proven Data",
      description:
        "Design backed by real evidence ensures confidence and clarity in outcomes.",
      icon: lightningbolt, 
    },
    {
      id: 2,
      title: "We Translate User Behavior Into Actionable Insight",
      description:
        "Design backed by real evidence ensures confidence and clarity in outcomes.Design backed by real evidence ensures confidence and clarity in outcomes.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Help You Build With Clarity and Focus",
      description:
        "Design backed by real evidence ensures confidence and clarity in outcomes.",
      icon: lightningbolt,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="UX Research & Insights"
        heroParagraph="Understand your users beyond assumptions. We uncover what drives real behavior through research and data."
        impactHeading="Design Backed by Evidence"
        impactParagraph="Our UX Research & Insights reveal patterns, motivations, and expectations that shape better design decisions. We provide data you can act on, not guess from."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our UX Research & Insights Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default UXResearchAndInsights;
