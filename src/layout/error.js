import { RightCircleOutlined } from "@ant-design/icons";
import React from "react";
import Cta8 from "../assets/images/cta/cta8.png";
import Cta9 from "../assets/images/cta/cta9.png";
import Errorimg from "../assets/images/error.png";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Footer2 from "../Components/Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <Navbar />
      <Helmet defer={false}>
        <title>Page Not Found | Error 404 | Bizdateup</title>
        <meta
          name="description"
          content="Oops! The page you are looking for is not found. Please check the URL or navigate back to the homepage of Bizdateup."
        />
        <meta
          name="keywords"
          content="page not found, error 404, Bizdateup, homepage"
        />
        
      </Helmet>
      <div className="flex justify-center items-center py-16 bg-[#fafafa] p-8">
        <div className="flex gap-x-8 w-full md:max-w-[1220px] 2xl:w-[75%] ">
          <div className="box-border flex justify-center w-full lg:w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] p-6 ">
            <div className="flex flex-col justify-center items-center ">
              <div className=" flex justify-center items-center w-[288px] h-[240px] bg-[#7EA9DC] rounded-[190px]">
                <img src={Errorimg} />
              </div>
              <div className="mt-6">
                <label className="not-italic font-medium text-[25px] leading-[45px] text-[#252525] font-[Inter] lg:text-3xl ">
                  404-PAGE NOT FOUND
                </label>
              </div>
              <div className="">
                <p className="hidden md:flex md:not-italic md:font-light md:text-base md:leading-6 md:text-[#828F99] md:font-[Inter]">
                  The graphic and typographic operators know this well, in
                  reality
                </p>
              </div>
              <button className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[Inter] mt-4">
                Go to Homepage
              </button>
            </div>
          </div>
          <div className="hidden md:flex md:flex-col md:w-[301px]">
            <div className=" flex flex-col gap-y-8 ">
              <Link to="/learn">
                <div className="cta">
                  <div className="ctaimg bg-[#93A9E2]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Become of acceleator
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
              </Link>

              <Link to="/about_us">
                <div className="cta">
                  <div className="ctaimg bg-[#ECB75E]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Become of acceleator
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
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Error;
