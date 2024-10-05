import { RightCircleOutlined } from "@ant-design/icons";
import Cta8 from "../assets/images/cta/cta8.png";
import Cta9 from "../assets/images/cta/cta9.png";
import React from "react";
import Navbar from "../Components/Navbar1/Navbar1";
import approve from "../assets/images/approve.png";
import Footer from "../Components/Footer/Footer";
import Footer2 from "../Components/Footer2/Footer2";
import { Helmet } from "react-helmet";

function Approve() {
  return (
    <div>
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>Approved</title>
        <meta name="description" content="Approved description" />
      </Helmet>
      <div className="flex  justify-center items-center py-16 bg-[#fafafa]">
        <div className="flex gap-x-8 w-[75%]  ">
          <div className="box-border flex justify-center w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] ">
            <div className="flex flex-col justify-center items-center ">
              <div className=" flex justify-center items-center w-[288px] h-[239px] bg-[#ACD8F2] rounded-[500px]">
                <img src={approve} alt="" />
              </div>
              <div className="mt-6">
                <label className="not-italic font-medium text-3xl leading-[45px] text-[#252525] font-[Inter] ">
                  Approved
                </label>
              </div>
              <div>
                <p className="not-italic font-light text-base leading-6 text-[#828F99] font-[Inter]">
                  Your Startup is being Approved
                </p>
              </div>
              <button className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[Inter] mt-4">
                Next
              </button>
            </div>
          </div>
          <div className="w-[300px]">
            <div className=" flex flex-col gap-y-8">
              <div className="cta">
                <div className="ctaimg bg-[#3F66CCCC]">
                  <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                    Learn about Us
                  </label>
                  <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                    Learn more about us
                  </p>
                  <div className="flex justify-end mt-16">
                    <img src={Cta8} />
                  </div>
                </div>
                <div className="flex justify-between items-center my-2 mx-5">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Learn Now
                  </label>
                  <RightCircleOutlined />
                </div>
              </div>
              <div className="cta">
                <div className="ctaimg bg-[#E7A536CC]">
                  <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                    Learn about Us
                  </label>
                  <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                    Learn more about us
                  </p>
                  <div className="flex justify-end mt-16">
                    <img src={Cta9} />
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

export default Approve;
