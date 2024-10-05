import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Captable() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [result1, setresult1] = useState();
  const [result2, setresult2] = useState();

  const calculateOwnership = () => {
    const ownershipPercentage = (
      (input1 * input2 * input3) /
      (100 * input1 * input2)
    ).toFixed(2);
    const shareholderShares = ((input1 * input3) / 100).toFixed(0);
    return { ownershipPercentage, shareholderShares };
  };

  const calculateCapitalization = () => {
    const equityValue = (input1 * input2).toFixed(2);
    const debtValue = parseFloat(
      document.getElementById("debtValue").value
    ).toFixed(2);
    const enterpriseValue = (
      parseFloat(equityValue) + parseFloat(debtValue)
    ).toFixed(2);
    return { equityValue, debtValue, enterpriseValue };
  };

  const handlesubmit = () => {
    const ownership = calculateOwnership();
    const capitalization = calculateCapitalization();
    // Display ownership and capitalization data
    setresult1(ownership);
    setresult2(capitalization);
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Cap Table Calculator - Calculate Ownership & Equity Shares
        </title>
        <meta
          name="description"
          content="Use our Cap Table Calculator to determine ownership and equity shares of your startup. Easily track the dilution of your shares over time and plan your funding rounds accordingly."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Cap table Calculator
          </h2>
          <div className="flex justify-between gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Cap table Online
              </h2>
              <div className="h-[400px] box-border border rounded-[10px] border-solid border-[#F0D9FF] relative flex flex-col-reverse  md:flex md:flex-row  items-center p-8 ">
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
                    Number of Shares
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
                    Share Price
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
                    Equity Stake
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
              Cap Table Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Calculate Ownership & Equity Shares of Your Startup
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              At Bizdateup, we understand that managing the ownership and equity
              shares of your startup can be challenging. That's why we've
              created our Cap Table Calculator, a powerful tool that enables you
              to track and manage the dilution of your shares over time.
              <br />
              Our Cap Table Calculator allows you to calculate the ownership
              percentage and equity shares of your startup's shareholders,
              including founders, investors, and employees. You can input
              information such as the number of shares, the price per share, and
              the equity granted to each shareholder, and the calculator will
              generate a detailed cap table.
              <br />
              With our Cap Table Calculator, you can easily plan your funding
              rounds and track the impact of new investments on your cap table.
              The tool also allows you to project the dilution of your shares
              over time, giving you a clear view of the ownership structure of
              your startup.
              <br />
              At Bizdateup, we understand that every startup is unique, and our
              Cap Table Calculator is designed to be flexible to accommodate a
              variety of scenarios. You can customize the cap table based on
              your startup's ownership structure and add or remove shareholders
              as needed.
              <br />
              In conclusion, our Cap Table Calculator is a powerful tool that
              can help you manage the ownership and equity shares of your
              startup. With accurate and reliable data, you can make informed
              decisions about funding rounds, share issuances, and equity
              grants.
              <br />
              Closing Paragraph:
              <br />
              If you're looking for a reliable and easy-to-use Cap Table
              Calculator, look no further than Bizdateup. With our platform, you
              can invest in a diverse range of startups, track the performance
              of your portfolio, and manage the ownership structure of your
              startup with ease. Sign up with us today and start your journey
              towards building a fast-growing, high-return portfolio while
              diversifying your investment.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Captable;
