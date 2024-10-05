import React from "react";
import about1 from "../../Images/about1.png";
import about2 from "../../Images/about2.png";
import about3 from "../../Images/about3.png";
import about4 from "../../Images/about4.png";

const AboutInvest = () => {
  return (
    <div className=" w-[100%] flex flex-col justify-center items-center md:px-0 ">
      <h2 className="text-[28px] text-[#180048] md:max-w-[1150px]  md:ml-0  font-[400] pb-[23px] leading-[39.2px] mt-10">
        Why Top 1% Investors of India trust us?
      </h2>
      <div className=" md:w-[993px] flex md:justify-between justify-center flex-col md:flex-row items-center my-[10px] md:my-[30px]">
        <div className="w-[234px] flex flex-col justify-center items-center h-[208px] bg-[#F6F6FE] text-center ">
          <img src={about1} alt="" />
          <p className=" font-[Inter] font-[400] leading-[37.5px] text-[#202054] text-[25px] ">
            500+
          </p>
          <p className=" font-[Inter] font-[300] leading-[36px] text-[#180048] text-[20px] pt-[3px]">
            Active Investor
          </p>
        </div>
        <div className="w-[234px]  flex flex-col justify-center items-center h-[208px] bg-[#F6F6FE] text-center md:mt-0 mt-[50px]">
          <img src={about2} alt="" />
          <p className=" font-[Inter] font-[400] leading-[37.5px] text-[#202054] text-[25px] ">
            4000+
          </p>
          <p className=" font-[Inter] font-[300] leading-[36px] text-[#180048] text-[20px] pt-[3px]">
            Community
          </p>
        </div>
        <div className="w-[234px]  flex flex-col justify-center items-center h-[208px] bg-[#F6F6FE] text-center md:mt-0 mt-[50px]">
          <img src={about3} alt="" />
          <p className=" font-[Inter] font-[400] leading-[37.5px] text-[#202054] text-[25px] ">
            25+ Funded
          </p>
          <p className=" font-[Inter] font-[300] leading-[36px] text-[#180048] text-[20px] pt-[3px]">
            Startups
          </p>
        </div>
        <div className="w-[234px]  flex flex-col justify-center items-center h-[208px] bg-[#F6F6FE] text-center md:mt-0 mt-[50px]">
          <img src={about4} alt="" />
          <p className=" font-[Inter] font-[400] leading-[37.5px] text-[#202054] text-[25px] ">
            50 Cr+
          </p>
          <p className=" font-[Inter] font-[300] leading-[36px] text-[#180048] text-[20px] pt-[3px]">
            Total Funding
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutInvest;
