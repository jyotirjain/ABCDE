import { RightCircleOutlined } from "@ant-design/icons";
import React from "react";
import Cta13 from "../../assets/images/cta/cta13.png";
import Cta14 from "../../assets/images/cta/cta14.png";
import cta29 from "../../assets/images/cta/cta29.png";
import { Link } from "react-router-dom";

function Nostartupupdate() {
  return (
    <div className="flex gap-x-8 w-full  ">
      <div className="box-border flex justify-center md:w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] p-4 ">
        <div className="flex flex-col justify-center items-center ">
          <div className=" flex justify-center items-center w-[288px] h-[288px] bg-[#E8EAF8] rounded-[500px]">
            <img src={cta29} alt="" className="w-[200px]" />
          </div>
          <div className="mt-6 flex">
            <label className="not-italic text-center font-medium text-[26px] leading-[45px] text-[#252525] font-[Inter] ">
              There are no Startup updates available for you.
            </label>
          </div>
          <div>
            <p className="not-italic font-normal text-base text-center leading-6 text-[#828F99] font-[Inter]">
              But you can fill this page by updates by Investing in Startups.
            </p>
          </div>
          <Link to="/invest">
            <button className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[Inter] mt-4">
              Invest now
            </button>
          </Link>
        </div>
      </div>
      <div className="md:block hidden w-[300px]">
        <div className=" flex flex-col gap-y-8">
          <Link to="/portfolio">
            <div className="cta">
              <div className="ctaimg bg-[#d4c6e2]">
                <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                  Why Startup Investing?
                </label>
                <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                  The Benefits of Including Startups in Your Investment
                  Portfolio
                </p>
                <div className="flex justify-end mt-16">
                  <img src={Cta13} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 mx-5">
                <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                  Understand Now
                </label>
                <RightCircleOutlined />
              </div>
            </div>
          </Link>
          <Link to="/invest">
            <div className="cta">
              <div className="ctaimg bg-[#e9ad98]">
                <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                  Invest in the Future with Our Startups
                </label>
                <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                  Diversify your investment portfolio and support the next big
                  thing
                </p>
                <div className="flex justify-end mt-10">
                  <img src={Cta14} alt="" />
                </div>
              </div>
              <div className="flex justify-between items-center py-2 mx-5">
                <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                  Invest Now
                </label>
                <RightCircleOutlined />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nostartupupdate;
