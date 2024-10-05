import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Debttoequity() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [result, setresult] = useState();

  const handlesubmit = () => {
    const calculatedBurnRate = input1 - input2;
    setresult(calculatedBurnRate);
  };

  return (
    <div>
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>
          Debt to Equity Ratio Calculator - Calculate D/E Ratio Online
        </title>
        <meta
          name="description"
          content="Use our Debt to Equity Ratio Calculator to calculate the D/E Ratio online. Get an idea of your company's leverage and find out if you need to increase or decrease your equity."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Debt to Equity Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Debt to Equity Online
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
                    Monthly Operating Expenses
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
                    Monthly Revenue
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
              Debt to Equity Ratio Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate your D/E Ratio online and find out your company's
              leverage
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Are you unsure about your company's leverage? Are you wondering if
              your company is too reliant on debt or equity? Use our Debt to
              Equity Ratio Calculator to calculate the D/E Ratio online and get
              an idea of your company's leverage.
              <br />
              The D/E Ratio is a financial metric used to determine how much of
              a company's financing is funded through debt and how much is
              funded through equity. This ratio indicates the amount of leverage
              a company has, and can help investors and analysts determine the
              level of risk associated with a company's debt.
              <br />
              To calculate your D/E Ratio, simply enter your company's total
              debt and total equity in the calculator. The result will be the
              D/E Ratio for your company.
              <br />
              If your D/E Ratio is higher than 1, it means that your company has
              more debt than equity, indicating a higher level of risk. On the
              other hand, if your D/E Ratio is lower than 1, it means that your
              company has more equity than debt, indicating a lower level of
              risk.
              <br />
              Once you have calculated your D/E Ratio, you can use this
              information to make informed decisions about your company's
              financing. If your D/E Ratio is higher than 1, you may need to
              consider increasing your equity in order to reduce your level of
              risk. On the other hand, if your D/E Ratio is lower than 1, you
              may be able to take on more debt without increasing your level of
              risk.
              <br />
              Using our Debt to Equity Ratio Calculator can help you understand
              your company's financial position and make informed decisions
              about its future. Start using our calculator today and take the
              first step towards financial stability.
              <br />
              Closing Paragraph:
              <br />
              By using our Debt to Equity Ratio Calculator, you can make
              informed decisions about your company's financing and find ways to
              increase your equity and reduce your level of risk. Don't wait any
              longer, start using our calculator today and take control of your
              company's financial future
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Debttoequity;
