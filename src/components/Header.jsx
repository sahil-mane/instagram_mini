import React, { useState, useRef, useEffect } from "react";
import MainLogo from "../assets/main_logo.svg?react";
import AddIcon from "../assets/Box-plus.svg?react";
import { Button } from "./ui/button";
import ActiveHome from "../assets/header/ActiveHome.svg?react";
import DisableHome from "../assets/header/disableHome.svg?react";
import ActiveProfile from "../assets/header/ActiveProfile.svg?react";
import DisableProfile from "../assets/header/disableProfile.svg?react";
import ActiveExplore from "../assets/header/ActiveExplore.svg?react";
import DisableExplore from "../assets/header/disableExplore.svg?react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const headerData = [
    {
      label: "Home",
      path: "/",
      activeIcon: <ActiveHome />,
      disableIcon: <DisableHome />,
    },
    {
      label: "Explore",
      path: "/explore",
      activeIcon: <ActiveExplore />,
      disableIcon: <DisableExplore />,
    },
    {
      label: "Profile",
      path: "/profile",
      activeIcon: <ActiveProfile />,
      disableIcon: <DisableProfile />,
    },
  ];

  // ✅ Outside click close (fixed version)
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="fixed top-0 left-0 w-full z-50 border-b bg-white">
      
      {/* Top Navbar */}
      <div className="flex justify-between items-center lg:max-w-[1104px] lg:mx-auto px-4 py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MainLogo />
          <p className="text-[20px] font-semibold">Aura</p>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-4">
          {headerData.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <div
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-2 px-4 py-2 rounded-[14px] cursor-pointer transition-colors ${
                  isActive ? "bg-[#FAF5FF]" : "hover:bg-gray-100"
                }`}
              >
                {isActive ? item.activeIcon : item.disableIcon}
                <span
                  className={`text-[16px] ${
                    isActive ? "text-[#0F172B]" : "text-[#45556C]"
                  }`}
                >
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          
          {/* Desktop Create Button */}
          <Button
            className="hidden lg:flex bg-gradient-to-r from-[#9810FA] to-[#4F39F6] text-white rounded-[14px]"
          >
            <AddIcon />
            Create
          </Button>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px]"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[2px] bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`lg:hidden absolute left-0 top-full w-full bg-white shadow-md border-t overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {headerData.map((item) => {
          const isActive = location.pathname === item.path;

          return (
            <div
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setIsOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-4 cursor-pointer transition-colors ${
                isActive ? "bg-[#FAF5FF]" : "hover:bg-gray-50"
              }`}
            >
              {isActive ? item.activeIcon : item.disableIcon}
              <span
                className={`text-[16px] ${
                  isActive ? "text-[#0F172B]" : "text-[#45556C]"
                }`}
              >
                {item.label}
              </span>
            </div>
          );
        })}

        {/* Mobile Create Button */}
        <div className="px-4 py-4">
          <Button className="w-full bg-gradient-to-r from-[#9810FA] to-[#4F39F6] text-white rounded-[14px]">
            <AddIcon />
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;