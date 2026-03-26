import React from "react";
import bgPhoto from "../../assets/Images/GroupPhoto.png";
import Rectangle1 from "../../assets/Images/Rectangle1.png";
import Rectangle2 from "../../assets/Images/Rectangle2.png";
import SectionHeader from "../../compnents/sectionHeader";

const GroupPhoto = () => {
  return (
    <>
      <section className="container relative w-full">
        <div className="sticky top-[0] w-full h-[677px] z-0 overflow-hidden">
          <img
            src={bgPhoto}
            alt="GroupPhoto"
            className="w-full h-full object-cover pt-[64px]"
          />
        </div>
      </section>
    </>
  );
};

export default GroupPhoto;
