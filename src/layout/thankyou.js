import { RightCircleOutlined } from "@ant-design/icons";
import Cta8 from "../assets/images/cta/cta8.png";
import Cta9 from "../assets/images/cta/cta9.png";
import Thank from "../assets/images/Saly-10.png";
import React from "react";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Footer2 from "../Components/Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Thankyou() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Thank You for Your Investment | Bizdateup</title>
        <meta
          name="description"
          content="Your investment has been received. Thank you for choosing Bizdateup to fuel startup innovation. Stay updated on your investment journey."
        />
        <meta
          name="keywords"
          content="thank you for investment, Bizdateup, investment journey, startup innovation"
        />
      </Helmet>
      <div className="flex  justify-center items-center py-16 bg-[#fafafa]">
        <div className="flex gap-x-8 md:max-w-[1220px] 2xl:w-[75%]  ">
          <div className="box-border flex justify-center p-4 md:w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] ">
            <div className="flex flex-col justify-center items-center ">
              <div className=" flex justify-center items-center w-[288px] h-[239px] bg-[#E8EAF8] rounded-[500px]  ">
                <img src={Thank} alt="" className="mb-4" />
              </div>
              <div className="mt-6">
                <label className="not-italic font-medium text-3xl leading-[45px] text-[#252525] font-[Inter] ">
                  Thank you
                </label>
              </div>
              <div className="flex flex-col items-center text-center w-[80%] gap-2">
                <p className="not-italic font-normal text-base leading-6 text-[#828F99] font-[Inter]">
                  {" "}
                  Please note that your investment will be updated in your
                  portfolio within 1-2 working days after we have received your
                  payment. If you have any questions or concerns, please do not
                  hesitate to contact us through our website's contact page or
                  email us at support@bizdateup.com.
                </p>
              </div>
              <Link to="/investor/dashboard">
                <button className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[Inter] mt-4">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden md:flex  md:w-[301px]">
            <div className=" flex flex-col gap-y-8">
              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#93A9E2] mb-1">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Explore more startups
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Get Up to 10x Returns with Startup Investing
                    </p>
                    <div className="flex justify-end mt-16">
                      <img src={Cta8} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 pb-1 mx-5">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>

              <Link to="https://www.growth.bizdateup.com/bizdateup-premium-membership">
                <div className="cta">
                  <div className="ctaimg bg-[#f0c57c]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Get Bizdateup’s Membership
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Unlock exclusive benefits with Bizdateup's Membership.
                    </p>
                    <div className="flex justify-end mt-10">
                      <img src={Cta9} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 pb-1 mx-5">
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

export default Thankyou;
