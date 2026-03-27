import React from "react";
import bgPhoto from "../../assets/Images/GroupPhoto.png";
import Rectangle1 from "../../assets/Images/Rectangle1.png";
import Rectangle2 from "../../assets/Images/Rectangle2.png";
import SectionHeader from "../../compnents/sectionHeader";

const GroupPhoto = () => {
  return (
    <>
      <section className=" container sticky top-0 z-[-1]">
          <img
            src={bgPhoto}
            alt="GroupPhoto"
            className="w-full h-full object-cover pt-[64px] "
          />
      </section>
    </>
  );
};

export default GroupPhoto;
