import React from "react";
import raisefund1 from "../../Images/raisefund1.png";
import raisefund2 from "../../Images/raisefund2.png";
import raisefund3 from "../../Images/raisefund3.png";
import raisefund4 from "../../Images/raisefund4.png";
import raisefund5 from "../../Images/raisefund5.png";
import raisefund6 from "../../Images/raisefund6.png";

import { AiOutlineRight } from "react-icons/ai";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

const TopResionraisefund = () => {
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
          <div className="md:text-center text-[#230152] md:pt-[106px] pt-[50px] pb-[50px]">
            <h4 className="md:text-[30px] text-[28px] font-[400] md:w-[658px] w-[100%] md:mx-auto  leading-[28px] tracking-[0.2px]">
              Top 6 reasons to invest through us
            </h4>
            <h4 className="leading-[24px] md:text-[15px] text-[15px]  pt-[20px] md:w-[672px] mx-auto font-[400] text-[#230152] font-[Inter]">
              Why use Bizdateup’s platform ?
            </h4>
          </div>
          <div className="md:grid grid-cols-3 gap-y-[37px] hidden  md:w-[852px] w-[100%]  md:m-auto pb-[31px]">
            <div className="w-[258px] h-[330px]  cursor-pointer md:mr-[28px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[75px] pt-[24px]">
                <img src={raisefund1} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048]  font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                Get Recognised
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                As you raise money, promote your product and increase visibility
                among our network of eager investors.
              </p>
            </div>
            <div className="w-[258px] h-[330px]  cursor-pointer md:mr-[28px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE] ">
              <div className="w-[75px] pt-[24px]">
                <img src={raisefund2} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                Complex Made Simple
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                Bizdateup makes sure investing is simple, approachable, and
                welcoming. We manage your investors so you may concentrate on
                growing your business
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
            <div className="w-[258px] h-[330px]  cursor-pointer  md:mr-[28px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[75px] pt-[24px]">
                <img src={raisefund3} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                Launch With Confidence
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                We assisted in drafting the regulations governing equity
                crowdfunding, so we are familiar with them and can help you join
                the platform more quickly.
              </p>
            </div>
            <div className="w-[258px] h-[330px]  cursor-pointer  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[75px] pt-[24px]">
                <img src={raisefund4} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                Credible Investors
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                2000+ verified angel and retail investors are available on the
                Bizdateup platform, and they will support your endeavor.
              </p>
            </div>
            <div className="w-[258px] h-[330px]  cursor-pointer  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[75px] pt-[24px]">
                <img src={raisefund5} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                Community Engagement
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                Make your customers and followers true brand ambassadors by
                allowing them to buy into your vision.
              </p>
            </div>
            <div className="w-[258px] h-[330px]  cursor-pointer  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px]  px-[17.5px] z-30 bg-[#F6F6FE]">
              <div className="w-[75px] pt-[24px]">
                <img src={raisefund6} alt="" className="w-[100%]" />
              </div>
              <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                Manage Investors
              </h4>
              <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                You don't have to go it alone even when your raise is over.
                We'll help you communicate with investors and support you as you
                expand.
              </p>
            </div>
          </div>
          {/* mobile view */}
          <div className="w-[100%] md:hidden px-[16px] mt-[25px]">
            <Slider {...settings} className="z-40">
              <div className="w-[258px] h-[330px] cursor-pointer md:mx-[36.95px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[20px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[75px] pt-[24px]">
                  <img src={raisefund1} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Get Recognised
                </h4>
                <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px] ">
                  As you raise money, promote your product and increase
                  visibility among our network of eager investors.
                </p>
              </div>
              <div className="w-[258px] h-[330px]  cursor-pointer  md:mr-[36.95px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[20px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[75px] pt-[24px]">
                  <img src={raisefund2} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Complex Made Simple
                </h4>
                <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  Bizdateup makes sure investing is simple, approachable, and
                  welcoming. We manage your investors so you may concentrate on
                  growing your business.
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
              <div className="w-[258px] h-[330px] cursor-pointer mr-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[20px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[75px] pt-[24px]">
                  <img src={raisefund3} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Launch With Confidence
                </h4>
                <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  We assisted in drafting the regulations governing equity
                  crowdfunding, so we are familiar with them and can help you
                  join the platform more quickly.
                </p>
              </div>
              <div className="w-[258px] h-[330px] cursor-pointer mr-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[20px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[75px] pt-[24px]">
                  <img src={raisefund4} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Credible Investors
                </h4>
                <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  2000+ verified angel and retail investors are available on the
                  Bizdateup platform, and they will support your endeavor.
                </p>
              </div>
              <div className="w-[258px] h-[330px] cursor-pointer mr-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[20px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[75px] pt-[24px]">
                  <img src={raisefund5} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Community Engagement
                </h4>
                <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  Make your customers and followers true brand ambassadors by
                  allowing them to buy into your vision.
                </p>
              </div>
              <div className="w-[258px] h-[330px] cursor-pointer mr-[36.95px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] rounded-[20px] px-[17.5px] z-30 bg-[#F6F6FE]">
                <div className="w-[75px] pt-[24px]">
                  <img src={raisefund6} alt="" className="w-[100%]" />
                </div>
                <h4 className="text-[#180048] font-[400] pb-[9px] text-[19.68px] leading-[22.11px] tracking-[0.22px]  pt-[18px] ">
                  Manage Investors
                </h4>
                <p className="text-[15.31px] font-[400] tracking-[0.22px] text-[#180048] leading-[24.11px]">
                  You don't have to go it alone even when your raise is over.
                  We'll help you communicate with investors and support you as
                  you expand.
                </p>
              </div>
            </Slider>
          </div>
          <div className="md:text-center md:mt-[10px] mt-[50px] mb-[100px]">
            <NavLink to="/startup/signup">
              <button className="bg-[#180048] text-[#ffffff]  md:px-5 md:py-[10px] py-[9px] px-12 hover:bg-[#3e1c7d] duration-200 md:rounded-none rounded-[10px] md:w-auto w-[100%] ">
                <h4 className="flex items-center justify-center px-[20px]">
                  Register
                  <span className="pt-[4px] pl-[6.8px]">
                    <AiOutlineRight />
                  </span>
                </h4>
              </button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopResionraisefund;
