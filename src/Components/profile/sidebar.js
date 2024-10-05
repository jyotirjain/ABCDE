import React, { useState } from "react";
import "../../assets/css/styles.css";
import { Link, NavLink } from "react-router-dom";
import Cta3 from "../../assets/images/cta/cta3.png";
import Cta4 from "../../assets/images/cta/cta4.png";

import {
  FaRegHandshake,
  FaRegUser,
  FaTv,
  FaUserGraduate,
} from "react-icons/fa";

import { HiOutlineUserGroup } from "react-icons/hi";
import { FiUpload } from "react-icons/fi";
import { BsCalendarEvent, BsQuestionCircle } from "react-icons/bs";
import { BiRightArrowCircle } from "react-icons/bi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const menuitem = [
    {
      path: "/startup/profile/",
      name: "Profile",
      icon: <FaRegUser />,
    },
    {
      path: "/startup/profile/pitch",
      name: "Pitch",
      icon: <FaTv />,
    },
    {
      path: "/startup/profile/teams",
      name: "Team",
      icon: <HiOutlineUserGroup />,
    },
    {
      path: "/startup/profile/mentors",
      name: "Mentor",
      icon: <FaUserGraduate />,
    },
    {
      path: "/startup/profile/dealsterms",
      name: "Deal terms",
      icon: <FaRegHandshake />,
    },
    {
      path: "/startup/profile/upload",
      name: "Upload",
      icon: <FiUpload />,
    },
    {
      path: "/startup/profile/events",
      name: "Event",
      icon: <BsCalendarEvent />,
    },
    {
      path: "/startup/profile/faq",
      name: "FAQ",
      icon: <BsQuestionCircle />,
    },
  ];

  const getActiveOptionName = () => {
    const activeOption = menuitem.find(
      (item) => item.path === window.location.pathname
    );
    return activeOption ? activeOption.name : "Menu";
  };

  return (
    <div className="containize flex flex-col gap-y-7">
      <div className="sidebar-container w-full md:w-[301px]">
        <div className="md:w-full md:flex md:flex-col hidden ">
          {menuitem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link-text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        {/* mobile view */}
        <div className="w-full md:hidden">
          <div className="dropdown">
            <div
              className="dropdown-toggle flex justify-center items-center "
              onClick={toggleMenu}
            >
              <div className="link-text font-[600] text-[#202054]">
                {getActiveOptionName()}
              </div>
            </div>
            {isOpen && (
              <div className="dropdown-menu">
                {menuitem.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="link"
                    activeClassName="active"
                  >
                    <div className="icon">{item.icon}</div>
                    <div className="link-text">{item.name}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="cards hidden md:flex md:flex-col">
        <Link to="/learn">
          <section>
            <div className="border-[2px] w-[302px] h-[146px] rounded-[20px]  bg-white  my-[20px]">
              <div className="flex justify-between items-center px-[30px]  h-[110px] rounded-[20px] bg-[#C8C4E4] border-b-[2px]">
                <div className="pb-[40px] ">
                  <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                    Learn more about startup fund raising
                  </h4>
                </div>
                <div className="w-[35%]">
                  <img src={Cta4} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center px-[25px] pt-[5px]">
                <div>
                  <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                    Learn now
                  </h4>
                </div>
                <div>
                  <BiRightArrowCircle />
                </div>
              </div>
            </div>
          </section>
        </Link>

        <Link to="/calculators">
          <section>
            <div className="border-[2px] w-[302px] h-[146px] rounded-[20px]  bg-white  my-[20px]">
              <div className="flex justify-between items-center px-[30px]  h-[110px] rounded-[20px] bg-[#A9BAE8] border-b-[2px]">
                <div className="pb-[40px] ">
                  <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                    Calculators
                  </h4>
                </div>
                <div className="w-[35%]">
                  <img src={Cta3} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center px-[25px] pt-[5px]">
                <div>
                  <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                    Learn now
                  </h4>
                </div>
                <div>
                  <BiRightArrowCircle />
                </div>
              </div>
            </div>
          </section>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
