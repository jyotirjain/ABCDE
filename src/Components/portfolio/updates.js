import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { RightCircleOutlined } from "@ant-design/icons";
import { details } from "./details";
import API from "../../Apis/investor";
import { Link } from "react-router-dom";

function Updates() {
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
    <div className=" md:flex relative md:w-[300px] ">
      <div className="h-[]  w-full shadow-[0px_1px_8px_rgba(0,0,0,0.15)] rounded-[10px] left-[988px] top-[163px] bg-white py-5 px-5">
        <h3 className=" h-[19px] not-italic font-normal text-[19.33px] leading-[100%] text-[#252525] font-[Inter] mb-4">
          Startup Update
        </h3>

        <div className="mb-8">
          {startsUpdates.slice(0, 3).map((items) => {
            return (
              <div
                onClick={() => handleStartupUpdate(items._id)}
                key={items.id}
              >
                <div className=" md:w-[] lg:w-[258px]  rounded-[5.38954px] border-[0.5px] border-solid border-[#DDDDDD] left-[1005px] top-[220px] bg-white " />

                <div className="flex justify-between my-3">
                  <div className="flex">
                    <div className="box-border w-[40px] rounded-[4.0678px] border-[0.813559px] border-solid border-[#DDDDDD] left-[1011px] top-[227px] overflow-hidden object-contain">
                      <img
                        // src={"https://www.bizdateup.com/v0/banner/" + card.banner}
                        src={`${
                          process.env.REACT_APP_BASE_URL +
                          "/v1/logo/" +
                          items.logo
                        }`}
                        alt=""
                        className="w-[100%] object-contain"
                      />
                    </div>
                    <div>
                      <div className="mx-1">
                        <label className=" not-italic font-normal text-base leading-[15px] text-[#252525] font-[Inter]">
                          {items.title.length > 25
                            ? `${items.title.slice(0, 25)}...`
                            : items.title}
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="absolute bottom-0 w-full md:w-[300px] left-0">
          <div className=" md:w-[] lg:w-[300px]  rounded-[5.38954px] border-[0.5px] border-solid border-[#DDDDDD]  bg-white " />
          <Link to="/startup_update">
            <div className="flex justify-between items-center my-2 mx-5 py-1">
              <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                See all
              </label>
              <RightCircleOutlined />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Updates;
