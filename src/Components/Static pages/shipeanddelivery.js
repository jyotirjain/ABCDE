import React from "react";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Shipeanddelivery() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Ship and Delivery</title>
        <meta name="description" content="Ship and Delivery description" />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%]">
          <h1>Ship and Delivery</h1>
          <div className="flex gap-x-8">
            <div className="static-container w-full md:w-[80%]">
              <h2>Bizdateup Shipping and Delivery Policy.</h2>
              <p>
                At Bizdateup, we are committed to providing a seamless and
                efficient investment experience to our valued users. As a
                fintech company facilitating investments in startups through our
                platform, we aim to clarify our shipping and delivery policy,
                even though we primarily deal with digital documentation and
                certificates.
              </p>

              <h2>Digital Delivery of Investment Documents.</h2>
              <p>
                We understand the importance of promptly delivering essential
                investment documents to our investors. Once an investment is
                successfully made by an investor through our platform and the
                funding round is closed, we initiate the process of delivering
                the following documents to our investors:
              </p>
              <p>
                <span className="font-bold">Share Certificate:</span> A digital
                copy of the share certificate representing your ownership in the
                startup you've invested in.
              </p>
              <p>
                <span className="font-bold">Shareholders Agreement:</span>
                The agreement that outlines the rights and responsibilities of
                shareholders in the startup.
              </p>
              <p>
                <span className="font-bold">LLP Agreement:</span>
                If applicable, the Limited Liability Partnership (LLP)
                agreement, which specifies the operational structure and
                obligations within the startup.
              </p>
              <p>
                <span className="font-bold">Acknowledgment Letter:</span>A
                formal letter acknowledging your investment in the startup.
              </p>
              <p>
                <span className="font-bold">
                  {" "}
                  Shareholding Pattern of Bizdateup LLP:
                </span>
                Information detailing the ownership structure of Bizdateup LLP.
              </p>

              <h2>Delivery Timeline</h2>
              <p>
                We are committed to delivering the aforementioned documents to
                our investors in a timely manner. Our standard delivery timeline
                is as follows:
              </p>
              <p>
                <span className="font-bold"> Share Certificate:</span>
                Within 3 months from the date of the funding round closure.
              </p>

              <p>
                <span className="font-bold">Shareholders Agreement:</span>
                Within 3 months from the date of the funding round closure.
              </p>
              <p>
                <span className="font-bold"> LLP Agreement:</span>
                Within 3 months from the date of the funding round closure (if
                applicable).
              </p>

              <p>
                <span className="font-bold">Acknowledgment Letter:</span>
                Within 3 months from the date of the funding round closure.
              </p>

              <p>
                <span className="font-bold">
                  Shareholding Pattern of Bizdateup LLP:
                </span>
                Within 3 months from the date of the funding round closure.
              </p>

              <h2>Digital Delivery Only</h2>
              <p>
                It's important to note that Bizdateup operates as a fully
                digital platform. We do not engage in the physical shipment or
                delivery of any documents. All documents are delivered
                electronically via email to the email address provided by the
                investor during the registration and investment process.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions or require further assistance
                regarding the delivery of investment documents or any other
                aspect of your investment, please do not hesitate to contact our
                dedicated customer support team at{" "}
                <a className="underline" href="mailto:support@bizdateup.com">
                  support@bizdateup.com
                </a>
                . We are here to assist you and ensure a smooth and secure
                investment experience.
              </p>

              <h2></h2>
              <p>
                Thank you for choosing Bizdateup for your startup investments.
                We look forward to helping you grow your investment portfolio
                and achieve your financial goals.
              </p>
            </div>
            <div className="hidden md:flex md:flex-col md:w-[301px] md:gap-y-8">
              <Link to="/about-us">
                <div className="cta">
                  <div className="ctaimg bg-[#B5C3DC]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Meet the Founders Changing the Game
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Learn more about the visionary entrepreneurs behind the
                      startups
                    </p>
                    <div className="flex justify-end mt-3 mb-2">
                      <img src={Cta10} />
                    </div>
                  </div>
                  <div
                    className="flex justify-between items-center my-1 mx-5"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn More
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>

              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#ACD8F2]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Invest in Socially Responsible Companies
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Invest in Socially Responsible Companies
                    </p>
                    <div className="flex justify-end mt-3 mb-2">
                      <img src={Cta11} />
                    </div>
                  </div>
                  <div
                    className="flex justify-between items-center my-1 mx-5"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn More
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

export default Shipeanddelivery;
