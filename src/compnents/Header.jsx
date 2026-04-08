import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/Images/Logo.png";
import Button from "./Button";
import Arrow from "../assets/Images/ArrowVector.svg";
import ServicesMenu from "../../src/pages/services/index";
import "../index.css";

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  const list = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/work" },
    { name: "Insights", path: "/insights" },
  ];

  return (
    <header
      className="container sticky top-0 z-[100] bg-black"
      onMouseLeave={() => setIsServicesOpen(false)}
    >
      <nav className="flex justify-between items-center py-[22px] px-[100px] relative">
        <NavLink to="/">
          <img src={Logo} alt="Logo" width={174} height={30} />
        </NavLink>

        <ul className="flex justify-between items-center max-w-[415px] w-full">
          {list.map((item) => (
            <li
              key={item.name}
              onMouseEnter={() =>
                item.name === "Services"
                  ? setIsServicesOpen(true)
                  : setIsServicesOpen(false)
              }
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative pb-2 font-[inter] text-[16px] transition-all duration-300 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:bg-[#F3FE00] after:transition-all after:duration-300
                  ${
                    isActive
                      ? "text-[#F3FE00] after:w-6 after:opacity-100"
                      : "text-white after:w-0 after:opacity-0 hover:text-[#F3FE00]"
                  }`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <Button
          text={"Work with Us"}
          hoverText={"Let's Talk!"}
          onClick={() => navigate("/contact")}
          variant="primary"
          arrow={<img src={Arrow} alt="Arrow" width={20} height={20} />}
          gapClass="gap-6"
        />
      </nav>

      {/* Mega Menu Section */}
      {isServicesOpen && (
        <div
          className="absolute left-0 w-full bg-black border-t border-white/10 shadow-2xl"
          onMouseEnter={() => setIsServicesOpen(true)}
        >
          <ServicesMenu />
        </div>
      )}
    </header>
  );
};

export default Header;
