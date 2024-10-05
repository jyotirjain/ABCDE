import React, { useEffect, useState } from "react";
import Tabs from "./Tabs";
import { MdEdit } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import { AiFillCheckCircle, AiOutlineInfoCircle } from "react-icons/ai";
import investAPI from "../../Apis/investor";
import { Helmet } from "react-helmet";

const Kyc = () => {
  const refId = localStorage.getItem("authRefInvestor");
  const [showverified, setshowverified] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await investAPI.fetch(refId);
      if (
        res.data.data.aadhar.status === "verified" &&
        res.data.data.pan.status === "verified"
      ) {
        setshowverified(true);
      } else {
        setshowverified(false);
      }
    }
    fetchData();
  }, []);

  function editdisable() {
    toast.warn("You Cannot edit KYC Contact to Admin");
  }

  return (
    <>
      <Helmet defer={false}>
        <title>Profile KYC | Aadhar and PAN Verification | Bizdateup</title>
        <meta
          name="description"
          content=" Complete your KYC verification on Bizdateup. Verify your Aadhar and PAN details to ensure a secure and compliant investment experience."
        />
        <meta
          name="keywords"
          content=" profile KYC, Aadhar verification, PAN verification, Bizdateup, secure investment experience"
        />
      </Helmet>
      <div className="   md:w-[808px] sm:w-[100%] w-[100%] rounded-[20px]  ">
        <div className="md:px-[55px] px-[15px] py-[40px]">
          <div>
            <div className="flex justify-between items-center mb-[15px] md:pr-[25px] ">
              <div className="pl-[0px] md:flex md:flex-row justify-center items-center">
                <div>
                  <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px]">
                    KYC
                  </h4>
                </div>
                {showverified ? (
                  <div className="md:mr-[20px] gap-2 flex justify-center items-center rounded-[10px] md:ml-[20px] px-[10px] bg-[#E6F6E8] text-[#1F892C] ro">
                    <AiFillCheckCircle />
                    <p className="font-[Inter] pl-[3.2px] font-[400]  leading-[24px]">
                      KYC Verified
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <button
                  onClick={() => editdisable()}
                  className=" bg-[#F1F6FB] text-[#202054] md:px-6 md:py-[10px] py-[9px] px-2 rounded-[10px] hover:bg-[#f3f3fa] duration-200"
                >
                  <h4 className="md:px-[30px] px-[10px] flex justify-evenly items-center text-[16px] font-[400] text-[#202054] leading-[18.75px]">
                    Edit
                    <span className="pl-[7px]">
                      <MdEdit />
                    </span>
                  </h4>
                </button>
                {/* <ToastContainer position="bottom-right" /> */}
              </div>
            </div>
            <div>
              <h4 className="text-[13.33px] text-[#828F99]  font-[400] md:leading-[15.62px] leading-[20px]">
                Complete Your KYC in Minutes: Verify Your Identity and Start
                Investing Today
              </h4>
            </div>
          </div>
          {!showverified && (
            <div className="flex items-center gap-2 pt-4">
              <h4 className="text-[#202054] text-[19.2px] not-italic font-normal leading-[normal] font-[Inter]">
                Complete Offline KYC
              </h4>
              <div className="iicon md:block hidden text-[#828F99]  cursor-pointer  relative">
                <div className="tooltip right-2 ">
                  Maximum 1 working day for verification
                </div>
                <AiOutlineInfoCircle />
              </div>
              <a href="https://forms.gle/WxRRuBBjouzqWVqY7" target="_blank">
                <button className="w-[130px] h-9 shrink-0 opacity-[0.949999988079071]  text-[#202054] text-base not-italic font-normal leading-[normal] rounded-[10px] bg-[#F1F6FB] font-[Inter]">
                  Click here
                </button>
              </a>
            </div>
          )}

          <div className="md:mt-[40px] mt-[25px]">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Kyc;
