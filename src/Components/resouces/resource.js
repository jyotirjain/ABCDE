import React, { useState } from "react";
import Topsection from "../Layout2/Topsection";
import Navbar from "../Navbar1/Navbar1";
import Section1 from "./section1";
import { AiOutlineRight } from "react-icons/ai";
import { RightCircleOutlined } from "@ant-design/icons";
import { Resourcedata } from "./resourcedata";

import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Resource() {
  const [calculator, setcalculator] = useState(Resourcedata);
  return (
    <div>
      <Topsection />
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>
          Get in Touch with Bizdateup | Contact Us for Investor Inquiries
        </title>
        <meta
          name="description"
          content="Contact Bizdateup for any investor inquiries or questions. Our team is here to assist you. Reach out to us through our contact form or email and we'll get back to you promptly."
        />
        <meta
          name="keywords"
          content="Bizdateup contact, investor inquiries, contact form, email, assistance"
        />
      </Helmet>
      <Section1 />
      <div className="flex justify-center">
        <div className="w-[80%] flex justify-center">
          <div className="w-fit py-10 grid  gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 md:grid-cols-3 md:gap xl:gap-x-16 xl:gap-y-12">
            {calculator.map((data, index) => {
              return (
                <div className="flex justify-center">
                  <div
                    key={index}
                    className=" md:w-[300px] xl:w-[360px] xl:h-72 rounded-[10px] bg-[#ffffff] shadow-[0px_1px_16px_rgba(0,0,0,0.15)]"
                  >
                    <a href={data.path}>
                      <div className="w-full h-64 flex flex-col justify-center p-[22px] rounded-[10.3802px] bg-[#f7ecff]  gap-3">
                        <div className="box-border flex items-center justify-center w-[84.51px] h-[84.51px] rounded-[10px] border-[0.5px] border-solid border-[#DDDDDD] bg-[#ffffff]">
                          <img src={data.image} alt="" />
                        </div>
                        <label className="   not-italic font-normal text-[20.3426px]  tracking-[0.226028px] text-[#180048] font-[Inter]">
                          {data.title}
                        </label>
                        <p className="not-italic font-normal text-[15.822px] md:leading-[15px] xl:leading-[25px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                          {data.desc}
                        </p>
                      </div>
                      <div className="flex justify-between items-center my-2 mx-5 py-1">
                        <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                          Get Started
                        </label>
                        <RightCircleOutlined />
                      </div>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default Resource;
