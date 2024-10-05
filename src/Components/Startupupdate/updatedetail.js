import React, { useEffect, useState } from "react";
import Navbar from "../Navbar1/Navbar1";
import Cta11 from "../../assets/images/cta/cta11.png";
import { FiArrowLeft } from "react-icons/fi";
import { RightCircleOutlined } from "@ant-design/icons";
import Footer2 from "../Footer2/Footer2";
import { Link, useNavigate, useParams } from "react-router-dom";
import API from "../../Apis/investor";

function Updatedetail() {
  const { id } = useParams();
  console.log("🚀 ~ file: updatedetail.js:13 ~ Updatedetail ~ startData:", id);
  const [startsUpdates, setStartupsupdates] = useState({});
  const navigate = useNavigate();
  console.log(
    "🚀 ~ file: updatedetail.js:14 ~ Updatedetail ~ startsUpdates:",
    startsUpdates
  );

  const fetchData = async () => {
    try {
      const response = await API.startupUpddateFetch({ id: id });
      setStartupsupdates(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, [id]);

  const goBack = () => {
    navigate(-1);
  };

  // console.log("🚀 ~ file: updatedetail.js:11 ~ Updatedetail ~ startData:", startData)
  return (
    <div>
      <Navbar />
      <div className="flex justify-center py-[30px]">
        <div className="w-[90%] md:max-w-[1220px] ">
          <div onClick={goBack}>
            <h2 className="flex items-center not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
              <FiArrowLeft /> Startup updates
            </h2>
          </div>
          <div className="flex gap-10">
            <div className="w-full md:w-[808px]  shrink-0 shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)] rounded-[10px] pb-4">
              <div className="w-[100%] md:mb-0 mb-[30px] md:w-[100%] lg:w-[808px] border-[px] rounded-[10px] px-[22px] pt-[28px] pb-5 bg-white">
                <div className="flex justify-start items-center mb-[20px] gap-3">
                  <div className=" w-[52px] aspect-square  overflow-hidden  rounded-[5px] border-[0.5px] border-solid border-[#DDD] ">
                    <img
                      className="w-full object-contain"
                      src={`${
                        process.env.REACT_APP_BASE_URL +
                        "/v1/logo/" +
                        startsUpdates?.logo
                      }`}
                      alt=""
                      // className="w-[100%] h-[70px] rounded-[11.19px]    object-contain"
                    />
                  </div>
                  <div className="">
                    <h4 className="font-[Inter] font-[400] text-[22px] leading-[41.43px] text-[#202054]">
                      {startsUpdates?.company_name}
                    </h4>
                  </div>
                </div>
                <div className="mb-[10px]">
                  <p className="font-[Inter] font-[400] text-[16px] leading-[15.62px] text-[#252525]">
                    {startsUpdates?.title}
                  </p>
                </div>
                <div style={{ whiteSpace: "pre-line" }} className="mb-6">
                  <p
                    // dangerouslySetInnerHTML={{ __html: startsUpdates?.content }}
                    className="text-[#828F99] text-base not-italic font-normal leading-[23px] font-[Inter]"
                  >
                    {startsUpdates?.content}
                  </p>
                </div>
                <div className="bg-[#202054] p-3 px-10 items-center text-[#fafafa] border border-solid  rounded-[10px] mt-6 w-fit">
                  <a
                    href={`${
                      process.env.REACT_APP_BASE_URL +
                      "/v1/banner_download/" +
                      startsUpdates?.banner
                    }`}
                    rel="noreferrer"
                    target="_blank"
                    download={
                      startsUpdates?.banner ? "filename.ext" : undefined
                    }
                  >
                    Download
                  </a>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:w-[301px]">
              <Link to="/invest">
                <div className="cta ">
                  <div className="ctaimg bg-[#C0E1F5]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Explore more startups
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#4A4F53] font-[Inter]">
                      Invest in startups which will revolutionize the world.
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta11} alt="" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Invest Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Updatedetail;
