import React from "react";
import Ellipse1128 from "../../Images/Layout2/Ellipse1128.png";
import Ellipse1129 from "../../Images/Layout2/Ellipse1129.png";
import Subtract1 from "../../Images/Layout2/Subtract1.png";
import Subtract2 from "../../Images/Layout2/Subtract2.png";


const ExpanpRaisefund = () => {
  return (
    <>
      <section>
        <div className="bg-[#240253] w-[100%] md:h-[442px] h-[628px] relative md:px-0 px-[16px] overflow-hidden font-[Inter]">
          <div className="md:text-center text-[#FFFFFF] md:pt-[96px] pt-[43px] md:pb-[36px] pb-[40px]">
            <h4 className="text-[26px]  font-[500] tracking-[0.2px] leading-[37.28px]">
              BizDateUp Community in 2023
            </h4>
          </div>
          <div className="md:flex justify-center items-center md:m-auto ">
            <div className="md:w-[355px] bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]   text-center md:h-[161px] h-[122px] md:mx-[38px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[30px]  md:px-[17.5px] z-30 rounded-[3px] boder border-[1px] border-slate-500  shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
              {/* <div className="text-center  ">
              <div className="flex justify-center items-center text-[#ffffff]">
                <FaHandHoldingUsd  size={45}/>
              </div>
              <div className="pt-[7px]  text-[#A7A2E0] ">
                <h4>1,000+</h4>
                <p>Investor</p>
              </div>
            </div> */}
              <h4 className="text-[#ffffff] md:w-[249px] mx-auto font-[400] text-[26px] leading-[37.28px] tracking-[0.2px]  md:pt-[34px] pt-[26px] md:pb-0 w-[100%] pb-[10px] ">
                1000+
              </h4>
              <p className="text-[13px] font-[400] tracking-[0.2px] text-[#A7A2E0] leading-[21px] ">
                Investors
              </p>
            </div>
            <div className="md:w-[355px] text-center  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]  md:h-[161px] h-[122px] md:mx-[38px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[30px]  md:px-[17.5px] z-30 rounded-[3px] boder border-[1px] border-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
              {/* <div className="  text-center  ">
              <div className="flex justify-center items-center  text-[#ffffff]">
                <TbArrowZigZag size={45}/>
              </div>
              <div className="pt-[7px]  text-[#A7A2E0]">
                <h4>₹ 2 Crores</h4>
                <p>Fund Raised</p>
              </div>
            </div> */}
              <h4 className="text-[#ffffff] md:w-[24px] md:flex justify-center items-center mx-auto font-[400] text-[26px] leading-[37.28px] tracking-[0.2px]  md:pt-[34px] pt-[26px] md:pb-0 w-[100%] pb-[10px] ">
                14
              </h4>
              <p className="text-[13px] font-[400] tracking-[0.2px] text-[#A7A2E0] leading-[21px] ">
                Funded Startups{" "}
              </p>
            </div>
            <div className="md:w-[355px] text-center  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]  md:h-[161px] h-[122px] md:mx-[38px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[30px]  md:px-[17.5px] z-30 rounded-[3px] boder border-[1px] border-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
              {/* <div className="  text-center  ">
              <div className="flex justify-center items-center text-[#ffffff]">

                <BsFillRocketTakeoffFill size={45} />                
              </div>
              <div className="pt-[7px]  text-[#A7A2E0]">
              <h4>10 Funded</h4>
                <p>Startups</p>
              </div>
            </div> */}
              <h4 className="text-[#ffffff] md:w-[100px] mx-auto md:flex justify-center items-center font-[400] text-[26px] leading-[37.28px] tracking-[0.2px]  md:pt-[34px] pt-[26px] md:pb-0 w-[100%] pb-[10px] ">
                10+
              </h4>
              <p className="text-[13px] font-[400] tracking-[0.2px] text-[#A7A2E0] leading-[21px] ">
                Syndicates{" "}
              </p>
            </div>
          </div>
          <div className=" absolute left-0 bottom-0 ">
            <img src={Ellipse1128} alt="" />
          </div>
          <div className=" absolute top-0 right-0 ">
            <img src={Ellipse1129} alt="" />
          </div>
          <div className=" absolute hidden md:block  md:top-0 top-[243px] right-0">
            <img src={Subtract1} alt="" />
          </div>
          <div className=" absolute hidden md:block md:top-[83px] top-[304px] right-0">
            <img src={Subtract2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpanpRaisefund;
