import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyLogo3 from "../../../Images/CompanyLogo3.png";
import shoppingBag1 from "../../../Images/shoppingBag1.png";
import cta12 from "../../../assets/images/cta/cta12.png";
import cta16 from "../../../assets/images/cta/cta16.png";
import cta17 from "../../../assets/images/cta/cta17.png";
import Saly from "../../../Images/Saly.png";
import Ellipse114 from "../../../Images/Ellipse114.png";
import Premiumcta from "../../../Images/premiumcta.png";
import { SlArrowRightCircle } from "react-icons/sl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styless.css";
import Faq from "./Faq";
import { MdModeEditOutline } from "react-icons/md";
import InvestEarly from "./InvestEarly";
// import Navbar1 from "../../Navbar1/Navbar1";
// import Footer from "../../Footer/Footer";
import API from "../../../Apis/investor";
import startup1 from "../../../Images/startup1.png";
import startup2 from "../../../Images/startup2.png";

import CompanyLogo5 from "../../../Images/CompanyLogo5.png";
import { Link } from "react-router-dom";
import LoaderApi from "../../LoaderApi/LoaderApi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {
  BsFillCheckCircleFill,
  BsFillCircleFill,
  BsSquareFill,
} from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";

import premium from "../../../assets/images/premium.svg";
import premiumcta from "../../../assets/images/premiumcta.svg";
import { IoIosArrowDropdown } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

const LiveCapmpaings = () => {
  const navigate = useNavigate();
  const [userdata, setUserData] = useState(
    JSON.parse(localStorage.getItem("authDataInvestor"))
  );
  const [refId] = useState(localStorage.getItem("authRefInvestor"));

  const [totalInvestment, setMyTotalInvestment] = useState(0.0);

  const [kyccomplete, setkyccomplete] = useState(false);

  const [isMember, setIsMember] = useState(false);

  const [member, setmember] = useState(false);

  const [startups, setstartups] = useState([
    // {
    //   logo: CompanyLogo3,
    //   registeredCompanyName: "",
    //   shortDescription: "",
    //   tags: "",
    //   colour: "#F0D9FF",
    // },
  ]);

  const checkInvestor = async () => {
    try {
      const response = await API.fetch(refId);

      setUserData(response.data.data);
      localStorage.setItem(
        "authDataInvestor",
        JSON.stringify(response.data.data)
      );
      // Check if KYC is completed
      if (
        response.data.data.aadhar.status !== "pending" &&
        response.data.data.pan.status !== "pending"
      ) {
        setkyccomplete(true);
      }
    } catch (error) {}
  };

  const fetchData = async () => {
    try {
      if (
        !userdata.firstName ||
        !userdata.lastName ||
        !userdata.phone ||
        !userdata.email
      ) {
        checkInvestor();
      }
      const response = await API.startupFetch({ limit: "4" });
      const response2 = await API.totalInvestmentbyinvestor({
        investor: localStorage.getItem("authRefInvestor"),
      });

      setMyTotalInvestment(response2);
      setstartups(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    if (
      userdata?.aadhar?.status === "verified" ||
      userdata?.pan?.status === "verified" ||
      userdata?.bank?.status === "verified" ||
      userdata?.other?.status === "complete"
    ) {
      setkyccomplete(true);
    }
    fetchData();
  }, []);

  const handleInvestClick = async (id) => {
    const data = {
      id: id,
    };
    navigate("/startup/startupondetails/" + id, { state: data });
  };

  const handlekyc = () => {
    if (kyccomplete == true) {
      navigate("/portfolio");
    } else {
      navigate("/layoutprofile/");
    }
  };

  const becomeAccelerator = async () => {
    if (userdata.isAccelerator) {
      navigate("/refer-and-earn");
    } else {
      const res = await API.CreateAccelerator({
        id: localStorage.getItem("authRefInvestor"),
      });
      console.log(
        "🚀 ~ file: LiveCapmpaings.jsx:114 ~ becomeAccelerator ~ res:",
        res
      );
      if (res.code == 200) {
        navigate("/refer-and-earn");
      }
    }
  };

  const Events = [
    {
      head: "Join Membership Program",
      text: "Unlock exclusive benefits and opportunities with BizDateUp membership.",
      imge: Saly,
      link: "/",
      colour: "#bcdeff",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    initialSlide: 0,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${value / 10000000}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${value / 100000}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${value / 1000}K`;
    } else {
      return value;
    }
  }

  async function checkPremium(expiryTimestamp) {
    let expiryTimestamp_mil = new Date(expiryTimestamp).getTime();
    const currentTimestamp = Date.now();

    if (expiryTimestamp_mil > currentTimestamp) {
      setIsMember("yes");
    } else {
      const resMem = await API.checkPremiumMember({ id: refId });
      if (
        resMem.data.code === 200 &&
        resMem.data.data.membership &&
        resMem.data.data.membership.isMember === "yes"
      ) {
        console.log("Yoo 2");
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

  useEffect(() => {
    checkPremium(userdata?.membership?.endDate);
  }, [userdata]);

  return (
    <>
      <section>
        <div className=" flex flex-col items-center relative bg-[#FAFAFA] lg:p-8 p-[10px] ">
          <div className="lg:flex  justify-center gap-x-8 mx-auto  sm:w-[100%] w-[100%] lg:max-w-[1350px]">
            <div className=" md:w-[100%] sm:w-[100%] w-[100%] ">
              <div className="md:w-[302px] md:hidden mt-5 block h-[123px] bg-white rounded-[10px] px-[22px] pt-[22px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] ">
                <div className="lg:flex flex justify-between ">
                  <div className="flex  items-center gap-1">
                    <h4 className="font-[400] leading-[19.33px] text-[19.33px] text-[#252525] pb-[2px]">
                      {userdata.firstName + " " + userdata.lastName}
                    </h4>
                    {/* membership */}

                    {isMember === "yes" ? (
                      <img src={premium} className="w-[14px]" />
                    ) : null}
                  </div>
                  <div className="bg-[#f1f6fb] flex justify-center items-center rounded-[50%] w-8 h-8">
                    <MdModeEditOutline size={20} />
                  </div>
                </div>

                <div className="flex justify-between items-center mt-[12px]">
                  <div>
                    <p className="font-[400] leading-[15.62px] text-[13.33px] text-[#828F99] ">
                      {totalInvestment ? " Your total investment" : ""}
                    </p>
                    <h4 className="font-[400] leading-[30px] text-[20px] text-[#202054]">
                      {totalInvestment
                        ? `₹${formatValuation(totalInvestment)}`
                        : ""}
                    </h4>
                  </div>
                  <div className="flex justify-end items-center">
                    <div>
                      <h4 className="font-[400] text-[13.33px] leading-[15.62px] text-[#202054] pr-[10px] ">
                        View More
                      </h4>
                    </div>
                    <div className="pr-[8px]">
                      <SlArrowRightCircle size={14} />
                    </div>
                  </div>
                </div>
              </div>

              <div className=" text-[#202054] ">
                <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2 mt-8 md:mt-0 ">
                  Live campaigns
                </h2>
              </div>

              {startups.length == 3 ? (
                <>
                  <div className="  md:justify-between grid md:grid-cols-2 gap-4 ">
                    {startups[0] ? (
                      startups.map((index, i) => (
                        <div
                          onClick={() => handleInvestClick(index._id)}
                          className={`w-full md:w-[calc(50% - 10px)] h-[130px] rounded-[10px] cursor-pointer bg-white mb-[30px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] ${
                            i === 2 ? "md:col-span-2" : ""
                          }`}
                          key={i}
                        >
                          <div
                            className={`flex  pt-[22px] px-[22px]  h-[103px] rounded-[10px]  bg-[#E3E9FE]  border-b-[1px] `}
                          >
                            <div className="w-[63px] h-[63px] rounded-[5px] border-[#d1d1d1] border-[0.1px] bg-white flex items-center justify-center overflow-hidden   ">
                              <img
                                src={`${
                                  process.env.REACT_APP_BASE_URL +
                                  "/v1/logo/" +
                                  index.logo
                                }`}
                                alt={index.registeredCompanyName.substring(
                                  0,
                                  30
                                )}
                                className="w-[100%] object-contain"
                              />
                            </div>
                            <div className="pl-[8px] ">
                              <h4 className="font-[500] leading-[16.7px] h-[18px] overflow-hidden text-[#252525] pb-[5px]">
                                {index.registeredCompanyName.substring(0, 30)}
                              </h4>
                              {i === 2 ? (
                                <p className="text-[13px] font-[400] leading-[15.23px] text-[#4A4F53] h-[30px] md:h-fit  md:pb-[10px]">
                                  {index.shortDescription}
                                </p>
                              ) : (
                                <p className="text-[13px] font-[400] leading-[15.23px] text-[#4A4F53] h-[30px] md:h-fit  md:pb-[10px]">
                                  {index.shortDescription.slice(0, 38)}...
                                </p>
                              )}
                              {/* <p className="text-[13px] font-[400] leading-[15.23px] text-[#4A4F53] h-[30px] md:h-fit  md:pb-[10px]">
                                {index.shortDescription.slice(0, 38)}...
                              </p> */}
                              {console.log("index?.tags")}
                              {console.log(index?.tags)}
                              <div className="flex">
                                {index?.tags?.map((el, i) => {
                                  var tags = el.split(",");
                                  return (
                                    <div
                                      key={i}
                                      className="flex flex-wrap items-center "
                                    >
                                      {tags
                                        .slice(0, 2)
                                        .map((tag, innerTagIndex) => (
                                          <div
                                            key={innerTagIndex}
                                            className="flex justify-center mt-1 items-center pb-[1px] border-[0.5px] rounded-[7499.3px] bg-[#b5b5fa] px-[10px] ml-2 h-[18px]"
                                          >
                                            <div className="w-[12px] pr-[2.75px]">
                                              <img
                                                src={shoppingBag1}
                                                alt=""
                                                className="w-[100%]"
                                              />
                                            </div>
                                            <p className="font-[400] flex items-center leading-[10.26px] text-[#252525] text-[10px] ">
                                              {tag}
                                            </p>
                                          </div>
                                        ))}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center px-[25px] pt-[5px]">
                            <div>
                              <h4
                                className="font-[400] leading-[13.33px] text-[13.33px] text-[#202054] cursor-pointer
                          "
                              >
                                Invest Now
                              </h4>
                            </div>
                            <div className=" cursor-pointer">
                              <SlArrowRightCircle size={16} />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className=" md:absolute min-h-full left-0 top-0 opacity-80 w-[100%] bg-white z-40  flex justify-center items-center">
                        {/* <LoaderApi /> */}
                      </div>
                    )}
                  </div>
                </>
              ) : startups.length > 1 ? (
                <>
                  <div className=" md:justify-between grid md:grid-cols-2 gap-4 ">
                    {startups[0] ? (
                      startups.map((index, i) => (
                        <div
                          onClick={() => handleInvestClick(index._id)}
                          className="  w-[100%] h-[130px] rounded-[10px] cursor-pointer  bg-white mb-[30px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]   "
                          key={i}
                        >
                          <div
                            className={`flex  pt-[22px] px-[22px]  h-[103px] rounded-[10px]  bg-[#E3E9FE]  border-b-[1px] `}
                          >
                            <div className="w-[63px] h-[63px] rounded-[5px] border-[#d1d1d1] border-[0.1px] bg-white flex items-center justify-center overflow-hidden   ">
                              <img
                                src={`${
                                  process.env.REACT_APP_BASE_URL +
                                  "/v1/logo/" +
                                  index.logo
                                }`}
                                alt={index.registeredCompanyName.substring(
                                  0,
                                  30
                                )}
                                className="w-[100%] object-contain"
                              />
                            </div>
                            <div className="pl-[8px] ">
                              <h4 className="font-[500] leading-[16.7px] h-[18px] overflow-hidden text-[#252525] pb-[5px]">
                                {index.registeredCompanyName.substring(0, 30)}
                              </h4>
                              <p className="text-[13px] font-[400] leading-[15.23px] text-[#4A4F53] h-[30px] md:h-fit  md:pb-[10px]">
                                {index.shortDescription.slice(0, 38)}...
                              </p>
                              {console.log("index?.tags")}
                              {console.log(index?.tags)}
                              <div className="flex">
                                {index?.tags?.map((el, i) => {
                                  var tags = el.split(",");
                                  return (
                                    <div
                                      key={i}
                                      className="flex flex-wrap items-center "
                                    >
                                      {tags
                                        .slice(0, 2)
                                        .map((tag, innerTagIndex) => (
                                          <div
                                            key={innerTagIndex}
                                            className="flex justify-center mt-1 items-center pb-[1px] border-[0.5px] rounded-[7499.3px] bg-[#b5b5fa] px-[10px] ml-2 h-[18px]"
                                          >
                                            <div className="w-[12px] pr-[2.75px]">
                                              <img
                                                src={shoppingBag1}
                                                alt=""
                                                className="w-[100%]"
                                              />
                                            </div>
                                            <p className="font-[400] flex items-center leading-[10.26px] text-[#252525] text-[10px] ">
                                              {tag}
                                            </p>
                                          </div>
                                        ))}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-between items-center px-[25px] pt-[5px]">
                            <div>
                              <h4
                                className="font-[400] leading-[13.33px] text-[13.33px] text-[#202054] cursor-pointer
                      "
                              >
                                Invest Now
                              </h4>
                            </div>
                            <div className=" cursor-pointer">
                              <SlArrowRightCircle size={16} />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className=" md:absolute min-h-full left-0 top-0 opacity-80 w-[100%] bg-white z-40  flex justify-center items-center">
                        {/* <LoaderApi /> */}
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="grid">
                    {startups[0] ? (
                      startups.map((index, i) => (
                        <div
                          onClick={() => handleInvestClick(index._id)}
                          className="  md:w-[100%] h-[130px] rounded-[10px] cursor-pointer  bg-white mb-[30px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] "
                          key={i}
                        >
                          <div
                            className={`flex  pt-[22px] px-[22px]  h-[103px] rounded-[10px] bg-[${index.colour}] bg-[#E3E9FE]  border-b-[1px]`}
                          >
                            <div className="w-[63px] h-[63px] rounded-[5px] border-[#d1d1d1] border-[0.1px] bg-white flex items-center justify-center overflow-hidden aspect-square  ">
                              <img
                                src={`${
                                  process.env.REACT_APP_BASE_URL +
                                  "/v1/logo/" +
                                  index.logo
                                }`}
                                alt={index.registeredCompanyName.substring(
                                  0,
                                  30
                                )}
                                className="w-[63px] object-contain"
                              />
                            </div>
                            <div className="pl-[8px] w-[75%] ">
                              <h4 className="hidden md:block font-[500] leading-[16.7px] h-[18px] overflow-hidden text-[#252525] pb-[5px]">
                                {index.registeredCompanyName}
                              </h4>
                              <h4 className="block md:hidden  font-[500] leading-[16.7px] h-[18px] overflow-hidden text-[#252525] pb-[5px]">
                                {index.registeredCompanyName.substring(0, 20)}
                                ...
                              </h4>

                              <p className="hidden md:block text-[13px] font-[400] leading-[15.23px] text-[#4A4F53] h-[30px] md:h-fit  md:pb-[10px]">
                                {index.shortDescription.slice(0, 120)}...
                              </p>
                              <p className="block md:hidden text-[13px] font-[400] leading-[15.23px] text-[#4A4F53] h-[30px] md:h-fit  md:pb-[10px]">
                                {index.shortDescription.slice(0, 70)}...
                              </p>
                              {console.log("index?")}
                              {console.log(index)}
                              {/* <div className="flex">
                                {index?.tags?.map((el, i) => {
                                  var tags = el.split(",");
                                  return (
                                    <div
                                      key={i}
                                      className="flex flex-wrap items-center "
                                    >
                                      {tags
                                        .slice(0, 2)
                                        .map((tag, innerTagIndex) => (
                                          <div
                                            key={innerTagIndex}
                                            className="flex justify-center mt-1 items-center pb-[1px] border-[0.5px] rounded-[7499.3px] bg-[#b5b5fa] px-[10px] ml-2 h-[18px]"
                                          >
                                            <div className="w-[12px] pr-[2.75px]">
                                              <img
                                                src={shoppingBag1}
                                                alt=""
                                                className="w-[100%]"
                                              />
                                            </div>
                                            <p className="font-[400] flex items-center leading-[10.26px] text-[#252525] text-[10px] ">
                                              {tag}
                                            </p>
                                          </div>
                                        ))}
                                    </div>
                                  );
                                })}
                              </div> */}
                            </div>
                          </div>
                          <div className="flex justify-between items-center px-[25px] pt-[5px]">
                            <div>
                              <h4
                                className="font-[400] leading-[13.33px] text-[13.33px] text-[#202054] cursor-pointer
                          "
                              >
                                Invest Now
                              </h4>
                            </div>
                            <div className=" cursor-pointer">
                              <SlArrowRightCircle size={16} />
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className=" md:absolute min-h-full left-0 top-0 opacity-80 w-[100%] bg-white z-40  flex justify-center items-center">
                        {/* <LoaderApi /> */}
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* events slide*/}

              {/* <Slider {...settings} className=" ">
                 {Events.map((item, i) => ( 
                <div className=" w-[808px] h-[246px] rounded-[10px]   bg-white  relative">
                  <div className="flex justify-start    px-[22px] pt-[22px]  h-[199px] rounded-[10px] bg-[#bcdeff] ">
                    <div className=" w-[60%] ">
                      <h4 className="font-[400] leading-[41.47px] text-[#252525] text-[27.65px] pb-[5px]">
                        Calculators
                      </h4>
                      <p className="font-[300] leading-[18.75px] text-[#4A4F53] text-[16px]">
                        Calculate Your Return on Investment (ROI) with Bizdateup
                      </p>
                    </div>

                    <div className="flex  justify-center items-center">
                      <img
                        src={Saly}
                        alt=""
                        className="w-[100%] pb-[60px] pl-[50px]"
                      />
                    </div>
                  </div>
                  <div className=" absolute right-[80px] top-[2px] z-30">
                    <img src={Ellipse114} alt="" />
                  </div>
                  <Link to={"/Resource/"}>
                    <div className="flex justify-between items-center px-[25px] mt-[15px]">
                      <div>
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                          Learn now
                        </h4>
                      </div>
                      <div className="">
                        <SlArrowRightCircle size={16} />
                      </div>
                    </div>
                  </Link>
                </div>
                <div className=" w-[808px] h-[246px] rounded-[10px]   bg-white  relative">
                  <div className="flex justify-start    px-[22px] pt-[22px]  h-[199px] rounded-[10px] bg-[#fbacc5] ">
                    <div className=" w-[60%] ">
                      <h4 className="font-[400] leading-[41.47px] text-[#252525] text-[27.65px] pb-[5px]">
                        Events
                      </h4>
                      <p className="font-[300] leading-[18.75px] text-[#4A4F53] text-[16px]">
                        Participate in our exclusive events.
                      </p>
                    </div>

                    <div className="flex  justify-center items-center">
                      <img
                        src={Saly}
                        alt=""
                        className="w-[100%] pb-[60px] pl-[50px]"
                      />
                    </div>
                  </div>
                  <div className=" absolute right-[80px] top-[2px] z-30">
                    <img src={Ellipse114} alt="" />
                  </div>
                  <Link to={"/invest/*"}>
                    <div className="flex justify-between items-center px-[25px] mt-[15px]">
                      <div>
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                          Learn now
                        </h4>
                      </div>
                      <div className="">
                        <SlArrowRightCircle size={16} />
                      </div>
                    </div>
                  </Link>
                </div>
                
              </Slider> */}
              {isMember === "yes" ? (
                <div className="z-10 duration-300 hover:translate-y-[-2px] ">
                  <div className="  md:w-[100%] h-[246px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]  bg-white  relative cursor-pointer overflow-hidden">
                    <div>
                      <div className="relative">
                        <div className="flex justify-start px-[22px] pt-[22px] h-[199px] rounded-b-[20px] rounded-bl-[25px] rounded-br-[25px] rounded-[10px] bg-[#bcdeff]">
                          <div className=" w-[75%] md:w-[60%] ">
                            <h4 className=" font-[Inter] font-[400] md:leading-[41.47px] text-[#252525] text-[20px] md:text-[27.65px] pb-[5px]">
                              Master Startup Investment
                            </h4>
                            <p className="font-[Inter] md:w-[459px] font-[400] leading-[18.75px] text-[#4A4F53] text-[12px] md:text-[16px]">
                              Learn more about investing's future.
                            </p>
                          </div>

                          <div className="flex  justify-center items-center">
                            <img
                              src={Saly}
                              alt=""
                              className="w-[100%] pb-[60px] pl-[50px]"
                            />
                          </div>
                        </div>
                        <div className=" absolute right-[80px] top-[-20px] z-30">
                          <div className="w-[54px] h-[54px] shrink-0 bg-[#aea9d0] rounded-[50%] " />
                        </div>
                      </div>
                      <a href="/invest">
                        <div className="flex justify-between items-center px-[25px] pt-[15px] ">
                          <div>
                            <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                              Learn now
                            </h4>
                          </div>
                          <div className="">
                            <SlArrowRightCircle size={16} />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="z-10  duration-300 hover:translate-y-[-2px] ">
                  <div
                    className={` md:w-[100%] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-[#e4c27b]  cursor-pointer overflow-hidden `}
                  >
                    <div>
                      <div className="relative">
                        <div
                          className={`flex  px-[22px] pt-[22px] bg-[#FEFAEE] rounded-b-[20px]  rounded-bl-[25px] rounded-br-[25px] rounded-[10px] `}
                        >
                          <div className=" w-[75%]  ">
                            <h4 className=" font-[Inter] font-[400] md:leading-[41.47px] text-[#252525] text-[20px] md:text-[27.65px] pb-[5px] mt-4">
                              Join Membership Program
                            </h4>
                            <p className="font-[Inter] md:w-[459px] font-[400] leading-[18.75px] text-[#4A4F53] text-[12px] md:text-[16px]">
                              Unlock exclusive benefits and opportunities with
                              BizDateUp membership.
                            </p>
                            <div className=" mt-4 mb-4">
                              <label
                                onClick={() => setmember(!member)}
                                className="flex gap-2 text-[#828F99] items-center cursor-pointer w-[90%] "
                              >
                                View Features{" "}
                                <IoIosArrowDropdown
                                  className={`transition-all duration-500  ${
                                    member ? "rotate-180" : ""
                                  }`}
                                />{" "}
                              </label>
                              <AnimatePresence>
                                {member ? (
                                  <div
                                  // className={`transition-all duration-300 ease-[ease-in-out] ${
                                  //   member
                                  //     ? "block h-auto  "
                                  //     : "h-0 overflow-hidden"
                                  // }`}
                                  >
                                    <motion.div
                                      initial={{ height: 0 }}
                                      animate={{ height: "auto" }}
                                      exit={{ height: 0 }}
                                      transition={{ duration: 0.3 }}
                                      className="overflow-hidden"
                                    >
                                      <div className="flex flex-col gap-5 my-4 ">
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            Investor Support System.
                                          </label>
                                        </div>
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            2 Weeks Angel Investment Bootcamp
                                            (Worth INR.20,000).
                                          </label>
                                        </div>
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            Welcom Gift Hamper.
                                          </label>
                                        </div>

                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            Exclusive Early bird discounts for
                                            all the Events, Seminars and
                                            Summits.
                                          </label>
                                        </div>
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            0% Transaction Fees levied on every
                                            Transaction.
                                          </label>
                                        </div>
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            Monthly Regular deals.
                                          </label>
                                        </div>
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            Earlybird Invite for all Events.
                                          </label>
                                        </div>
                                        <div className="text-[#E4C27B] flex gap-2 ">
                                          <BsFillCircleFill
                                            size={20}
                                            className="w-[25px] md:w-[20px]"
                                          />
                                          <label className="text-[#828F99] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                                            Dedicated Investor Relations
                                            Support.
                                          </label>
                                        </div>
                                      </div>
                                    </motion.div>
                                  </div>
                                ) : null}
                              </AnimatePresence>
                            </div>
                          </div>
                          {/* Img */}
                          <div>
                            <img
                              src={Premiumcta}
                              className="w-[160px] md:ml-0"
                            />
                          </div>
                        </div>
                        <div className="absolute top-[-35px] left-2  w-[60px] h-[60px] shrink-0 bg-[#fcedcc] rounded-[50%]  opacity-90" />
                        <div className="absolute top-[-25px] left-[-20px]  w-[60px] h-[60px] shrink-0 bg-[#fcedcc] rounded-[50%] opacity-90 " />
                        <div className="absolute top-[-30px] right-0   w-[60px] h-[60px] shrink-0 bg-[#fcedcc] rounded-[50%]  opacity-90" />
                        <div className="absolute top-[-15px] right-[-20px]  w-[60px] h-[60px] shrink-0 bg-[#fcedcc] rounded-[50%]  opacity-90" />
                      </div>
                      <a
                        href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
                        target="_blank"
                      >
                        <div className="flex items-center justify-between px-6">
                          <div className=" py-2 font-[Inter] text-[#252525] font-[500] text-[16px]  ">
                            Join Now
                          </div>
                          <SlArrowRightCircle size={16} />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {/* faq */}

              <div className="mt-[30px] md:mb-0 shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-white mb-[30px] rounded-[10px] ">
                <div className="px-[22px] pb-[20px] pt-[28px]">
                  <h4 className="font-[400] text-[19.2px] leading-[19.2px] text-[#202054]">
                    FAQ’S
                  </h4>
                </div>
                <div className="">
                  <hr />
                </div>
                <Faq />
                <Link to="/faq">
                  <div className="flex justify-end items-center py-[10px]">
                    <div>
                      <h4 className="font-[400] text-[13.33px] leading-[15.62px] text-[#202054] pr-[10px] ">
                        View More
                      </h4>
                    </div>
                    <div className="pr-[8px]">
                      <SlArrowRightCircle size={14} />
                    </div>
                  </div>
                </Link>
              </div>

              {startups.length <= 2 ? (
                <div className="hidden md:block h-[140px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-white  relative mt-[30px]  duration-300 hover:translate-y-[-2px] ">
                  <div className=" px-[22px] pt-[22px]  h-[108px] rounded-[10px] bg-[#EADFF2] ">
                    <div className=" pb-[50px]">
                      <h4 className="font-[400] leading-[18.75px] text-[#252525] text-[16px] pb-[7px]">
                        Invest in the Future with Our Startups{" "}
                      </h4>
                      <p className="font-[400] leading-[15.62px] text-[#828F99] text-[13.33px] pr-[30px]">
                        Diversify your investment portfolio and support the next
                        big thing
                      </p>
                    </div>
                  </div>
                  <Link to="/invest">
                    <div className="accel flex justify-between items-center px-[25px] py-[6px]">
                      <div>
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                          Join now
                        </h4>
                      </div>
                      <div className="cursor-pointer">
                        <SlArrowRightCircle size={16} />
                      </div>
                    </div>
                  </Link>

                  <div className="0"></div>
                </div>
              ) : null}
            </div>

            {/*right side div  */}
            <div className="lg:max-w-[302px] md:pt-[30px] ">
              <div className="md:w-[302px] hidden md:block  h-[123px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-white rounded-[10px] px-[22px] pt-[22px]  ">
                <div className="flex justify-between  ">
                  <div className="flex items-center gap-1">
                    <h4 className="font-[400] leading-[19.33px] text-[19.33px] text-[#252525] pb-[3px]">
                      {userdata.firstName + " " + userdata.lastName}
                    </h4>
                    {isMember === "yes" ? (
                      <img src={premium} className="w-[14px]" />
                    ) : null}
                  </div>
                  <Link to="/layoutprofile/">
                    <div className="bg-[#f1f6fb] flex justify-center items-center rounded-[50%] w-8 h-8">
                      <MdModeEditOutline size={20} />
                    </div>
                  </Link>
                </div>
                <div className="flex justify-between items-center mt-[12px]">
                  <div>
                    <p className="font-[400] leading-[15.62px] text-[13.33px] text-[#828F99] ">
                      {totalInvestment ? "Your total investment" : ""}
                    </p>
                    <h4 className="font-[400] leading-[30px] text-[20px] text-[#202054]">
                      {totalInvestment
                        ? `₹${formatValuation(totalInvestment)}`
                        : ""}
                    </h4>
                  </div>
                  <div
                    onClick={handlekyc}
                    className="flex justify-end items-center"
                  >
                    <div>
                      <h4 className="font-[400] text-[13.33px] leading-[15.62px] text-[#202054] pr-[10px] ">
                        View More
                      </h4>
                    </div>
                    <div className="pr-[8px]">
                      <SlArrowRightCircle size={14} />
                    </div>
                  </div>
                </div>
              </div>

              {/*second div Become of acceleator  */}
              {kyccomplete ? (
                <Link to="/learn">
                  <div className=" lg:max-w-[302px] h-[204px] md:h-[320px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-white  relative mt-[30px]  duration-300 hover:translate-y-[-3px] ">
                    <div className="   px-[22px] pt-[22px] h-[170px] md:h-[292px] rounded-[10px] bg-[#d7d7ec] ">
                      <div className=" md:pb-[50px]">
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] text-[16px] pb-[7px]">
                          Unlock Your Investment Potential{" "}
                        </h4>
                        <p className="font-[400] leading-[15.62px] text-[#252525] text-[13.33px] pr-[30px]">
                          Learn more about our platform offerings
                        </p>
                      </div>

                      <div className="  ml-[210px] md:ml-0 flex justify-end items-center w-[120px] md:w-auto md:h-[138px] ">
                        <img src={cta16} alt="" className="" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-[25px] py-[8px]">
                      <div>
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                          Learn now
                        </h4>
                      </div>
                      <div className="">
                        <SlArrowRightCircle size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <Link to="/layoutprofile/">
                  <div className=" lg:max-w-[302px] md:h-[320px] h-[210px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)]  bg-white  relative mt-[30px]  duration-300 hover:translate-y-[-2px] ">
                    <div className="   px-[22px] pt-[22px]  md:h-[292px] h-[180px]  rounded-[10px] bg-[#d7d7ec] ">
                      <div className=" md:pb-[50px]">
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] text-[16px] pb-[7px]">
                          Your KYC is Incomplete
                        </h4>
                        <p className="font-[400] leading-[15.62px] text-[#252525] text-[13.33px] pr-[70px] md:pr-[30px]">
                          Please Complete Your KYC for better experience
                        </p>
                      </div>

                      <div className="ml-[240px] md:ml-0 mt-[-10px] md:mt-0 flex justify-end items-center w-[100px] md:w-auto md:h-[138px] ">
                        <img src={cta12} alt="" className="" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center px-[25px] py-[4px]">
                      <div>
                        <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                          Complete now
                        </h4>
                      </div>
                      <div className="">
                        <SlArrowRightCircle size={16} />
                      </div>
                    </div>
                  </div>
                </Link>
              )}

              {/* third div Learn About us */}

              {/* Membership */}
              {isMember === "yes" ? (
                <div className=" lg:max-w-[302px] h-[320px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-[#f8f3c6] p-4 relative mt-[30px]  duration-300 hover:translate-y-[-2px] ">
                  <div className="flex justify-center">
                    <img src={premiumcta} className="w-[190px] mt-8" />
                  </div>
                  <label className="flex  mt-8 text-[#252525] text-lg not-italic font-normal leading-[normal] font-[Inter] ">
                    Bizdateup's Premium Member
                  </label>
                  <p className=" flex   text-[#4A4F53] text-[13.33px] not-italic font-normal leading-[normal] pr-8 mt-1">
                    Unlock Exclusive Benefits with BizDateUp Premium!
                  </p>
                  {/* <div className="flex justify-end items-end">
                    <p className="flex items-center gap-1 mt-3 text-[#202054] text-center text-[13.33px] not-italic font-normal leading-[100%] ">
                      See Features <MdKeyboardArrowRight size={15} />
                    </p>
                  </div> */}
                </div>
              ) : (
                <div
                  onClick={becomeAccelerator}
                  className=" lg:max-w-[302px] md:h-[320px] h-[204px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-white  relative mt-[30px]  duration-300 hover:translate-y-[-2px] cursor-pointer "
                >
                  <div className=" px-[22px] pt-[22px]  md:h-[292px] h-[176px] rounded-[10px] bg-[#BDEECE80] ">
                    <div className=" md:pb-[50px]">
                      <h4 className="font-[400] leading-[18.75px] text-[#252525] text-[16px] pb-[7px]">
                        Become an Accelerator
                      </h4>
                      <p className="font-[400] leading-[15.62px] text-[#252525] text-[13.33px] pr-[30px]">
                        Join our accelerator program and fuel your
                        entrepreneurial journey.
                      </p>
                    </div>

                    <div className=" ml-[150px] md:ml-0 mt-[9px] md:mt-0 flex justify-start items-center  w-[180px] md:w-auto md:h-[138px]  ">
                      <img src={cta17} alt="" className=" " />
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-[25px] py-[4px]">
                    <div>
                      <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                        Get now
                      </h4>
                    </div>
                    <div className="">
                      <SlArrowRightCircle size={16} />
                    </div>
                  </div>
                </div>
              )}

              {/* fourth div Learn About us */}

              {/* <Link to="/startup/login"> */}
              <Link to="/calculators">
                <div className=" lg:w-[302px] h-[149px] rounded-[10px] shadow-[0px_1px_10px_0px_rgba(0,0,0,0.10)] bg-white  relative mt-[30px]  duration-300 hover:translate-y-[-2px] ">
                  <div className=" px-[22px] pt-[22px]  h-[124px] rounded-[10px] bg-[#E1DDF8] ">
                    <div className=" pb-[50px]">
                      <h4 className="font-[400] leading-[18.75px] text-[#252525] text-[16px] pb-[7px]">
                        Calculators
                      </h4>
                      <p className="font-[400] leading-[15.62px] text-[#828F99] text-[13.33px] pr-[30px]">
                        Calculate Your Return on Investment (ROI) with
                        Bizdateup.
                      </p>
                    </div>
                  </div>
                  <div className="accel flex justify-between items-center px-[25px] pt-[4px] cursor-pointer">
                    <div>
                      <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                        Join now
                      </h4>
                    </div>
                    <div className="cursor-pointer">
                      <SlArrowRightCircle size={16} />
                    </div>
                  </div>
                  <div className="0"></div>
                </div>
              </Link>

              {/* </Link> */}
            </div>
          </div>

          {/* invest in us */}
          <div className="flex justify-center w-full ">
            {/* <InvestEarly startups="startups" /> */}

            <div className=" w-[100%] flex flex-col flex-wrap mx-auto justify-center lg:max-w-[1350px]">
              <div className=" text-[#202054] ">
                <h4 className=" text-[27.65px] font-[400] leading-[41.47px] mt-[40px] mb-[31.83px]">
                  Invest with Confidence
                </h4>
              </div>
              <div className=" rounded-[5px] w-[100%] md:grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-[28.5px] ">
                {startups.slice(0, 3).map((el, index) => (
                  <div
                    onClick={() => handleInvestClick(el._id)}
                    className=" bg-[#ffffff] md:max-w-[400px] p-4 mx-auto w-[100%] rounded-[11.19px] md:min-h-[463px] overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]  duration-[0.3s] mb-[20px]   hover:translate-y-[-2px]"
                    key={index}
                  >
                    <div className="w-[100%]  border-[#d1d1d1] border-[0.1px] h-[209.12px] flex justify-center  rounded-[5.59px] ">
                      <img
                        src={
                          process.env.REACT_APP_BASE_URL +
                          "/v1/banner/" +
                          el.banner
                        }
                        alt=""
                        className="w-[100%] object-contain"
                      />
                    </div>
                    <div className="pl-[10.74px] pr-[29.27px] pb-[10px] pt-[20px] ">
                      <div className="flex  items-center">
                        <div className=" absolute top-[200.51px] border-[#d1d1d1] border-[0.1px] bg-white w-[70px] h-[70px] rounded-[11px] overflow-hidden flex items-center justify-center ">
                          <img
                            // `${process.env.REACT_APP_BASE_URL+"/v0/logo/" + index.logo}`

                            src={
                              process.env.REACT_APP_BASE_URL +
                              "/v1/logo/" +
                              el.logo
                            }
                            alt=""
                            className="w-[100%] object-contain"
                          />
                        </div>
                        <div className="pl-[79.47px] font-[Inter]  relative bottom-3 h-7 overflow-hidden text-[20px] font-[600] text-[#202054]">
                          {el.registeredCompanyName.substring(0, 30)}
                        </div>
                      </div>
                      <div className="pt-[10.22px] text-[14px] font-[Inter] font-[400] leading-[18.36px] text-[#828F99]">
                        <h4>{el.shortDescription.slice(0, 140)}...</h4>
                      </div>
                      <div></div>
                      <div className="flex justify-between pt-[25px] pb-[18px]">
                        <div>
                          <h4 className="text-[14px] font-[Inter]  font-[400] text-[#090813]">
                            ₹ {formatValuation(Math.ceil(el?.totalRaised))}
                          </h4>
                          <h4 className="text-[14px] font-[Inter]  leading-[22.97px] tracking-[1.37px] text-[#828F99]  font-[400] ">
                            Raised
                          </h4>
                        </div>
                        <div>
                          <h4 className="text-[14px] font-[Inter]  font-[400] text-[#090813]">
                            ₹{" "}
                            {formatValuation(el?.dealTerms?.minimumInvestment)}
                          </h4>
                          <h4 className="text-[14px] font-[Inter]  font-[400] leading-[22.97px] tracking-[1.37px] text-[#828F99] ">
                            Min invest
                          </h4>
                        </div>
                      </div>
                      <div className="flex">
                        {el.tags &&
                          el.tags.map((tagString, tagIndex) => {
                            var tagsm = tagString.split(",");
                            return (
                              <div
                                key={tagIndex}
                                className="flex justify-start flex-wrap  items-center gap-2 "
                              >
                                {tagsm.map((tag, innerTagIndex) => (
                                  // <span key={innerTagIndex}>{tag}</span>
                                  <div
                                    key={innerTagIndex}
                                    className="flex mt-1 gap-1 justify-center bg-[#b5b5fa] items-center pb-[1px] border-[0.5px] rounded-[7499.3px]  pl-[8px] pr-[12px] h-[25px]"
                                  >
                                    <div className="w-[15px] pr-[5px] text-[#202054]">
                                      <BsFillCheckCircleFill size={15} />
                                    </div>

                                    <p className="font-[400] leading-[14.54px] font-[Inter] text-[#252525] text-[14.54px] ">
                                      {tag}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:pb-[25px] pt-3 pb-8 flex justify-end items-center">
                <Link
                  to={"/invest"}
                  className="flex justify-center items-center"
                >
                  <div className="">
                    <h4 className="font-[400] text-[20px] leading-[23.44px] text-[#202054] cursor-pointer pr-[10px]  ">
                      View More
                    </h4>
                  </div>
                  <div className="pr-[8px] cursor-pointer">
                    <SlArrowRightCircle size={19} />
                  </div>
                </Link>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiveCapmpaings;
