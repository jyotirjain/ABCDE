import React from "react";
import frame5 from "../../Images/frame5.png";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosSquare } from "react-icons/io";
import aboutus from "../../assets/images/aboutus.png";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <>
      <section>
        <div className="bg-[#240253] flex justify-center  relative md:py-[100px] py-[44px] md:px-0  w-[100%] font-[Inter]">
          <div className="md:flex justify-center items-center md:max-w-[1500px] md:h-[509px] h-[803px] ">
            <div className=" md:flex  justify-center items-center md:w-[50%] w-[100%] md:m-auto md:pl-[120px] md:px-[0] px-[16px] text-[#FFFFFF]">
              <div className=" w-[100%] ">
                <div className="flex md:justify-start mb-[4px] items-center ">
                  <div className=" text-[#FC9D35] ">
                    <IoIosSquare size={15} />
                  </div>
                  <div className="ml-[7px]">
                    <h4 className=" text-[13.33px] text-[#ffffff] font-[600] leading-[19.99px]">
                      About us
                    </h4>
                  </div>
                </div>
                <h4 className="md:font-[600] font-[500] md:text-[48px] text-[30px] md:leading-[72px] leading-[45px] ">
                  We are the Robinhood of India’s startup ecosystem.
                </h4>

                <p className="md:font-[400] font-[400] md:pt-0 pt-[30px] md:pr-[70px] pr-[40px] md:text-[16px]  md:leading-[30px] leading-[24px] md:pb-[67px] pb-[30px] tracking-[2.4%]">
                  Whether you're an Investor looking to Grow your fortune or a
                  founder thinking about raising funds for your startup.
                  Bizdateup is a one stop platform for all your Investment
                  needs!{" "}
                </p>

                {/* <div className=" grid grid-cols-2 gap-7 w-[75%]">
                  <div className="flex justify-start ">
                    <div className="bg-[#7261a7] rounded-[50%] w-4 h-4 mt-[5px] ">
                      <BsCheck size={16} />
                    </div>
                    <div className="ml-[10px]">
                      <h4>Payroll & Gig Economy platforms</h4>
                    </div>
                  </div>
                  <div className="flex justify-start  ">
                    <div className="bg-[#7261a7] rounded-[50%] w-4 h-4 mt-[5px]">
                      <BsCheck size={16} />
                    </div>
                    <div className="ml-[10px]">
                      <h4>Logistics platforms</h4>
                    </div>
                  </div>
                  <div className="flex justify-start ">
                    <div className="bg-[#7261a7] rounded-[50%] w-4 h-4 mt-[5px]">
                      <BsCheck size={16} />
                    </div>
                    <div className="ml-[10px]">
                      <h4>Fintech</h4>
                    </div>
                  </div>
                  <div className="flex justify-start  ">
                    <div className="bg-[#7261a7] rounded-[50%] w-4 h-4 mt-[5px]">
                      <BsCheck size={16} />
                    </div>
                    <div className="ml-[10px] ">
                      <h4>E-commerce & retail chains</h4>
                    </div>
                  </div>
                </div> */}

                <div className="flex justify-start md:text-start text-center">
                  <Link to="/signup">
                    <button className="text-[#ffffff] md:px-6 md:py-[10px] py-[7px] px-6 border-[#ffffff] md:rounded-none  border-[1px] hover:bg-[#3e1c7d] duration-200 bg-[#F3B517]  md:w-auto">
                      <h4 className="flex items-center justify-center md:px-[25px]">
                        Register now
                      </h4>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-[45%] flex justify-center items-center relative  w-[100%]">
              <div className="flex justify-center md:w-[494px] md:h-[374px] items-center pt-[80px] z-30">
                <img src={aboutus} alt="" className=" pb-2 w-full" />
              </div>
              <div className="hidden md:block absolute left-10 bottom-[-100px] w-[231px] h-[216px] shrink-0 opacity-60 blur-[100px] bg-[#6933d3]" />
              <div className="absolute left-0 top-0 w-[231px] h-[216px] shrink-0 opacity-60 blur-[100px] bg-[#6933d3]" />
            </div>
          </div>
          <div className="md:block hidden absolute left-0 top-0">
            <img src={frame5} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
