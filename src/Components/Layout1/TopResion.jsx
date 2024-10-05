import React from "react";
import wave from "../../Images/wave.png";

const TopResion = () => {
  return (
    <>
      <section>
        <div className="bg-[#ffffff] w-[100%] md:h-[600px] h-[1350px] relative md:p-0 p-[5px]">
          <div className="text-center text-[#202054] pt-[60px] pb-8 ">
            <h4 className="md:text-[30px] text-[20px] font-[400]">
              Top reasons to invest through us
            </h4>
          </div>
          <div className="md:flex justify-center items-center w-[100%] h-[400px] ">
            <div className="w-[272px] h-[381px] mx-[35px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] pt-[100px] rounded-[20px] px-[30px] z-30 bg-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
              <h4 className="text-[#202054] font-[500] pb-[10px] ">
                Easy to use
              </h4>
              <p className="text-[12px] font-[400]">
                It takes less than 5 mins to sign up on the platform, complete
                the KYC process, choose your startup to invest and watch your
                diversified portfolio grow.
              </p>
            </div>
            <div className="w-[272px] border-2  h-[381px] mx-[35px] tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] pt-[100px] rounded-[20px] px-[30px] z-30 bg-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
              <h4 className="text-[#202054] font-[500] pb-[10px] ">
                Start with Just ₹30k
              </h4>
              <p className="text-[12px] font-[400]">
                The minimum investment starts from just ₹ 30000 which is 100
                times lower than typical angel investments enabling you to
                invest in more companies, just like the pros.
              </p>
            </div>
            <div className="w-[272px] border-2 h-[381px] mx-[35px]  tracking-[0.4px] leading-[24px] md:mb-0 mb-[35px] pt-[100px] rounded-[20px] px-[30px] z-30 bg-[#ffffff] shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s]">
              <h4 className="text-[#202054] font-[500] pb-[10px] ">
                Completely Vetted & Genuine deals
              </h4>
              <p className="text-[12px] font-[400]">
                We accept only 2% of startups who apply for fundraising. The
                startups you see listed are all gone through our 8 step rigorous
                due diligence process to give you the best outcome!
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 w-[100%] md:block hidden">
            <img src={wave} alt="" className="w-[100%]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default TopResion;
