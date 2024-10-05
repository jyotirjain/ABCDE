import React from "react";
import { useState } from "react";

import mobile from "../../Images/mobile.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import sighnlogin from "../../Images/sighnlogin.png";
import youtub34 from "../../Images/youtub34.png";
import bankacc1 from "../../Images/bankacc1.png";
import wave4 from "../../Images/wave4.png";
import blackcutellipse4 from "../../Images/blackcutellipse4.png";
import smallellipse4 from "../../Images/smallellipse4.png";
import blackEllipse4 from "../../Images/blackEllipse4.png";



const Invest = () => {
  const imagesslide = [
    {
      id: 1,
      images: sighnlogin,
    },
    {
      id: 2,
      images: bankacc1,
    },
    {
      id: 3,
      images: youtub34,
    },
  ];

  const dataDigitalBestSeller = [
    {
      id: 1,
      title: "Sign up using your mail or google ",
      text: "Register on the platform by entering your email address and finishing the one-time password (OTP) authentication process.",
      no: 1,
    },
    {
      id: 2,
      title: "Complete KYC and add Bank details",
      text: "Complete your Know Your Customer (KYC) process by providing your PAN (Permanent Account Number) and add your bank account details.",
      no: 2,
    },
    {
      id: 3,
      title: "invest to your favourite opportunities",
      text: "Browse through the live campaigns and choose the one that is most suitable for you. Once you have selected a campaign, proceed for payment and complete the subscription process",
      no: 3,
    },
  ];
  const setting = {
    dots: true,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const settingFirst = {
    infinite: true,
    speed: 500,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
  };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <section>
        <div className="w-[100%] bg-[#ffffff] md:h-[850px] h-[1000px] relative md:p-0 p-[20px] md:mb-[250px]">
          <div className="text-center text-[#202054] pt-[50px] pb-8 ">
            <h4 className="md:text-[30px] text-[24px] font-[400]">
              How to Invest
            </h4>
          </div>

          <div className="md:flex  justify-center items-center pt-[50px] ">
            <div className="md:w-[30%] w-[100%] ">
              <div className="flex md:justify-end justify-center relative z-40">
                <img src={mobile} alt="" className=" md:w-auto w-[70%]" />
              </div>
              <div className="md:w-[245px] w-[140px] md:h-[604px] h-[850px] absolute md:bottom-[5px] md:left-[340px] bottom-[-80px] left-[110px] z-[50]">
                <Slider
                  asNavFor={nav2}
                  ref={(slider1) => setNav1(slider1)}
                  {...settingFirst}
                >
                  {imagesslide.map((item,i) => (
                    <div key={i} className="rounded-[10px] overflow-hidden cursor-pointer	">
                      <div className="md:flex justify-center ">
                        <img src={item.images} alt="" />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="md:w-[702.97px] md:h-[261.8px] w-[100%]  md:px-[0]  px-[5px] z-20 md:mt-0 mt-7 ">
              <Slider
                asNavFor={nav1}
                ref={(slider2) => setNav2(slider2)}
                slidesToShow={1}
                swipeToSlide={true}
                focusOnSelect={true}
                {...setting}
              >
                {dataDigitalBestSeller.map((item,id) => (
                  <div key={id} className="md:w-[702.97px] md:h-[261.8px] w-[100%] h-[300px] md:pt-0 pt-5 border-[2px] cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:rounded-r-[20px] md:rounded-l-[10px] rounded-[20px] bg-white mb-8">
                    <div className="flex justify-center md:pl-[50px] md:p-[0] p-[20px] pl-[16px] md:py-[60px]">
                      <ul className="">
                        <li className="text-[#202054] font-[500] text-[20px] leading-[26px] ">
                          {item.no}
                        </li>
                      </ul>
                      <ul className="pl-[25px]">
                        <li className="text-[#202054] font-[500] text-[20px] leading-[26px] ">
                          {item.title}
                        </li>
                        <li className="text-[#090813] font-[400] text-[18px] leading-[23px] md:pr-[150px] my-[15px]">
                          {item.text}
                        </li>
                      </ul>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className="absolute w-[100%] bottom-[0] md:block hidden">
            <img src={wave4} alt="" className=" w-[100%]" />
          </div>
          <div className="absolute bottom-[0] right-0 md:block hidden">
            <img src={blackcutellipse4} alt=""  />
          </div>
          <div className="absolute  md:bottom-[100px] md:left-[800px] bottom-[830px] left-[50px] ">
            <img src={smallellipse4} alt=""  />
          </div>
          <div className="absolute md:bottom-[440px] md:right-[130px] bottom-[400px] right-[10px] ">
            <img src={blackEllipse4} alt=""  />
          </div>
        </div>
      </section>
    </>
  );
};

export default Invest;
