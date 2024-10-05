import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
import thumb from "../../../Images/thumb.png";
import coma from "../../../Images/coma.png";
import Prince from "../../../Images/Prince.png";
import wave3 from "../../../Images/wave3.png";
import roundegray from "../../../Images/roundegray.png";
import cutellipse from "../../../Images/cutellipse.png";

function Community() {
  const dataDigitalBestSeller = [
    {
      id: 1,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 2,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights. ",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 3,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 4,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 5,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 6,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 7,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
    {
      id: 8,
      title:
        "We are a Drone-Tech start-up company offering SaaS platform called AeroMegh to Transform Drone Data into Actionable Insights.",
      name: "Ramesh",
      linkImg: Prince,
    },
  ];

  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    // infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    // speed: 3000,
    // autoplaySpeed: 3000,
    // initialSlide: 0,
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

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: thumb,
    }));
  };

  return (
    <>
      <section>
        <div className="w-[100%] md:px-[250px] px-[5px]  relative ">
          <div className="w-[100%] bg-[#ffffff] md:h-[540px]  h-[500px]  md:mt-[150px] mt-[20px] md:p-0 p-[20px] ">
            <div className="text-center text-[#202054] pt-[]  ">
              <h4 className="md:text-[30px] text-[20px] font-[400] pb-[50px]">
                We are the thankful to our thriving community
              </h4>
            </div>
            <Slider {...settings} className="z-40">
              {dataDigitalBestSeller.map((item,index) => (
                <div key={index} className="rounded-[10px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] md:mb-6 overflow-hidden cursor-pointer	">
                  <div className="p-[25px]">
                    <div>
                    <div className="w-[30px]">
                      <img src={coma} alt="" className="w-[100%]" />
                    </div>
                    <div className="font-[400] text-[14px] leading-[20px] tracking-[1.19304px] text-[#555770] py-[20px]">
                      <h4>{item.title}</h4>
                    </div>
                    </div>
                    <div className="flex items-center ">
                      <div className="w-[70px]">
                        <img
                          src={
                            // defaultImage[item.title] === item.title
                            //   ? defaultImage.linkDefault
                            //   : item.linkImg
                            item.linkImg
                          }
                          onError={handleErrorImage}
                          className="w-[100%] rounded-[50%]"
                        />
                      </div>
                      <div className="pl-[20px]">
                        <h3 className="font-[500] text-[20px] text-[#202054] leading-[10px] tracking-[0.690526px]">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className="w-[100%] absolute bottom-0 left-0">
            <img src={wave3} alt="" className="w-[100%]" />
          </div>
          <div className=" absolute md:bottom-[460px] md:left-[220px] bottom-[400px] left-[70px]">
            <img src={roundegray} alt="" className="w-[100%]" />
          </div>{" "}
          <div className=" absolute bottom-0 right-0  ">
            <img src={cutellipse} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
