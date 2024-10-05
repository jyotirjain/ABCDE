import React from "react";
import { useState } from "react";

import mobile from "../../Images/mobile.png";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ellipse1128 from "../../Images/Layout2/Ellipse1128.png";
import Ellipse1129 from "../../Images/Layout2/Ellipse1129.png";
import Subtract1 from "../../Images/Layout2/Subtract1.png";
import Subtract2 from "../../Images/Layout2/Subtract2.png";

import { IoIosSquare } from "react-icons/io";

import sliders1 from "../../Images/sliders1.png";
import sliders2 from "../../Images/sliders2.png";
import sliders3 from "../../Images/sliders3.svg";

const InternationalGatway = () => {
  const imagesslide = [
    {
      id: 1,
      images: sliders1,
    },
    {
      id: 2,
      images: sliders2,
    },
    {
      id: 3,
      images: sliders3,
    },
  ];

  const dataDigitalBestSeller = [
    {
      id: 1,
      title: "Register using your Email address or with Social login ",
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
      title: "Invest to your favourite opportunities",
      text: "Browse through the live campaigns and choose the one that is most suitable for you. Once you have selected a campaign, proceed for payment and complete the subscription process",
      no: 3,
    },
  ];
  const setting = {
    arrows: false,

    infinite: true,
    speed: 800,
    initialSlide: 0,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 3000,
  };

  // const settingFirst = {
  //   arrows: false,
  //   infinite: true,
  //   speed: 800,
  //   initialSlide: 0,
  //   autoplay: true,
  //   speed: 5000,
  //   autoplaySpeed: 3000,
  // };

  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <>
      <section>
        <div className="w-[100%] bg-[#240253] md:h-[850px] h-[1038px] relative md:px-0 px-[16px] md:pt-0   pt-[43px] font-[Inter]  overflow-hidden">
          <div className=" text-[#202054] md:w-[600px] mx-auto  pb-8 md:relative left-[100px] top-[100px]">
            <div className="flex md:justify-start items-center ">
              <div className=" text-[#FC9D35] ">
                <IoIosSquare size={15} />
              </div>
              <div className="ml-[7px]">
                <h4 className=" text-[13px] text-[#ffffff] font-[400] leading-[17.8px] tracking-[0.2px]">
                  Learn
                </h4>
              </div>
            </div>
            <div className=" flex justify-start md:pt-[11px] pt-[20px] ">
              <h4 className="md:text-[28px] text-[23.2px] md:w-[811px] md:text-start text-[#ffffff] font-[Inter] font-[500] tracking-[0.2px] leading-[39px] ">
                How to invest in Startups through Bizdateup in just Three steps
              </h4>
            </div>
          </div>
          <div className="w-[100%] flex md:justify-center items-center md:pr-[1000px]">
            <div className="md:flex items-center md:relative md:pl-[250px] z-40 md:w-auto w-[100%]">
              <div className="  z-40 md:w-auto  ">
                <div className=" md:w-[320px]  ">
                  <img
                    src={mobile}
                    alt=""
                    className=" md:w-auto w-[70%] mx-auto md:mx-0"
                  />
                </div>
                <div className="md:w-[245px] w-[50%] md:h-[604px] h-[850px] absolute md:top-[80px] md:left-[290px] md:bottom-auto bottom-[-100px] left-[25vw] z-[50]">
                  <Slider
                    asNavFor={nav2}
                    ref={(slider1) => setNav1(slider1)}
                    {...setting}
                  >
                    {imagesslide.map((item, id) => (
                      <div
                        key={id}
                        className="rounded-[10px] overflow-hidden cursor-pointer	"
                      >
                        <div className="md:flex justify-center ">
                          <img src={item.images} alt="" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="md:absolute md:ml-[310px] w-[100%]  z-20">
                <div className="md:w-[702.97px] md:h-[261.8px] w-[100%] overflow-hidden md:px-[0] px-[16px]  md:mt-0 mt-7 ">
                  <Slider
                    asNavFor={nav1}
                    ref={(slider2) => setNav2(slider2)}
                    slidesToShow={1}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    {...setting}
                  >
                    {dataDigitalBestSeller.map((item) => (
                      <div
                        key={item.id}
                        className="md:w-[702.97px]  md:h-[261.8px] w-[100%] h-[300px] md:pt-0  border-[2px] cursor-pointer shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:rounded-r-[20px] md:rounded-l-[10px] rounded-[20px] bg-white mb-8"
                      >
                        <div className="flex justify-center md:pl-[50px] md:p-[0] p-[20px] pl-[16px] md:py-[60px]">
                          <ul>
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
            </div>
          </div>
          <div className=" absolute left-0 bottom-0 ">
            <img src={Ellipse1128} alt="" />
          </div>
          <div className=" absolute top-0 right-0">
            <img src={Ellipse1129} alt="" />
          </div>
          <div className=" absolute top-[185px] right-[-10px]">
            <img src={Subtract1} alt="" />
          </div>
          <div className=" absolute top-[305px] right-[-10px]">
            <img src={Subtract2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default InternationalGatway;
