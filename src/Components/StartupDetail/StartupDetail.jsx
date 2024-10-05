import React, { useEffect, useState, Fragment, createContext } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { Route, Routes } from "react-router";
import OflinePayments from "./OflinePayments";
import Onlinepayments from "./OnlinePayments";
import folderr from "../../Images/folderr.png";
import Faq from "./Faq";

import { SlArrowRightCircle } from "react-icons/sl";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import Ellipse114 from "../../Images/Ellipse114.png";
import cta18 from "../../assets/images/cta/cta18.png";
import Cta24 from "../../assets/images/cta/cta24.png";
import Cta25 from "../../assets/images/cta/cta25.png";
import Community from "./Community/Community";
// import companty10 from "../../Images/CompanyLogo3.png";
import Saly from "../../Images/Saly.png";
import highlights from "../../assets/images/highlights.png";
import graf5 from "../../Images/graf5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pdf from "./Pdf";
import API from "../../Apis/startupApis";
import marketingApi from "../../Apis/marketing";
import paymentApi from "../../Apis/payment";
import investorApi from "../../Apis/investor";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import "../../assets/css/styles.css";
import { Helmet } from "react-helmet";
import moment from "moment";
import "moment-timezone";
import LoaderApi from "../LoaderApi/LoaderApi";
import { FaFileDownload, FaHandPointRight } from "react-icons/fa";
import { toast } from "react-toastify";
import {
  AiFillInfoCircle,
  AiOutlineClose,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { RightCircleOutlined } from "@ant-design/icons";
import pdf from "../../assets/images/pdf.png";
import { BiLinkExternal } from "react-icons/bi";

const docFile = `startups?.dueDiligenceFiles`;

const StartupDetail = () => {
  const endpoint = process.env.REACT_APP_TEST_URL;
  // const user = ;
  const [open, setOpen] = useState(1);
  const [totalAmount, setTotalAmount] = useState(0);
  const [convenienceFee, setConvenienceFee] = useState(0);
  const [gst, setGst] = useState(0);
  const [tds, setTds] = useState(0);
  const [isInterested, setIsInterested] = useState(null);
  const [isInterestedadd, setIsInterestedAdd] = useState(null);
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();
  const [type, setType] = useState("online");
  const [loader, setLoader] = useState(false);

  const [extraamount, setExtraAmount] = useState(0);

  const { startData } = useParams();
  const [startups, setstartups] = useState({
    logo: "",
    registeredCompanyName: "",
    shortDescription: "",
    tags: "",
    colour: "#F0D9FF",
  });
  const [team, setTeam] = useState({});

  const [userData] = useState(
    JSON.parse(localStorage.getItem("authDataInvestor"))
  );

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const toggleType = (value) => {
    setType(value);
  };

  // if kyc not completed
  const authDataInvestor = JSON.parse(localStorage.getItem("authDataInvestor"));
  const aadhar = authDataInvestor.aadhar.status;
  const pan = authDataInvestor.pan.status;
  const bank = authDataInvestor.bank.status;

  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const Events = startups?.events;
  // const Events = [
  //   {
  //     text: " we are Drone-tech star-up platform called aremegh to transform data into actionable insights.",
  //     imge: Saly,
  //   },
  //   {
  //     text: " we are Drone-tech star-up platform called aremegh to transform data into actionable insights.",
  //     imge: Saly,
  //   },
  // ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 10000,
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

  // const location = useLocation();
  // const startData = location?.state?.id || const { id } = useParams();

  const refId = localStorage.getItem("authRefInvestor");
  const [faqData, setFaqData] = useState([]);
  const fetchData = async () => {
    try {
      const response = await API.fetchStartupById({ refId: startData });
      const fetchedFaqData = response.data.data.faq;
      setFaqData(fetchedFaqData);
      setstartups(response.data.data);
      setTeam(response.data.data.teamMembers);
      checkInterested();
    } catch (error) {}
  };

  const payonline = async (amountBreakdown) => {
    console.log(amountBreakdown);
    try {
      setLoader(true);
      const paymentdata = {
        order_amount: amountBreakdown.totalamount,
        order_currency: "INR",
        order_note: "Test order",
        customer_id: refId,
        customer_name: userData.firstName + " " + userData.lastName,
        customer_email: userData.email,
        customer_phone: String(userData.phone),
        startupId: startData,
        amount: amountBreakdown.amount,
        tds: 0,
        convenienceFee: amountBreakdown.convenienceFee,
        gst: amountBreakdown.gst,
      };

      // alert("it got here 2.1")
      const response = await paymentApi.createOrder(paymentdata);
      // alert("it got here 2")

      console.log("response", response.data.message);
      if (response.data.code === 200 && response.data.data.payment_session_id) {
        // alert("it got here 3")
        // alert("it got here 3")
        setLoader(false);
        toast.success("routing to payment page");
        navigate("/paymentDrop", { state: { data: response.data.data } });
      } else if (response.data.code === 401) {
        // toast.error("hkjhdf");
        setLoader(false);
      } else if (response.data.code === 400) {
        toast.error(response.data.message);
        setLoader(false);
      } else {
        // toast.error("hkjhdfdddddd");
      }
    } catch (error) {
      setLoader(false);
      console.log(error);
      toast.error(
        "We are facing some issues with Payment gateway. Try doing Offline payment."
      );
      console.log("error", error);
    }
  };

  const payoffline = async (amountBreakdown) => {
    console.log(amountBreakdown);
    try {
      // const respons|e = await API.fetchStartupById({refId:startData})
      //
      //
      //  setstartups(response.data.data);
      setLoader(true);

      const paymentdata = {
        order_amount: amount,
        order_currency: "INR",
        order_note: "Test order",
        customer_id: refId,
        customer_name: userData.firstName + " " + userData.lastName,
        customer_email: userData.email,
        customer_phone: String(userData.phone),
        startupId: startData,
        amount: amount,
        dateOfpayment: "",
        reference: amountBreakdown.reference,
        tds: 0,
        convenienceFee: amountBreakdown.convenienceFee,
        gst: amountBreakdown.gst,
      };

      const response = await paymentApi.createOfflineOrder(paymentdata);
      //
      //
      if (response.data.code === 401) {
        toast.error("Complete your profile");
        setLoader(false);
      } else if (response.data.code === 200 && response.data.data.order_id) {
        navigate("/thankyou");
        setLoader(false);
      } else if (response.data.code === 400) {
        toast.error(response.data.message);
        setLoader(false);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred while processing your request. Please complete your profile if not completed."
      );
      console.log("error", error);
      setLoader(false);
    }
  };

  const addInterest = async () => {
    try {
      const data = {
        startupId: startData,
        startupName: startups?.registeredCompanyName,
        investorId: userData?._id,
        investorName: userData?.firstName + userData?.lastName,
        investorEmail: userData?.email,
        interested: isInterestedadd,
      };
      marketingApi.addInterest(data);
      setIsVisible(false);
    } catch (error) {}
  };

  async function checkInterested() {
    const res = await marketingApi.interestCheck({
      startupId: startData,
      investorId: userData?._id,
    });
    console.log(
      "🚀 ~ file: StartupDetail.jsx:211 ~ checkInterested ~ res:",
      res
    );
    if (res.data) {
      setIsInterested(res.data.data.interested);
    }
  }

  const handleExtraAmountChange = (amount) => {
    setExtraAmount(amount);
  };

  useEffect(() => {
    // setUserData();
    fetchData();
  }, []);

  const downloadTxtFile = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = endpoint + "/v1/duefile/" + url;
    aTag.setAttribute("download", fileName);
    aTag.setAttribute("target", "_blank");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
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

  function handleDownload() {
    // Logic to trigger the PDF download
    const downloadLink = document.createElement("a");
    downloadLink.href = startups?.pitch;
    downloadLink.download = "pitchdeck.pdf";
    downloadLink.click();
  }

  return (
    <>
      {loader ? (
        <LoaderApi />
      ) : (
        <>
          <Navbar verified={"true"} userType="startup" />
          <Helmet defer={false}>
            <title>{`${startups?.registeredCompanyName} - Startup Investment`}</title>
            <meta name="description" content="Startup Details description" />
          </Helmet>
          <section>
            <div>
              <div className=" bg-[#FAFAFA] md:px-10 px-[20px] md:pb-12 w-[100%] py-[20px] flex flex-col justify-center items-center ">
                <div className=" w-[100%] lg:w-[1140px]  ">
                  <div className="lg:flex md: justify-center w-full gap-x-[30px] md:pt-[20px] mb-[50px]">
                    <div className="w-[100%] md:mb-0 mb-[30px] md:w-[100%] lg:w-[808px] border-[px] rounded-[10px] px-[22px] pt-[28px]  bg-white ">
                      <div className="flex justify-start items-center mb-[20px] w-full ">
                        <div className="mr-[12px] overflow-hidden border-[#d1d1d1] border-[0.1px] bg-white w-[55px]  rounded-[11px]  flex items-center justify-center ">
                          <img
                            src={endpoint + "/v1/logo/" + startups?.logo}
                            alt=""
                          />
                        </div>
                        <div className="w-[78%] md:w-auto">
                          <h4 className="font-[Inter] font-[400] text-[16px] md:text-[24px]  md:leading-[32px] text-[#202054]">
                            {startups?.registeredCompanyName}
                          </h4>
                        </div>
                      </div>
                      <div className="mb-[20px]">
                        <p className="font-[Inter] font-[400] text-[13.33px] leading-[15.62px] text-[#252525]">
                          {startups?.shortDescription}
                        </p>
                      </div>
                      <div className="flex items-center text-center  mb-[25px]">
                        {startups?.tags
                          ? startups?.tags.map((el, i) => {
                              var tags = el.split(",");
                              return (
                                <div
                                  key={i}
                                  className="flex flex-wrap items-center gap-2 "
                                >
                                  {tags
                                    .slice(0, 2)
                                    .map((tag, innerTagIndex) => (
                                      <div
                                        key={innerTagIndex}
                                        className="text-[#8826FF] bg-[#EFE6FA] mr-[20px]  rounded-[20px] px-2 py-[2px]  "
                                      >
                                        <p className="font-[Inter] font-[400] text-[13px] md:leading-[24px]">
                                          {tag}
                                        </p>
                                      </div>
                                    ))}
                                </div>
                              );
                            })
                          : ""}
                      </div>

                      <div className="flex justify-center aspect-video ">
                        {startups?.youtubeVideoUrl?.includes("embed") ? (
                          <iframe
                            src={startups?.youtubeVideoUrl}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            frameBorder="0"
                            className=" aspect-video w-full  rounded-[10px] "
                          ></iframe>
                        ) : (
                          ""
                        )}
                      </div>

                      <div className="md:flex md:flex-col  md:justify-between items-center gap-4 py-[20px] ">
                        {/* {startups.keyHighlights.map((el, index) => (
                        <div key={index} className="md:w-[241px] h-[145px] md:mb-0 mb-[20px] px-[22px] pt-[22px] border-[2px] rounded-[10px] ">
                          <div className="w-[46px] h-[39px] ">
                            <img src={graf5} alt="" className="w-[100%]" />
                          </div>
                          <div className="pt-[13px]">
                            <p className="font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                              {el.keyHighlight1}
                            </p>
                          </div>
                        </div>
                      ))} */}

                        <div className=" md:w-full flex flex-col    bg-[#E3E9FE] md:mb-0 mb-[20px]   px-[22px] gap-3 py-[20px] border-[2px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          {/* <div className="w-[46px] ">
                          <img src={highlights} alt="" className="" />
                        </div> */}
                          <div className=" h-full flex-grow ">
                            <p className=" flex gap-2 font-[Inter] font-[400] text-[14.5px]   leading-[15.62px] text-[#828F99]">
                              <FaHandPointRight
                                className="w-6"
                                size={15}
                                color="#535353"
                              />
                              {startups?.keyHighlights?.keyHighlight1
                                ? startups?.keyHighlights?.keyHighlight1
                                : "See Pitchdeck below for more highlights"}
                            </p>
                          </div>
                        </div>
                        <div className="md:w-full  flex flex-col    bg-[#E3E9FE] md:mb-0 mb-[20px]  px-[22px] gap-3 py-[22px]   border-[2px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          {/* <div className="w-[46px] ">
                          <img src={highlights} alt="" className="w-[100%]" />
                        </div> */}
                          <div className="h-full flex-grow ">
                            <p className=" flex gap-2 font-[Inter] font-[400] text-[14.5px]  leading-[15.62px] text-[#828F99]">
                              <FaHandPointRight
                                className="w-6"
                                size={15}
                                color="#535353"
                              />
                              {startups?.keyHighlights?.keyHighlight2
                                ? startups?.keyHighlights?.keyHighlight2
                                : "See Pitchdeck below for more highlights"}
                            </p>
                          </div>
                        </div>
                        <div className="md:w-full flex flex-col   bg-[#E3E9FE] md:mb-0 mb-[20px]  px-[22px]  gap-2 py-[22px]   border-[2px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          {/* <div className="w-[46px] ">
                          <img src={highlights} alt="" className="w-full" />
                        </div> */}
                          <div className="h-full flex-grow ">
                            <p className=" flex gap-2 font-[Inter] font-[400] text-[14.5px] leading-[15.62px] text-[#828F99]">
                              <FaHandPointRight
                                className="w-6"
                                size={15}
                                color="#535353"
                              />
                              {startups?.keyHighlights?.keyHighlight3
                                ? startups?.keyHighlights?.keyHighlight3.slice(
                                    0,
                                    100
                                  )
                                : "See Pitchdeck below for more highlights"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*right side div  */}

                    <div className="flex flex-col gap-3 md:gap-6 md:w-[100%] lg:w-[400px] ">
                      {startups?.activeStatus?.status === "closed" ? (
                        <>
                          <div className=" hidden md:flex md:flex-col md:gap-y-8 md:w-[301px] ">
                            <Link to="/invest">
                              <div className=" lg:max-w-[302px] h-[300px] rounded-[10px]  bg-white  relative ">
                                <div className=" px-[22px] pt-[22px]  h-[265px] rounded-[10px] bg-[#DBFFCF] flex flex-col ">
                                  <div className=" ">
                                    <h4 className="font-[400] leading-[18.75px] font-[Inter] text-[#252525] text-[16px] pb-[7px]">
                                      This startup sucessfully raised
                                    </h4>
                                    <p className="font-[400] leading-[15.62px] font-[Inter] text-[#252525] text-[13.33px] pr-[30px]">
                                      Explore more such live startups here
                                    </p>
                                  </div>

                                  <div className=" flex justify-end  ">
                                    <img src={Cta24} alt="" className=" " />
                                  </div>
                                </div>
                                <div className="flex justify-between items-center px-[25px] py-[8px]">
                                  <div>
                                    <h4 className="font-[400] font-[Inter] leading-[18.75px] text-[#252525] ">
                                      Invest Now
                                    </h4>
                                  </div>
                                  <div className="">
                                    <SlArrowRightCircle size={16} />
                                  </div>
                                </div>
                              </div>
                            </Link>

                            <Link to="/startup_update">
                              <div className=" lg:max-w-[302px] h-[300px] rounded-[10px]  bg-white  relative ">
                                <div className=" px-[22px] pt-[22px]  h-[265px] rounded-[10px] bg-[#E4DCE5] ">
                                  <div className=" pb-[20px]">
                                    <h4 className="font-[400] leading-[18.75px] font-[Inter] text-[#252525] text-[16px] pb-[7px]">
                                      Startup Updates
                                    </h4>
                                    <p className="font-[400] leading-[15.62px] font-[Inter] text-[#252525] text-[13.33px] pr-[30px]">
                                      Get updated about the startups we have
                                      raised
                                    </p>
                                  </div>

                                  <div className=" flex justify-end items-center lg:max-w-[302px] h-[138px]  ">
                                    <img src={Cta25} alt="" className=" " />
                                  </div>
                                </div>
                                <div className="flex justify-between items-center px-[25px] py-[8px]">
                                  <div>
                                    <h4 className="font-[400] leading-[18.75px] font-[Inter] text-[#252525] ">
                                      Check Now
                                    </h4>
                                  </div>
                                  <div className="">
                                    <SlArrowRightCircle size={16} />
                                  </div>
                                </div>
                              </div>
                            </Link>
                            <Link to="/learn">
                              <div className=" lg:w-[302px] h-[149px] rounded-[10px]  bg-white  relative ">
                                <div className=" px-[22px] pt-[22px] flex  h-[124px] rounded-[10px] bg-[#DADCF2] ">
                                  <div className="w-[70%] ">
                                    <h4 className="font-[400] leading-[18.75px] font-[Inter] text-[#252525] text-[16px] pb-[7px]">
                                      Startup investing
                                    </h4>
                                    <p className="font-[400] leading-[15.62px] font-[Inter] text-[#828F99] text-[13.33px] ">
                                      Learn startup investing
                                    </p>
                                  </div>
                                  <div className=" flex ">
                                    <img src={cta18} alt="" className=" " />
                                  </div>
                                </div>
                                <div className="accel flex justify-between items-center px-[25px] pt-[4px]">
                                  <div>
                                    <h4 className="font-[400] leading-[18.75px] font-[Inter] text-[#252525] ">
                                      Join now
                                    </h4>
                                  </div>

                                  <div className="">
                                    <SlArrowRightCircle size={16} />
                                  </div>
                                </div>
                              </div>
                            </Link>
                          </div>
                        </>
                      ) : (
                        <>
                          {aadhar !== "pending" &&
                          pan !== "pending" &&
                          bank !== "pending" ? (
                            <div className="w-full h-full py-[25px] bg-white md:mt-[40px] lg:mt-0 rounded-[10px] px-[22px] pt-[22px]">
                              <>
                                {type === "online" && (
                                  <Onlinepayments
                                    callback={payonline}
                                    changeType={toggleType}
                                    totalamount={totalAmount}
                                    setTotalAmount={setTotalAmount}
                                    setAmount={setAmount}
                                    amount={amount}
                                    minimumInvestment={
                                      startups?.dealTerms?.minimumInvestment
                                    }
                                    id={startData}
                                    setGst={setGst}
                                    gst={gst}
                                    setConvenienceFee={setConvenienceFee}
                                    convenienceFee={convenienceFee}
                                  />
                                )}
                                {type === "offline" && (
                                  <OflinePayments
                                    id={startData}
                                    // totalAmount={totalAmount}
                                    amount={totalAmount}
                                    gst={gst}
                                    convenienceFee={convenienceFee}
                                    callback={payoffline}
                                    changeType={toggleType}
                                  />
                                )}
                              </>
                            </div>
                          ) : (
                            <div className="w-full h-full py-[25px] bg-white md:mt-[40px] lg:mt-0 rounded-[10px] px-[22px] pt-[22px] relative">
                              <>
                                {type === "online" && (
                                  <Onlinepayments
                                    callback={payonline}
                                    changeType={toggleType}
                                    totalamount={totalAmount}
                                    setTotalAmount={setTotalAmount}
                                    minimumInvestment={
                                      startups?.dealTerms?.minimumInvestment
                                    }
                                    setAmount={setAmount}
                                    amount={amount}
                                    id={startData}
                                    setGst={setGst}
                                    gst={gst}
                                    setConvenienceFee={setConvenienceFee}
                                    convenienceFee={convenienceFee}
                                    onExtraAmountChange={
                                      handleExtraAmountChange
                                    }
                                  />
                                )}
                                {type === "offline" && (
                                  <OflinePayments
                                    id={startData}
                                    gst={gst}
                                    convenienceFee={convenienceFee}
                                    amount={totalAmount}
                                    callback={payoffline}
                                    changeType={toggleType}
                                    extraamount={extraamount}
                                  />
                                )}
                              </>
                              <div className="absolute inset-0 flex items-center justify-center w-full h-full z-10 bg-opacity-80 backdrop-blur blur-[5px] p-4">
                                {/* You can add a message or loading spinner here */}
                              </div>
                              <div className="flex flex-col gap-4 w-full items-center z-30 absolute top-[50%] -translate-x-2/4 -translate-y-2/4 left-2/4 px-4">
                                <label className="not-italic w-[80%] text-center font-bold text-[25px] leading-8 flex items-center text-[#828f99] ">
                                  Your Profile is Incomplete. Please Complete
                                  your profile to Invest in Startups.
                                </label>
                                <Link
                                  className="w-full flex justify-center"
                                  to="/layoutprofile/"
                                >
                                  <button className="w-[100%] h-[35px] opacity-95 not-italic font-normal  text-xs leading-[14px] rounded-[7.3842px] font-[Inter]  bg-[#202054]  items-center text-[#ffffff] ">
                                    Complete your Profile
                                  </button>
                                </Link>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                  {/* Deal team */}
                  {startups?.activeStatus?.status === "live" ? (
                    <>
                      {isInterested == null && (
                        <div
                          className={`fade-transition ${
                            isVisible ? "visible" : "hidden"
                          }`}
                        >
                          <div className="md:h-[94px]  flex flex-col md:flex-row p-[22px] items-center justify-between download mb-[45px] transition-opacity duration-500">
                            <div className="flex justify-between">
                              <h4 className="text-[16px] flex justify-start md:text-[26px] text-[#202054] font-[400] font-[Inter] leading-[41.47px]">
                                Are you interested in this startup?
                              </h4>
                              <AiOutlineClose
                                size={20}
                                onClick={handleClose}
                                className="md:hidden"
                              />
                            </div>

                            <div className="flex gap-4 w-full md:w-[350px] justify-start">
                              <span>
                                <input
                                  type="radio"
                                  name="interest"
                                  value="yes"
                                  className="accent-[#202054]"
                                  onChange={() => setIsInterestedAdd("yes")}
                                  // checked={ isInterestedadd === 'yes' || isInterested === 'yes'}
                                />{" "}
                                <label className="text-[#828F99] text-lg md:text-xl not-italic font-normal leading-[22px]">
                                  Yes
                                </label>
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="interest"
                                  value="no"
                                  className="accent-[#202054]"
                                  onChange={() => setIsInterestedAdd("no")}
                                  // checked={isInterestedadd === 'no' ||isInterested === 'no'}
                                />{" "}
                                <label className="text-[#828F99] text-lg md:text-xl not-italic font-normal leading-[22px]">
                                  No
                                </label>
                              </span>
                              <span>
                                <input
                                  type="radio"
                                  name="interest"
                                  value="maybe"
                                  className="accent-[#202054]"
                                  // checked={isInterestedadd === 'maybe' ||isInterested === 'maybe'}
                                  onChange={() => setIsInterestedAdd("maybe")}
                                />{" "}
                                <label className="text-[#828F99] text-lg md:text-xl not-italic font-normal leading-[22px]">
                                  Maybe
                                </label>
                              </span>
                            </div>
                            <div className="flex items-center justify-end w-full md:w-fit gap-4 pt-2">
                              <button
                                onClick={addInterest}
                                className="w-[109px] h-[35px] border opacity-[0.949999988079071] rounded-[7.384px] border-solid border-[#205] bg-[#202054] text-[#fafafa]"
                              >
                                Submit
                              </button>
                              <AiOutlineClose
                                size={20}
                                onClick={handleClose}
                                className="hidden md:block"
                              />
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    ""
                  )}

                  <div className=" flex flex-col gap-14">
                    <div className="  bg-[#ffffff] p-[22px]  w-full md:h-[167px] rounded-[10px]">
                      <div className=" text-[#202054]  pb-[16px] ">
                        <h4 className=" text-[27.65px] font-[400] font-[Inter] leading-[41.47px]">
                          Deal terms
                        </h4>
                      </div>
                      <div className="md:flex md:text-start text-center justify-left gap-4 items-center ">
                        <div className="border-[2px] md:mb-0 mb-[20px] md:w-[165px] h-[69px] bg-[#E3E9FE] border-[#C6D2FD] px-[15px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          <p className="  pt-[15px] pb-[5px] font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                            Type
                          </p>
                          <h5 className="font-[Inter] font-[400] leading-[18.75px] text-[#252525]">
                            {startups?.dealTerms?.typeOfSecurity &&
                              startups.dealTerms.typeOfSecurity.toUpperCase()}
                          </h5>
                        </div>
                        <div className="border-[2px] md:mb-0 mb-[20px] md:w-[165px] h-[69px] bg-[#E3E9FE] border-[#C6D2FD] px-[15px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          <p className="  pt-[15px] pb-[5px] font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                            Revenue
                          </p>
                          <h5 className="font-[Inter] font-[400] leading-[18.75px] text-[#252525]">
                            ₹ {formatValuation(startups?.revenue)}
                          </h5>
                        </div>

                        <div className="border-[2px] md:mb-0 mb-[20px] md:w-[165px] h-[69px] bg-[#E3E9FE] border-[#C6D2FD] px-[15px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          <p className="  pt-[15px] pb-[5px] font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                            Minimum Investment
                          </p>
                          <h5 className="font-[Inter] font-[400] leading-[18.75px] text-[#252525]">
                            ₹{" "}
                            {formatValuation(
                              startups?.dealTerms?.minimumInvestment
                            )}{" "}
                          </h5>
                        </div>
                        <div className="border-[2px] md:mb-0 mb-[20px] md:w-[165px] h-[69px] bg-[#E3E9FE] border-[#C6D2FD] px-[15px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          <p className="  pt-[15px] pb-[5px] font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                            Total Raised
                          </p>
                          <h5 className="font-[Inter] font-[400] leading-[18.75px] text-[#252525]">
                            ₹{" "}
                            {formatValuation(Math.ceil(startups?.totalRaised))}
                          </h5>
                        </div>
                        <div className="border-[2px] md:mb-0 mb-[20px] md:w-[165px] h-[69px] bg-[#E3E9FE] border-[#C6D2FD] px-[15px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          <p className="  pt-[15px] pb-[5px] font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                            Target
                          </p>
                          <h5 className="font-[Inter] font-[400] leading-[18.75px] text-[#252525]">
                            ₹{" "}
                            {formatValuation(startups?.dealTerms?.targetAmount)}
                          </h5>
                        </div>
                        <div className="border-[2px] md:mb-0 mb-[20px] md:w-[165px] h-[69px] bg-[#E3E9FE] border-[#C6D2FD] px-[15px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                          <p className="  pt-[15px] pb-[5px] font-[Inter] font-[400] text-[13.33px]  leading-[15.62px] text-[#828F99]">
                            Valuation
                          </p>
                          <h5 className="font-[Inter] font-[400] leading-[18.75px] text-[#252525]">
                            ₹ {formatValuation(startups?.dealTerms?.valuation)}
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* PdF slider */}

                    <div className="bg-[#ffffff] px-[23px] block w-full md:h-[811px] rounded-[10px] transform transition-all duration-300 hover:translate-y-[-3px]">
                      <div className="mb-[20px] flex justify-between pt-[22px]">
                        <h4 className="text-[27.65px] font-[400] leading-[32.4px] font-[Inter] text-[#202054] ">
                          Pitchdeck
                        </h4>

                        <a
                          className="hidden md:block"
                          target="_open"
                          href={`https://www.bizdateup.com/v1/pitch/${startups.pitch}`}
                        >
                          <BiLinkExternal
                            size={25}
                            className="text-[#777676]"
                          />
                        </a>
                      </div>
                      <div className="hidden md:block">
                        {startups?.pitch ? <Pdf data={startups?.pitch} /> : ""}
                      </div>
                      <div className="md:hidden mb-[20px]">
                        <a
                          target="_open"
                          href={`https://www.bizdateup.com/v1/pitch/${startups.pitch}`}
                        >
                          <button
                            className="bg-[#202054] p-3 items-center text-[#ffffff] rounded-[10px] "
                            // onClick={handleDownload}
                          >
                            Download
                          </button>
                        </a>
                      </div>
                    </div>

                    {/* meet the team */}

                    <div className="  w-[100%] rounded-[10px]">
                      <div className=" text-[#202054] mb-[30.93px]">
                        <h4 className=" text-[27.65px] font-[400] leading-[32.4px] font-[Inter]  ">
                          Meet the Team
                        </h4>
                      </div>
                      <div className="">
                        <Community
                          community={JSON.parse(JSON.stringify(team))}
                        />
                      </div>
                    </div>

                    {/* events */}
                    {startups?.activeStatus?.status === "live" ? (
                      <>
                        {Events?.some((item) =>
                          item.url?.startsWith("https://")
                        ) ? (
                          <div className="w-[100%] md:h-[246px] md:pb-0 pb-2 rounded-[10px] bg-white relative">
                            <div>
                              <Slider
                                {...settings}
                                className="md:h-[200px] h-[150px] overflow-hidden"
                              >
                                {Events?.map((item, i) => (
                                  <div
                                    className="relative overflow-hidden"
                                    key={i}
                                  >
                                    <div className="flex justify-start px-[22px] pt-[22px] md:h-[199px] rounded-b-[20px] rounded-bl-[25px] rounded-[10px] bg-[#68b0f8]">
                                      <div className="md:w-[60%]">
                                        <h4 className="font-[Inter] font-[400] leading-[41.47px] text-[#ffffff] text-[27.65px] pb-[5px]">
                                          Events
                                        </h4>
                                        <p className="font-[Inter] md:w-[459px] md:pb-0 pb-3 font-[400] leading-[18.75px] text-[#252525] text-[16px]">
                                          Participate in our exclusive events
                                          <br />
                                          {moment(item.date)
                                            .utc()
                                            .format("YYYY-MM-DD")}
                                          <br />
                                          {item.time}
                                          <br />
                                          {item.url}
                                        </p>
                                      </div>

                                      <div className="md:flex hidden justify-center items-center">
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
                                ))}
                              </Slider>
                              <Link
                                to="https://chat.whatsapp.com/KI3jbUdxUeY4WfI8SgtdqC"
                                className="z-30"
                              >
                                <div className="flex justify-between items-center px-[25px] pt-[15px]">
                                  <div>
                                    <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                                      Join now
                                    </h4>
                                  </div>
                                  <div className="">
                                    <SlArrowRightCircle size={16} />
                                  </div>
                                </div>
                              </Link>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}
                      </>
                    ) : (
                      ""
                    )}

                    {/* about us */}

                    <div className="  bg-[#ffffff] w-[full] md:h-[594px]  rounded-[10px] px-[28px]">
                      <div className=" text-[#202054] mb-[40px]">
                        <h4 className=" text-[27.65px] font-[400] leading-[41.47px] pt-[26px]">
                          About {startups?.registeredCompanyName}
                        </h4>
                      </div>
                      <div className=" ">
                        <div className="border-b-[2px] w-[100%] md:h-[65px] ">
                          <div className=" ">
                            <p className="font-[Inter] font-[400] text-[13.33px] text-[#828F99] leading-[15.62px]  pb-[5px]">
                              Registered Name
                            </p>
                            <h5 className="font-[Inter] font-[400] text-[16px] leading-[18.75px] text-[#252525] pb-[20px]">
                              {startups?.registeredStartupName !== ""
                                ? startups?.registeredStartupName
                                : startups?.registeredCompanyName}
                            </h5>
                            {/* <h5>{}</h5> */}
                          </div>
                        </div>
                        <div className="border-b-[2px] w-[100%] md:h-[75px] ">
                          <div className=" ">
                            <p className="font-[Inter] font-[400] text-[13.33px] text-[#828F99] leading-[15.62px] pt-[18px] pb-[5px]">
                              Founded
                            </p>
                            <h5 className="font-[Inter] font-[400] text-[16px] leading-[18.75px] text-[#252525] pb-[20px]">
                              15/05/2016
                            </h5>
                          </div>
                        </div>
                        <div className="border-b-[2px] w-[100%] md:h-[75px] ">
                          <div className=" ">
                            <p className="font-[Inter] font-[400] text-[13.33px] text-[#828F99] leading-[15.62px] pt-[18px] pb-[5px]">
                              Employees
                            </p>
                            <h5 className="font-[Inter] font-[400] text-[16px] leading-[18.75px] text-[#252525] pb-[20px]">
                              {startups?.teamCapacity}
                            </h5>
                          </div>
                        </div>
                        <div className="border-b-[2px] w-[100%] md:h-[75px] ">
                          <div className=" ">
                            <p className="font-[Inter] font-[400]  text-[13.33px] text-[#828F99] leading-[15.62px] pt-[18px] pb-[5px]">
                              Website
                            </p>
                            <h5 className="font-[Inter] font-[400] break-words ... text-[16px] leading-[18.75px] text-[#252525] pb-[20px]">
                              {startups?.website}
                            </h5>
                          </div>
                        </div>
                        <div className="border-b-[2px] w-[100%] md:h-[75px] ">
                          <div className=" ">
                            <p className="font-[Inter] font-[400] text-[13.33px] text-[#828F99] leading-[15.62px] pt-[18px] pb-[5px]">
                              Linkedin
                            </p>
                            <h5 className="font-[Inter] font-[400] text-[16px] leading-[18.75px] text-[#0A66C2] pb-[20px]">
                              {" "}
                              <a
                                href={startups?.companyLinkedinUrl}
                                target="_blank"
                              >
                                <BsLinkedin size={25} />
                              </a>
                            </h5>
                          </div>
                        </div>
                        <div className=" w-[100%] h-[69px] ">
                          <div className=" ">
                            <p className="font-[Inter] font-[400] text-[13.33px] text-[#828F99] leading-[15.62px] pt-[18px] pb-[5px]">
                              Headquarters
                            </p>
                            <h5 className="font-[Inter] font-[400] text-[16px] leading-[18.75px] text-[#252525] pb-[20px]">
                              {startups?.companyBased}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*Documents  */}
                    <div className="w-[100%] rounded-[10px]">
                      {/* <div className="  mb-[30px] ">
                      <h4 className=" text-[27.65px] font-[Inter] font-[400] leading-[32.4px] text-[#202054]">
                        Documents
                      </h4>
                    </div>

                    <div className="md:flex md:flex-wrap  items-center justify-start  ">
                      {startups?.dueDiligenceFiles?.map((el, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            downloadTxtFile(
                              startups?.dueDiligenceFiles[index].name
                            );
                          }}
                        >
                          <div className=" flex md:mb-0 mb-[20px]  border-[2px] px-[22px] pt-[22px] bg-[#E7F4EC] border-[#92DBAB] mr-[25px] w-[210px] h-[79px] rounded-[10px]">
                            <div className="w-[25px] h-[25px]">
                              <FaFileDownload size={30} />
                            </div>
                            <div className="ml-[12px]">
                              <p className="font-[Inter] font-[400] text-[#252525] leading-[18.75px] ">
                                Due Diligence
                              </p>
                              <h5 className="pt-[3px] font-[Inter] font-[400] text-[#828F99] text-[9px] leading-[10.55px]"></h5>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div> */}

                      <div className="w-full md:flex md:justify-between  md:h-[93px] download p-6 transform transition-all duration-300 hover:translate-y-[-3px] transition-left-once">
                        <div className="flex gap-2">
                          <img src={pdf} alt="" className="w-[35px] h-[35px]" />
                          <div className="mt-[7px]">
                            <label className=" flex items-center text-[#202054] text-base not-italic font-normal leading-[normal] font-[Inter]">
                              Due Diligence{" "}
                              <div className="iicon text-[#828F99]  cursor-pointer  ml-2 relative">
                                <div className="tooltip ">
                                  Due diligence is an investigation, audit, or
                                  review performed to confirm facts or details
                                  of a matter under consideration.
                                </div>
                                <AiOutlineInfoCircle />
                              </div>
                            </label>
                            <p className="text-[#252525] text-[13.33px] not-italic font-normal leading-[18px] font-[Inter]">
                              Download our all the documents in a single click
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-end mt-1 md:block md:mt-0">
                          <button
                            onClick={() => {
                              downloadTxtFile(
                                startups?.dueDiligenceFiles[
                                  startups?.dueDiligenceFiles?.length - 1
                                ]?.name
                              );
                            }}
                            className="w-[110px] h-[39px] text-white text-base not-italic font-normal leading-[normal] rounded-[5px] bg-[#202054] font-[Inter]"
                          >
                            Download
                          </button>
                        </div>
                      </div>

                      {/* faq */}
                      {faqData.length > 0 ? (
                        <div className="  bg-[#ffffff] px-[30px] md:mt-[50px] mt-[20px] pb-[60px] w-[100%] md:mb-0 mb-[40px] rounded-[10px] transition-right-once">
                          <div className="pt-[28px] pb-[30px]">
                            <h4 className="font-[Inter] font-[400] text-[#202054] leading-[41.47px] text-[27.65px] ">
                              FAQs
                            </h4>
                          </div>
                          {/* <Faq /> */}

                          {/* <Fragment>
                        {startups?.faq?.map((accordion) => (
                          <Accordion
                            key={accordion._id}
                            open={open === accordion._id}
                          >
                            <AccordionHeader
                              onClick={() => handleOpen(accordion._id)}
                            >
                              <div className=" text-start pb-[10px]">
                                <p className=" text-[#252525] md:text-[16px] text-[15px] font-[400] leading-[18.75px] font-[Inter]">
                                  {accordion.question}
                                </p>
                              </div>
                            </AccordionHeader>
                            <AccordionBody>
                              <div className="text-start py-[10px]">
                                <p className=" text-[#828F99] md:text-[15px] text-[14px] font-[400] leading-[18.75px] font-[Inter] tracking-[0.2px]">
                                  {accordion.answer}
                                </p>
                              </div>
                            </AccordionBody>
                          </Accordion>
                        ))}
                      </Fragment> */}
                          <Faq faqData={faqData} />
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer2 />
        </>
      )}
    </>
  );
};

export default StartupDetail;
