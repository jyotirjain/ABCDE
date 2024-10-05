import React, { useEffect, useState } from "react";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import API from "../../Apis/investor";
import { dateRedable } from "../../script/helper";
import moment from 'moment'; import 'moment-timezone'; 
function Transaction() {
  const [investment, setInvestment] = useState([]);
  const endpoint = process.env.REACT_APP_TEST_URL;
  // console.log("🚀 ~ file: startupupdate.js:8 ~ Startupupdate ~ startsUpdates:", startsUpdates)

  const fetchInvestment = async () => {
    try {
      const response = await API.investmentByInvestor({
        investor: localStorage.getItem("authRefInvestor"),
      });
      setInvestment(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchInvestment();
  }, []);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
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

  function getLabelByCompanyName(companyName) {
    const ccdsCompanies = ["Myints", "Bizdateup Technologies", "Revamp Moto"];
    const ccpsCompanies = [
      "ZEVO",
      "Armour Heavy",
      "Tutti Frutti Interactive",
      "Paykio",
      "Immersive Labz",
      "PDRL",
      "Quantel",
    ];
    const equityCompanies = ["TWYN", "Subhag Healthcare", "InfinityX"];

    if (ccdsCompanies.includes(companyName)) {
      return "CCDS";
    } else if (ccpsCompanies.includes(companyName)) {
      return "CCPS";
    } else if (equityCompanies.includes(companyName)) {
      return "Equity";
    } else {
      return "Startups";
    }
  }

  return (
    <div>
      <Navbar />
      <div className="flex justify-center pb-4 md:py-10 bg-[#fafafa]">
        <div className=" w-[90%] md:max-w-[1220px] xl:w-[70%]">
          <div onClick={goBack}>
            <h2 className="flex  items-center gap-3 relative w-auto h-[2.56rem] not-italic font-normal text-[20px] md:text-[27.65px] leading-[41px] text-[#202054] mb-2 md:mb-5 pt-2.5">
              <FiArrowLeft /> Transaction History
            </h2>
          </div>
          <div className=" w-full md:max-w-[1560px]  flex flex-col gap-4  rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)] bg-white p-4 md:p-6 ">
            {/* <div className="md:flex md:flex-row flex flex-col gap-3 md:justify-between h-[126px] md:h-[88px] shrink-0 border rounded-[9.616px] border-solid border-[#DDD] px-5 py-4  md:p-5">
              <div className="flex gap-4">
                <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[4.808px] border-[1.016px] border-solid border-[#DDD]">
                  <img src="" alt="" className="w-full object-contain" />
                </div>
                <div className="">
                  <div className="flex flex-col gap-2 py-1">
                    <h2 className=" flex justify-start  not-italic font-normal text-[16px] md:text-xl leading-4 text-[#252525] font-[Inter]">
                      PDRL
                    </h2>
                    <p className="text-[#828F99] text-[12px] md:text-[13.33px] not-italic font-normal leading-[normal] font-[Inter]">
                      Drone tech
                    </p>
                  </div>
                  {/* <div className="flex md:hidden items-center  ">
                    <div
                      className="w-[60px] md:w-[88px] flex justify-center items-center h-7 shrink-0 rounded-[10px] bg-[#DCFFDC] text-[#179942]"
                      //  ${
                      //   item.status === "accepted"
                      //     ? "bg-[#DCFFDC] text-[#179942]" // Green color for accepted
                      //     : item.status === "rejected"
                      //     ? "bg-[#FFD7D7] text-[#C62121]" // Red color for rejected
                      //     : item.status === "pending"
                      //     ? "bg-[#FFFCCE] text-[#BF9000]" // Yellow color for pending
                      //     : "bg-[#DCFFDC] text-[#179942]" // Default colors (you can change this to your preference)
                      // }
                    >
                      <label className="text-[12px]   md:text-base not-italic font-normal font-[Inter] leading-[16.061px]">
                        Success
                      </label>
                    </div>
                    
                  </div> */}
            {/* </div>
              </div>
              <div className="flex justify-between md:w-[75%] h-fit">
                <div className=" flex flex-col md:block">
                  <p className="text-[#828F99] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                    Mode of payment
                  </p>
                  <label className="text-[#252525] text-[12px] md:text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                    Online{" "}
                  </label>
                </div>
                <div className="flex flex-col md:block">
                  <p className="text-[#828F99] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                    Amount{" "}
                  </p>
                  <label className="text-[#252525] text-[12px] md:text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                    ₹40000
                  </label>
                </div>
                <div className="flex flex-col md:block">
                  <p className="text-[#828F99] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                    Date{" "}
                  </p>
                  <label className="text-[#252525] text-[12px] md:text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                    14/07/2023
                  </label>
                </div>
                <div className="flex items-end md:items-center  ">
                  <div
                    className="w-[60px] md:w-[88px] flex justify-center items-center h-[20px] md:h-7 shrink-0 rounded-[10px] bg-[#DCFFDC] text-[#179942]"
                    //  ${
                    //   item.status === "accepted"
                    //     ? "bg-[#DCFFDC] text-[#179942]" // Green color for accepted
                    //     : item.status === "rejected"
                    //     ? "bg-[#FFD7D7] text-[#C62121]" // Red color for rejected
                    //     : item.status === "pending"
                    //     ? "bg-[#FFFCCE] text-[#BF9000]" // Yellow color for pending
                    //     : "bg-[#DCFFDC] text-[#179942]" // Default colors (you can change this to your preference)
                    // }
                  >
                    <label className="text-[12px]   md:text-base not-italic font-normal font-[Inter] leading-[16.061px]">
                      Success
                    </label>
                  </div>
                </div>
              </div>
            </div> */}

            {investment
              ?.slice()
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  className="md:flex md:flex-row flex flex-col  justify-between h-[126px] md:h-[88px] shrink-0 border rounded-[9.616px] border-solid border-[#DDD] px-5 py-4 md:p-5"
                >
                  <div className="flex gap-4">
                    <div className="w-[45px] h-[45px] flex items-center gap-3 md:justify-center rounded-[4.808px] border-[1.016px] border-solid border-[#DDD]">
                      <img
                        src={endpoint + "/v1/logo_by_startup/" + item?.startup}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 ">
                      <h2 className=" flex justify-start  not-italic font-normal text-[16px] md:text-xl leading-4 text-[#252525] font-[Inter]">
                        {item?.companyName.length > 11 ? (
                          <>{item?.companyName.slice(0, 10)}... </>
                        ) : (
                          item?.companyName
                        )}
                      </h2>
                      <p className="text-[#828F99] text-[12px] md:text-[13.33px] not-italic font-normal leading-[normal] font-[Inter]">
                        {getLabelByCompanyName(item?.companyName)}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between md:w-[75%]">
                    <div className="flex flex-col md:block">
                      <p className="text-[#828F99] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                        Payment Mode
                      </p>
                      <label className="text-[#252525] text-[12px] md:text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                        {item?.type?.toUpperCase()}
                      </label>
                    </div>
                    <div className="flex flex-col md:block">
                      <p className="text-[#828F99] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                        Amount{" "}
                      </p>
                      <label className="text-[#252525] text-[12px] md:text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                        ₹{item?.amountBreakdown?.amount}
                      </label>
                    </div>
                    <div className="flex flex-col md:block">
                      <p className="text-[#828F99] text-[10px] md:text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                        Date{" "}
                      </p>
                      <label className="text-[#252525] text-[12px] md:text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                        {/* {dateRedable(item.dateOfpayment)}{" "} */}
                        {moment(item.dateOfpayment).tz('Asia/Kolkata').format("YYYY-MM-DD")}
                      </label>
                    </div>
                    <div className="flex items-end md:items-center ">
                      <div
                        className={`w-[80px] md:w-[110px]  flex justify-center items-center h-[20px] md:h-7 shrink-0 rounded-[10px] ${
                          item.status === "accepted"
                            ? "bg-[#DCFFDC] text-[#179942]" // Green color for accepted
                            : item.status === "rejected"
                            ? "bg-[#FFD7D7] text-[#C62121]" // Red color for rejected
                            : item.status === "pending"
                            ? "bg-[#FFFCCE] text-[#BF9000]" // Yellow color for pending
                            : "bg-[#DCFFDC] text-[#179942]" // Default colors (you can change this to your preference)
                        }`}
                      >
                        <label className="text-[12px] md:text-base not-italic font-normal font-[Inter] leading-[16.061px]">
                          {item.status && item.status.toUpperCase()}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            {/* <div className="flex justify-between h-[88px] shrink-0 border rounded-[9.616px] border-solid border-[#DDD] p-5">
              <div className="flex gap-4">
                <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[4.808px] border-[1.016px] border-solid border-[#DDD]">
                  <img src="" alt="" className="w-full object-contain" />
                </div>
                <div className="flex flex-col gap-2 py-1">
                  <h2 className=" flex justify-start  not-italic font-normal text-xl leading-4 text-[#252525] font-[Inter]">
                    PDRL
                  </h2>
                  <p className="text-[#828F99] text-[13.33px] not-italic font-normal leading-[normal] font-[Inter]">
                    Drone tech
                  </p>
                </div>
              </div>
              <div className="">
                <p className="text-[#828F99] text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                  Mode of payment
                </p>
                <label className="text-[#252525] text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                  Online
                </label>
              </div>
              <div className="">
                <p className="text-[#828F99] text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                  Amount{" "}
                </p>
                <label className="text-[#252525] text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                  ₹20,000
                </label>
              </div>
              <div className="">
                <p className="text-[#828F99] text-xs not-italic font-normal leading-[16.061px] font-[Inter]">
                  Date{" "}
                </p>
                <label className="text-[#252525] text-base not-italic font-normal leading-[16.061px] font-[Inter]">
                  14/Dec/2022{" "}
                </label>
              </div>
              <div className="flex items-center ">
                <div className="w-[88px] flex justify-center items-center h-7 shrink-0  rounded-[10px] bg-[#DCFFDC]  ">
                  <label className="text-[#179942] text-base not-italic font-normal font-[Inter] leading-[16.061px]">
                    Success
                  </label>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Transaction;
