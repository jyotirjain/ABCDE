import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import {
  AiOutlineBell,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineArrowRight,
  AiOutlineRight,
} from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { RiArrowDownSLine } from "react-icons/ri";
// import "./styles.css";

import API from "../../Apis/investor";
import Bizlogo from "../../Images/Bizlogo.png";
// import Bizlogo from "../../Images/bizdateup_christmas.gif";
import Button from "../Button/Button";
import { details } from "../portfolio/details";
import { RightCircleOutlined } from "@ant-design/icons";
import { BsArrowRightCircle, BsDot, BsRocketFill } from "react-icons/bs";
import premium from "../../assets/images/premium.svg";
import { useRef } from "react";
// import bizlogogif from "../../assets/images/biz log diwali sp.gif";

const Navbar = (props) => {
  const [open, setOpen] = useState(false);
  const [drop, setdrop] = useState(false);
  const [update, setupdate] = useState(false);
  const [isMember, setIsMember] = useState(false);
  console.log("🚀 ~ file: Navbar1.jsx:20 ~ isMember:", isMember);

  const navigate = useNavigate();

  const handelNav = () => {
    setOpen(!open);
  };

  const dropdownRef = useRef(null);

  // const [isAunthenticated, setisAuthenticated] = useState(false)

  const handlelogged = () => {
    if (
      localStorage.getItem("tokenStartup") == null &&
      localStorage.getItem("tokenInvestor") == null
    ) {
      return false;
    } else {
      return true;
    }
  };

  const userhandle = () => {
    if (localStorage.getItem("tokenStartup")) {
      return true;
    } else {
      return false;
    }
  };

  // const handleLogout = () => {
  //   if (props.userType === "investor") {
  //     localStorage.clear();
  //     navigate("/login");
  //   } else if (props.userType === "startup") {
  //     localStorage.clear();
  //     navigate("/");
  //   }
  //   //  else {
  //   //   localStorage.removeItem("adminuserID");
  //   //   navigate("/admin/login");
  //   // }
  // };

  const authDataInvestor = JSON.parse(localStorage.getItem("authDataInvestor"));
  const member = authDataInvestor?.membership;
  const firstName = authDataInvestor?.firstName?.slice(0, 1);
  const lastName = authDataInvestor?.lastName?.slice(0, 1);

  console.log(firstName);
  console.log(lastName);

  const firstInitial = firstName?.slice(0, 1).toUpperCase();
  console.log(firstInitial);
  const [refId] = useState(localStorage.getItem("authRefInvestor"));

  const lastInitial = lastName?.slice(0, 1).toUpperCase();
  console.log(lastInitial);

  const initial = firstInitial + lastInitial;
  console.log(initial);

  const handleLogout = () => {
    // Display a confirmation dialog before logging out

    // const confirmed = window.confirm("Are you sure you want to log out?");
    // if (!confirmed) {
    //   return; // If the user cancels, do nothing
    // }

    localStorage.clear(); // Clear localStorage

    // Handle different user types
    switch (props.userType) {
      case "investor":
        navigate("/login"); // Redirect investor to the login page
        break;
      case "startup":
        navigate("/"); // Redirect startup to the home page or any other appropriate page
        break;
      case "admin":
        navigate("/admin/login"); // Redirect admin to the admin login page
        break;
      default:
        // Handle unknown user type or add a default route
        navigate("/"); // Redirect to a default page if userType is not recognized
        break;
    }
  };

  async function checkPremium(expiryTimestamp) {
    let expiryTimestamp_mil = new Date(expiryTimestamp).getTime();
    const currentTimestamp = Date.now();

    if (expiryTimestamp_mil > currentTimestamp) {
      setIsMember("yes");
    } else {
      if (!refId) {
        setIsMember("no");
      } else {
        const resMem = await API.checkPremiumMember({ id: refId });
        if (
          resMem.data.code === 200 &&
          resMem.data.data.membership &&
          resMem.data.data.membership.isMember === "yes"
        ) {
          expiryTimestamp_mil = new Date(
            resMem.data.data.membership.endDate
          ).getTime();
          console.log(expiryTimestamp_mil > currentTimestamp);
          if (expiryTimestamp_mil > currentTimestamp) {
            setIsMember("yes");
          } else {
            setIsMember("no");
          }
        }
      }
    }
  }
  useEffect(() => {
    checkPremium(member?.endDate);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clicked outside the dropdown, close it
        setdrop(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      // Remove the event listener when the component unmounts
      document.removeEventListener("click", handleClickOutside);
    };
  }, [member]);
  return (
    <>
      <nav className=" bg-[#ffffff] md:drop-shadow-md md:shadow  sticky top-0 z-50 ">
        <div className="flex items-center font-medium  md:max-w-[1560px] mx-auto md:justify-around justify-between px-[10px] md:px-0 ">
          <Link to="/">
            <div className=" md:py-0 py-4 md:w-[180px] w-[200px] flex ">
              <img
                src={Bizlogo}
                alt="logo"
                className="md:cursor-pointer w-full"
              />
            </div>
          </Link>

          {handlelogged() ? (
            <ul className="hidden md:flex uppercase items-center gap-8 font-[Inter]">
              <li>
                <Link
                  to={
                    userhandle() ? "/startup/dashboard" : "/investor/dashboard"
                  }
                  className="py-7 px-3 inline-block"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/invest" className="py-7 px-3 inline-block">
                  Invest
                </Link>
              </li>
              <li>
                <Link
                  to={userhandle() ? "/raisefund" : "/portfolio"}
                  className="py-7 px-3 inline-block"
                >
                  {userhandle() ? "Raise Funds" : "Portfolio"}
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="hidden md:flex uppercase items-center gap-8 font-[Inter]">
              <li>
                <Link to="/" className="py-7 px-3 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/invest" className="py-7 px-3 inline-block">
                  Invest
                </Link>
              </li>
              <li>
                <Link to="/raisefund" className="py-7 px-3 inline-block">
                  Raise funds
                </Link>
              </li>
              <li>
                <Link
                  to="/investor/dashboard"
                  className="py-7 px-3 inline-block"
                >
                  Dashboard
                </Link>
              </li><li>
                <a
                  href="https://growth.bizdateup.com/forwomen/form"
                  target="_blank"
                  className="py-7 px-3 inline-block"
                >
                  For Women
                </a>
              </li>
            </ul>
          )}
          {handlelogged() ? (
            <div className="flex items-center gap-4">
              {/* membership */}

              {isMember === "yes" ? (
                <div className="">
                  <div className="hidden md:flex gap-[4px] justify-center items-center w-[97px] h-7 shrink-0 rounded-[5px] bg-[#fff8c5] text-[#FD6600] text-center text-sm not-italic font-normal leading-[normal] font-[Inter]">
                    Premium
                    <img src={premium} className="w-[14px]" />
                  </div>
                </div>
              ) : (
                <div className="memberbr">
                  <span class="top"></span>

                  <span class="bottom"></span>

                  <a
                    href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
                    target="_blank"
                  >
                    <div
                      className="hidden md:flex gap-[4px] justify-center items-center px-3 h-8 shrink-0 rounded-[20px] border-[#EAB43E] border-[1px] bg-[#f7c45e5e]
                     text-[#fab31a]  text-center text-[14px] not-italic font-[550] leading-[normal] font-[Inter]"
                    >
                      <BsRocketFill size={18} /> Get Membership
                      {/* <img src={premium} className="w-[14px]" /> */}
                    </div>
                  </a>
                </div>
              )}

              {/* <div className="relative md:block hidden">
                <div
                  onClick={() => {
                    setupdate(!update);
                    setdrop(false);
                  }}
                  className="md:flex justify-center items-start hidden cursor-pointer "
                >
                  <div>
                    <AiOutlineBell size={29} />
                  </div>
                  {/* <div className="">
                    <BsDot />
                  </div> */}
              {/* </div>
                {update && (
                  <div className="w-[378px] h-[315px] shrink-0 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[10px] px-4  absolute top-10 right-0 bg-[#EAF2F5]">
                    <div className=" md:flex md:w-full ">
                      <div className=" w-full h-full py-5 ">
                        <h3 className=" h-[19px] not-italic font-normal text-[19.33px] leading-[100%] text-[#252525] font-[Inter] mb-4">
                          Startup Updates
                        </h3>

                        <div>
                          {details.slice(0, 3).map((items) => {
                            return (
                              <div key={items.id} className="w-full">
                                <div className="flex justify-between  my-3 mx-4">
                                  <div className="flex w-full">
                                    <div className="box-border w-14 h-14 flex items-center justify-center rounded-[4.0678px] border-[0.813559px] border-solid border-[#DDDDDD]">
                                      <img src={items.Image} alt="" />
                                    </div>
                                    <div className=" w-full flex justify-between">
                                      <div className="mx-1">
                                        <label className=" not-italic font-normal text-base leading-[15px] text-[#252525] font-[Inter]">
                                          Startup Update
                                        </label>

                                        <p className="not-italic font-normal text-[10px] leading-3 text-[#828F99] font-[Inter]">
                                          {items.Date}
                                        </p>
                                      </div>
                                      <p className="text-[#828F99] text-[11px] not-italic font-medium leading-[18px] font-[Inter] absolute right-3 tracking-[-0.078px]">
                                        34 m ago
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div className=" md:w-[] rounded-[5.38954px] border-[0.5px] border-solid border-[#DDDDDD] left-[1005px] top-[220px] bg-white " />
                              </div>
                            );
                          })}
                          <div className="flex justify-end text-[#252525] text-base not-italic font-medium leading-[18px] tracking-[-0.078px] font-[Inter] pt-1">
                            See All
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div> */}
              <div className="relative">
                <div
                  ref={dropdownRef}
                  onClick={() => {
                    setdrop(!drop);
                    // setupdate(false);
                  }}
                  className="md:flex justify-center items-start hidden cursor-pointer "
                >
                  <div>
                    {firstName != "" && lastName != "" ? (
                      <div
                        className={`bg-[#ffffff] border-[2px] ${
                          isMember === "yes"
                            ? "border-[#F7BA00]"
                            : "border-[#999999] ml-4"
                        }  rounded-[50%] p-1 font-[Inter] font-[600] text-[#363636] text-[15px]  `}
                      >
                        {initial}
                      </div>
                    ) : (
                      <IoPersonOutline size={25} />
                    )}
                  </div>
                  <div className="ml-[5px] w-[6px] h-[12px] pt-[5px]">
                    <RiArrowDownSLine size={20} />
                  </div>
                </div>
                {drop && (
                  <div className="bg-white font-[Inter] border rounded-[5px] border-[#202054] absolute md:flex hidden justify-start top-12 w-36 p-4">
                    <ul className=" flex flex-col gap-2">
                      <Link to={"/layoutprofile/"}>
                        <li className="  hover:w-28 hover:rounded-[5px]  p-1 font-[Inter] text-[#202054] hover:bg-slate-200">
                          Profile
                        </li>
                      </Link>
                      <Link to={"/transaction_history"}>
                        <li className="  hover:w-28 hover:rounded-[5px]  p-1 font-[Inter] text-[#202054] hover:bg-slate-200">
                          Transactions
                        </li>
                      </Link>
                      {/* <Link onClick={handleLogout}> */}
                      <li
                        onClick={handleLogout}
                        className="hover:w-28 hover:rounded-[5px] font-[Inter] p-1 text-[#202054] hover:bg-slate-200"
                      >
                        Logout
                      </li>
                      {/* </Link> */}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="md:block hidden">
              <Link
                to="/login"
                onClick={handleLogout}
                className=" px-4 inline-block mr-3 "
              >
                Login
              </Link>
              <Link to="/signup">
                <Button name="Register" />
              </Link>
            </div>
          )}

          {/* mobile view */}
          <div className="flex md:hidden">
            {isMember === "yes" ? (
              <div>
                <img src={premium} className="w-[16px] mr-5" />
              </div>
            ) : null}
            <div onClick={handelNav} className="flex md:hidden ">
              {open ? (
                <AiOutlineClose size={20} />
              ) : (
                <AiOutlineMenu size={20} />
              )}
            </div>
          </div>

          <div
            className={
              open
                ? "fixed  left-0 top-0 w-[63%] h-full border-r bg-[#ffffff] ease-in-out z-[500] duration-500"
                : "fixed left-[-100%] "
            }
          >
            {isMember === "yes" ? (
              <div className="">
                <img
                  src={Bizlogo}
                  alt="logo"
                  className="md:cursor-pointer h-9 m-4 mt-7"
                />
              </div>
            ) : (
              <img
                src={Bizlogo}
                alt="logo"
                className="md:cursor-pointer h-9 m-4 mt-7"
              />
            )}

            {handlelogged() ? (
              <ul className="pt-4 pr-4 pl-4  uppercase">
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/investor/dashboard" className="p-4 inline-block">
                    Dashboard
                  </Link>
                </li>{" "}
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/invest" className="p-4 inline-block">
                    Invest
                  </Link>
                </li>{" "}
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/portfolio" className="p-4 inline-block">
                    Portfolio
                  </Link>
                </li>
                <li className="border-b border-gray-300 font-[Inter] ">
                  <a
                    href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
                    target="_blank"
                    className="p-4 inline-block"
                  >
                    Get Membership
                  </a>
                </li>
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/transaction_history" className="p-4 inline-block">
                    Transactions
                  </Link>
                </li>
              </ul>
            ) : (
              <ul className="p-4 uppercase">
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/" className=" p-4 inline-block">
                    Home
                  </Link>
                </li>
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/invest" className="p-4 inline-block">
                    Invest
                  </Link>
                </li>
                <li className="border-b border-gray-300 font-[Inter] ">
                  <Link to="/raisefund" className="p-4 inline-block">
                    Raise funds
                  </Link>
                </li>
                <li className="border-b border-gray-300  font-[Inter] ">
                  <Link to="/investor/dashboard" className="p-4 inline-block">
                    Dashboard
                  </Link>
                </li>
                <li className="border-b border-gray-300  font-[Inter] ">
                  <a href="https://growth.bizdateup.com/forwomen/form" target="_blank" className="p-4 inline-block">
                    For Women
                  </a>
                </li>
              </ul>
            )}
            {handlelogged() ? (
              <div className="relative">
                <ul className="pb-4 pr-4 pl-4 uppercase">
                  <li className="border-b border-gray-300 font-[Inter] ">
                    <Link to="/layoutprofile/" className="p-4 inline-block">
                      Profile
                    </Link>
                  </li>{" "}
                  <li className="border-b  border-gray-300 text-[12px] font-[Inter] text-[red] ">
                    <Link onClick={handleLogout} className="p-4 inline-block">
                      LogOut
                    </Link>
                  </li>{" "}
                </ul>
              </div>
            ) : (
              <div className="md:hidden px-4 flex flex-col">
                <Link to="/login" className=" p-4">
                  Login
                </Link>
                <Link to="/signup" className="py-4">
                  <Button name="Register" />
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
