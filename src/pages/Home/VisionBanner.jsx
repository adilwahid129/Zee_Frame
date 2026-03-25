import React from "react";
import ImageY from "../../assets/Images/EllipseY.png";
import ImageG from "../../assets/Images/EllipseG.png";
import noiseBG from "../../assets/Images/noiseBG.png";
import Button from "../../compnents/Button";
import Arrow from "../../assets/Images/ArrowVector.svg";
import BigStar from "../../assets/Images/Bstar.gif";
import { useNavigate } from "react-router-dom";

const VisionBanner = () => {
  const navigate = useNavigate();
  return (
    <section className="container">
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

        {/* --- Background Glows --- */}
        <div className="absolute top-[-183px] left-[-370px] w-[928px] h-[700px] rounded-full bg-[radial-gradient(circle,_#F3FE00_90%,_rgba(243,254,0,0.4)_45%,_transparent_75%)] blur-[100px] pointer-events-none opacity-70 z-0">
          <img
            src={ImageY}
            alt="yellow image backgroud"
            className="w-full h-full object-contain opacity-20 scale-[1.5]"
          />
        </div>

        <div className="absolute bottom-[-290px] left-[-210px] w-[700px] h-[528px] rounded-full bg-[radial-gradient(circle,_#33DE1D_25%,_rgba(51,222,29,0.3)_45%,_transparent_75%)] blur-[133px] pointer-events-none opacity-100 z-0">
          <img
            src={ImageG}
            alt=""
            className="w-full h-full object-contain opacity-10 scale-[1.2]"
          />
        </div>
        <div className="absolute top-[-340px] right-[-360px] w-[700px] h-[528px] rounded-full bg-[radial-gradient(circle,_#33DE1D_25%,_rgba(51,222,29,0.3)_45%,_transparent_75%)] blur-[133px] pointer-events-none opacity-100 z-0">
          <img
            src={ImageG}
            alt=""
            className="w-full h-full object-contain opacity-10 scale-[1.2]"
          />
        </div>

        {/* --- Main Content --- */}
        <div className="relative z-20 w-full px-[100px] flex justify-between items-center">
          <div className="flex max-w-[717px] flex-col gap-[36px]">
            <div className="flex flex-col items-start gap-[16px] self-stretch">
              <h1 className="text-[#FFF] font-['Geologica'] text-[70px] font-bold leading-[85px] whitespace-nowrap">
                Design That Thinks
                <br />
                Interfaces That Feel.
              </h1>
              <p className="text-[#FFF] font-['Inter'] text-[18px] font-normal leading-[27px] w-[665px]">
                At ZeeFrames, we craft AI-ready design systems for modern
                software responsive, scalable, and human-centered.
              </p>
            </div>
            <Button
              text={"See AI in Action"}
              hoverText="Let's Talk!"
              onClick={() => navigate("/contact")}
              variant="primary"
              arrow={<img src={Arrow} alt="Arrow" width={20} height={20} />}
              gapClass="gap-2"
            />
          </div>

          <div className="relative w-[430px] h-[430px] flex  justify-between ">
            {/* Big Star (Bottom Left Position) */}
            <div className="absolute bottom-[45px] left-[20px] max-w-[380px] min-h-[380px] ">
              <img
                src={BigStar}
                alt="Large Star"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              />
            </div>

            {/* Small Star (Top Right Position) */}
            <div className="absolute top-[0px] right-[30px] max-w-[140px] min-h-[140px] ">
              <img
                src={BigStar}
                alt="Small Star"
                className="w-full h-full object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionBanner;
