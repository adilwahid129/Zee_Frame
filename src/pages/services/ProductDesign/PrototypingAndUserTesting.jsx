import React from "react";
import ServiceDetail from "../ServiceDetail";
import lightningbolt from "../../../assets/Images/lightningbolt.png";
import DiscoveryIcon from "../../../assets/Images/DiscoveryIcon.png";
import BuildIcon from "../../../assets/Images/BuildIcon.png";
import TestIcon from "../../../assets/Images/TestIcon.png";
import RefineIcon from "../../../assets/Images/RefineIcon.png";
import {
  number1,
  number2,
  number3,
  number4,
} from "../../../assets/Images/CustomIcons";

const PrototypingAndUserTesting = () => {
  const impactfeatures = [
    {
      icon: lightningbolt,
      text: "Prototyping for concept validation",
    },
    {
      icon: lightningbolt,
      text: "Real user testing",
    },
    {
      icon: lightningbolt,
      text: "Feedback collection & iteration",
    },
    {
      icon: lightningbolt,
      text: "Usability improvement insights",
    },
  ];

  const roadmapFeatures = [
    {
      id: 1,
      title: "We Reduce Risk Before You Invest in Development",
      description:
        "By validating early, we help prevent wasted costs, time, and effort on features that fail to meet user expectations.",
      icon: lightningbolt,
    },
    {
      id: 2,
      title: "We Deliver Feedback That Drives Measurable Improvement",
      description:
        "Our testing reports provide clear, actionable data that helps refine the product for better engagement and retention.",
      icon: lightningbolt,
    },
    {
      id: 3,
      title: "We Validate Every Concept With Authentic Real-World Users",
      description:
        "We move beyond assumptions by putting your product in front of real people, ensuring the final result is truly user-centric.",
      icon: lightningbolt,
    },
  ];

  const serviceSteps = [
    {
      id: 1,
      number: number1,
      title: "Concept",
      description:
        "Define prototype goals, interaction depth, and test objectives clearly.",
      icon: DiscoveryIcon,
    },
    {
      id: 2,
      number: number2,
      title: "Build",
      description:
        "Design high-fidelity prototypes for realistic testing scenarios.",
      icon: BuildIcon,
    },
    {
      id: 3,
      number: number3,
      title: "Test",
      description:
        "Iterate and enhance the design based on verified test outcomes.",
      icon: TestIcon,
    },
    {
      id: 4,
      number: number4,
      title: "Refine",
      description:
        "Iterate and enhance the design based on verified test outcomes effectively.",
      icon: RefineIcon,
    },
  ];

  return (
    <div>
      <ServiceDetail
        heroHeading="PROTOTYPING & USER TESTING"
        heroParagraph="Test Ideas, Validate Fast, And Design Smarter. We Turn Concepts Into Interactive Experiences Validated By Real Users."
        impactHeading="From Idea to User-Validated Prototype"
        impactParagraph="We help you move from assumptions to proof by turning design ideas into clickable, testable prototypes. Our testing ensures every interaction is purposeful and performance-driven."
        impactFeatures={impactfeatures}
        processheading="A Strategic Process That Builds Strong Foundations"
        processServiceSteps={serviceSteps}
        ratingHeading="Why Are Our Prototyping & User Testing Services the Right Choice for You?"
        ratingFeatures={roadmapFeatures}
      />
    </div>
  );
};

export default PrototypingAndUserTesting;