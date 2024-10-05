import React from "react";
// import { startupdata } from "./startupdata";
import shoppingBag1 from "../../Images/shoppingBag1.png";
import { BsFillCheckCircleFill, BsFillCheckSquareFill } from "react-icons/bs";

function Startup(props) {
  const endpoint = process.env.REACT_APP_TEST_URL;

  const callback = props.callback;
  const handleCallback = (id) => {
    // alert(id);
    callback(id);
  };

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${value / 10000000}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${value / 100000}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${value / 1000}K`;
    } else {
      return value;
    }
  }

  const startupdata4 = props.startup4;
  return (
    <div>
      <h1 className="flex items-center relative w-auto h-[2.56rem] not-italic font-normal text-[20px] md:text-[27.65px] leading-[41px] text-[#202054] mb-1 md:mb-1 pt-2.5">
        Startup
      </h1>
      <label className="not-italic font-normal text-base leading-[19px] text-[#828F99] font-[Inter]">
        for your startup. Bizdateup is a one stop
      </label>
      <div className="rounded-[5px] md:w-fit pt-4 md:grid md:grid-cols-2  2xl:grid-cols-3 grid gap-4 md:gap-[28.5px] lg:gap-5">
        {startupdata4?.map((card, index) => {
          return (
            <div
              onClick={() => handleCallback(card._id)}
              className="md:max-w-[359px]  p-4 mx-auto w-[100%] bg-white rounded-[11.19px] md:min-h-[463px] overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] transform transition-all duration-500 hover:translate-y-[-3px]  mb-[20px] cursor-pointer"
              key={index}
            >
              <div className="w-[100%] border-[#d1d1d1] border-[0.1px] h-[209.12px] flex justify-center  rounded-[5.59px]">
                <img
                  src={`${
                    process.env.REACT_APP_BASE_URL + "/v1/banner/" + card.banner
                  }`}
                  alt=""
                  className="w-[100%] h-[209.12px] object-contain rounded-[5.59px]	"
                />
              </div>
              <div className="pl-[10.74px] pr-[29.27px] pb-[10px] pt-[20px] ">
                <div className="flex  items-center">
                  <div className="absolute top-[200.51px] border-[#d1d1d1] border-[0.1px] bg-white w-[70px] h-[70px] rounded-[11px]  flex items-center justify-center overflow-hidden  ">
                    <img
                      src={`${
                        process.env.REACT_APP_BASE_URL + "/v1/logo/" + card.logo
                      }`}
                      alt=""
                      className="w-[100%] h-[70px] rounded-[11.19px] object-contain"
                    />
                  </div>
                  <div className="pl-[79.47px] font-[Inter] h-7 overflow-hidden  relative bottom-3  text-[20px] font-[600] text-[#202054]">
                    {card.registeredCompanyName}
                  </div>
                </div>

                <div className="pt-[10.22px] text-[14px] font-[Inter] font-[400] leading-[18.36px] text-[#828F99]">
                  <h4>{card.shortDescription.slice(0, 76)}...</h4>
                </div>

                <div className="w-[100%] mt-2">
                  <div className="flex justify-between items-start my-2">
                    <p className="font-[400] leading-[20.53px]  tracking-[1.22px] font-[Inter] text-[#828F99] text-[10px]">
                      Raised
                    </p>
                    <h4 className="font-[400] leading-[20.53px] tracking-[1.22px] font-[Inter] text-[#252525] text-[13px]">
                      ₹ {formatValuation(Math.ceil(card?.totalRaised))}
                    </h4>
                  </div>
                  <div className="flex justify-between items-start my-2">
                    <p className="font-[400] leading-[20.53px]  tracking-[1.22px] font-[Inter] text-[#828F99] text-[10px]">
                      Min.subscription
                    </p>
                    <h4 className="font-[400] leading-[20.53px] tracking-[1.22px] font-[Inter] text-[#252525] text-[13px]">
                      ₹ {formatValuation(card?.dealTerms?.minimumInvestment)}
                    </h4>
                  </div>
                  <div className="flex justify-between items-start my-2">
                    <p className="font-[400] leading-[20.53px]  tracking-[1.22px] font-[Inter] text-[#828F99] text-[10px]">
                      Valuation
                      {/* closes in  */}
                    </p>
                    <h4 className="font-[400] leading-[20.53px] tracking-[1.22px] font-[Inter] text-[#252525] text-[13px]">
                      ₹ {formatValuation(card?.dealTerms?.valuation)}
                    </h4>
                  </div>
                </div>
                <div className="flex gap-2">
                  {card.tags &&
                    card.tags.map((tagString, tagIndex) => {
                      var tagsm = tagString.split(",");
                      return (
                        <div
                          key={tagIndex}
                          className="flex justify-start flex-wrap  items-center gap-2 "
                        >
                          {tagsm.map((tag, innerTagIndex) => (
                            // <span key={innerTagIndex}>{tag}</span>
                            <div
                              key={innerTagIndex}
                              className="flex mt-1 justify-center gap-1 bg-[#b5b5fa] items-center pb-[1px] border-[0.5px] rounded-[7499.3px]  pl-[8px] pr-[12px] h-[25px]"
                            >
                              <div className="w-[15px] pr-[5px] text-[#202054]">
                                <BsFillCheckCircleFill size={15} />
                              </div>

                              <p className="font-[400] leading-[14.54px] font-[Inter] text-[#252525] text-[14.54px] ">
                                {tag}
                              </p>
                            </div>
                          ))}
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            // <div
            //   className="startupcard h-[461px] md:max-w-[350px] md:h-[400px] 2xl:h-[461px]"
            //   key={index}
            //   onMouseEnter={handleHover}
            //   onMouseLeave={handleHover}
            //   onClick={() => {
            //     handleCallback(card._id);
            //   }}
            // >
            //   <div className=" flex flex-col gap-3">
            //     <div>
            //       <img
            //         src={endpoint + "/v0/banner/" + card.banner}
            //         className="banner"
            //         alt={card.banner}
            //       />
            //       <div className="flex px-3 ">
            //         <div className="mt-[-20px] flex justify-center bg-[#fefefe] w-[60px] h-[60px] box-border rounded-[7.93145px] border-[0.793145px] border-solid border-[#DDDDDD]">
            //           <img
            //             src={endpoint + "/v0/logo/" + card.logo}
            //             alt={card.logo}
            //           />
            //         </div>
            //         <label className="not-italic font-medium m-2 leading-[13px] text-[#252525] font-[Inter]">
            //           {card.registeredCompanyName}
            //         </label>
            //       </div>
            //       <p className="compdes pt-3 h-[50px]">{card.shortDescription}</p>
            //     </div>

            //     {/* <div className="card__hover-content">
            //       <div>
            //         {/* <img src={"https://www.bizdateup.com/v0/banner/"+card.banner} className="banner" />
            //     <div className="flex px-3 ">
            //       <div className="mt-[-20px] flex justify-center bg-[#fefefe] w-[60px] h-[60px] box-border rounded-[7.93145px] border-[0.793145px] border-solid border-[#DDDDDD]">
            //       <img src={endpoint+"/v0/logo/"+card.logo} />
            //       </div>
            //       <label className="not-italic font-medium m-2 leading-[13px] text-[#252525] font-[Inter]">
            //         {card.title}
            //       </label>
            //     </div>

            //       </div>
            //     </div> */}

            //     <div className="flex justify-between pt-2 compdata">
            //       <div>
            //         <label className="not-italic font-normal text-[16px] leading-4 tracking-[0.971402px] text-[#252525] font-[Inter]">
            //           {card.rise}
            //         </label>
            //         <p className="not-italic font-normal text-[10.5726px] leading-4 tracking-[0.971402px] text-[#828F99] font-[Inter]">
            //           Raised
            //         </p>
            //       </div>
            //       <div>
            //         <label className="not-italic font-normal text-[16px] leading-4 tracking-[0.971402px] text-[#252525] font-[Inter]">
            //           {card.subscription}
            //         </label>
            //         <p className="not-italic font-normal text-[10.5726px] leading-4 tracking-[0.971402px] text-[#828F99] font-[Inter]">
            //           Min Invest
            //         </p>
            //       </div>
            //     </div>
            //     <div className="flex justify-start items-center comptags ">
            //       {typeOfcompanys.map((data, f) => (
            //         <div
            //           className="flex justify-center items-center pb-[1px] border-[0.5px] rounded-[7499.3px] bg-[#9797FE]  w-[83px] mr-[12px] h-[16px] border-[#828F99]"
            //           key={f}
            //         >
            //           <div className="w-[12px] pr-[2.75px]">
            //             <img src="" alt="" className="w-[100%]" />
            //           </div>
            //           <p className="font-[400] leading-[9.26px] font-[Inter] text-[#ffffff] text-[9.26px] ">
            //             {data.shoping1}
            //           </p>
            //         </div>
            //       ))}
            //     </div>
            //   </div>
            // </div>
          );
        })}
      </div>
    </div>
  );
}

export default Startup;
