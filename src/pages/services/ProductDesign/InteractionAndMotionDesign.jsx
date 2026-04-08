import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import PlanIcon from "../../../assets/Images/PlanIcon.png";
import DesignIcon from "../../../assets/Images/DesignIcon.png";
import IntegrateIcon from "../../../assets/Images/IntegrateIcon.png";
import ValidationIcon from "../../../assets/Images/ValidationIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const InteractionAndMotionDesign = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "Microinteractions & feedback",
    },
    {
      icon: lightningbolt,
      text: "Animation systems",
    },
    {
      icon: lightningbolt,
      text: "Motion principles",
    },
    {
      icon: lightningbolt,
      text: "Interactive flow guidance",
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Design Motion That Improves User Understanding",
      description:
        "Each animation is purposeful, reinforcing clarity, flow, and engagement through natural motion that enhances user experience intuitively.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Build Dynamic Systems That Strengthen Brand Identity",
      description:
        "Our motion guidelines ensure that every transition and hover state reflects your brand’s unique personality and energy.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Optimize Every Animation for Speed and Accessibility",
      description:
        "We ensure animations are lightweight and accessible, providing a smooth experience without compromising performance.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Plan",
      description:
        "Define animation goals, purpose, and timing details for better impact.",
      icon: PlanIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Design",
      description:
        "Create motion concepts aligned with brand tone and product identity.",
      icon: DesignIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Integrate",
      description:
        "Implement motion seamlessly across screens and transitions efficiently.",
      icon: IntegrateIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Validate",
      description:
        "Test animations for usability, performance, & accessibility.",
      icon: ValidationIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="Interaction & Motion Design"
        heroParagraph="Motion That Guides, Interaction That Delights. We Craft Movement That Enhances Clarity And Builds Emotional Connection."
        impactHeading="Adding Life to Every Digital Experience"
        impactParagraph="We bring your interface to life through subtle motion, transitions, and animations that add depth, meaning, and user delight."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our Interaction & Motion Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default InteractionAndMotionDesign;
