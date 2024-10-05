import Footer2 from "../Footer2/Footer2";
import Navbar from "../Navbar1/Navbar1";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { RightCircleOutlined } from "@ant-design/icons";
import Creative from "../../assets/images/calculators/creative.png";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Termsheet() {
  const [input1, setinput1] = useState();
  const [input2, setinput2] = useState();
  const [input3, setinput3] = useState();
  const [input4, setinput4] = useState();

  const [input5, setinput5] = useState();
  const [result1, setresult1] = useState();
  const [result2, setresult2] = useState();

  const handlesubmit = () => {
    const postValuation = Number(input1) + Number(input2);
    const dilution =
      (Number(input2) / (postValuation + input3 * postValuation)) * 100;
    setresult1(postValuation);
    setresult2(dilution);
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Term Sheet Calculator | Free Template for Startups | Bizdateup
        </title>
        <meta
          name="description"
          content="Easily create a term sheet for your startup with our free Term Sheet Calculator. Input your terms and generate a professional document in minutes."
        />
      </Helmet>
      <div className="flex justify-center bg-[#fafafa] p-4 md:p-8">
        <div className="w-[100%] md:max-w-[1350px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Termsheet Calculator
          </h2>
          <div className="flex gap-6">
            <div className="profile-container w-full md:w-[75%] flex flex-col gap-4">
              <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
                Calculate Your Termsheet Online
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
                    Principal Amount
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
                    Interest Rate
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
                    Maturity Date
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
                    Conversion Discount
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
                    Valuation cap
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
              Term Sheet Calculator
            </h2>
            <h2 className="not-italic font-normal text-xl leading-[23px] text-[#202054] font-[Inter]">
              Create a Professional Term Sheet for Your Startup in Minutes
            </h2>
            <p className="not-italic font-normal text-[16px] leading-6 text-[#828F99] font-[Inter]">
              As a startup founder, negotiating a term sheet with investors is a
              crucial step in securing funding for your business. A term sheet
              outlines the key terms of an investment and sets the stage for the
              legal documentation that will follow. However, creating a term
              sheet can be a daunting task, especially for first-time founders.
              <br />
              With Bizdateup's Term Sheet Calculator, you can easily create a
              professional term sheet for your startup in just a few minutes.
              Our free template includes all the necessary sections and terms
              required for a standard term sheet, such as pre-money valuation,
              investment amount, liquidation preference, and more.
              <br />
              To use the Term Sheet Calculator, simply input the relevant terms
              and numbers into the calculator, and our tool will generate a
              polished and professional-looking document for you. You can also
              customize the font, color, and format to match your brand.
              <br />
              It's important to note that the Term Sheet Calculator is not
              intended to provide legal advice or a binding agreement. It's
              merely a tool to help you create a professional-looking term sheet
              quickly and easily. It's always recommended that you consult with
              a lawyer before finalizing any legal documents.
              <br />
              In conclusion, if you're a startup founder looking to secure
              funding for your business, our Term Sheet Calculator is an
              essential tool that can save you time and energy. With our free
              template, you can easily create a polished and professional term
              sheet in just a few clicks. Give it a try today and streamline
              your fundraising process
              <br />
              Closing Paragraph:
              <br />
              At Bizdateup, we're committed to providing startups with the tools
              and resources they need to succeed. Our Term Sheet Calculator is
              just one of the many free resources we offer to help entrepreneurs
              streamline their fundraising process. We understand that
              negotiating with investors can be a complex and challenging
              process, and we're here to help make it easier. Give our Term
              Sheet Calculator a try today and see how it can benefit your
              startup.
            </p>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Termsheet;
