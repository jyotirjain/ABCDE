import React from "react";

import { RightCircleOutlined } from "@ant-design/icons";
import Noport from "../../assets/images/noportfolio.png";
import Cta13 from "../../assets/images/cta/cta13.png";
import Cta14 from "../../assets/images/cta/cta14.png";
import cta27 from "../../assets/images/cta/cta27.png";

import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import { Link } from "react-router-dom";

function Noportfolio() {
  return (
    <div>
      <Navbar />
      <div className="flex  justify-center items-center py-16 px-5 md:px-10 bg-[#fafafa]">
        <div className="flex gap-x-8 w-full md:max-w-[1500px] 2xl:w-[65%] ">
          <div className="box-border flex justify-center md:w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] p-4 ">
            <div className="flex flex-col justify-center items-center ">
              <div className=" flex justify-center items-center w-[288px] h-[239px] bg-[#E8EAF8] rounded-[500px]">
                <img src={cta27} alt="" className="w-[200px]" />
              </div>
              <div className="mt-6 flex">
                <label className="not-italic text-center font-medium text-[26px] leading-[45px] text-[#252525] font-[Inter] ">
                  Your portfolio is waiting for you to make your first
                  investment!
                </label>
              </div>
              <div>
                <p className="not-italic font-normal text-base text-center leading-6 text-[#828F99] font-[Inter]">
                  Start building your investment portfolio now
                </p>
              </div>
              <Link to="/invest" >
                <button className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[Inter] mt-4">
                  Explore now
                </button>
              </Link>
            </div>
          </div>
          <div className="md:block hidden w-[300px]">
            <div className=" flex flex-col gap-y-8">
              <div className="cta">
                <div className="ctaimg bg-[#A392B5]">
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
                <div className="flex justify-between items-center my-2 mx-5">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Understand Now
                  </label>
                  <RightCircleOutlined />
                </div>
              </div>
              <div className="cta">
                <div className="ctaimg bg-[#E68160]">
                  <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                    Become of acceleator
                  </label>
                  <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                    Learn more about us
                  </p>
                  <div className="flex justify-end mt-16">
                    <img src={Cta14} alt="" />
                  </div>
                </div>
                <div className="flex justify-between items-center my-2 mx-5">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Learn Now
                  </label>
                  <RightCircleOutlined />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Noportfolio;
