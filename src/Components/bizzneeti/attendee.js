import React from "react";
import Marquee from "react-fast-marquee";

function Attendee() {
  return (
    <div className="bg-[#F2F0F8] w-full py-[40px] px-[20px] flex flex-col justify-center items-center">
      <h1 className="text-[38px] text-[#FF706B] font-[600] ">
        WHO SHOULD ATTEND ?
      </h1>
      <div className="w-full max-w-[1280px] mt-6 flex flex-col gap-8 bg-[#DCD9E5] rounded-3xl overflow-hidden py-10">
        <Marquee>
          <div className="p-4 bg-[#4C1145] mr-6 rounded-[16px]">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Entrepreneurs
            </label>
          </div>
          <div className="p-4 bg-[#7750C0] mr-6 rounded-[60px] px-6">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Investors
            </label>
          </div>
          <div className="p-4 bg-[#FF706B] mr-6 rounded-[16px]">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Fintechs
            </label>
          </div>
          <div className="p-4 bg-[#4C1145] mr-6 rounded-[60px] px-6">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Fintechs
            </label>
          </div>
          <div className="p-4 bg-[#7750C0] mr-6 rounded-[16px]">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Financial Institutions
            </label>
          </div>
          <div className="p-4 bg-[#FF706B] mr-6 rounded-[60px] px-6">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Policy Makers
            </label>
          </div>
        </Marquee>
        <Marquee direction="right">
          <div className="p-4 bg-[#4C1145] mr-6 rounded-[16px]">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              CXOs
            </label>
          </div>
          <div className="p-4 bg-[#7750C0] mr-6 rounded-[60px] px-6">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Fintech Professionals
            </label>
          </div>
          <div className="p-4 bg-[#FF706B] mr-6 rounded-[16px]">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Fintech Enthusiasts
            </label>
          </div>
          <div className="p-4 bg-[#4C1145] mr-6 rounded-[60px] px-6">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Tech Firms
            </label>
          </div>
          <div className="p-4 bg-[#7750C0] mr-6 rounded-[16px]">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Financial Bodies
            </label>
          </div>
          <div className="p-4 bg-[#FF706B] mr-6 rounded-[60px] px-6">
            <label className="text-[#fff] font-[inter] text-[20px] md:text-[28px] font-[500]  ">
              Founders
            </label>
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Attendee;
