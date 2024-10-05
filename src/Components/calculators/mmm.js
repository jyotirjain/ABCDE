import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Mmm() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [result1, setresult1] = useState();

  const handlesubmit = () => {
    let calculatedValuation = 0;

    if (input1 > 0 && input3 > 0) {
      calculatedValuation = input1 * input3;
    } else if (input2 > 0 && input3 > 0) {
      calculatedValuation = input2 * input3;
    }

    setresult1(calculatedValuation);
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Market Multiple Method Valuation Calculator | Bizdateup</title>
        <meta
          name="description"
          content="Use Bizdateup's market multiple method valuation calculator to calculate your company's valuation based on its earnings and market multiples."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Market Multiple Method Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Market Multiple Method Online
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
                    Revenue
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
                    EBITDA
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
                    industrial Multiple
                  </label>
                  <input
                    className="cal-input"
                    value={input3}
                    onChange={(e) => setinput3(e.target.value)}
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
              Market Multiple Method Valuation Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate Your Company's Valuation Based on Earnings and Market
              Multiples
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Determining a company's valuation is essential for investors and
              business owners alike. It allows you to assess the worth of a
              business and make informed decisions about investments, mergers,
              or acquisitions. One of the methods used to determine the
              valuation of a company is the market multiple method.
              <br />
              The market multiple method is a valuation technique that looks at
              the company's earnings and compares them to other companies in the
              same industry. The method takes into account the price-to-earnings
              (P/E) ratio of the company and compares it to the average P/E
              ratio of other companies in the industry. This helps to determine
              whether the company is undervalued or overvalued relative to its
              peers.
              <br />
              With Bizdateup's market multiple method valuation calculator, you
              can easily calculate the valuation of your company. The calculator
              uses the company's earnings and the average P/E ratio of other
              companies in the industry to determine the valuation. The result
              is an estimated value of the company that can be used as a
              starting point for negotiations, investments, or other financial
              decisions.
              <br />
              To use the calculator, simply input the company's earnings and the
              average P/E ratio of other companies in the industry. The
              calculator will then provide an estimated valuation of the
              company.
              <br />
              The market multiple method valuation calculator is a powerful tool
              for investors and business owners looking to determine the value
              of their companies. With its simple interface and accurate
              calculations, the calculator is an essential resource for anyone
              looking to make informed financial decisions.
              <br />
              Closing Paragraph:
              <br />
              Knowing the value of your company is crucial for making smart
              investment decisions. With the market multiple method valuation
              calculator from Bizdateup, you can easily determine the value of
              your company and make informed financial decisions. Don't miss out
              on the opportunity to take control of your company's future - sign
              up with Bizdateup today and start using our valuation calculator
              to make informed decisions about your investments.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Mmm;
