import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { IoIosSquare } from "react-icons/io";
import Subtract from "../../assets/images/Subtract.png";
import Ellipse1 from "../../assets/images/Ellipse1.png";
import Ellipse2 from "../../assets/images/Ellipse2.png";
import learn from "../../assets/images/learn.png";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <div>
      <div className="bg-[#240253] md:h-[700px] flex justify-center items-center relative">
        <div className="md:flex md:flex-row">
          <div className="flex flex-col pl-4 md:pl-0 md:justify-start pt-6 w-[85%] 2xl:w-[70%]">
            <div className="text-[#F3B553] flex items-center text-center">
              <IoIosSquare /> <span className="text-[#ffffff]">Learn</span>
            </div>
            <div className="flex flex-col">
              <h1 className="md:w-[751px] h-fit not-italic font-medium text-[28px] md:text-5xl md:leading-[72px] text-[#FFFAF1] font-[Inter]">
                Be a Part of the Next Big Thing Invest in Innovative
                Startups.
              </h1>
              <p className="md:w-[617px] not-italic font-normal text-[16px] md:text-xl leading-[30px] tracking-[0.024em] text-white font-[Inter]">
                Investing in Indian startups has never been easier or more
                profitable. Join Bizdateup today and start seeing real returns
                on your investments.
              </p>
            </div>
            <Link to="/signup">
              <button className="flex  justify-center not-italic font-normal text-base leading-[22px] text-center tracking-[0.2px] text-white items-center box-border w-[178px] h-10 border border-solid border-white bg-[#f3b553] mt-[20px]">
                Register
                <AiOutlineRight />
              </button>
            </Link>
          </div>
          <div className="z-30 mt-8 mb-4 flex justify-center  ">
            <img src={learn} className="w-[350px] md:w-full" />
          </div>
        </div>

        <div>
          <div className="hidden md:block absolute top-4 right-0">
            <img src={Subtract} />
          </div>
          <div className="hidden md:block absolute top-3 right-4">
            <img src={Ellipse1} />
          </div>
          <div className="absolute right-3 bottom-2">
            <img src={Ellipse2} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
