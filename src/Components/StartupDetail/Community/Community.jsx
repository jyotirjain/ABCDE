import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";
// import coma from "../../../Images/coma.png";
// import Prince from "../../../Images/Prince.png";
import linkeden from "../../../Images/linkeden.png";

function Community(props) {
  const endpoint = process.env.REACT_APP_TEST_URL;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    initialSlide: 0,
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

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay: true,
  //   speed: 5000,
  //   autoplaySpeed: 1000,
  //   initialSlide: 0,
  //   // vertical: true,
  //   // verticalSwiping: true,
  //   arrows: false,
  //   // appendDots: (dots) => <ul>{dots}</ul>,
  //   // customPaging: (i) => (
  //   //   <div className="ft-slick__dots--custom">
  //   //     <div className="loading" />
  //   //   </div>
  //   // ),
  // };

  return (
    <>
      <section>
        <div className="w-[100%]">
          <div className="w-[100%] overflow-hidden md:h-[137px]  mb-[10px] md:px-0 px-[20px] ">
            {props?.community?.length > 0 && (
              <Slider {...settings} className="z-40 ">
                {props?.community?.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-[10.76px] px-[24.75px] w-[360px] h-[130px] bg-white   duration-[0.3s] md:mb-1 overflow-hidden cursor-pointer	"
                  >
                    <div className="pt-[20px]">
                      <div className="flex justify-between ">
                        <div className="flex items-center">
                          <div className="w-[70px]">
                            <img
                              src={
                                endpoint + "/v1/teammember/" + item.profileImage
                              }
                              alt=""
                              className="w-[100%] rounded-[50%]"
                            />
                          </div>
                          <div className="pl-[16.13px]">
                            <h3 className="font-[400] pb-[1.08px] text-[17.21px] font-[Inter] text-[#252525] leading-[25.81px]">
                              {item.fullName}
                            </h3>
                            <p className="font-[400] font-[Inter] text-[12.91px] leading-[15.12px] text-[#202054]">
                              {item.designation}
                            </p>
                          </div>
                        </div>

                        <div className="w-[20px] overflow-hidden">
                          <a href={item.linkedinUrl} target="_blank">
                          <img
                            src={linkeden}
                            alt=""
                            className="flex justify-end w-[100%]"
                          />
                          </a>
                          
                        </div>
                      </div>
                      {/* <div>
                        <div className=" mt-[15.51px] md:w-[303px]">
                          <h4 className="font-[400] font-[Inter] text-[10.6px] leading-[12.6px] text-[#828F99]">
                            {item.description}
                          </h4>
                        </div>
                      </div> */}
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
