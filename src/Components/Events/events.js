import React from "react";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import { eventsdata } from "./eventsdata";
import moment from "moment";
import { Link } from "react-router-dom";


function cleanTitleForRoute(title) {
  const cleanedTitle = title.replace(/[.:?'"]/g, "");
  return cleanedTitle.replace(/ /g, "-");
}

function Events() {

  return (
    <div>
      <Navbar />
      <div className="flex justify-center p-3 md:p-6 bg-[#fafafa]">
        <div className=" w-full md:max-w-[1180px] 2xl:w-[75%] ">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[35px] text-[#202054] font-[Inter] mb-2">
            Events
          </h2>

          <div className="rounded-[5px] md:w-fit  md:grid sm:grid-cols-2 md:grid-cols-3  grid gap-4  md:gap-[28.5px] lg:gap-12">
            {eventsdata?.map((data, index) => {
              return (
                <div
                  className="md:max-w-[351px] bg-white p-4 mx-auto w-[100%] h-[350px] rounded-[11.19px] md:h-[370px] overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] mb-[20px] cursor-pointer"
                  key={index}
                >
                  <Link to={`/events/${cleanTitleForRoute(data.title)}`}>
                    <div className=" border-[#d1d1d1] border-[0.1px] h-[209.12px] flex justify-center overflow-hidden  rounded-[5.59px]">
                      <img
                        //   src={`${
                        //     process.env.REACT_APP_BASE_URL +
                        //     "/v0/banner_by_startup/" +
                        //     data.startup
                        //   }`}
                        src={data.thumbnail}
                        alt=""
                        className="w-[100%] object-contain"
                      />
                    </div>
                    <div className="pl-[10.74px] pr-[29.27px] pb-[10px] pt-[10px] ">
                      <div className="flex  items-center">
                        <div className="text-[#606060] text-base not-italic font-normal leading-[18.69px] tracking-[0.32px] font-[Inter]">
                          {data.title}
                        </div>
                      </div>
                    </div>
                    <div className="pl-[10.74px] pr-[29.27px]  pb-4 absolute bottom-2">
                      <p className="flex  text-[#202054] text-xs not-italic font-medium leading-[18.69px] tracking-[0.24px] font-[Inter]">
                        {data.date}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Events;
