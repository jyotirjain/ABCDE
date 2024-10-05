import React, { seReducer, useReducer } from "react";
import Assignment from "../../assets/images/assignment.png";
import Signup from "../../assets/images/signup.png";
import moment from "moment";
import "moment-timezone";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { dateRedable } from "../../script/helper";
import {
  IoIosArrowDown,
  IoIosArrowUp,
  IoIosInformationCircleOutline,
} from "react-icons/io";
import { SlArrowRightCircle } from "react-icons/sl";
import { useNavigate } from "react-router";
// import JSZip from "jszip";
import { saveAs } from "file-saver";
import JSZip from "jszip";
import { FiExternalLink } from "react-icons/fi";
function Listofstrtup(props) {
  const endpoint = process.env.REACT_APP_TEST_URL;
  const investedStartups = props.data;
  const legaldocs = props.legal;

  const initialState = props.data.reduce((acc, data) => {
    acc[data._id] = false;
    return acc;
  }, {});

  const navigate = useNavigate();

  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        return { ...state, [action.payload]: !state[action.payload] };
      default:
        return state;
    }
  }

  const [itemStates, dispatch] = useReducer(reducer, initialState);

  function handlesubmit(id) {
    dispatch({ type: "toggle", payload: id });
  }

  function formatNumberWithDecimal(value) {
    // if (typeof value === "number") {
    // Check if the number has more than 1 decimal place
    if (value % 1 !== 0) {
      // If it has more than 1 decimal place, format with 2 decimal places
      return value.toFixed(2);
    } else {
      // If it has 0 or 1 decimal place, format with 1 decimal place
      return value.toFixed(1);
    }
    // } else {
    // Handle invalid input, e.g., non-numeric values
    // return "Invalid Number";
    // }
  }

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${formatNumberWithDecimal(value / 10000000)}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${formatNumberWithDecimal(value / 100000)}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${formatNumberWithDecimal(value / 1000)}K`;
    } else {
      return value;
    }
  }
  const handleInvestClick = async (id) => {
    const data = {
      id: id,
    };
    navigate("/startup/startupondetails/" + id, { state: data });
  };

  function calculateCurrentInvestment(startup) {
    const currentValuation = startup?.portfolio?.currentValuation || 0;
    const investedAmount = startup?.investedAmount || 0;
    const investedValuation = startup?.dealTerms?.valuation || 0;

    const currentInvestment = formatNumberWithDecimal(
      (currentValuation * investedAmount) / investedValuation
    );

    return currentInvestment;
  }

  function increasevaluation(startup) {
    const currentValuation = startup?.portfolio?.currentValuation || 0;
    const investedValuation = startup?.dealTerms?.valuation || 0;

    return formatNumberWithDecimal(
      100 * (currentValuation / investedValuation) - 100
    );
  }

  function numberOfShares(startup) {
    const investedamount = startup?.investedAmount || 0;
    const sharesprice = startup?.portfolio?.shareprice || 0;

    return sharesprice == 0
      ? null
      : formatNumberWithDecimal(investedamount / sharesprice);
  }

  function discountvalue(startup) {
    const discount = startup?.dealTerms?.discount || 0;
    const investedValuation = startup?.dealTerms?.valuation || 0;

    return discount == 0 ? null : investedValuation * (discount / 100);
  }

  const numb = -92.111;
  return (
    <div className="w-[100%]">
      <div className=" shadow-[0px_1px_8px_rgba(0,0,0,0.15)] rounded-[10px] bg-white py-5 px-5">
        <h2 className="not-italic font-normal text-[19.33px] leading-[23px] text-[#252525] font-[Inter]">
          Startups you have invested in
        </h2>
        <div>
          {investedStartups.map((data, index) => {
            const currentInvestment = Math.round(
              calculateCurrentInvestment(data)
            );
            const increase = Math.abs(increasevaluation(data));

            const numOfShares = Math.round(numberOfShares(data));

            const discountvaluation =
              data.dealTerms.valuation - Math.ceil(discountvalue(data));

            function legalurl() {
              const legalDocsArray = legaldocs.legal; // Assuming legaldocs is an object with a property 'legal' which is an array

              const url = legalDocsArray.map((document, index) => {
                return `https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${document}`;
              });
              return url;
            }
            // const legalDocUrls = legalurl();
            function fileURLs() {
              const certificateURLs = data?.portfolio?.certificates.map(
                (certificate) =>
                  `https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${certificate.key}`
              );

              const url = [
                ...certificateURLs,

                `https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${data?.legalArray}`,
              ];

              console.log("File URLs:", url); // Add this line to log the URLs

              return url;
            }

            async function downloadFilesAsZip() {
              const zip = new JSZip();

              // Fetch and add each file to the zip
              for (const url of fileURLs()) {
                const response = await fetch(url);
                const data = await response.blob();
                const fileName = getFileNameFromURL(url);

                zip.file(fileName, data);
              }

              // Generate the zip file
              zip.generateAsync({ type: "blob" }).then(function (content) {
                // Save the zip file using FileSaver.js
                saveAs(content, "files.zip");
              });
            }
            async function downloadlegalAsZip() {
              const zip = new JSZip();

              // Fetch and add each file to the zip
              for (const url of legalurl()) {
                const response = await fetch(url);
                const data = await response.blob();
                const fileName = getFileNameFromURL(url);

                zip.file(fileName, data);
              }

              // Generate the zip file
              zip.generateAsync({ type: "blob" }).then(function (content) {
                // Save the zip file using FileSaver.js
                saveAs(content, "files.zip");
              });
            }
            // Helper function to get file name from URL
            function getFileNameFromURL(url) {
              const urlParts = url.split("/");
              return urlParts[urlParts.length - 1];
            }

            return (
              <div
                className="box-border relative  border rounded-[9.61586px] border-solid border-[#DDDDDD] bg-[#ffffff] px-4 py-4 my-5 "
                key={index}
              >
                <div className="flex  justify-between">
                  <div className="flex gap-4 md:items-center">
                    <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[4.808px] border-[1.016px] border-solid border-[#DDD]">
                      <img
                        src={endpoint + "/v1/logo/" + data.logo}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>

                    <span className="flex flex-col md:flex md:flex-row gap-[6px] md:gap-2 md:items-center">
                      <h2 className=" text-[#2F2F2F] text-[18px] md:text-xl not-italic font-normal leading-[16.061px] font-[Inter]">
                        {data.registeredCompanyName}
                      </h2>
                      <label className="text-[#252525] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] rounded-[10px] bg-[#eeeeee] w-fit h-[15px]  md:h-[17.876px] flex justify-center items-center font-[Inter] px-2">
                        {data?.dealTerms?.typeOfSecurity
                          ? data?.dealTerms?.typeOfSecurity.toUpperCase()
                          : "-"}
                      </label>
                      <FiExternalLink
                        color="#a7a5a5"
                        onClick={() => handleInvestClick(data?._id)}
                      />
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {data.portfolio?.profitable == "yes" ? (
                      <label className="bg-[#DCFCE7] inline-flex h-[26.344px] justify-center items-center gap-2 shrink-0 px-[9px] py-0.5 text-green-900 text-center text-[10px]  md:text-[13px] not-italic font-normal leading-5 font-[Inter] rounded-[5px]">
                        Profitable
                      </label>
                    ) : (
                      ""
                    )}
                    <button className=" flex ">
                      <IoIosArrowDown
                        onClick={() => handlesubmit(data._id)}
                        size={18}
                        className={` transition-all duration-500  ${
                          itemStates[data._id] ? "rotate-180" : ""
                        }`}
                      ></IoIosArrowDown>
                    </button>
                  </div>
                </div>

                <div className="">
                  <div
                    className={
                      data?.events?.some((item) =>
                        item.url?.startsWith("https://")
                      )
                        ? "grid  mt-6 grid-cols-2 md:grid md:grid-cols-4 md:ml-[50px]  mb-10  md:gap-x-24  gap-y-10"
                        : "grid  mt-6 grid-cols-2 md:grid md:grid-cols-4 md:ml-[50px]    md:gap-x-24  gap-y-10"
                    }
                  >
                    <div className="flex items-start w-full ">
                      <div className="flex flex-col ">
                        <div className="flex items-center">
                          <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            Invested Amount
                          </p>
                          <span className="flex iicon ml-2 relative text-[13px] not-italic font-normal leading-[16.061px] mt-1 text-[#828f99] font-[Inter] ">
                            <div className="tooltip   bottom-[0px]  ">
                              Amount you have invested in this startup.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                        <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                          {console.log(data?.investedDetails)}₹
                          {data.investedDetails.reduce((total, investment) => {
                            console.log(investment); // Optional: Log each investment for debugging
                            return total + investment.investedAmount;
                          }, 0)}
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start  ">
                      <div className="flex flex-col md:w-full">
                        <p className="flex w-max  text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                          Current Amount
                          <span className="flex iicon ml-2 items-center relative text-[13px] not-italic font-normal  leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className=" tooltip hidden  md:block bottom-[0px]  ">
                              Current value of investment in this startup.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </p>
                        <label className="not-italic font-normal  text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                          {currentInvestment
                            ? `₹${formatValuation(currentInvestment)}`
                            : "-"}{" "}
                          {/* <span className="text-[#22C55E] ml-1">2%</span> */}
                        </label>
                      </div>
                    </div>
                    <div className="flex items-start w-full ">
                      <div className="flex flex-col">
                        <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                          Per Share Price
                        </p>
                        <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                          {data.portfolio?.shareprice
                            ? data.portfolio?.shareprice
                            : "-"}
                        </label>
                      </div>

                      <span className=" flex iicon ml-2 items-center relative text-[13px] not-italic  font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                        <div className="hidden md:flex tooltip  ">
                          Per Share Price at the time of Investment.
                        </div>

                        <IoIosInformationCircleOutline />
                      </span>
                    </div>
                    <div className="flex items-start w-full mb-4 md:mb-0 ">
                      <div className="flex flex-col">
                        <p className="flex text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                          Date{" "}
                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px]  not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip  left-[-120px] bottom-[0px]  ">
                              Date of investment received
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </p>
                        <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                          {data?.investedDate
                            ? moment(data?.investedDate)
                                .utc()
                                .format("YYYY-MM-DD")
                            : "-"}
                        </label>
                      </div>
                    </div>

                    {itemStates[data._id] && (
                      <>
                        <div className="flex items-start w-full ">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              Invested Valuation
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data.dealTerms?.valuation
                                ? `₹${formatValuation(
                                    data.dealTerms?.valuation
                                  )}`
                                : "-"}
                              <br />
                              {data.dealTerms?.discount
                                ? `(Disc val- ₹${formatValuation(
                                    discountvaluation
                                  )})`
                                : null}
                            </label>
                          </div>
                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px]  not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip   bottom-[0px]  ">
                              Valuation of this startup when your investment was
                              received.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>{" "}
                        </div>
                        <div className="flex items-start w-full ">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              Current Valuation
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data?.portfolio?.currentValuation
                                ? `₹
                              ${formatValuation(
                                data?.portfolio?.currentValuation
                              )}`
                                : "-"}{" "}
                              {/* <span className="text-[#22C55E] ml-1">2%</span> */}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip hidden md:flex  bottom-[0px]  ">
                              Current (Updated) valuation of the startup.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                        <div className="flex items-start w-full ">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              Expected Valuation
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data?.portfolio?.expectedValuation
                                ? `₹${formatValuation(
                                    data?.portfolio?.expectedValuation
                                  )}`
                                : "-"}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip   bottom-[0px]  ">
                              Valuation projected by our team considering
                              upcoming events in the startup.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                        <div className="flex items-start w-full ">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              Increase %
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {increase ? `${increase}%` : "-"}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip hidden  md:block left-[-120px]  bottom-[0px]  ">
                              Percentage of change in the valuation from the
                              investment.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                        {/* <div className="flex items-start">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              Invested Revenue
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data?.revenue
                                ? `₹${formatValuation(data?.revenue)}`
                                : "-"}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip hidden md:flex  bottom-[0px]  ">
                              Revenue of startup when your investment was done.
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div> */}
                        <div className="flex items-start">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              Current revenue{" "}
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data?.portfolio?.currentRevenue
                                ? `₹${formatValuation(
                                    data?.portfolio?.currentRevenue
                                  )}`
                                : "-"}

                              {/* <span className="text-[#22C55E] ml-1">2%</span> */}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 items-center relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip hidden  md:block  bottom-[0px]  ">
                              Current revenue of the startup
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              ARR{" "}
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data?.portfolio?.ARR
                                ? `₹${formatValuation(data?.portfolio?.ARR)}`
                                : "-"}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 mt-[1px] relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip   bottom-[0px]  ">
                              Annual Recurring Revenue of the startup
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                        <div className="flex items-start">
                          <div className="flex flex-col">
                            <p className="flex w-max text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                              MRR{" "}
                            </p>
                            <label className="not-italic font-normal text-[14px] md:text-base leading-4 text-[#252525] font-[Inter]">
                              {data?.portfolio?.MRR
                                ? `₹${formatValuation(data?.portfolio?.MRR)}`
                                : "-"}
                            </label>
                          </div>

                          <span className="flex iicon ml-2 mt-[1px] relative text-[10px] md:text-[13px] not-italic font-normal leading-[16.061px] text-[#828f99] font-[Inter]">
                            <div className="tooltip hidden md:block left-[-120px] bottom-[0px]  ">
                              Monthly Recurring Revenue of the startup
                            </div>

                            <IoIosInformationCircleOutline />
                          </span>
                        </div>
                      </>
                    )}
                  </div>
                  {itemStates[data._id] && (
                    <div
                      className={
                        data?.events?.some((item) =>
                          item.url?.startsWith("https://")
                        )
                          ? "mb-14 md:mb-8 md:ml-[50px]"
                          : "mb-6 md:mb-4 md:ml-[50px]"
                      }
                    >
                      <div className="mt-8">
                        <p className="text-[#828F99] text-[10px] md:text-sm not-italic font-normal leading-[16.061px] font-[Inter]">
                          Expected time for the startup to raise next round is
                          <span className="font-bold">
                            {" "}
                            {data?.portfolio?.nextRound}
                          </span>{" "}
                          months.
                        </p>
                        <div className="grid md:grid-cols-3 w-full mt-7 gap-y-4">
                          {/* <button
                            onClick={() => handleInvestClick(data?._id)}
                            className="flex w-full md:w-[198px] h-[30px] justify-center items-center gap-2 shrink-0 text-[#88888A] text-center text-xs not-italic font-medium leading-5 px-[9px] py-0.5 rounded-[5px] font-[Inter] bg-[#f2f2f2]  "
                          >
                            VIEW MORE DETAILS
                          </button> */}

                          <a>
                            <button
                              onClick={() => downloadlegalAsZip()}
                              className="flex w-full md:w-[198px] h-[30px] justify-center items-center gap-2 shrink-0 text-[#88888A] text-center text-xs not-italic font-normal leading-5 px-[9px] py-0.5 rounded-[5px] font-[Inter] bg-[#f2f2f2] "
                            >
                              GO TO WEBSITE
                            </button>
                          </a>

                          {((data?.portfolio?.certificates &&
                            data?.portfolio?.certificates?.length !== null &&
                            data?.portfolio?.certificates?.length !== 0) ||
                            (data?.legalArray?.length !== null &&
                              data?.legalArray?.length !== 0 &&
                              data?.legalArray[0] !== "")) && (
                            <button
                              onClick={() => downloadFilesAsZip()}
                              className="flex w-full md:w-[198px] h-[30px] justify-center items-center gap-2 shrink-0 text-[#fafafa] text-center text-xs not-italic font-normal leading-5 px-[9px] py-0.5 rounded-[5px] font-[Inter] bg-[#88888A] "
                            >
                              DOWNLOAD AGREEMENT
                            </button>
                          )}
                        </div>
                        <p className="text-[#A0A0A0] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter] mt-8 ">
                          <span className="text-[#4D4D4D]">Exit Strategy:</span>{" "}
                          {data?.portfolio?.exitStrategy}
                        </p>
                        {/* <p className="text-[#A0A0A0] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter] mt-5 ">
                          <span className="text-[#4D4D4D]">
                            Updated on : 22/09/2023
                          </span>{" "}
                        </p> */}
                      </div>
                    </div>
                  )}
                </div>
                {data?.events?.some((item) =>
                  item.url?.startsWith("https://")
                ) ? (
                  <div className="flex bg-[#E9EEFF] md:h-[36px] w-full items-center absolute bottom-0 left-0 rounded-b-[10px] md:pl-[65px] p-2 md:pr-[51px]  ">
                    {data?.events?.some((item) =>
                      item.url?.startsWith("https://")
                    ) ? (
                      <div className="flex flex-col md:flex-row md:justify-between items-center w-full ">
                        <div className="flex items-center w-full">
                          <label className="text-[#252525] mr-1 text-[10px] md:text-[13.5px] not-italic font-normal leading-[normal] font-[Inter]">
                            {data?.events[data.events.length - 1]?.title}
                          </label>
                          <label className="flex md:hidden items-center gap-[2px] text-[#393939] text-[10px] md:text-sm not-italic font-normal leading-[normal] font-[Inter]">
                            {" "}
                            <AiOutlineClockCircle />
                            {data?.events[data.events.length - 1]?.time}
                          </label>
                          <label className="flex md:hidden items-center gap-1 text-[#393939] text-[8px] md:text-sm not-italic font-normal leading-[normal] font-[Inter]">
                            <FaRegCalendarAlt />
                            {moment(data?.events[data.events.length - 1]?.date)
                              .utc()
                              .format("YYYY-MM-DD")}
                          </label>
                        </div>

                        <div className="flex w-full  md:w-[400px] gap-4">
                          <label className=" hidden md:flex  items-center gap-1 text-[#393939] text-sm not-italic font-normal leading-[normal] font-[Inter]">
                            {" "}
                            <AiOutlineClockCircle />
                            {data?.events[data.events.length - 1]?.time}
                          </label>
                          <label className="hidden md:flex items-center gap-1 text-[#393939] text-[13px] not-italic font-normal leading-[normal] font-[Inter]">
                            <FaRegCalendarAlt />
                            {moment(data?.events[data.events.length - 1]?.date)
                              .utc()
                              .format("YYYY-MM-DD")}
                          </label>
                          <a
                            target="_blank"
                            href={data?.events[data.events.length - 1]?.url}
                            className="inline-flex w-full md:w-fit mt-1 h-[25px] justify-center items-center gap-2 shrink-0 text-[#010102] text-center text-xs not-italic font-normal leading-5 border px-[9px] py-0.5 rounded-[5px] border-solid border-[#C4C4C4] bg-white font-[Inter]"
                          >
                            Join now
                          </a>
                        </div>
                      </div>
                    ) : null}
                  </div>
                ) : (
                  ""
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Listofstrtup;
