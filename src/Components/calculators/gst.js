import React from "react";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer2/Footer2";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useState } from "react";

function Gst() {
  const [amount, setAmount] = useState(0);
  const [gstRate, setGstRate] = useState(0);
  const [gstResult, setGstResult] = useState(0);

  const handleAmountChange = (e) => {
    const inputAmount = parseFloat(e.target.value);
    setAmount(inputAmount);
    calculateGst(inputAmount, gstRate);
  };

  const handleGstRateChange = (rate) => {
    setGstRate(rate);
    calculateGst(amount, rate);
  };

  const calculateGst = (inputAmount, rate) => {
    const gstAmount = (inputAmount * rate) / 100;
    setGstResult(Math.ceil(gstAmount));
  };

  return (
    <div>
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>GST</title>
        <meta name="description" content="GST description" />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4  md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            GST Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your GST Amount Online
              </h2>
              <div className="h-[400px] box-border border rounded-[10px] border-solid border-[#F0D9FF] relative flex flex-col-reverse  md:flex md:flex-row  items-center p-8 ">
                <div className="answerbox w-[100%] md:w-[250px] xl:w-[300px] ">
                  <div>
                    <label className="not-italic font-normal text-[13.33px] leading-5 flex items-center text-white mt-[-10px]">
                      Result
                    </label>
                    <label className="not-italic font-normal text-[22px] leading-[33px] text-white">
                      {gstResult.toFixed(2)}
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
                    Cost of goods?service
                  </label>
                  <input
                    className="cal-input"
                    onChange={handleAmountChange}
                    type="number"
                    placeholder="0"
                  />
                </div>

                <div>
                  <label>Select GST Rate</label>
                  <div className="flex gap-2">
                    <div
                      onClick={() => handleGstRateChange(3)}
                      className="w-[87.54px] h-[29px] rounded-[10px] bg-[#e1ddf8] flex justify-center cursor-pointer  items-center "
                    >
                      3%
                    </div>
                    <div
                      onClick={() => handleGstRateChange(5)}
                      className="w-[87.54px] h-[29px] rounded-[10px] bg-[#e1ddf8] flex justify-center cursor-pointer  items-center "
                    >
                      5%
                    </div>

                    <div
                      onClick={() => handleGstRateChange(7)}
                      className="w-[87.54px] h-[29px] rounded-[10px] bg-[#e1ddf8] flex justify-center cursor-pointer  items-center "
                    >
                      7%
                    </div>
                    <div
                      onClick={() => handleGstRateChange(14)}
                      className="w-[87.54px] h-[29px] rounded-[10px] bg-[#e1ddf8] flex justify-center  cursor-pointer items-center "
                    >
                      14%
                    </div>
                    <div
                      onClick={() => handleGstRateChange(18)}
                      className="w-[87.54px] h-[29px] rounded-[10px] bg-[#e1ddf8] flex justify-center  cursor-pointer items-center "
                    >
                      18%
                    </div>
                  </div>
                </div>
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
              GST Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate your GST payment and input tax credit quickly and
              accurately
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Our GST Calculator makes it simple to calculate your Goods and
              Services Tax. To calculate the GST, just multiply the taxable
              amount by the GST rate. If both CGST and SGST/UTGST are applied,
              then each amount is half of the total GST amount. If you already
              have the amount including GST, you can find the GST excluding
              amount with the formula: GST excluding amount = GST including
              amount / (1 + GST rate/100). In India, the percentage of GST
              varies depending on the goods or services provided. The GST rates
              range from 0% to 28%, with most goods and services falling under
              5%, 12%, or 18%. Necessity items like milk and wheat flour fall
              under the 0% category, while some items like cement, cars, and
              tobacco fall under the 28% category. Some goods and services are
              also exempted from GST.
              <br />
              At Bizdateup, we believe in simplifying the investment process for
              everyone. That's why we offer a wide range of investment tools,
              including our GST Calculator. With our platform, you can invest in
              a diverse range of startups with ease, and grow your portfolio
              quickly and efficiently.
              <br />
              Don't miss out on the opportunity to invest in the next big thing.
              Sign up with Bizdateup today, and start your journey towards
              building a fast-growing, high-return portfolio with low risk while
              diversifying your portfolio.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gst;
