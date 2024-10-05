import React, { useState } from "react";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Roi() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();

  const [result1, setresult1] = useState();
  const [result2, setresult2] = useState();

  const handlesubmit = () => {
    const totalReturnValue = Number(input2) - Number(input1) + Number(input4);
    const totalReturnPercentage = (totalReturnValue / Number(input1)) * 100;
    setresult1(totalReturnPercentage.toFixed(2));
    const annualizedReturnPercentage =
      Math.pow(1 + totalReturnPercentage / 100, 1 / Number(input3)) - 1;
    setresult2((annualizedReturnPercentage * 100).toFixed(2));
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          ROI Calculator - Calculate Return on Investment (ROI) with Bizdateup
        </title>
        <meta
          name="description"
          content="Use Bizdateup's ROI Calculator to evaluate the profitability of your investments. Get an accurate estimate of your Return on Investment (ROI) and make informed decisions for your business."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            ROI Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your ROI Online
              </h2>
              <div className="h-[400px] box-border border rounded-[10px] border-solid border-[#F0D9FF] relative flex flex-col-reverse  md:flex md:flex-row items-center p-8">
                <div className="answerbox w-[100%] md:w-[250px] xl:w-[300px]">
                  <div>
                    <label className="not-italic font-normal text-[13.33px] leading-5 flex items-center text-white mt-[-10px]">
                      Result
                    </label>
                    <label className="not-italic font-normal text-[22px] leading-[33px] text-white">
                      {result1} | {result2}
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
                    Initial Investment Amount
                  </label>
                  <input
                    className="cal-input"
                    type="number"
                    placeholder="0"
                    value={input1}
                    onChange={(e) => setinput1(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Final Investment Amount
                  </label>
                  <input
                    className="cal-input"
                    type="number"
                    placeholder="0"
                    value={input2}
                    onChange={(e) => setinput2(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Investment Period
                  </label>
                  <input
                    className="cal-input"
                    type="number"
                    placeholder="0"
                    value={input3}
                    onChange={(e) => setinput3(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Additional Cash Flows
                  </label>
                  <input
                    className="cal-input"
                    type="number"
                    placeholder="0"
                    value={input4}
                    onChange={(e) => setinput4(e.target.value)}
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
              ROI Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate Your Return on Investment (ROI) with Bizdateup
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Are you looking to evaluate the profitability of your investments?
              Then look no further than Bizdateup's ROI Calculator. Our
              easy-to-use calculator provides an accurate estimate of your
              Return on Investment (ROI), allowing you to make informed
              decisions for your business.
              <br />
              Calculating your ROI is crucial for determining the effectiveness
              of your investments. Our ROI Calculator uses a simple formula to
              measure the profitability of your investments by comparing the
              return on your investment to the cost of your investment.
              <br />
              Using our calculator is simple. All you need to do is enter the
              total amount of your investment and the estimated return on
              investment, and the calculator will do the rest. You'll get an
              accurate estimate of your ROI, which can help you make informed
              decisions about future investments.
              <br />
              Our ROI Calculator is a useful tool for businesses of all sizes
              and industries. Whether you're looking to evaluate the
              profitability of a single investment or your entire portfolio, our
              calculator can help you make data-driven decisions.
              <br />
              At Bizdateup, we are committed to providing our users with
              accurate and reliable investment tools. While our calculator
              provides an accurate estimate of your ROI, we want to remind you
              that the results are indicative in nature and should not be
              considered as certified by Bizdateup.
              <br />
              In conclusion, if you're looking to evaluate the profitability of
              your investments, try out our ROI Calculator today. With our
              user-friendly interface and accurate calculations, you can make
              informed decisions for the future of your business.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Roi;
