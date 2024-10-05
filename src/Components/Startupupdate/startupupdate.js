import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Navbar from "../Navbar1/Navbar1";
import API from "../../Apis/investor";
import { dateRedable } from "../../script/helper";
import moment from "moment";
import "moment-timezone";
import { Helmet } from "react-helmet";
import Footer2 from "../Footer2/Footer2";
import Nostartupupdate from "./nostartupupdate";

function Startupupdate() {
  const navigate = useNavigate();
  const [startsUpdates, setStartsUpdates] = useState([]);

  console.log(
    "🚀 ~ file: startupupdate.js:8 ~ Startupupdate ~ startsUpdates:",
    startsUpdates
  );

  const handleStartupUpdate = async (id) => {
    const data = {
      id: id,
    };
    navigate("/startup_update_details/" + id, { state: data });
  };

  const fetchStartupUpdates = async () => {
    try {
      const response = await API.startupUpddatesFetch();
      console.log(
        "🚀 ~ file: startupupdate.js:12 ~ fetchStartupCcds ~ response:",
        response
      );
      //
      setStartsUpdates(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchStartupUpdates();
  }, []);

  return (
    <div>
      <Navbar />
      <Helmet defer={false}>
        <title>
          Startups Updates | All recent news and updates startups raised on our
          platform
        </title>
        <meta
          name="description"
          content="Monitor and track your startup investments on Bizdateup. Get detailed insights, performance data, and updates on your investment portfolio."
        />
        <meta
          name="keywords"
          content="investment portfolio, track investments, Bizdateup, performance data"
        />
      </Helmet>
      <div className="flex justify-center py-6">
        <div className=" w-[95%] md:max-w-[1500px] 2xl:w-[65%] ">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            Startup Updates
          </h2>
          {startsUpdates.length > 0 ? (
            <div className="rounded-[5px] md:w-fit pt-4 md:grid sm:grid-cols-2 md:grid-cols-3  grid gap-4  md:gap-[28.5px] lg:gap-12">
              {startsUpdates?.map((data, index) => {
                return (
                  <div
                    onClick={() => handleStartupUpdate(data._id)}
                    className="md:w-[359px] bg-white p-4 mx-auto w-[100%] h-[380px] rounded-[11.19px] md:min-h-[380px] overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] mb-[20px] cursor-pointer"
                    key={index}
                  >
                    <div className=" border-[#d1d1d1] border-[0.1px] h-[209.12px] flex justify-center  rounded-[5.59px]">
                      <img
                        // src={"https://www.bizdateup.com/v0/banner/" + card.banner}
                        src={`${
                          process.env.REACT_APP_BASE_URL +
                          "/v1/banner_by_startup/" +
                          data.startup
                        }`}
                        alt=""
                        className="w-[100%] object-contain"
                      />
                    </div>
                    <div className="pl-[10.74px] pr-[29.27px] pb-[10px] pt-[20px] ">
                      <div className="flex  items-center">
                        <div className=" absolute top-[200.51px] border-[#d1d1d1] border-[0.1px] bg-white w-[70px] h-[70px] rounded-[11px] overflow-hidden  ">
                          <img
                            // src={"https://www.bizdateup.com/v0/logo/" + card.logo}
                            src={`${
                              process.env.REACT_APP_BASE_URL +
                              "/v1/logo/" +
                              data.logo
                            }`}
                            alt=""
                            className="w-[100%] object-contain"
                          />
                        </div>
                        <div className="pl-[79.47px] font-[Inter] h-7 overflow-hidden relative bottom-3  text-[20px] font-[600] text-[#202054]">
                          {/* {card.registeredCompanyName} */}
                          {data.company_name}
                        </div>
                      </div>

                      <div className="pt-[10.22px] text-[18px] font-[Inter] font-[400] leading-[18.36px] text-[#252525]">
                        {/* <h4>{card.shortDescription.slice(0, 76)}...</h4> */}
                        {data.title}
                      </div>
                    </div>
                    <div className="pl-[10.74px] pr-[29.27px]  pb-4 absolute bottom-2">
                      <p className="flex  h-[23px] flex-col shrink-0 text-[#828F99] text-[14px] not-italic font-normal leading-[22.974px] tracking-[1.37px] font-[Inter]">
                        {moment(data.created_at)
                          .tz("Asia/Kolkata")
                          .format("YYYY-MM-DD")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <Nostartupupdate />
          )}
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Startupupdate;
