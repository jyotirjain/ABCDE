import React, { useState } from "react";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Equitydilution() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();

  const [result1, setresult1] = useState();
  const [result2, setresult2] = useState();

  const handlesubmit = () => {
    const values = (input2 * input1 + input3) / input4;
    const amount = ((values - input2) / values) * 100;
    setresult1(Math.floor(values));
    setresult2(Math.floor(amount));
  };

  return (
    <div>
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>Equity Dilution</title>
        <meta
          name="description "
          title="Equity Dilution Calculator - Calculate Your Ownership Stake in a Company"
          content="Use our Equity Dilution Calculator to determine your ownership stake in a company after rounds of funding and dilution. Simplify your investment strategy with Bizdateup"
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Equity Dilution Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Equity Dilution Online
              </h2>
              <div className="h-[400px] box-border border rounded-[10px] border-solid border-[#F0D9FF] relative flex flex-col-reverse  md:flex md:flex-row  items-center p-8">
                <div className="answerbox  w-[100%] md:w-[250px] xl:w-[300px]">
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
                    Initial Share Price
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
                    Number of Shares
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
                    New Investment Amount
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
                    New Share Price
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
              Equity Dilution Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate Your Ownership Stake in a Company
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Are you considering investing in a startup or small business? Do
              you want to know how much your ownership stake will be after
              rounds of funding and dilution? Our Equity Dilution Calculator can
              help simplify the process for you. With just a few inputs, you can
              calculate your percentage of ownership and plan your investment
              strategy accordingly.
              <br />
              Our calculator takes into account the number of shares outstanding
              before and after funding rounds, the amount of funding raised, and
              the pre and post-money valuations of the company. This information
              is used to calculate the dilution of your ownership stake over
              time. With this knowledge, you can make informed decisions about
              your investment portfolio and plan for future rounds of funding.
              <br />
              Using our Equity Dilution Calculator is quick and easy. Simply
              input the relevant information into the fields provided and let
              our calculator do the rest. Whether you're a seasoned investor or
              just starting out, our tool will simplify your investment strategy
              and help you make smarter investment decisions.
              <br />
              At Bizdateup, we believe in democratizing access to investment
              opportunities. Our platform makes it easy for anyone to invest in
              a diverse range of startups and small businesses. Don't miss out
              on the opportunity to grow your portfolio and diversify your
              investments. Sign up with Bizdateup today and start your journey
              towards building a high-return portfolio with low risk.
              <br />
              Closing Paragraph: Equity dilution is an important aspect of
              startup investing. By using our Equity Dilution Calculator, you
              can better understand how your ownership stake will be affected
              over time. With this knowledge, you can make informed decisions
              about your investment portfolio and plan for future rounds of
              funding. At Bizdateup, we offer a wide range of investment
              opportunities, including startup and small business investments.
              Start investing with us today and take advantage of the potential
              for high returns while diversifying your portfolio.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Equitydilution;
