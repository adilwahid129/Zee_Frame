import React, { useState, useEffect } from "react";
import Card from "../../compnents/card";
import card1 from "../../assets/Images/card1.png";
import card2 from "../../assets/Images/card2.png";
import card3 from "../../assets/Images/card3.png";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const LatestInsights = () => {
  const initialCards = [
    { img: card1, title: "20+ GenAI UX patterns..." },
    { img: card2, title: "Skipping Figma, human after all..." },
    { img: card3, title: "Is your creative character sacrificed?" },
  ];

  // Cards ko triple kar diya taake seamless transition miley
  const [cards] = useState([...initialCards, ...initialCards, ...initialCards]);
  const [currentIndex, setCurrentIndex] = useState(initialCards.length);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardWidth = 413; // 381px width + 32px gap

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
    setIsTransitioning(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => prev - 1);
    setIsTransitioning(true);
  };

  // Infinite Loop Logic: Jab clone khatam ho, khamoshi se reset kar do
  useEffect(() => {
    if (currentIndex === cards.length - initialCards.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(initialCards.length);
      }, 600);
    }
    if (currentIndex === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(initialCards.length);
      }, 600);
    }
  }, [currentIndex, cards.length, initialCards.length]);

  return (
    <section className="w-full container overflow-hidden bg-black">
      <div className="flex flex-col self-stretch items-start gap-[48px]  lg:px-[100px] py-[80px]">
        {/* Header Section */}
        <div className="flex justify-between items-end self-stretch w-full">
          <div className="flex flex-col items-start gap-[12px]">
            <span className="text-[#F3FE00] font-['Inter'] text-[14px] font-medium uppercase">
              Latest Insights
            </span>
            <h1 className="text-[#FFF] font-['Geologica'] text-[40px] font-bold leading-[1.2]">
              Our Recent Articles
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-[68px] h-[48px] rounded-full border-2 border-[#D5D5D5]/30 text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-[68px] h-[48px] rounded-full bg-[#F3FE00] text-black hover:bg-white transition-all duration-300"
            >
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-[32px]"
            style={{
              transform: `translateX(-${currentIndex * cardWidth}px)`,
              transition: isTransitioning
                ? "transform 0.5s ease-in-out"
                : "none",
            }}
          >
            {cards.map((card, index) => (
              <div key={index} className="max-w-[381px]">
                <Card
                  image={card.img}
                  heading={card.title}
                  paragraph="A shared language for product teams to build usable, intelligent and safe GenAI experiences..."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestInsights;
