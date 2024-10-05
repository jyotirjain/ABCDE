import React, { useState } from "react";
import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Burnrate() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [result, setresult] = useState();

  const handlesubmit = () => {
    const calculatedBurnRate = input1 - input2;
    setresult(calculatedBurnRate);
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>Burn Rate Calculator - Calculate Your Startup's Burn Rate</title>
        <meta
          name="description"
          content="Determine how quickly your startup is using up its cash reserves with Bizdateup's Burn Rate Calculator. Simply input your monthly expenses and monthly revenue to see your startup's burn rate."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Burn Rate Calculator
          </h2>
          <div className="flex gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Burn Rate Online
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
              Burn Rate Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate Your Startup's Burn Rate with Our Easy-to-Use Calculator
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              Are you wondering how fast your startup is using up its cash
              reserves? Do you want to know how long your business can continue
              operating at its current burn rate? Look no further than
              Bizdateup's Burn Rate Calculator.
              <br />
              Calculating your startup's burn rate is a critical metric for
              entrepreneurs and investors alike. Your burn rate is the amount of
              money you are spending each month, and it's an important factor to
              consider when determining how much funding you need to keep your
              business going.
              <br />
              Our Burn Rate Calculator is a simple and easy-to-use tool that
              will help you calculate your startup's burn rate in just a few
              clicks. All you need to do is input your monthly expenses and your
              monthly revenue, and our calculator will do the rest.
              <br />
              Once you know your burn rate, you can make more informed decisions
              about your startup's financial future. You can determine how long
              you can continue operating at your current rate, and how much
              funding you'll need to raise to extend your runway.
              <br />
              Using the Burn Rate Calculator is easy. Simply enter your monthly
              expenses, including salaries, rent, utilities, and any other
              expenses associated with running your business. Then, input your
              monthly revenue, and our calculator will give you your startup's
              burn rate.
              <br />
              Remember, your burn rate is a critical metric that can help you
              make more informed decisions about your startup's financial
              future. Don't let your business run out of cash – use our Burn
              Rate Calculator today to keep your startup's finances on track.
              <br />
              Closing Paragraph:
              <br />
              At Bizdateup, we know how important it is for startups to keep a
              close eye on their finances. That's why we offer a range of tools
              and resources to help entrepreneurs stay on top of their financial
              metrics, including our Burn Rate Calculator. Sign up with
              Bizdateup today to start using our suite of investment and
              financial tools to help your startup thrive.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Burnrate;
