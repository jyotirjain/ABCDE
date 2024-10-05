import React from "react";
import Ellipse1128 from "../../Images/Layout2/Ellipse1128.png";
import Ellipse1129 from "../../Images/Layout2/Ellipse1129.png";
import Subtract1 from "../../Images/Layout2/Subtract1.png";
import Subtract2 from "../../Images/Layout2/Subtract2.png";

const ExpandBeyond = () => {
  return (
    <section>
      <div className="bg-[#240253] w-full md:h-[442px] h-[628px] relative md:px-0 px-[16px] overflow-hidden font-[Inter]">
        <div className="md:text-center text-[#FFFFFF] md:pt-[96px] pt-[43px] md:pb-[36px] pb-[40px]">
          <h4 className="text-[26px] font-[500] tracking-[0.2px] leading-[37.28px] text-center">
            BizDateUp Community in 2023
          </h4>
        </div>
        <div className="md:flex justify-center items-center md:m-auto">
          <div className="md:w-[355px] text-center  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]  md:h-[161px] h-[122px] md:mx-[38px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[30px]  md:px-[17.5px] z-30 rounded-[3px] boder border-[1px] border-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
            <h4 className="text-[#ffffff] md:w-[249px] mx-auto font-[400] text-[26px] leading-[37.28px] tracking-[0.2px] md:pt-[34px] pt-[26px] pb-[20px] w-[100%]">
              ₹ 1,00,000
            </h4>
            <p className="text-[13px] font-[400] tracking-[0.2px] text-[#A7A2E0] leading-[21px]">
              Minimum Investment
            </p>
          </div>
          <div className="md:w-[355px] text-center  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]  md:h-[161px] h-[122px] md:mx-[38px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[30px]  md:px-[17.5px] z-30 rounded-[3px] boder border-[1px] border-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
            <h4 className="text-[#ffffff] md:w-[24px] md:flex justify-center items-center mx-auto font-[400] text-[26px] leading-[37.28px] tracking-[0.2px] md:pt-[34px] pt-[26px] w-[100%] pb-[20px]">
              25+
            </h4>
            <p className="text-[13px] font-[400] tracking-[0.2px] text-[#A7A2E0] leading-[21px]">
              Startups Funded
            </p>
          </div>
          <div className="md:w-[355px] text-center  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-[0.05]  md:h-[161px] h-[122px] md:mx-[38px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[30px]  md:px-[17.5px] z-30 rounded-[3px] boder border-[1px] border-slate-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
            <h4 className="text-[#ffffff] md:w-[100px] mx-auto md:flex justify-center items-center font-[400] text-[26px] leading-[37.28px] tracking-[0.2px] md:pt-[34px] pt-[26px] w-[100%] pb-[20px]">
              ₹50 Cr
            </h4>
            <p className="text-[13px] font-[400] tracking-[0.2px] text-[#A7A2E0] leading-[21px]">
              Fund Raised
            </p>
          </div>
        </div>
        <img src={Ellipse1128} alt="" className="absolute left-0 bottom-0" />
        <img src={Ellipse1129} alt="" className="absolute top-0 right-0" />
        <img
          src={Subtract1}
          alt=""
          className="absolute md:top-0 top-[243px] right-[-10px]"
        />
        <img
          src={Subtract2}
          alt=""
          className="absolute md:top-[83px] top-[304px] right-[-10px]"
        />
      </div>
    </section>
  );
};

export default ExpandBeyond;
