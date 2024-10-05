import React from "react";
import Cta10 from "../../assets/images/cta/cta10.png";
import Cta11 from "../../assets/images/cta/cta11.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Ordersummary() {
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Order Summary</title>
        <meta name="description" content="order summary" />
      </Helmet>
      <div className="static p-5 md:p-12">
        <div className="flex flex-col w-full md:max-w-[1220px] 2xl:w-[75%]">
          <h1>Order Summary</h1>
          <div className="flex gap-x-8">
            <div className="static-container w-full md:w-[80%]">
              <h2>Bizdateup Order Summary Policy</h2>
              <p>
                At Bizdateup, we are dedicated to providing our users with
                complete transparency and accessibility to their investment
                details. To ensure a clear understanding of your transactions
                and orders, we have established the following Order Summary
                Policy:
              </p>

              <h2>Visibility of Orders</h2>
              <p>
                All orders, whether they are successful, failed, or pending, for
                both online and offline payments related to investments in
                startups, will be readily accessible to you. You can view a
                comprehensive summary of your orders within your user account.
              </p>

              <h2>Accessing Your Order Summary</h2>
              <p>
                To access your Order Summary, please follow these simple steps:
              </p>
              <p>
                <span className="font-bold">Log into Your Account: </span>
                Visit <a href="https://www.bizdateup.com" target="_blank"></a> and log in to your
                Bizdateup account using your credentials.
              </p>
              <p>
                <span className="font-bold">
                  Navigate to the Transaction Page:{" "}
                </span>
                Click on your profile icon located in the top-right corner of
                the website. In the dropdown menu, select "Transaction History."
              </p>
              <p>
                <span className="font-bold">View Your Orders:</span>On the
                Transaction History page, you will find a detailed list of all
                your orders, including information on successful transactions,
                failed transactions, and pending transactions. Each entry will
                provide specific details about the investment, including startup
                name, transaction date, transaction status, and amount.
              </p>

              <h2>Why This Matters</h2>
              <p>
                Having access to your complete order history is essential for
                maintaining a clear record of your investments, tracking payment
                status, and ensuring transparency in all your financial
                activities on our platform. We want to empower you to have full
                control and visibility over your investments.
              </p>

              <h2>Need Assistance?</h2>
              <p>
                If you have any questions or require assistance related to your
                orders or any other aspect of your investment, please do not
                hesitate to contact our dedicated customer support team at
                <a className="underline" href="mailto:support@bizdateup.com">
                  support@bizdateup.com
                </a>
                . We are here to assist you and provide the information you need
                to make informed investment decisions.
              </p>

              <h2></h2>
              <p>
                Thank you for choosing Bizdateup for your startup investments.
                We are committed to delivering a seamless and transparent
                investment experience.
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

export default Ordersummary;
