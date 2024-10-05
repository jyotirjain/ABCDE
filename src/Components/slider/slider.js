import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Circle from "../../assets/images/circle.png";

import { sliderData } from "./sliderdata";
import Dot from "./dot";

function Slider() {
  const [currentslide, setcurrentslide] = useState(0);
  const slidelength = sliderData.length;
  const [activeindex, setactiveindex] = useState();

  const autoScroll = true;
  let slideinterval;
  let intervaltime = 3000;

  const nextSlide = () => {
    setcurrentslide(currentslide === slidelength - 1 ? 0 : currentslide + 1);
  };
  const prevSlide = () => {
    setcurrentslide(currentslide === 0 ? slidelength - 1 : currentslide - 1);
  };
  function auto() {
    slideinterval = setInterval(nextSlide, intervaltime);
  }

  useEffect(() => {
    setcurrentslide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideinterval);
  }, [currentslide]);

  return (
    <div className="slider flex flex-col fixed md:w-[30%] lg:w-[30%]  xl:w-[25%] 2xl:w-[23%] h-full right-0 top-0  ">
      <img src={Circle} alt="" />
      <div className="">
        {sliderData.map((slide, index) => {
          return (
            <div
              className={index === currentslide ? "slide current" : "slide"}
              key={index}
            >
              {index === currentslide && (
                <div className="conten p-[20px] lg:p-[30px] md:top-[90px]  xl:top-[100px] 2xl:top-[120px]  ">
                  <div className="">
                    <label className="w-[268px] h-[84px] not-italic font-normal md:text-[22px] lg:text-[28px] leading-[28px] lg:leading-[42px] text-white  ">
                      {slide.title}
                    </label>
                  </div>
                  <br />
                  <label className="w-[350px] h-[63px] not-italic font-normal text-[14px] lg:text-base leading-[15px] lg:leading-[19px] text-white ">
                    {slide.desc}
                  </label>
                  <Dot
                    activeindex={currentslide}
                    sliderdata={sliderData}
                    onclick={(activeindex) => setactiveindex(activeindex)}
                  />
                  <div className="slideimg aspect-square left-[-8px] top-[220px] lg:left-2  xl:left-0 xl:right-4 lg:top-[195px] xl:top-[200px] 2xl:top-[250px]">
                    <img src={slide.image} alt="slide" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* <label>Provide flexible buy now pay latter</label>
      <p>
        We are drone -tech start up platform called aremegh to transform data
        into actionable insights.
      </p>
      <div className="sliderimg">
      <img src={images[currentImageIndex]} />
      </div> */}
    </div>
  );
}

export default Slider;
