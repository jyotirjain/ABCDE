import React from "react";
import { NavLink } from "react-router-dom";

const Topsection = () => {
  return (
    <>
      <section>
        <div className="hidden md:flex justify-center items-center h-[63px] bg-[#6A3FD3] ">
          <div className="flex justify-center items-center">
            <div className=" text-white">
              <p className="font-[Inter] font-[400] md:leading-[18.75px]">
              Realize your entrepreneurial dreams by investing in the startups that inspire you
              </p>
            </div>
            <div className=" ml-[69px] text-center">
              <NavLink to="/login">
                <button className="bg-[#180048] w-[113px] h-[32px]">
                  <h4 className="text-[#ffffff] font-[Inter] font-[400]  md:leading-[22.4px] tracking-[0.2px] ">
                  Invest Now
                  </h4>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topsection;
