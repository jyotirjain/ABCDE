import React from "react";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function riskinvest() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Risk of Investment | Startup Investing Risks | Bizdateup</title>
        <meta
          name="description"
          content="Understand the risks associated with startup investing on Bizdateup. Learn about the potential risks and rewards of investing in early-stage companies."
        />
         <meta
          name="keywords"
          content="risk of investment, startup investing risks, Bizdateup, early-stage companies"
        />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%]">
          <h1>Risk of Investment</h1>
          <div className="flex gap-x-8">
            <div className="static-container w-full md:w-[80%]">
              <h2>Investment Loss</h2>
              <p>
                Do you know that capital loss is a danger in start-up
                investments? The reason why experts suggest diversifying your
                portfolio with different investments is because if you put all
                your eggs in one basket, your probability for a major loss is
                much more. There is no guarantee of promisible returns and
                profits in start-up investments as these start-ups do not have a
                100% possibility of succeeding. Thus, if you diversify your
                portfolio you mitigate the risk of facing losses on your
                investment.
              </p>

              <h2>Illiquid Investments</h2>
              <p>
                The term liquidity stands for how easily you can convert your
                holdings into cash. Private investments are not often listed on
                the stock exchange; thus they are tricky to sell off. Start-up
                investments fall under the category of Private investments,
                which makes them extremely illiquid as you cannot easily convert
                them into cash.
              </p>

              <h2>Untimely Payment of Dividends</h2>
              <p>
                In general, start-ups are unable to pay dividends at any point
                during the financing cycle. As a result, in order to make any
                returns or profits, you must go through another sale or a
                similar process for which there is no time span guaranteed.
              </p>

              <h2>Dilution of Holdings</h2>
              <p>
                A start-up requires constant capital to run its daily chores and
                functioning. To meet the needs, additional capital might be
                required. As a result, news shares can be allotted. Thus, the
                previous holdings can be affected or diluted due to the issuance
                of new shares.
              </p>

              <h2>Forward-Looking Statements</h2>
              <p>
                Statements with a View towards the future made by the startup,
                including opinions and judgments, are based on a variety of
                estimates and assumptions that are subject to severe business,
                economic, regulatory, and competitive risks. Even if they can be
                utilised to understand the businesses' intentions and goals,
                these remarks should not be considered as undertakings by the
                startups, but rather as speculative and subjective in nature.
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
              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#ACD8F2]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Find Your Next Investment Opportunity
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Browse through a curated selection of promising startups
                    </p>
                    <div className="flex justify-between mt-1 mb-2">
                      <img src={Cta10} />
                    </div>
                  </div>
                  <div
                    className="flex justify-between items-center my-1 mx-5"
                    style={{ paddingTop: "10px", paddingBottom: "10px" }}
                  >
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>

              <a
                href="https://chat.whatsapp.com/KI3jbUdxUeY4WfI8SgtdqC"
                target="_blank"
              >
                <div className="cta">
                  <div className="ctaimg bg-[#ACD8F2]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Join Our Community of Investors
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                      Connect with other like-minded investors and share your
                      insights
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
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default riskinvest;
