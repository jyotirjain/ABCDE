import React from "react";
import Ellipse1128 from "../../Images/Layout2/Ellipse1128.png";
import Ellipse1129 from "../../Images/Layout2/Ellipse1129.png";
import Subtract1 from "../../Images/Layout2/Subtract1.png";
import Subtract2 from "../../Images/Layout2/Subtract2.png";
import { IoIosSquare } from "react-icons/io";
import { AiOutlineRight } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Getstart = () => {
  return (
    <>
      <section>
        <div className="bg-[#240253] w-[100%]  md:h-[320.29px] h-[470px] relative md:px-0 px-[20px] font-[Inter] overflow-hidden ">
          <div className="md:flex justify-center md:w-[1148px] mx-auto ">
            <div className="md:w-[60%] text-[#FFFFFF]  ">
              <h4 className="md:text-[28px] text-[20px] font-[400] leading-[39px] md:pt-[67.85px] pt-[45px]">
                Ready to Join the Top 1% Investor's Club?
              </h4>
              <p className="pt-[19.96px] md:text-[15px] text-[14px] font-[400] leading-[24px] tracking-[0.32px] ">
                With Bizdateup you get a Strong Community of Top 1% Investors
                who live & Breathe Angel Investing! To top it up Signing up
                takes hardly 5 mins of your time. So, Join the Community Now!
              </p>
              <div className="md:flex items-center md:pt-[52.88px] pt-[30px]">
                <div className="flex justify-start items-center   ">
                  <div className=" text-[#FC9D35] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[15px] font-[400] leading-[24px] tracking-[0.32px]">
                      Easy onboarding
                    </h4>
                  </div>
                </div>
                <div className="flex justify-start items-center md:ml-[29px] ">
                  <div className=" text-[#FC9D35] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[15px] font-[400] leading-[24px] tracking-[0.32px]">
                      Simplified Investments
                    </h4>
                  </div>
                </div>
                <div className="flex justify-start items-center md:ml-[29px]">
                  <div className=" text-[#FC9D35] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[15px] font-[400] leading-[24px] tracking-[0.32px]">
                      Great Returns
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:pt-[187px] pt-[30px] w-full md:w-[40%] ">
              <div className="md:text-center  md:flex flex w-full gap-2 md:justify-end md:items-end">
                <Link to="/login">
                  <button className="bg-[#F3B517] text-[#ffffff] text-center md:w-[125px] md:mb-0 mb-[20px] w-[120px] h-[38px] md:rounded-none border-[1px] border-[#ffffff] hover:bg-[#fae6b4] duration-200">
                    <h4 className="flex items-center justify-center ">
                      Login
                      
                    </h4>
                  </button>
                </Link>

                <Link to="/signup">
                  <button className="border-[1px] flex items-center justify-center hover:bg-[#3e1c7d]  text-[#ffffff] md:ml-[15px]  md:w-[125px] w-[120px] h-[38px] md:rounded-none  duration-200">
                    <h4 className="flex items-center justify-center ">
                      Register
                      
                    </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" absolute left-0 bottom-0 hidden md:block">
            <img src={Ellipse1128} alt="" />
          </div>
          <div className=" absolute top-0 right-0 hidden md:block">
            <img src={Ellipse1129} alt="" />
          </div>
          <div className=" absolute md:top-0 right-0 top-[243px] hidden md:block ">
            <img src={Subtract1} alt="" />
          </div>
          <div className=" absolute md:top-[83px] right-0 top-[304px] hidden md:block">
            <img src={Subtract2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Getstart;
