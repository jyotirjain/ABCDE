import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Cashflow() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [result, setresult] = useState();

  const handlesubmit = () => {
    const roi = input1 - input2;
    setresult(roi);
  };
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Cash Flow Calculator - Calculate Your Business's Cash Flow | Bizdateup
        </title>
        <meta
          name="description"
          content="Use our cash flow calculator to determine the cash inflow and outflow of your business. Analyze the cash flow situation to make informed business decisions. Try our free calculator now!"
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Cash flow Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Cash flow Online
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
                    Investment amount (INR)
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
                    Expected exit multiple
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
              Cash Flow Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Analyze Your Business's Cash Flow Situation With Our Free
              Calculator
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              As a business owner, it's essential to understand your company's
              cash flow situation. Cash flow represents the inflow and outflow
              of money in your business, which can help you make informed
              decisions about investments, expenditures, and financing options.
              Understanding your cash flow can also help you identify potential
              cash shortages and take action before it's too late.
              <br />
              Our cash flow calculator is a tool that helps you analyze the cash
              flow situation of your business. Using this calculator, you can
              estimate the cash inflow and outflow over a specific period, such
              as a month, quarter, or year. You can input the cash inflows from
              various sources, such as sales revenue, loans, and investments.
              Similarly, you can enter the cash outflows for various expenses,
              such as salaries, rent, utilities, and loan payments.
              <br />
              Our calculator takes the input data and generates a cash flow
              statement that shows your business's net cash flow, operating cash
              flow, and free cash flow. The net cash flow is the difference
              between the total inflow and outflow of cash, while operating cash
              flow represents the cash generated or used in the daily operations
              of your business. Free cash flow is the cash left over after all
              the expenses and investments are paid for.
              <br />
              Analyzing your cash flow situation using our calculator can help
              you determine the financial health of your business. If you have
              positive free cash flow, you have money left over to invest in
              your business or pay dividends to your shareholders. If your free
              cash flow is negative, you may need to take action to improve your
              cash flow, such as reducing expenses, increasing sales revenue, or
              obtaining financing.
              <br />
              At Bizdateup, we are committed to providing our users with
              accurate and reliable investment tools. However, we want to remind
              you that the results generated by our calculators are indicative
              in nature and should not be considered as certified by Bizdateup.
              The use of the calculator is entirely at your own risk, and
              Bizdateup is not responsible for any errors in the outcome
              resulting from the use of the calculator.
              <br />
              Closing Paragraph:
              <br />
              Try our cash flow calculator today and gain insights into your
              business's cash flow situation. Use this tool to identify
              potential cash shortages and take action before they become a
              problem. With Bizdateup, you can make informed decisions and
              manage your business's finances with confidence.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Cashflow;
