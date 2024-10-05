import React from "react";
import invest1 from "../../assets/images/lowinvestment.png";
import invest2 from "../../assets/images/transparentinvestment.png";
import invest3 from "../../assets/images/diversified.png";
import invest4 from "../../assets/images/easytouse.png";

import { AiOutlineRight } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const TopResion2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 6000,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="bg-[#ffffff] md:w-[100%] relative md:px-0 px-[16px] font-[Inter]">
          <div className="md:text-center text-[#230152] md:pt-[106px] pt-[50px] md:h-[270px] ">
            <h4 className="md:text-[30px] text-[28px] font-[400] md:w-[658px] w-[100%] md:mx-auto h-[58px] leading-[28px] tracking-[0.2px] text-center">
              Why Invest Through Bizdateup ?
            </h4>
            <h4 className="leading-[24px] md:text-[15px] text-[15px]  pt-[10px] md:w-[672px] mx-auto font-[400] text-[#230152] font-[Inter] text-center">
              Discover the Benefits of Investing Through Bizdateup - Your Trusted
              Partner for Start-up Investment. Maximize your Returns with our
              Expertise and Proven Track Record.
            </h4>
          </div>
          <div className="md:flex hidden justify-center items-center md:w-[1130px] w-[100%]  md:m-auto pb-[31px]">
            <div className="w-[265px] h-[370px]  cursor-pointer md:mr-[28px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[85px] pt-[24px]">
                <img src={invest1} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048]  font-[400] pb-[31px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[43px] ">
                Low Investment Barrier
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                Bizdateup allows anyone to invest in Indian startups with just
                as low as ₹1,00,000, making it accessible for everyone to start
                their investment journey.
              </p>
            </div>
            <div className="w-[265px] h-[370px]  cursor-pointer md:mr-[28px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE] ">
              <div className="w-[65px] pt-[24px]">
                <img src={invest2} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[43px] ">
                Transparent Investment Process
              </h4>
              <p className="text-[15.31px] font-[Inter] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                Bizdateup ensures transparency in the investment process, from
                startup selection to fund allocation, providing you with
                complete visibility into your investments.
              </p>

              {/* <div className=" mt-[22.5px] border-[1px]  relative w-[233px] h-[118px] bg-[#6933D3] rounded-[5px]">
                <p className=" pl-[16px] pr-[17px] pt-[30px]  text-[#FFFFFF] font-[400] font-[Inter] text-[14px] leading-[16px] tracking-[0.15px]  ">
                  Bizdateup's user-friendly platform makes it easy for anyone to
                  invest in startups, even if you have no prior investment
                  experience.
                </p>
                <div className=" flex justify-center items-center absolute top-[6px] left-[-5.5px] rounded-[3px] bg-[#240253] w-[91px] h-[18px]">
                  <p className=" text-[#ffffff] text-[12.19px] leading-[17px] tracking-[0.15px] font-[400] font-[Inter] "> Easy-to-Use</p>
                </div>
              </div> */}
            </div>
            <div className="w-[265px] h-[370px]  cursor-pointer  md:mr-[28px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[65px] pt-[24px]">
                <img src={invest3} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[31px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[43px] ">
                Diversified Portfolio
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                Bizdateup offers a diversified portfolio of startups from
                various industries, providing you with the opportunity to invest
                in different sectors and minimize your risk.
              </p>
            </div>
            <div className="w-[265px] h-[370px]  cursor-pointer  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[65px] pt-[24px]">
                <img src={invest4} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[31px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[43px] ">
                Easy to Use
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                Bizdateup's user-friendly platform makes it easy for anyone to
                invest in startups, even if you have no prior investment
                experience.
              </p>
            </div>
          </div>
          {/* mobile view */}
          <div className="w-[100%] md:hidden px-[16px] mt-[25px]">
            <Slider {...settings} className="z-40">
              <div className="md:w-[346.84px] h-[320px]  cursor-pointer md:mx-[36.95px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[10px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[85px] pt-[24px]">
                  <img src={invest1} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[22px] text-[21.2px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Low Investment Barrier
                </h4>
                <p className="text-[16px] font-[Inter] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                  Bizdateup allows anyone to invest in Indian startups with just
                  as low as ₹1,00,000, making it accessible for everyone to
                  start their investment journey.
                </p>
              </div>
              <div className="md:w-[346.84px] h-[320px]   cursor-pointer  md:mr-[36.95px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[10px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[65px] pt-[24px]">
                  <img src={invest2} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[22px] text-[21.2px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Transparent Investment Process
                </h4>
                <p className="text-[16px] font-[Inter] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  Bizdateup ensures transparency in the investment process, from
                  startup selection to fund allocation, providing you with
                  complete visibility into your investments.
                </p>

                {/* <div className=" mt-[22.5px] border-[1px]  relative w-[233px] h-[118px] bg-[#6933D3] rounded-[5px]">
                <p className=" pl-[16px] pr-[17px] pt-[30px]  text-[#FFFFFF] font-[400] font-[Inter] text-[14px] leading-[16px] tracking-[0.15px]  ">
                  Bizdateup's user-friendly platform makes it easy for anyone to
                  invest in startups, even if you have no prior investment
                  experience.
                </p>
                <div className=" flex justify-center items-center absolute top-[6px] left-[-5.5px] rounded-[3px] bg-[#240253] w-[91px] h-[18px]">
                  <p className=" text-[#ffffff] text-[12.19px] leading-[17px] tracking-[0.15px] font-[400] font-[Inter] "> Easy-to-Use</p>
                </div>
              </div> */}
              </div>
              <div className="md:w-[346.84px] h-[320px]  cursor-pointer mr-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[10px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[65px] pt-[24px]">
                  <img src={invest3} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[22px] text-[21.2px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Diversified Portfolio
                </h4>
                <p className="text-[16px] font-[Inter] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  Bizdateup offers a diversified portfolio of startups from
                  various industries, providing you with the opportunity to
                  invest in different sectors and minimize your risk.
                </p>
              </div>
              <div className="md:w-[346.84px] h-[320px]  cursor-pointer mr-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[10px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[65px] pt-[24px]">
                  <img src={invest4} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[22px] text-[21.2px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Easy to Use{" "}
                </h4>
                <p className="text-[16px] font-[Inter] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  Bizdateup's user-friendly platform makes it easy for anyone to
                  invest in startups, even if you have no prior investment
                  experience.
                </p>
              </div>
            </Slider>
          </div>
          <div className="md:text-center md:mt-10 mt-[50px] mb-[50px] flex justify-center ">
            <NavLink to="/signup">
              <button className="bg-[#180048] text-[#ffffff]    hover:bg-[#3e1c7d] duration-200 md:rounded-none rounded-[6px] md:w-[120px] w-[200px] h-[38px] ">
                <h4 className="flex items-center justify-center px-[20px]">
                  Register
                </h4>
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopResion2;
