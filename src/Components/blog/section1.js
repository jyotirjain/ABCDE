import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosSquare } from "react-icons/io";
import blogshero from "../../assets/images/blogshero.png";
import Subtract from "../../assets/images/Subtract.png";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <div className="bg-[#240253] md:h-[700px] py-5 flex justify-center items-center relative">
      <div className="md:flex md:flex-row">
        <div className="flex flex-col md:justify-start  pl-4 md:pl-0 w-[85%] 2xl:w-[70%]">
          <div className="text-[#F3B553] flex items-center text-center">
            <IoIosSquare />{" "}
            <span className="text-[#ffffff]">Startup Investing</span>
          </div>
          <div className="flex flex-col">
            <h1 className="md:w-[751px] h-fit not-italic font-medium text-[30px] md:text-5xl md:leading-[72px] text-[#FFFAF1] font-[Inter]">
              Diversify Your Portfolio and Invest in Private Startups with Ease
            </h1>
            <p className="md:w-[617px] not-italic font-normal md:text-xl text-[16px] leading-[30px] tracking-[0.024em] text-white font-[Inter]">
              We are giving you the platform to invest in world-changing
              startups just starting from 20000 rupees.
            </p>
          </div>
          <Link to="/signup">
            <button className="flex  justify-center not-italic font-normal text-base leading-[22px] text-center tracking-[0.2px] text-white items-center box-border w-[178px] h-10 border border-solid border-white bg-[#f3b553] mt-8">
              Registers{" "}
            </button>
          </Link>
        </div>
        <div className="z-30 ">
          <img src={blogshero} className="md:w-[500px]" />
        </div>
      </div>

      <div>
        <div className="hidden md:block absolute top-4 right-0">
          <img src={Subtract} />
        </div>
        <div className="hidden md:block absolute top-3 right-4">
          <img src={Ellipse1} />
        </div>
        <div className="hidden md:block absolute right-3 bottom-2">
          <img src={Ellipse2} />
        </div>
      </div>
    </div>
  );
}

export default Section1;
