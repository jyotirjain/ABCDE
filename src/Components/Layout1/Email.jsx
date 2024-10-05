import React from "react";
import gmaillogo from "../../Images/gmaillogo.png";
import wave2 from "../../Images/wave2.png";

const Email = () => {
  return (
    <>
      <section>
        <div className="w-[100%] bg-[#ffffff] md:h-[325px] h-[300px] mt-[70px] relative md:p-0 p-[9px]">
          <div className="flex justify-center items-center">
            <div className="md:w-[750px] w-[100%] text-center z-40">
              <div>
                <h4 className="md:text-[20px] md:pt-0 pt-[15px] font-[400]  text-[#090813] leading-[1.65]">
                  Give us a call or drop by anytime, we endeavour to answer all
                  enquiries <br /> within 24 hours on business days.
                </h4>
              </div>
              <div className="relative md:pt-[65px] pt-[30px]">
                <input
                  type="text"
                  placeholder="Enter Email for exclusive investment deals and offers."
                  className="border-[1px] border-[black] md:w-[620px] w-[325px] md:pl-[70px] pl-[40px] rounded-[8px] md:h-[52px] h-[42px] md:text-[16px] text-[12px] bg-white"
                />
                <div className="absolute md:left-[80px] md:bottom-[10px] left-[9px] bottom-[5px] ">
                  <img src={gmaillogo} alt="" />
                </div>
                <div className="absolute md:right-[78px] md:bottom-[6px] right-[90px] bottom-[-60px]">
                  <button className="bg-[#202054] text-white md:px-3 py-[8px] px-6 rounded-[8px] hover:bg-[#212198] duration-200">
                    Send Messaege
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-[100%] md:block hidden">
            <img src={wave2} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Email;
