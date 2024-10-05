import React from "react";
import frame5 from "../../Images/frame5.png";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosSquare } from "react-icons/io";
import { NavLink } from "react-router-dom";

import raisefundhero from "../../Images/raisefundhero.png";
import heroosade1 from "../../Images/heroosade1.png";
import heroosade2 from "../../Images/heroosade2.png";

const SectionRaisefund = () => {
  return (
    <>
      <section>
        <div className="bg-[#240253] flex justify-center relative md:py-[100px] py-[44px] w-[100%] font-[Inter]">
          <div className="md:flex justify-center items-center md:max-w-[1500px]  md:h-[509px] h-[803px] ">
            <div className=" md:flex md:flex-col  md:w-[85%] 2xl:w-[70%] md:m-auto  md:px-[0] px-[16px] text-[#FFFFFF]">
              <div className="flex justify-start items-center gap-x-5">
                <div className="flex md:justify-start mb-[4px] items-center ">
                  <div className=" text-[#FC9D35] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[13.33px] text-[#ffffff] font-[600] leading-[19.99px]">
                      STARTUP INVESTING
                    </h4>
                  </div>
                </div>
                <div className="flex md:justify-start mb-[4px] items-center ">
                  <div className=" text-[#2DD683] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[13.33px] text-[#ffffff] font-[600] leading-[19.99px]">
                      FUNDRAISING
                    </h4>
                  </div>
                </div>
                <div className="flex md:justify-start mb-[4px] items-center ">
                  <div className=" text-[#D5D8F3] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[13.33px] text-[#ffffff] font-[600] leading-[19.99px]">
                      STARTUP ECOSYSTEM
                    </h4>
                  </div>
                </div>
              </div>
              <h4 className="md:font-[600] font-[500] md:text-[48px] md:w-[650px] text-[30px] md:leading-[72px] leading-[45px] ">
                Raising a round is not easy, but Bizdateup has made it easier.
              </h4>

              <p className="md:font-[400] md:w-[617px] font-[200] md:pt-[18px] pt-[30px] md:pr-[70px] pr-[40px] md:text-[20px] text-[16px] md:leading-[30px] leading-[24px] md:pb-[43px] pb-[30px] tracking-[2.4%]">
                Whether it’s crowdfunding, raising privately or a discount pool,
                find out how we can accommodate your fundraising needs.
              </p>

              <div className="md:text-start text-center">
                <NavLink to="/startup/signup">
                  <button className=" text-[#ffffff] md:px-6 md:py-[8px] py-[9px] px-12 border-[#ffffff] md:rounded-none rounded-[10px] border-[1px]  hover:bg-[#3e1c7d] duration-200 bg-[#F3B517] w-[100%] md:w-auto">
                    <h4 className="flex items-center justify-center md:px-[25px]">
                      {" "}
                      Register{" "}
                    </h4>
                  </button>
                </NavLink>
              </div>
            </div>
            <div className="">
              <div className="flex justify-center md:w-[474px] w-full items-center pt-[50px]">
                <img src={raisefundhero} alt="" className="z-30 w-full" />
              </div>
            </div>
          </div>
          <div className="md:block hidden absolute left-0 top-0">
            <img src={frame5} alt="" />
          </div>
          <div className="md:block hidden absolute right-[100px] top-4 z-10">
            <img src={heroosade1} alt="" />
          </div>
          <div className="md:block hidden absolute z-10 top-[200px] right-0">
            <img src={heroosade2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default SectionRaisefund;
