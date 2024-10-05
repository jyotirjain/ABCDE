import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Berkus() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();

  const [input5, setinput5] = useState();
  const [result1, setresult1] = useState();

  const handlesubmit = () => {
    const soundnessWeight = 0.2;
    const managementWeight = 0.25;
    const stageWeight = 0.15;
    const prototypeWeight = 0.3;
    const marketWeight = 0.1;

    const totalScore =
      input1 * soundnessWeight +
      input2 * managementWeight +
      input3 * stageWeight +
      input4 * prototypeWeight +
      input5 * marketWeight;

    const multiplier = 500000;

    const valuation = totalScore * multiplier;

    setresult1(valuation);
  };

  return (
    <div>
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>
          Calculate Startup Valuation from Berkus Method | Bizdateup
        </title>
        <meta
          name="description"
          content="Easily calculate the valuation of a startup using the Berkus Method. Get a realistic valuation in just a few clicks. Sign up for Bizdateup today!"
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Berkus Method Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Berkus Method Online
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
                    Sound Idea
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
                    Quality Management Team
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
                    Prototype
                  </label>
                  <input
                    className="cal-input"
                    value={input3}
                    onChange={(e) => setinput3(e.target.value)}
                    type="number"
                    placeholder="0"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="not-italic font-normal text-[13.33px]  text-[#828F99] font-[Inter]">
                    Startegic Relationships
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
                    Product rollout and Sales
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
              Valuation from Berkus Method Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate the Valuation of Your Startup with the Berkus Method
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              If you're looking to invest in a startup or trying to understand
              the value of your own startup, the Berkus Method can be a useful
              tool. It's a quick and easy way to get a ballpark valuation of a
              company that's still in the early stages.
              <br />
              The Berkus Method is a five-point scale that assigns a dollar
              value to each milestone achieved by the startup. These milestones
              include things like having a working prototype, achieving a
              breakeven point, or reaching a certain level of sales. The method
              was created by Dave Berkus, a well-known angel investor.
              <br />
              With our Valuation from Berkus Method calculator, you can quickly
              calculate the value of your startup or the startup you're
              interested in investing in. All you need to do is enter the dollar
              value for each of the five milestones and our calculator will give
              you a realistic valuation
            </p>

            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              How to Use the Valuation from Berkus Method Calculator
            </h2>
            <p>
              Using our Valuation from Berkus Method calculator is easy. Here's
              how to get started:
              <br />
              Enter the dollar value achieved for each of the five milestones
              listed in the calculator.
              <br />
              Click on the "Calculate" button.
              <br />
              Our calculator will give you a realistic valuation for the
              startup.
              <br />
              It's important to note that the valuation you get from the Berkus
              Method is not a precise valuation, but rather a rough estimate.
              This method does not take into account the future potential of the
              company, which can have a significant impact on its valuation
            </p>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Why Use the Valuation from Berkus Method Calculator?
            </h2>
            <p>
              The Valuation from Berkus Method calculator is a quick and easy
              way to get a rough estimate of the value of a startup. It's
              particularly useful for early-stage companies that may not have a
              lot of financial history to work with.
              <br />
              If you're an investor, the Berkus Method can help you determine if
              a startup is worth investing in. If the valuation you get from the
              calculator is significantly lower than what the startup is asking
              for, it may be a sign that the company is overvalued.
              <br />
              If you're an entrepreneur, the Berkus Method can help you
              understand the value of your startup and determine how much equity
              to give up when seeking investment.
            </p>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Sign Up for Bizdateup Today
            </h2>
            <p>
              At Bizdateup, we believe in simplifying the investment process for
              everyone. Our platform offers a wide range of investment tools,
              including our Valuation from Berkus Method calculator, which can
              help you make informed investment decisions.
              <br />
              Don't miss out on the opportunity to invest in the next big thing.
              Sign up with Bizdateup today, and start your journey towards
              building a fast-growing, high-return portfolio with low risk while
              diversifying your portfolio.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Berkus;
