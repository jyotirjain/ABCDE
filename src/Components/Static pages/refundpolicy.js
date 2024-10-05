import React from "react";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function refundpolicy() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Refund Policy | Investment Refund Process | Bizdateup</title>
        <meta name="description" content="Read our Refund Policy to understand the investment refund process on Bizdateup. Learn about eligibility, timelines, and refund procedures" />
        <meta name="keywords" content="refund policy, investment refund process, Bizdateup, eligibility, refund procedures" />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%]">
          <h1>Refund Policy</h1>
          <div className="flex gap-x-8">
            <div className="static-container w-full md:w-[80%]">
              <h2>Refund Policy</h2>
              <p>
                Please read this policy carefully. This is the "Return and
                Refund Policy of Bizdateup Technologies PVT LTD". These policies
                are not applicable to any government funds/grants, venture
                capital investments, angel investments. Whereas applicable only
                to crowd funds, donations, small scale investments below
                5,00,000INR.
              </p>

              <h2>Company</h2>
              <p>
                BizDateUp Technologies Private Limited - G2 , Empire business
                centre ,Empire complex ,414 Senapati bapat marg, Delisle Rd,
                near shreeniwas mill, Lower Parel, Mumbai, Maharashtra 400013
              </p>

              <h2>Investor</h2>
              <p>
                Investor refers to a person or entity or their nominees who
                believe in the company and is/are supporting the company goals,
                interests and initiatives in the form of monetary
                donations/investments.
              </p>

              <h2>Personal Data</h2>
              <p>
                Personal Data means data about a living individual who can be
                identified from those data (or from those and other information
                either in our possession or likely to come into our possession).
                The personal data also includes User’s bank account number,
                Virtual payment addresses, user IDs, passwords, Credit, Debit
                Card details.
              </p>

              <h2>INVESTMENTS</h2>
              <p>
                We accept Investments digitally through major modes of
                transactions applicable in Karnataka, India, from Investors
                interested in supporting the company goals, interests and
                initiatives. We issue refunds for any errors in digital
                transactions or if requested/initiated by the Investor
                themselves at most but within 30 days of time. We acknowledge
                within 48 hours of a successful transaction. The acknowledgement
                will be sent from our authorized contact e-mail after we receive
                the Investment/donation from the Investor. If not received the
                acknowledgement mail, the Investor is requested to contact us
                regarding the same and the issue will be resolved at the
                earliest.
              </p>

              <h2>Taxation Policy</h2>
              <p>
                Taxes are primarily the responsibility of individuals. It is
                always suggested that you consult with a tax advisor before
                making any decisions. Dividends and returns in start-ups maybe
                subjective to taxation. As a result, in order to avoid any
                potential issues, you undertake to hold Bizdateup blames and not
                pursue any claims in connection with the foregoing.
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
                    Learn more about the visionary entrepreneurs behind the startups
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

export default refundpolicy;