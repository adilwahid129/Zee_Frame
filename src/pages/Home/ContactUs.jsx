import React, { useState } from "react";
import user1 from "../../assets/Images/MuhammadAli.png";
import user2 from "../../assets/Images/MuhammadBabar.png";
import linkedIn from "../../assets/Images/linkedIn_logo.png";
import tickIcon from "../../assets/Images/tick.png";
import image1 from "../../assets/Images/TechBehemoths.png";
import image2 from "../../assets/Images/trustpilot.png";
import image3 from "../../assets/Images/ui-ux.png";
import image4 from "../../assets/Images/award4.svg";
import whattsapp from "../../assets/Images/whatsapp.png";
import message from "../../assets/Images/message.png";

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const achieves = [
    {
      id: 1,
      task: tickIcon,
      description: "You’ll hear from us within one business day.",
    },
    {
      id: 2,
      task: tickIcon,
      description: "Our team will gather your project details and put together a clear brief.",
    },
    {
      id: 3,
      task: tickIcon,
      description: "We’ll provide a tailored estimate and share a proposal for your review.",
    },
  ];

  const awards = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      alert("Form submitted successfully!");
      setIsSubmitting(false);
      e.target.reset();
    }, 2000);
  };

  return (
    <div className="container" id="contact">
      <div className="flex items-start justify-center py-[80px] px-[100px] gap-[64px] self-stretch">
        <div className="flex flex-col items-start gap-[40px]">
          <div className="flex w-[636px] flex-col items-start gap-[32px]">
            <span className="text-[#F3FE00] text-center font-['Inter'] text-[14px] font-medium uppercase">
              Contact us
            </span>
            <div className="flex flex-col items-start gap-[16px]">
              <h1 className="text-[#FFF] font-['Geologica'] text-[40px] font-bold leading-[40px] w-[510px]">
                Lets work on what you care about!
              </h1>
              <p className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px] w-[534px]">
                Got a project in mind? From a full UI/UX refresh to a brand-new
                digital experience, we’re ready to help. Let’s turn your vision
                into reality
              </p>
            </div>

            <div className="flex items-center gap-[24px] self-stretch">
              {[
                { name: "Mohammad Ali", img: user1 },
                { name: "Muhammad Babar", img: user2 },
              ].map((user, index) => (
                <div key={index} className="flex items-center gap-[16px]">
                  <div className="w-[48px] h-[48px] rounded-full border border-[#454545] overflow-hidden">
                    <img
                      src={user.img}
                      alt={user.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-[6px]">
                    <div className="flex items-center gap-[8px] self-stretch">
                      <span className="text-[#FFF] font-['Inter'] text-[16px] font-medium leading-[24px]">
                        {user.name}
                      </span>
                      <img
                        src={linkedIn}
                        alt="LinkedIn"
                        className="w-[16px] h-[16px]"
                      />
                    </div>
                    <span className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px]">
                      Director & Co-Founder
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-start gap-[12px]">
              {achieves.map((item) => (
                <div key={item.id} className="flex items-start gap-[8px]">
                  <img src={item.task} alt="tick" className="w-5 h-5 " />
                  <span className="w-[534px] text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px]">
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-[24px]">
            {awards.map((item) => (
              <div key={item.id}>
                <img
                  src={item.image}
                  alt={`award-${item.id}`}
                  className="max-h-[50px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <form 
          onSubmit={handleSubmit}
          className="flex w-[540px] flex-col gap-[32px] rounded-[24px] border border-[#373737] bg-[#171717] p-[24px] backdrop-blur-[6px]"
        >
          <div className="flex flex-col gap-[28px] self-stretch">
            <input
              type="text"
              placeholder="Full Name*"
              required
              className="h-[44px] gap-[10px] self-stretch rounded-[8px] border border-[#373737] bg-[#171717] px-[16px] outline-none focus:border-[#F3FE00] cursor-pointer"
            />
            <input
              type="email"
              placeholder="Email*"
              required
              className="h-[44px] gap-[10px] self-stretch rounded-[8px] border border-[#373737] bg-[#171717] px-[16px] outline-none focus:border-[#F3FE00] cursor-pointer"
            />
            <input
              type="text"
              placeholder="Company"
              required
              className="h-[44px] gap-[10px] self-stretch rounded-[8px] border border-[#373737] bg-[#171717] px-[16px] outline-none focus:border-[#F3FE00] cursor-pointer"
            />
            <input
              type="text"
              placeholder="Contact"
              required
              className="h-[44px] gap-[10px] self-stretch rounded-[8px] border border-[#373737] bg-[#171717] px-[16px] outline-none focus:border-[#F3FE00] cursor-pointer"
            />
            <textarea
              placeholder="Tell us about your project*"
              required
              className="flex h-[117px] items-start gap-[10px] self-stretch rounded-[8px] border border-[#373737] bg-[#171717] p-[16px] outline-none focus:border-[#F3FE00] cursor-pointer"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex w-[492px] items-center justify-center gap-[10px] rounded-full border-[1.5px] px-[22px] py-[14px] text-center font-['Inter'] text-[16px] font-semibold leading-[21px] transition-all duration-300
              ${isSubmitting 
                ? "border-[#242323] text-[#FFF] bg-linear-to-r from-[#F3FE00] to-[#33DE1D] opacity-80 cursor-not-allowed" 
                : "border-[#F3FE00] text-[#F3FE00] bg-transparent hover:border-[#242323] hover:bg-linear-to-r hover:from-[#F3FE00] hover:to-[#33DE1D] hover:text-[#FFF]"
              }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Inquiry"}
          </button>
          <div className="flex flex-col items-start gap-[12px] self-stretch">
            <span className="text-[#FFF] text-center font-['Inter'] text-[14px] font-normal leading-[21px]">
              Hate contact forms? Direct Contact.
            </span>
            <div className="flex items-center gap-[16px] self-stretch">
              <div className="flex items-center gap-[6px]">
                <img
                  src={whattsapp}
                  alt="Whattsapp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px]">
                  +14232493851
                </span>
              </div>
              <div className="flex items-center gap-[6px]">
                <img
                  src={message}
                  alt="message"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span className="text-[#D5D5D5] font-['Inter'] text-[14px] font-normal leading-[21px]">
                  businessmanager@zeeframes.com
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;