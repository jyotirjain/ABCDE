import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import Faqdata from "./faqdata.json";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { RightCircleOutlined } from "@ant-design/icons";
import Cta21 from "../../assets/images/cta/cta21.png";
import Cta22 from "../../assets/images/cta/cta22.png";

function Faq() {
  const [isItemOpen, setIsItemOpen] = useState(-1);
  const bodyRef = useRef();

  const toggleAccordionItem = (index) => {
    setIsItemOpen(isItemOpen === index ? -1 : index);
  };

  return (
    <div>
      <Navbar verified={"true"} userType="startup" />
      <Helmet defer={false}>
        <title>
          Frequently Asked Questions | Startup Investing FAQs | Bizdateup
        </title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about startup investing on Bizdateup. Get clarity on investment process, risks, returns, and more."
        />
        <meta
          name="keywords"
          content="frequently asked questions, startup investing FAQs, Bizdateup, investment process, risks, returns"
        />
      </Helmet>
      <div className="bg-[#f5f5f5] p-5 px-6 md:px-20 flex justify-center">
        <div className="w-full md:max-w-[1560px] 2xl:w-[70%]">
          <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter]">
            FAQ's
          </h2>
          <div className="flex flex-col gap-y-8 md:flex md:flex-row gap-x-8">
            <div className="box-border w-[100%] h-fit border rounded-[10px] border-solid border-[#DDDDDD] bg-white py-4 shadow-[0px_1px_12px_rgba(0,0,0,0.15)]">
              {Faqdata.map((data, index) => (
                <div key={index} className="overflow-hidden mb-2">
                  <button
                    className="flex justify-between items-center px-4 h-[67px] w-full bg-white"
                    onClick={() => toggleAccordionItem(index)}
                  >
                    <span>
                      <h4 className="font-[Inter] text-start text-[14px] leading-[14.41px] text-[#202054]">
                        {data.question}
                      </h4>
                    </span>
                    <span>
                      <BiChevronDown
                        className={`text-[17px] mb-4 md:ml-0 ml-1 transition-all duration-500 ${
                          isItemOpen === index ? "rotate-180" : ""
                        }`}
                      ></BiChevronDown>
                    </span>
                  </button>

                  {isItemOpen === index && (
                    <div
                      className="px-4 transition-all duration-[400ms] overflow-hidden"
                      style={{
                        height:
                          isItemOpen === index
                            ? bodyRef.current?.scrollHeight
                            : 0,
                      }}
                    >
                      <div ref={bodyRef} className="">
                        <p className="font-[Inter] pb-8 text-start text-[12px] leading-[20px] text-[#828F99]">
                          {data.answer}
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="">
                    <hr className="" />
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:flex md:flex-col md:gap-y-8">
              <Link to="/invest">
                <div className="cta">
                  <div className="ctaimg bg-[#DEF7E7]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Done with questions?
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Discover new investment opportunities today.
                    </p>
                    <div className="flex justify-end mt-14">
                      <img src={Cta21} alt="" className="" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 mx-5">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Invest Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>

              <a
                href="https://calendly.com/bizdateup/bizdateup-investor-application"
                target="_blank"
              >
                <div className="cta">
                  <div className="ctaimg bg-[#A9BAE8]">
                    <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Not satisfied yet
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Book a one-to-one call with our team to understand better.
                    </p>
                    <div className="flex justify-end mt-14">
                      <img src={Cta22} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 mx-5">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Call Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Faq;
