import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Irr() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [result, setresult] = useState();

  const equity = () => {
    const cashFlowArray = input2
      .split(",")
      .map((input2) => parseInt(input2.trim()));
    const netPresentValue = (rate) => {
      return cashFlowArray.reduce((total, input2, index) => {
        return total + input2 / Math.pow(1 + rate, index + 1);
      }, -input1);
    };
    let irrResult = 0.1;
    while (netPresentValue(irrResult) > 0) {
      irrResult += 0.001;
    }
    setresult((irrResult * 100).toFixed(2));
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          IRR Calculator - Calculate Internal Rate of Return (IRR) | Bizdateup
        </title>
        <meta
          name="description"
          content="Use Bizdateup's IRR Calculator to determine the Internal Rate of Return on your investments. Our IRR Calculator is an easy-to-use tool that provides accurate and reliable results for your investment decisions"
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            IRR Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your IRR Online
              </h2>
              <div className="h-[400px] box-border border rounded-[10px] border-solid border-[#F0D9FF] relative flex flex-col-reverse  md:flex md:flex-row  items-center p-8 ">
                <div className="answerbox w-[100%] md:w-[250px] xl:w-[300px]">
                  <div>
                    <label className="not-italic font-normal text-[13.33px] leading-5 flex items-center text-white mt-[-10px]">
                      Result
                    </label>
                    <label className="not-italic font-normal text-[22px] leading-[33px] text-white">
                      {result}
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
                    Total Valuation
                  </label>
                  <input
                    className="cal-input"
                    value={input1}
                    onChange={(e) => setinput1(e.target.value)}
                    type="number"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Number of Shares
                  </label>
                  <input
                    className="cal-input"
                    value={input2}
                    onChange={(e) => setinput2(e.target.value)}
                    type="number"
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="flex justify-end">
                <button className="add" onClick={equity}>
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
              IRR Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate the Internal Rate of Return (IRR) on your Investments
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Bizdateup's IRR Calculator is a powerful tool that helps you
              determine the Internal Rate of Return (IRR) on your investments.
              IRR is a critical metric for any investor, as it allows you to
              evaluate the profitability of an investment over time. With our
              IRR Calculator, you can quickly and easily calculate the IRR of
              any investment, giving you the insight you need to make informed
              investment decisions.
              <br />
              To use our IRR Calculator, simply enter the cash flows for your
              investment, along with the initial investment amount. The IRR
              Calculator will then analyze the data and provide you with an
              accurate estimate of the Internal Rate of Return. You can use this
              information to evaluate the profitability of your investment and
              make informed decisions about your portfolio.
              <br />
              At Bizdateup, we are committed to providing our users with
              accurate and reliable investment tools. However, we want to remind
              you that the results generated by our calculators are indicative
              in nature and should not be considered as certified by Bizdateup.
              The use of our IRR Calculator is entirely at your own risk, and
              Bizdateup is not responsible for any errors in the outcome
              resulting from the use of the calculator.
              <br />
              Closing Paragraph:
              <br />
              Investing can be a complex process, but with the help of our IRR
              Calculator, you can make informed decisions about your
              investments. Whether you're evaluating a new investment
              opportunity or reviewing your existing portfolio, our IRR
              Calculator can help you identify the best opportunities for growth
              and profitability. So why not try our IRR Calculator today and
              start making better investment decisions?
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Irr;
