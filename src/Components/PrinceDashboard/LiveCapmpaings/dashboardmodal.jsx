import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { CgFileDocument } from "react-icons/cg";
import { TbPointFilled } from "react-icons/tb";

function Dashboardmodal() {
  const [showmodal, setshowmodal] = useState(true);

  const [userdata, setUserData] = useState(
    JSON.parse(localStorage.getItem("authDataInvestor"))
  );
  const [isMember, setIsMember] = useState(false);

  const hideDuration = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

  useEffect(() => {
    const lastClosedTimestamp = localStorage.getItem("lastClosedTimestamp");
    if (lastClosedTimestamp) {
      const currentTime = new Date().getTime();
      if (currentTime - lastClosedTimestamp < hideDuration) {
        setshowmodal(false);
      }
    }
  }, []);

  const handleClose = () => {
    setshowmodal(false);
    const currentTime = new Date().getTime();
    localStorage.setItem("lastClosedTimestamp", currentTime.toString());
  };

  function checkPremium(expiryTimestamp) {
    const expiryTimestamp_mil = new Date(expiryTimestamp).getTime();
    const currentTimestamp = Date.now();

    if (expiryTimestamp_mil > currentTimestamp) {
      setIsMember("yes");
    } else {
      setIsMember("no");
    }
  }

  useEffect(() => {
    checkPremium(userdata?.membership?.endDate);
  }, [userdata]);

  return (
    <>
      {showmodal ? (
        <>
          <div className="fixed bg-[#FDFDFD] w-full inset-0 h-full z-[100]  outline-none focus:outline-none bg-opacity-80 backdrop-blur blur-[5px]"></div>
          <div className="flex justify-center fixed items-center z-[110] w-full h-full">
            <div className="w-[90%] md:w-[700px]  bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[10px] relative outline-none focus:outline-none p-6 ">
              <h2 className="flex items-center gap-[6px] text-[#202054] text-[22px] not-italic font-normal font-[Inter] leading-[100%]">
                {" "}
                <CgFileDocument /> Risk disclosures on derivatives
              </h2>
              <div className=" w-full   rounded-[5.38954px] border-[0.5px] border-solid border-[#DDDDDD] my-4 bg-white " />
              <div className=" flex flex-col gap-5 p-2">
                <div className="text-[#676799] flex  ">
                  <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
                  <label className="text-[#626c74] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                    Investor Referral Commission: Your commission is tracked
                    once the payment is confirmed on the platform from your
                    referral.
                  </label>
                </div>
                <div className="text-[#676799] flex ">
                  <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
                  <label className="text-[#626c74] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                    Investor Referral Commission: Your commission is tracked
                    once the payment is confirmed on the platform from your
                    referral.
                  </label>
                </div>
                <div className="text-[#676799] flex ">
                  <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
                  <label className="text-[#626c74] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                    Investor Referral Commission: Your commission is tracked
                    once the payment is confirmed on the platform from your
                    referral.
                  </label>
                </div>
                <div className="text-[#676799] flex ">
                  <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
                  <label className="text-[#626c74] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                    Investor Referral Commission: Your commission is tracked
                    once the payment is confirmed on the platform from your
                    referral.
                  </label>
                </div>
                <div className="text-[#676799] flex ">
                  <TbPointFilled size={20} className="w-[25px] md:w-[20px]" />
                  <label className="text-[#626c74] text-sm w-[820px] not-italic font-normal leading-[normal] font-[Inter]">
                    Investor Referral Commission: Your commission is tracked
                    once the payment is confirmed on the platform from your
                    referral.
                  </label>
                </div>
              </div>
              <div className=" w-full   rounded-[5.38954px] border-[0.5px] border-solid border-[#DDDDDD] my-4 bg-white " />
              <div className="flex justify-end items-center">
                <button
                  onClick={handleClose}
                  className="px-5 py-2 font-[Inter] text-[#fafafa] rounded-[5px] bg-[#202054]"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default Dashboardmodal;
