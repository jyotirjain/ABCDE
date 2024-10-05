import React from "react";
import fact1 from "../../Images/fact1.png";
import fact2 from "../../Images/fact2.png";
import fact3 from "../../Images/fact3.png";

const FactRaisefund = () => {
  return (
    <>
      <div className="bg-[#F6F6FE] w-[100%] pb-[65px] md:px-0 px-[16px] overflow-hidden font-[Inter]">
        <div className="md:w-[1143px] mx-auto">
          <div className=" md:pt-[100px] pt-[43px] md:pb-[74px] pb-[40px]">
            <h4 className="text-[26px] text-[#230152]  font-[500] tracking-[0.2px] leading-[37.28px]">
              Some amazing facts about Fundraising
            </h4>
          </div>
          <div className=" flex flex-col md:gap-y-[53px] justify-center items-center   ">
            <div className="md:flex justify-between items-center w-[100%] ">
              <div className="md:w-[545px] md:h-[256px] pb-5 md:pb-0 mb-6 md:mb-0 bg-white cursor-pointer md:mr-[28px] tracking-[0.4px] leading-[24px]  px-[17.5px] z-30 ">
                <div className="w-[60px] pt-[24px]">
                  <img src={fact1} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[Inter] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[15px] ">
                  VC Acceptable / VC Friendly
                </h4>
                <p className="text-[15.31px] font-[400] font-[Inter] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                  VCs have approved of our Crowd SAFE. Your upcoming or existing
                  rounds won't be affected. On Bizdateup, you can raise money
                  before, during, or after your venture round. Many businesses
                  who ran Bizdateup funding campaigns had the support of
                  ecosystem leaders.
                </p>
              </div>
              <div className="md:w-[545px] md:h-[256px] pb-5 md:pb-0 mb-6 md:mb-0 bg-white cursor-pointer tracking-[0.4px] leading-[24px]  px-[17.5px] z-30 ">
                <div className="w-[60px] pt-[24px]">
                  <img src={fact2} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[Inter] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[15px] ">
                  1 Seat on the cap table
                </h4>
                <p className="text-[15.31px] font-[400] font-[Inter] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                  All Bizdateup investors appear on your cap table as a single
                  line and act as a single investor, with no voting or
                  information rights. Our tools make it simple to manage a group
                  as if it were a single person. Your crowdfunding round will
                  not increase operational costs.
                </p>
              </div>
            </div>
            <div className="md:w-[545px] md:h-[256px]  bg-white cursor-pointer tracking-[0.4px] leading-[24px] md:mb-0  px-[17.5px] z-30 ">
              <div className="w-[60px] pt-[24px]">
                <img src={fact3} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[Inter] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[15px] ">
                Legal and onboarding specialist
              </h4>
              <p className="text-[15.31px] font-[400] font-[Inter] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                Our team will assist you throughout the onboarding process. We
                know how to crowdfund online better than anyone, and we will
                share this knowledge with you. Everything you need to manage
                your investors effectively and quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FactRaisefund;
