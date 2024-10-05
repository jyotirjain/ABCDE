import React, {useEffect, useState} from "react";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdCurrencyRupee } from "react-icons/md";
import { GiStairsGoal } from "react-icons/gi";
import { FaRegHandshake } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BsBoxArrowUp } from "react-icons/bs";
import { BiCalendarStar } from "react-icons/bi";
import "./Admin.css";
import {useSelector} from "react-redux";

/**
 *
 *
 * @returns {JSX.Element}
 * @constructor
 */
const FirstBox = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {isAdmin}=useSelector(({authAdmin})=>authAdmin)
  const location=useLocation()
  const navigate=useNavigate()
  const path=location.pathname
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
const employeeMenuItem=[{
  path: "/admin/invester",
  name: "Investors",
  icon: <MdCurrencyRupee size={30} />,
  },
  {
    path: "/admin/startups",
    name: "Startups",
    icon: <GiStairsGoal size={30} />,
  },
  {
    path: "/admin/startup_update",
    name: "Startup update",
    icon: <RiSecurePaymentLine size={30} />,
  },
]

  const menuitem = [
    {
      path: "/admin/",
      name: "Statistics",
      icon: <IoPersonOutline size={30} />,
    },
    {
      path: "/admin/invester",
      name: "Investors",
      icon: <MdCurrencyRupee size={30} />,
    },
    {
      path: "/admin/master_data",
      name: "Master data",
      icon: <AiOutlineFundProjectionScreen size={30} />,
    },
    {
      path: "/admin/startups",
      name: "Startups",
      icon: <GiStairsGoal size={30} />,
    },
    {
      path: "/admin/accelarators",
      name: "Accelarators",
      icon: <FaRegHandshake size={30} />,
    },
    {
      path: "/admin/ofline_payment",
      name: "Offline payment",
      icon: <RiSecurePaymentLine size={30} />,
    },

    {
      path: "/admin/startup_update",
      name: "Startup update",
      icon: <RiSecurePaymentLine size={30} />,
    },
    { path: "/admin/redeem", name: "Redeem", icon: <BsBoxArrowUp size={30} /> },
    {
      path: "/admin/membership",
      name: "Membership",
      icon: <BsBoxArrowUp size={30} />,
    },

    { path: "/admin/e-sign", name: "E-sign", icon: <BsBoxArrowUp size={30} /> },
    {
      path: "/admin/events",
      name: "Events",
      icon: <BiCalendarStar size={30} />,
    },
    {
      path: "/admin/broadcast",
      name: "Broadcast",
      icon: <BiCalendarStar size={30} />,
    },
  ];
  
  useEffect(()=>{
    if (!isAdmin) {
      const validEmployeePaths = employeeMenuItem.map(item => item.path);
      
      // Check if the requested path is not in the valid employee paths
      if (!validEmployeePaths.includes(path)) {
        // Redirect the user to one of the valid employee paths (e.g., the first one)
        navigate(validEmployeePaths[0]);
      }
    }
  },[path])

  return (
    <>
      <section>
        <div className="w-[302px] py-[25px] bg-white rounded-[20px]">
          <ul className="pt-[5px]">
            {/* Web View */}
            <div className="hidden md:flex flex-col">
              {(isAdmin?menuitem:employeeMenuItem).map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className="flex cursor-pointer justify-start items-center text-[#000000] py-[15px] hover:bg-[#9191FE] hover:text-white hover:rounded-[15px]"
                  activeclassname="active"
                >
                  <span className="px-[30px]">{item.icon}</span>
                  <h4 className="pl-[10px] text-[18px] font-[400] leading-[21.09px]">
                    {item.name}
                  </h4>
                </NavLink>
              ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <div
                className="flex cursor-pointer justify-start items-center text-[#000000] py-[15px] hover:bg-[#9191FE] hover:text-white hover:rounded-[15px]"
                onClick={toggleMenu}
              >
                <span className="px-[30px]">
                  <IoPersonOutline size={30} />
                </span>
                <h4 className="pl-[10px] text-[18px] font-[400] leading-[21.09px]">
                  Menu
                </h4>
              </div>
              <div className={`admin-menu-items ${showMenu ? "show" : ""}`}>
                {(isAdmin?menuitem:employeeMenuItem).map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="flex cursor-pointer justify-start items-center text-[#000000] py-[15px] hover:bg-[#9191FE] hover:text-white hover:rounded-[15px]"
                    activeclassname="active"
                  >
                    <span className="px-[30px]">{item.icon}</span>
                    <h4 className="pl-[10px] text-[18px] font-[400] leading-[21.09px]">
                      {item.name}
                    </h4>
                  </NavLink>
                ))}
              </div>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default FirstBox;
