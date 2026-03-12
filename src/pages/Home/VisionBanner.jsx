import React from "react";
import ImageY from "../../assets/Images/EllipseY.png";
import ImageG from "../../assets/Images/EllipseG.png";
import noiseBG from "../../assets/Images/noiseBG.png";
import Button from "../../compnents/Button";
import Arrow from "../../assets/Images/ArrowVector.svg";

const VisionBanner = () => {
  return (
    <section className="container">
      {/* 1. Parent Div: Isko flex aur items-center diya taake content hamesha vertical center rahe */}
      <div className="relative overflow-hidden h-[640px] bg-black flex items-center">
        {/* --- Noise Layer --- */}
        <div
          className="absolute inset-0 z-10 opacity-25 pointer-events-none"
          style={{
            backgroundImage: `url(${noiseBG})`,
            backgroundRepeat: "repeat",
            backgroundSize: "50px",
            mixBlendMode: "overlay",
          }}
        />

        {/* --- Background Glows (z-0) --- */}
        {/* Yellow Glow */}
        <div
          className="absolute top-[-183px] left-[-370px] w-[928px] h-[700px] rounded-full 
          bg-[radial-gradient(circle,_#F3FE00_90%,_rgba(243,254,0,0.4)_45%,_transparent_75%)] 
          blur-[100px] pointer-events-none opacity-70 z-0"
        >
          <img
            src={ImageY}
            alt=""
            className="w-full h-full object-contain opacity-20 scale-[1.5]"
          />
        </div>

        {/* Green Glow (Bottom) */}
        <div
          className="absolute bottom-[-290px] left-[-210px] w-[700px] h-[528px] rounded-full 
          bg-[radial-gradient(circle,_#33DE1D_25%,_rgba(51,222,29,0.3)_45%,_transparent_75%)] 
          blur-[133px] pointer-events-none opacity-100 z-0"
        >
          <img
            src={ImageG}
            alt=""
            className="w-full h-full object-contain opacity-10 scale-[1.2]"
          />
        </div>

        {/* Green Glow (Top Right) */}
        <div
          className="absolute top-[-340px] right-[-390px] w-[700px] h-[528px] rounded-full 
          bg-[radial-gradient(circle,_#33DE1D_25%,_rgba(51,222,29,0.3)_45%,_transparent_75%)] 
          blur-[173px] pointer-events-none opacity-80 z-0"
        >
          <img
            src={ImageG}
            alt=""
            className="w-full h-full object-contain opacity-10 scale-[1.2]"
          />
        </div>

        <div className="relative z-20 w-full px-[100px]">
          <div className="flex max-w-[717px] flex-col gap-[36px]">
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <h1 className="text-[#FFF] font-['Geologica'] text-[70px] font-bold leading-[85px]">
                Design That Thinks.
                <br /> Interfaces That Feel.
              </h1>
              <p className="text-[#FFF] font-['Inter'] text-[18px] font-normal leading-[27px] w-[665px]">
                At ZeeFrames, we craft AI-ready design systems for modern
                software responsive, scalable, and human-centered.
              </p>
            </div>
            <Button
              text={"See AI in Action"}
              bgcolor={"bg-[#F3FE00]"}
              color={"text-black"}
              arrow={<img src={Arrow} alt="Arrow" width={20} height={20} />}
              gapClass="gap-2"
            />
          </div>
          {/* <div className="max-w-[430px] min-h-[430px] "
          style={{
            backgroundImage: `url(${noiseBG})`,
            backgroundRepeat: "repeat",
            backgroundSize: "50px",
            mixBlendMode: "overlay",
          }}>

          </div> */}
        </div>
      </div>
    </section>
  );
};

export default VisionBanner;
