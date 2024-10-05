import React from "react";
import cta20 from "../../assets/images/cta/cta20.png";

import { BiRightArrowCircle } from "react-icons/bi";
import { Link } from "react-router-dom";

const ThirdBox = () => {
  return (
    <>
      <section>
        <div className=" md:block hidden border-[2px] lg:max-w-[302px] md:h-[146px] rounded-[20px]  bg-white md:my-[20px] my-[5px]">
          <div className="flex justify-between items-center px-[30px] h-[110px] bg-[#CFD2FE] rounded-[20px] border-b-[2px]">
            <div className="pb-[40px] ">
              <h4 className="font-[400] leading-[18.75px] text-[#ffffff] ">
                Have any doubts?{" "}
              </h4>
            </div>
            <div className="w-[35%]">
              <img src={cta20} alt="" />
            </div>
          </div>
          <Link to={"/Contactus"}>
            <div className="flex justify-between items-center px-[25px] pt-[5px]">
              <div>
                <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                  Connect here
                </h4>
              </div>
              <div>
                <BiRightArrowCircle />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ThirdBox;
