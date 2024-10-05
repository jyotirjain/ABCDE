import React from "react";
import Investor from "../../assets/images/image 316.png";
import Startup from "../../assets/images/image 317.png";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function Section2() {
  return (
    <div className="flex flex-col items-center justify-center w-[100%] gap-8 md:py-28 p-10 md:px-0 px-[16px]">
      <div className="w-full  md:flex-row md:justify-center md:flex gap-8">
        <Link to="/login">
          <div className=" relative md:flex md:w-[517px] w-full md:mb-0 mb-5 h-[300px] md:h-[254px] shadow-[0px_1px_16px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#f6f6fe] p-6">
            <img className="absolute bottom-10 left-0" src={Investor} />
            <div className="absolute md:right-4 top-12 flex flex-col gap-4">
              <h2 className="not-italic font-normal text-3xl leading-[17px] tracking-[0.166624px] text-[#180048] font-[Inter]">
                Investor
              </h2>
              <p className=" md:w-[232px] not-italic font-light text-[13.33px] leading-[18px] text-[#180048]">
                Bizdateup shares and discloses Personal Information
              </p>
            </div>
            <label className="absolute bottom-6 right-6 flex items-center gap-1 text-center not-italic font-normal text-base leading-[17px] tracking-[0.166624px] text-[#252525] font-[Inter]">
              Continue <BsArrowRight />
            </label>
          </div>
        </Link>
        <Link to="/raisefund">
          <div className="relative md:flex md:w-[517px]   md:mb-0 mb-5 h-[300px] md:h-[254px] shadow-[0px_1px_16px_rgba(0,0,0,0.25)] rounded-[10px] bg-[#f6f6fe] p-6">
            <img src={Startup} className="absolute bottom-[-10px] md:bottom-0 left-10 md:left-0" />
            <div className="absolute md:right-4 top-12 flex flex-col gap-4">
              <h2 className="not-italic font-normal text-3xl leading-[17px] tracking-[0.166624px] text-[#180048] font-[Inter]">
                Startup
              </h2>
              <p className="md:w-[187px] not-italic font-light text-[13.33px] leading-[18px] text-[#180048]">
                Bizdateup shares and discloses Personal Information
              </p>
            </div>
            <label className="absolute bottom-6 right-6 flex items-center gap-1 text-center not-italic font-normal text-base leading-[17px] tracking-[0.166624px] text-[#252525] font-[Inter]">
              Continue <BsArrowRight />
            </label>
          </div>
        </Link>
      </div>
      {/* <div className="flex flex-col items-center w-[40%] gap-4 ">
        <h2 className="not-italic font-bold text-[28px] leading-[42px] text-[#202054] font-[Inter]">
          Bizdateup
        </h2>
        <p className=" not-italic font-light text-[13.33px] leading-[18px] text-center text-[#180048] font-[Inter]">
          Bizdateup shares and discloses Personal Information to other parties
          as needed to provide our Services and Whom we may share information
          include:
        </p>
        <input type="text" className="w-full" />
      </div> */}
    </div>
  );
}

export default Section2;
