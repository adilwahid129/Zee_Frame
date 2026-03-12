import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Assets and Components
import Vedio from "../../assets/Vedios/zeeframes_process.mp4"; // Check spelling 'Vedios' or 'Videos'
import Button from "../../compnents/Button"; // Check spelling 'compnents' or 'components'
import Arrow from "../../assets/Images/ArrowVector.svg";
const VedioSection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  // Click handler jo sirf button ke area ko check karega
  const handleSectionClick = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      /* Button ki current position aur click ki position ka distance check karein.
         Chunkay button follow kar raha hai, hum ek 'threshold' (maslan 80px radius) 
         check karenge ke click button ke aas paas hua hai ya nahi.
      */
      const distance = Math.sqrt(
        Math.pow(clickX - position.x, 2) + Math.pow(clickY - position.y, 2)
      );

      if (distance < 80) { // 80px radius ke andar click hua to navigate karega
        navigate("/work");
      }
    }
  };

  return (
    <div className="container mx-auto">
      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onClick={handleSectionClick} // Ab ye har jagah click nahi karega
        className="relative overflow-hidden cursor-auto"
      >
        <video
          src={Vedio}
          autoPlay
          loop
          muted
          className="object-cover w-full max-w-[1440px] max-h-[766px]"
        ></video>

        <div
          className={`absolute pointer-events-none z-20 transition-all duration-500 ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Button
            text={"All Work"}
            bgcolor={"bg-white"}
            color={"text-black"}
            arrow={<img src={Arrow} alt="Arrow" width={20} height={20} />}
          />
        </div>
      </div>
    </div>
  );
};
export default VedioSection;