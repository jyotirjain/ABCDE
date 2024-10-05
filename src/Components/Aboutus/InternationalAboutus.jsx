import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import img1 from "../../Images/image 324.svg";
import img2 from "../../Images/image 342.svg";
import img3 from "../../Images/image 343.svg";
import img4 from "../../Images/image 344.svg";

const InternationalAboutus = () => {
  return (
    <div className="bg-[#F6F6FE] w-[100%]  md:px-0  ">
      <div className="md:text-center  md:w-[1084px] mx-auto md:pt-[47px] md:pb-[50px] p-6 ">
        <div className="">
          <h4 className="text-[28px] text-center text-[#180048] md:w-[390px] mx-auto  font-[400] pb-[23px] leading-[39.2px]">
            360 degree Opportunities For the entire Startup Ecosystem.
          </h4>
          <h4 className="leading-[24px] text-center md:w-[672px] mx-auto text-[15px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
            Discover the Benefits of Investing with Bizdateup - Your Trusted
            Partner for Start-up Investment. Maximize your Returns with our
            Expertise and Proven Track Record.
          </h4>
        </div>

        <div className="w-[100%] my-[30px] md:my-[50px] text-center  grid md:grid-cols-2 grid-cols-1 ">
          <div className="md:border-r-[1px] md:border-[#230152]  flex flex-col justify-center items-center  md:border-b-[1px] h-[380px] md:h-[424px]">
            <div className=" flex flex-col justify-center items-center ">
              <div className="w-[98px]">
                <img
                  src={img1}
                  alt=""
                  className="w-[100%] mix-blend-multiply"
                />
              </div>
              <div className="mt-[10px]">
                <p className=" leading-[24px] pb-[16px] text-[20px] font-[400] text-[#180048] font-[Inter] tracking-[0.2px]">
                  For Investors
                </p>
                <p className="pb-[6px] md:w-[454px] h-[96px] leading-[24px]  text-[16px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
                  On an average, a startup investor earns 5x to 10x returns
                  easily with a successful startup. Be a part of our prosperous
                  ever growing community.
                </p>
              </div>
              <div>
                <button className="bg-[#180048] text-white border-[1px]  border-white px-4 md:px-8 md:w-auto w-full py-2 hover:bg-[#3e1c7d] mt-[20px] md:mt-2 rounded-[10px] duration-200">
                  <h4 className="flex items-center justify-center ">
                    Invest Now
                  </h4>
                </button>
              </div>
            </div>
          </div>
          <div className=" md:border-b-[1px] md:border-[#230152]  flex flex-col justify-center h-[380px] md:h-[424px] items-center">
            <div className=" flex flex-col justify-center items-center    ">
              <div className="w-[98px]">
                <img
                  src={img4}
                  alt=""
                  className="w-[100%] mix-blend-multiply"
                />
              </div>
              <div className="mt-[10px]">
                <p className=" leading-[24px] pb-[16px] text-[20px] font-[400] text-[#180048] font-[Inter] tracking-[0.2px]">
                  For Startups
                </p>
                <p className="pb-[6px] md:w-[454px] h-[96px] leading-[24px]  text-[16px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
                  Seek funding from a broader pool of diverse investors while
                  building a loyal following and leveraging the power of
                  Bizdateup's investor community.
                </p>
              </div>
              <div>
                <button className="bg-[#180048] text-white border-[1px] border-white rounded-[10px] px-4  md:px-8 md:w-auto w-full py-2 hover:bg-[#3e1c7d] mt-[20px] md:mt-2 duration-200">
                  <h4 className="flex items-center justify-center ">
                    Raise Funds
                  </h4>
                </button>
              </div>
            </div>
          </div>

          <div className=" md:border-r-[1px] md:border-[#230152]  h-[380px] md:h-[424px]  flex flex-col justify-center items-center">
            <div className=" flex flex-col justify-center items-center  ">
              <div className="w-[98px]">
                <img
                  src={img2}
                  alt=""
                  className="w-[100%] mix-blend-multiply"
                />
              </div>
              <div className="mt-[10px]">
                <p className=" leading-[24px] pb-[16px] text-[20px] font-[400] text-[#180048] font-[Inter] tracking-[0.2px]">
                  For Accelerators/Incubators
                </p>
                <p className="pb-[6px] md:w-[454px] h-[96px] leading-[24px]  text-[16px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
                  Whether you have a start-up(s) looking to raise funds or
                  Investors looking to generate great returns, Bizdateup is your
                  one-stop solution for all your needs.
                </p>
              </div>
              <div>
                <button className="bg-[#180048] text-white border-[1px] border-white  rounded-[10px] px-4  md:px-8 md:w-auto w-full py-2 hover:bg-[#3e1c7d] mt-[20px] md:mt-2 duration-200">
                  <h4 className="flex items-center justify-center ">
                    Join Now
                  </h4>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className=" flex flex-col h-[380px] md:h-[424px] justify-center items-center ">
              <div className="">
                <img
                  src={img3}
                  alt=""
                  className="w-[100%] mix-blend-multiply"
                />
              </div>
              <div className="mt-[10px]">
                <p className=" leading-[24px] pb-[16px] text-[20px] font-[400] text-[#180048] font-[Inter] tracking-[0.2px]">
                  For Syndicate Investors
                </p>
                <p className="pb-[6px] md:w-[454px] h-[96px] leading-[24px]  text-[16px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
                  Once you register as an investor, join a syndicate that will
                  make an investment in a single company led by a lead investor.
                </p>
              </div>
              <div>
                <button className="bg-[#180048] text-white border-[1px] border-white rounded-[10px] px-4   md:px-8 md:w-auto w-full py-2 hover:bg-[#3e1c7d] mt-[20px] md:mt-2 duration-200">
                  <h4 className="flex items-center justify-center ">
                    Start Now
                  </h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalAboutus;
