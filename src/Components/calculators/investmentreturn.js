import React from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Investmentreturn() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [result1, setresult1] = useState();

  const handlesubmit = () => {
    const totalReturnsAmount = input1 * (1 + input3 / 1200) ** (input2 * 12);
    setresult1(totalReturnsAmount);
  };
  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Investment Returns Calculator - Calculate Your Investment Returns |
          Bizdateup
        </title>
        <meta
          name="description"
          title="Investment Returns Calculator - Calculate Your Investment Returns | Bizdateup"
          content="Use our Investment Returns Calculator to estimate your investment returns and grow your portfolio with Bizdateup's investment tools. Try it now!"
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Investment Return Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Investment Return Online
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
                    Investment Amount
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
                    Time Horizon
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
                    Expected Rate of Return
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
              Investment Returns Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate Your Investment Returns with Ease
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              With Bizdateup's Investment Returns Calculator, estimating your
              investment returns has never been easier. Our user-friendly tool
              helps you calculate your returns on investment based on the amount
              invested, investment period, and expected rate of return.
              <br />
              Whether you're investing in stocks, mutual funds, or other
              investment options, our Investment Returns Calculator provides
              accurate and reliable estimates to help you make informed
              investment decisions. Plus, with our diversified investment
              options, you can grow your portfolio quickly and efficiently.
              <br />
              To use the Investment Returns Calculator, simply input your
              investment details, including the amount invested, investment
              period, and expected rate of return. Our tool will then generate
              an estimated return on investment, allowing you to plan your
              investments better and make informed decisions.
              <br />
              At Bizdateup, we believe in simplifying the investment process for
              everyone. That's why we offer a wide range of investment tools,
              including our Investment Returns Calculator. With our platform,
              you can invest in a diverse range of startups with ease and grow
              your portfolio quickly and efficiently.
              <br />
              Don't miss out on the opportunity to invest in the next big thing.
              Sign up with Bizdateup today and start your journey towards
              building a fast-growing, high-return portfolio with low risk while
              diversifying your portfolio.
              <br />
              Closing Paragraph:
              <br />
              Investing your hard-earned money can be a daunting task, but with
              Bizdateup's Investment Returns Calculator, you can make informed
              decisions and grow your wealth quickly and efficiently. So, why
              wait? Start your investment journey today and explore a world of
              diverse investment opportunities with Bizdateup
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Investmentreturn;
