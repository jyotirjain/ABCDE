import React from "react";
import internationapay2 from "../../Images/internationapay2.svg";
import register from "../../Images/Layout2/register.svg";
import duediligence from "../../Images/Layout2/duediligence.svg";
import startup from "../../Images/Layout2/startup.svg";

import grow from "../../Images/Layout2/grow.svg";

import internationapaymobileview from "../../Images/internationapaymobileview.svg";
import { AiOutlineRight } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const InternationalPayment = () => {
  return (
    <>
      <section>
        <div>
          <div className="bg-[#ffffff] w-[100%]  md:px-0 px-[16px] font-[Inter]">
            <div className="md:text-center text-[#180048] md:pt-[106px] pt-[21px] md:pb-[50px] pb-[24px] ">
              <h4 className="md:text-[28px]  mx-auto font-[Inter] text-[28px] font-[400] leading-[39.2px] text-center">
                Take your Investment returns to the Moon in just 4 simple
                steps🚀
              </h4>
            </div>

            {/* <div className="md:flex hidden  justify-between items-center md:w-[1141px] w-[100%] md:m-auto pb-[32px]">
              <img src={internationapay2} alt="" />
            </div> */}

            <div className="hidden md:flex justify-center mb-10">
              <div className="flex  max-w-[1141px] h-[311px] shrink-0 bg-[#f6f6fe] px-[45px] py-[66px]">
                <div className="w-[151px] h-[180px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)]">
                  <div className="w-full h-[72px] bg-[#A875ED] flex justify-center items-center ">
                    <img src={register} />
                  </div>
                  <div className="flex justify-center items-center h-[108px] text-[#A875ED] text-center text-xs not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                    Register & complete your kyc
                  </div>
                </div>
                <div className="w-[100%] flex items-center px-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="12"
                    viewBox="0 0 132 12"
                    fill="none"
                  >
                    <path
                      d="M131.53 6.53034C131.823 6.23745 131.823 5.76257 131.53 5.46968L126.757 0.69671C126.464 0.403817 125.99 0.403817 125.697 0.69671C125.404 0.989604 125.404 1.46448 125.697 1.75737L129.939 6.00001L125.697 10.2427C125.404 10.5355 125.404 11.0104 125.697 11.3033C125.99 11.5962 126.464 11.5962 126.757 11.3033L131.53 6.53034ZM-6.55671e-08 6.75L131 6.75001L131 5.25001L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                      fill="#202054"
                    />
                  </svg>
                </div>
                <div className="w-[151px] h-[180px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)]">
                  <div className="w-full h-[72px] bg-[#EBC062] flex justify-center items-center ">
                    <img src={duediligence} />
                  </div>
                  <div className="flex justify-center items-center h-[108px] text-[#EBC062] text-center text-xs not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                    Do your own due diligence or follow our expert’s lead
                  </div>
                </div>
                <div className="w-[100%] flex items-center px-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="12"
                    viewBox="0 0 132 12"
                    fill="none"
                  >
                    <path
                      d="M131.53 6.53034C131.823 6.23745 131.823 5.76257 131.53 5.46968L126.757 0.69671C126.464 0.403817 125.99 0.403817 125.697 0.69671C125.404 0.989604 125.404 1.46448 125.697 1.75737L129.939 6.00001L125.697 10.2427C125.404 10.5355 125.404 11.0104 125.697 11.3033C125.99 11.5962 126.464 11.5962 126.757 11.3033L131.53 6.53034ZM-6.55671e-08 6.75L131 6.75001L131 5.25001L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                      fill="#202054"
                    />
                  </svg>
                </div>

                <div className="flex flex-col justify-center items-center w-[151px] h-[180px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)] bg-[#D07C3A]">
                  <img src={startup} />

                  <div className="flex justify-center items-center  text-[#ffffff] text-center text-xs not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                    Invest in your desired startups{" "}
                  </div>
                </div>
                <div className="w-[100%] flex items-center px-2 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="12"
                    viewBox="0 0 132 12"
                    fill="none"
                  >
                    <path
                      d="M131.53 6.53034C131.823 6.23745 131.823 5.76257 131.53 5.46968L126.757 0.69671C126.464 0.403817 125.99 0.403817 125.697 0.69671C125.404 0.989604 125.404 1.46448 125.697 1.75737L129.939 6.00001L125.697 10.2427C125.404 10.5355 125.404 11.0104 125.697 11.3033C125.99 11.5962 126.464 11.5962 126.757 11.3033L131.53 6.53034ZM-6.55671e-08 6.75L131 6.75001L131 5.25001L6.55671e-08 5.25L-6.55671e-08 6.75Z"
                      fill="#202054"
                    />
                  </svg>
                </div>
                <div className="w-[151px] h-[180px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)]">
                  <div className="w-full h-[72px] bg-[#51BC8D] flex justify-center items-center ">
                    <img src={grow} />
                  </div>
                  <div className="flex justify-center items-center h-[108px] text-[#9156E8] text-center text-xs not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                    Sit back & watch your portfolio grow
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="md:hidden mb-[50px] w-[100%] flex justify-center">
              <img src={internationapaymobileview} alt="" className="w-[90%]" />
            </div> */}

            <div className="flex flex-col md:hidden items-center mb-10">
              <div className="w-[300px] h-[250px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)]">
                <div className="w-full h-[100px] bg-[#A875ED] flex justify-center items-center ">
                  <img className="w-[80px]" src={register} />
                </div>
                <div className="flex justify-center items-center h-[150px] text-[#A875ED] text-center text-base not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                  Register & complete your kyc
                </div>
              </div>
              <div className="w-[100%] flex justify-center py-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="62"
                  viewBox="0 0 12 62"
                  fill="none"
                >
                  <path
                    d="M5.46967 61.5303C5.76256 61.8232 6.23743 61.8232 6.53033 61.5303L11.3033 56.7574C11.5962 56.4645 11.5962 55.9896 11.3033 55.6967C11.0104 55.4038 10.5355 55.4038 10.2426 55.6967L6 59.9393L1.75736 55.6967C1.46446 55.4038 0.98959 55.4038 0.696697 55.6967C0.403803 55.9896 0.403803 56.4645 0.696697 56.7574L5.46967 61.5303ZM5.25 -3.27835e-08L5.25 61L6.75 61L6.75 3.27835e-08L5.25 -3.27835e-08Z"
                    fill="#202054"
                  />
                </svg>
              </div>
              <div className="w-[300px] h-[250px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)]">
                <div className="w-full h-[100px] bg-[#EBC062] flex justify-center items-center ">
                  <img className="w-[80px]" src={duediligence} />
                </div>
                <div className="flex justify-center items-center h-[150px] text-[#EBC062] text-center text-base not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                  Do your own due diligence or follow our expert’s lead
                </div>
              </div>
              <div className="w-[100%] flex justify-center py-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="62"
                  viewBox="0 0 12 62"
                  fill="none"
                >
                  <path
                    d="M5.46967 61.5303C5.76256 61.8232 6.23743 61.8232 6.53033 61.5303L11.3033 56.7574C11.5962 56.4645 11.5962 55.9896 11.3033 55.6967C11.0104 55.4038 10.5355 55.4038 10.2426 55.6967L6 59.9393L1.75736 55.6967C1.46446 55.4038 0.98959 55.4038 0.696697 55.6967C0.403803 55.9896 0.403803 56.4645 0.696697 56.7574L5.46967 61.5303ZM5.25 -3.27835e-08L5.25 61L6.75 61L6.75 3.27835e-08L5.25 -3.27835e-08Z"
                    fill="#202054"
                  />
                </svg>
              </div>

              <div className="flex flex-col justify-center items-center w-[300px] h-[250px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)] bg-[#D07C3A]">
                <img className="w-[80px]" src={startup} />

                <div className="flex justify-center items-center  text-[#ffffff] text-center text-base not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                  Invest in your desired startups{" "}
                </div>
              </div>
              <div className="w-[100%] flex justify-center py-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="62"
                  viewBox="0 0 12 62"
                  fill="none"
                >
                  <path
                    d="M5.46967 61.5303C5.76256 61.8232 6.23743 61.8232 6.53033 61.5303L11.3033 56.7574C11.5962 56.4645 11.5962 55.9896 11.3033 55.6967C11.0104 55.4038 10.5355 55.4038 10.2426 55.6967L6 59.9393L1.75736 55.6967C1.46446 55.4038 0.98959 55.4038 0.696697 55.6967C0.403803 55.9896 0.403803 56.4645 0.696697 56.7574L5.46967 61.5303ZM5.25 -3.27835e-08L5.25 61L6.75 61L6.75 3.27835e-08L5.25 -3.27835e-08Z"
                    fill="#202054"
                  />
                </svg>
              </div>
              <div className="w-[300px] h-[250px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.15)]">
                <div className="w-full h-[100px] bg-[#51BC8D] flex justify-center items-center ">
                  <img className="w-[80px]" src={grow} />
                </div>
                <div className="flex justify-center items-center h-[150px] text-[#9156E8] text-center text-base not-italic font-normal leading-[normal] font-[Inter] px-2 ">
                  Sit back & watch your portfolio grow
                </div>
              </div>
            </div>

            <div className="md:text-center md:mt-0 mt-[50px] mb-[30px] flex justify-center">
              <NavLink to="/signup">
                <button className="bg-[#180048] text-[#ffffff]  hover:bg-[#3e1c7d] duration-200 md:rounded-none rounded-[6px] md:w-[120px] w-[200px] h-[38px] ">
                  <h4 className="flex items-center justify-center px-[20px]">
                    Register
                  </h4>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalPayment;
