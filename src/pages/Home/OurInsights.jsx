import React from "react";
import Button from "../../compnents/Button";
import Arrow from "../../assets/Images/ArrowVector.svg";
import Card from "../../compnents/card";
import card1 from "../../assets/Images/card1.png";
import card2 from "../../assets/Images/card2.png";
import card3 from "../../assets/Images/card3.png";
import { useNavigate } from "react-router-dom";

const OurInsights = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="flex flex-col self-stretch items-start gap-[48px] px-[100px] py-[80px]">
        <div className="flex justify-between items-start self-stretch">
          <div className="flex flex-col items-start gap-[32px] w-[510px]">
            <span className="text-[#F3FE00] text-center font-['Inter'] text-[14px] font-medium uppercase">
              Our Insights
            </span>
            <h1 className="text-[#FFF] font-['Geologica'] text-[40px] font-bold leading-[40px]">
              Insights That Inspire Vision Forward
            </h1>
          </div>
          <Button
            text={"Explore More"}
            onClick={() => navigate("/contact")}
            hoverText="Let's Talk!"
            variant="primary"
            arrow={<img src={Arrow} alt="Arrow" width={20} height={20} />}
            gapClass="gap-2"
          />
        </div>
        <div className="flex items-start gap-[32px] self-stretch">
          <Card
            image={card1}
            heading="20+ GenAI UX patterns, examples and implementation tactics"
            paragraph="A shared language for product teams to build usable, intelligent and safe GenAI experiences..."
          />
          <Card
            image={card2}
            heading="Skipping Figma, human after all, Figma grid, accessibility as an afterthought"
            paragraph="Weekly curated resources for designers — thinkers and makers."
          />
          <Card
            image={card3}
            heading="Is your creative character being sacrificed to Algorithm, Inc.?"
            paragraph="AI is changing how we work. Here’s why and how we must preserve the human spirit that drives..."
          />
        </div>
      </div>
    </div>
  );
};

export default OurInsights;
