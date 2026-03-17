import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MainLogo from "../assets/main_logo.svg?react"
import ActiveHome from "../assets/header/ActiveHome.svg?react"
import DisableHome from "../assets/header/DisableHome.svg?react"
import ActiveExplore from "../assets/header/ActiveExplore.svg?react"
import DisableExplore from "../assets/header/DisableExplore.svg?react"
import ActiveProfile from "../assets/header/ActiveProfile.svg?react"
import DisableProfile from "../assets/header/DisableProfile.svg?react"
import Plus from "../assets/Box-plus.svg?react"
import { Button } from "./ui/button";
import CustomTooltip from "./CustomTooltip";
import AvatarPic from "../assets/profile_pic.jpg"

const AppSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menu = [
    {
      label: "Home",
      path: "/",
      icon: <DisableHome />,
      activeIcon: <ActiveHome />,
    },
    {
      label: "Explore",
      path: "/explore",
      icon: <DisableExplore />,
      activeIcon: <ActiveExplore />,
    },
    {
      label: "Profile",
      path: "/profile",
      icon: <DisableProfile />,
      activeIcon: <ActiveProfile />,
    },
  ];

  // mobile route change par close
  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className={`md:hidden fixed top-4 right-4 lg:left-4 z-50 ${!isOpen ? `bg-linear-to-r from-[#9810FA] to-[#4F39F6] ` : `bg-gray-400`} bg-black text-white px-3 py-1 rounded`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {!isOpen ? "☰" : "X"}
      </button>

      {/* Sidebar */}
      <div
        className={`
  fixed top-0 right-0 md:left-0 md:right-auto h-screen bg-white border-r z-40
  transition-all duration-300 ease-in-out flex flex-col pb-2
  ${isOpen
            ? "w-64 translate-x-0"
            : "w-64 translate-x-full md:w-20 md:translate-x-0"
          }
`}

      >
        {/* Logo */}
        <div
          className="p-4 font-bold text-lg border-b cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <>
            <span className="flex gap-1.5 items-center">
              <MainLogo className="shrink-0" />
              <p className="flex">Pixora</p>
            </span>
          </> : <MainLogo className="shrink-0" />}
        </div>

        {/* Menu */}
        <div className="p-2 space-y-2">
          {menu.map((item) => {
            const active = location.pathname === item.path;

            return (
              <CustomTooltip title={item?.label}>
                <div
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`
    flex items-center gap-3 p-3 rounded-lg cursor-pointer
    hover:bg-gray-100
    ${active && "bg-gray-200"}
  `}
                >
                  <span className="text-xl ml-2 w-6 flex justify-center">
                    {active ? item.activeIcon : item.icon}
                  </span>

                  <span
                    className={`
    whitespace-nowrap transition-all duration-200
    ${isOpen ? "opacity-100 ml-1" : "opacity-0 w-0 overflow-hidden"}
  `}
                  >
                    {item.label}
                  </span>
                </div>
              </CustomTooltip>
            );
          })}
        </div>
        <div className="flex-1">

        </div>

        <div className="p-2">
          <Button
            className="
  w-full flex items-center gap-3
  rounded-[14px] px-4 py-5
  text-white
  bg-linear-to-r from-[#9810FA] to-[#4F39F6]
"
          >

            <Plus size={18} />
            {isOpen && <span>Create</span>}
          </Button>
        </div>
        <div
          onClick={() => navigate("/profile")}
          className="
  flex items-center gap-3 p-3 mx-2 rounded-lg
  hover:bg-gray-100 cursor-pointer
"
        >
          <img
            src={AvatarPic}
            alt="profile"
            className="h-10 w-10 rounded-full object-cover shrink-0"
          />

          <div

            className={`
    flex flex-col transition-all duration-200
    ${isOpen ? "opacity-100" : "opacity-0 w-0 overflow-hidden"}
  `}
          >
            <p className="text-sm font-semibold leading-none truncate">
              Tanish Marick
            </p>

            <p className="text-xs text-gray-500 truncate">
              @tanny
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppSidebar;