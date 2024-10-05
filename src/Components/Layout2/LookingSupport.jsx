import React from "react";

import lookinghand from "../../Images/lookinghand.png";

const LookingSupport = () => {
  return (
    <>
      <section>
        <div className="w-[100%] flex justify-center items-center py-[50px]">
          <div className="w-[993px] md:h-[125px] h-[163px] bg-[#F6F6FE] md:flex justify-between items-center border-black md:px-[50px] px-[16px]">
            <div className="flex justify-center items-center md:pt-0 pt-[20px]">
              <div className="md:w-[50px] w-[70px]">
                <img src={lookinghand} alt="" className="w-[100%]" />
              </div>
              <div className="ml-[25px]">
                <p className="font-[Inter] text-[24px] font-[400] leading-[24px] text-[#202054] pb-[10px]">
                  Looking for the instant support ?
                </p>
                <p className="font-[Inter] font-[400] leading-[16px] text-[#180048] ">
                  We’d love to work with you !
                </p>
              </div>
            </div>

            <div className="md:mt-0 mt-[17px]">
              <a href="mailto:support@bizdateup.com">
                <button className="bg-[#F3B517] text-[#ffffff] text-center md:w-[125px] md:mb-0 mb-[20px] w-[100%] h-[38px] hover:bg-[#fae6b4] duration-200 md:rounded-none rounded-[10px] border-[1px] border-[#ffffff] ">
                  <h4 className="flex items-center justify-center ">
                    Email us
                  </h4>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LookingSupport;
