import React from "react";

import money from "../../Images/money.png";
import invest from "../../Images/invest.png";
import rocket from "../../Images/rocket.png";
import thumb from "../../Images/thumb.png";
import whiterectangle from "../../Images/whiterectangle.png";
import halfellipse from "../../Images/halfellipse.png";

const Investers = () => {
  return (
    <>
      <section>
        <div className=" w-[100%]  md:h-[530px] h-[380px] md:my-0 mt-[70px]  flex justify-center md:p-[0] p-[18px] relative ">
          <div className="md:flex md:justify-around md:items-center  grid grid-cols-2 md:p-0 py-[10px] z-40 bg-white gap-8 md:h-[215px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] h-[300px] w-[1026px] rounded-[25px]">
            <div className="text-center  ">
              <div className="md:flex md:justify-center items-center md:pl-0 pl-[45px]">
                <img src={money} alt="" />
              </div>
              <div className="pt-[7px]">
                <h4>1,000+</h4>
                <p>Investor</p>
              </div>
            </div>
            <div className="text-center ">
              <div className="md:flex md:justify-center items-center md:pl-0 pl-[45px]">
                <img src={invest} alt="" />
              </div>
              <div className="pt-[7px]">
                <h4>₹ 2 Crores</h4>
                <p>Fund Raised</p>
              </div>
            </div>
            <div className="text-center ">
              <div className="md:flex justify-center items-center md:pl-0 pl-[45px]">
                <img src={rocket} alt="" />
              </div>
              <div className="pt-[7px]">
                <h4>10 Funded</h4>
                <p>Startups</p>
              </div>
            </div>
            <div className="text-center ">
              <div className="md:flex justify-center items-center pl-[45px] md:pl-0">
                <img src={thumb} alt="" />
              </div>
              <div className="pt-[7px]">
                <h4>4</h4>
                <p>Live Campaigns</p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-[100%]">
            <img src={whiterectangle} alt="" className="w-[100%]" />
          </div>
          <div className="absolute bottom-0 w-[100%] z-20">
            <img src={halfellipse} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Investers;
