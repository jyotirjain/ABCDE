import React from "react";
import { AiOutlineRight } from "react-icons/ai";


const Videoaboutus = () => {
  return (
    <>
      <section>
        <div className=" w-[100%]  md:px-0 px-[16px] font-[Inter] flex justify-center items-center py-[100px]">
          <div className="flex justify-center bg-[#F6F6FE] w-[100%]">
            <div className=" flex justify-end ">
              <iframe
                src="https://www.youtube.com/embed/c8EdmxC5uJY"
                // src="https://www.youtube-nocookie.com/embed/i8eBBG46H8A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className=" w-[648px] h-[395px] rounded-[10px] "
              ></iframe>
            </div>


            <div className=" pl-[41px] ">
              <div className="pt-[60px]">
              <h4 className="md:text-[28px] font-[Inter] text-[#180048] font-[500] leading-[32.81px]">
                    About us</h4>
                <p className=" pt-[30px] font-[Inter] w-[451px] text-[#180048] font-[400] leading-[18.75px] tracking-[2.4%]">
                  Bizdateup stands firmly on the pillars of trust,
                  accountability, diversity, quality and reliability. Our
                  platform aims to bring retail investors into the game of
                  startup investments to increase funding opportunities for
                  deserving startups to boost the economy while creating great
                  returns and profitability for the investors.
                </p>
              </div>
              <div className="md:text-start text-center mt-[30px]">
                  <button className="bg-[#F3B517] text-[#ffffff] md:px-6 md:py-[10px] py-[9px] px-12  rounded-[10px]  hover:bg-[#f7d06e] duration-200 w-[100%] md:w-auto">
                    <h4 className="flex items-center justify-center md:px-[25px]">
                      {" "}
                      Invest now{" "}
                      <span className="md:block hidden pt-[4px] ml-[6px]">
                        <AiOutlineRight />
                      </span>{" "}
                    </h4>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videoaboutus;
