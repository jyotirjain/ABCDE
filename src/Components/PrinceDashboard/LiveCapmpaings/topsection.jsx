import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

function Topsection() {
  const [showtop, setshowtop] = useState(true);
  console.log("showtop", showtop);

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
        setshowtop(false);
      }
    }
  }, []);

  const handleClose = () => {
    setshowtop(false);
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
      {isMember ? null : (
        <div>
          {showtop ? (
            <div
              className={`hidden md:flex justify-between items-center h-[63px] bg-[#fff8c5]  transition-[height] duration-500 ease-in
    ${showtop ? "h-[63px]" : "h-0 overflow-hidden"}`}
            >
              <div className="flex  justify-center items-center w-[95%]">
                <div className=" text-[#202054]">
                  <p className="font-[Inter] font-[500] md:leading-[18.75px]">
                    Join the top 1% Investor's Club with Bizdateup's Premium
                    Membership
                  </p>
                </div>
                <div className=" ml-[69px] text-center">
                  <a
                    href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
                    target="_blank"
                  >
                    <button className="bg-[#f0b349]  h-[32px]">
                      <h4 className="text-[#ffffff] font-[Inter] font-[400] px-4 md:leading-[22.4px] tracking-[0.2px] ">
                        Join the Club
                      </h4>
                    </button>
                  </a>
                </div>
              </div>

              <div className=" p-4 cursor-pointer" onClick={handleClose}>
                <IoMdClose size={20} onClick={handleClose} />
              </div>
            </div>
          ) : (
            <div className={`  ${showtop ? "" : "h-0 overflow-hidden"} `}></div>
          )}
        </div>
      )}
    </>
  );
}

export default Topsection;
