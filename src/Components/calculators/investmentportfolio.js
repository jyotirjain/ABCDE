import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Investmentportfolio() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();
  const [input5, setinput5] = useState();
  const [result1, setresult1] = useState();
  const [result2, setresult2] = useState();

  const handlesubmit = () => {
    const investmentValue = input2 * (input4 / input5);
    const returnOnInvestment = ((investmentValue - input2) / input2) * 100;
    setresult1(investmentValue);
    setresult2(returnOnInvestment);
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Investment Portfolio Calculator - Calculate Your Investment Portfolio
        </title>
        <meta
          name="description"
          content="Use Bizdateup's Investment Portfolio Calculator to evaluate your investment portfolio performance, including total returns, asset allocation, and diversification."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Investment Portfolio Calculator
          </h2>
          <div className="flex gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Investment Portfolio Online
              </h2>
              <div className="h-[400px] box-border border rounded-[10px] border-solid border-[#F0D9FF] relative flex flex-col-reverse  md:flex md:flex-row  items-center p-8 ">
                <div className="answerbox w-[100%] md:w-[250px] xl:w-[300px]">
                  <div>
                    <label className="not-italic font-normal text-[13.33px] leading-5 flex items-center text-white mt-[-10px]">
                      Result
                    </label>
                    <label className="not-italic font-normal text-[22px] leading-[33px] text-white">
                      {result1}
                    </label>
                  </div>
                </div>
                <div className="">
                  <span className="absolute top-0 right-0 w-[230px] h-[261px] rounded-[0px_0px_0px_200px] bg-[#aeaeff]"></span>
                  <img
                    className="aspect-square  absolute right-[50px] md:right-[150px] top-[40px] md:top-[90px] "
                    src={Creative}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Startup Name
                  </label>
                  <input
                    className="cal-input"
                    value={input1}
                    onChange={(e) => setinput1(e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Investment Amount
                  </label>
                  <input
                    className="cal-input"
                    value={input2}
                    onChange={(e) => setinput2(e.target.value)}
                    type="number"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Investment Date
                  </label>
                  <input
                    className="cal-input"
                    value={input3}
                    onChange={(e) => setinput3(e.target.value)}
                    type="date"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Latest valuation
                  </label>
                  <input
                    className="cal-input"
                    value={input4}
                    onChange={(e) => setinput4(e.target.value)}
                    type="number"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Previous Valuation
                  </label>
                  <input
                    className="cal-input"
                    value={input5}
                    onChange={(e) => setinput5(e.target.value)}
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="add" onClick={handlesubmit}>
                  Calculate
                </button>
              </div>
            </div>
            <div className=" hidden md:flex md:flex-col md:gap-y-8 md:w-[301px] ">
              <Link to="/learn">
                <div className="cta  ">
                  <div className="ctaimg bg-[#D3D0E9]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Learn about Us
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta5} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Find more resources
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>

              <Link to="/about-us">
                <div className="cta  ">
                  <div className="ctaimg bg-[#DEF7E7]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Learn about Us
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta1} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2  mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="border shadow-[0px_1px_12px_rgba(0,0,0,0.15)] rounded-[10px] border-solid flex flex-col gap-3 border-[#DDDDDD] bg-[#ffffff] my-6 p-8">
            <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
              Investment Portfolio Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Evaluate Your Investment Portfolio Performance with Bizdateup's
              Portfolio Calculator
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Investment portfolio management can be a challenging task,
              especially if you have a diverse portfolio. It is essential to
              track and measure the performance of your portfolio to ensure that
              your investments are meeting your financial goals. Bizdateup's
              Investment Portfolio Calculator can help you evaluate the
              performance of your investment portfolio, including your total
              returns, asset allocation, and diversification.
              <br />
              The Investment Portfolio Calculator is a user-friendly tool that
              allows you to input your investment details, such as the type of
              investment, the purchase price, the quantity, and the date of
              purchase. It also allows you to add multiple investments, making
              it easier to evaluate the performance of your entire portfolio.
              <br />
              Once you have entered all your investment details, the Investment
              Portfolio Calculator provides you with an analysis of your
              investment portfolio, including the total value of your
              investments, the total return on your investment, and the
              annualized return. You can also view your asset allocation and
              diversification, which is essential for managing risk and
              maximizing returns.
              <br />
              The Investment Portfolio Calculator also provides you with a
              visual representation of your portfolio, making it easier to
              identify your highest performing investments and make adjustments
              to your portfolio as needed.
              <br />
              Using the Investment Portfolio Calculator is a smart way to manage
              your investments and ensure that you are on track to meet your
              financial goals. By regularly evaluating your investment
              portfolio's performance, you can make informed decisions about
              when to buy, sell, or hold investments and maximize your returns.
              <br />
              At Bizdateup, we believe that everyone should have access to the
              tools they need to manage their investments successfully. Our
              Investment Portfolio Calculator is just one of the many tools we
              offer to help you achieve your financial goals. Sign up today and
              start taking control of your investments.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Investmentportfolio;
