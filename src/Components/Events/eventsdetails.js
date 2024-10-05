import React from "react";
import Footer2 from "../Footer2/Footer2";
import { Link, useParams } from "react-router-dom";

import { eventsdata } from "./eventsdata";
import { RightCircleOutlined } from "@ant-design/icons";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Loader from "../loader/loader";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Navbar1/Navbar1";
import LoaderApi from "../LoaderApi/LoaderApi";



function cleanTitleForRoute(title) {
  const cleanedTitle = title.replace(/[.:?'"]/g, "");
  return cleanedTitle.replace(/ /g, "-");
}

function Eventsdetails() {
  const { title } = useParams();
  const [eventdata, seteventdata] = useState(null);
  const originalTitle = cleanTitleForRoute(title)

 

  useEffect(() => {
    let event = eventsdata.find((event) => cleanTitleForRoute(event.title) === originalTitle);

    if (event) {
      seteventdata(event);
    }
  });

  return (
    <div>
      <Navbar verified={"true"} userType={"investor"} />
      <div className="flex justify-center p-3 lg:p-6 bg-[#fafafa]">
        <div className="w-[100%] md:max-w-[1220px] lg:w-[75%]">
          <Link to="/events">
            <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter] flex items-center my-6">
              <MdOutlineKeyboardArrowLeft />
              GO BACK
            </label>
          </Link>
          <div className="flex gap-x-10  lg:w-[100%]">
            {eventdata ? (
              <div className="profile-container w-[100%] h-fit flex flex-col gap-4 lg:w-[75%]">
                <h2 className="not-italic font-normal text-[22px] md:text-[28px] leading-[33px] text-[#252525] font-[Inter]">
                  {eventdata.title}
                </h2>
                <p className="not-italic font-normal text-[15.6657px] leading-[18px] text-[#828F99] font-[Inter]">
                  {eventdata.date}
                </p>
                <div className="md:aspect-video my-4 md:overflow-hidden  md:object-contain md:rounded-[10px]">
                  <img
                    className="w-full h-full"
                    src={eventdata.image}
                    alt="Image "
                  />
                </div>

                <label
                  className="not-italic font-normal text-[16px] leading-[30px] text-[#252525] font-[Inter]"
                  dangerouslySetInnerHTML={{ __html: eventdata.para }}
                />
                {eventdata.image2 ? (
                  <div className="md:aspect-video my-4 md:overflow-hidden  md:object-contain md:rounded-[10px]">
                    <img
                      className="w-full h-full"
                      src={eventdata.image2}
                      alt="Image "
                    />
                  </div>
                ) : null}

                <label
                  className="not-italic font-normal text-[16px] leading-[30px] text-[#252525] font-[Inter]"
                  dangerouslySetInnerHTML={{ __html: eventdata.para1 }}
                />
                {eventdata.image3 ? (
                  <div className="md:aspect-video my-4 md:overflow-hidden  md:object-contain md:rounded-[10px]">
                    <img
                      className="w-full h-full"
                      src={eventdata.image3}
                      alt="Image "
                    />
                  </div>
                ) : null}
                {eventdata.image4 ? (
                  <div className="md:aspect-video my-4 md:overflow-hidden  md:object-contain md:rounded-[10px]">
                    <img
                      className="w-full h-full"
                      src={eventdata.image4}
                      alt="Image "
                    />
                  </div>
                ) : null}
                {eventdata.image5 ? (
                  <div className="md:aspect-video my-4 md:overflow-hidden  md:object-contain md:rounded-[10px]">
                    <img
                      className="w-full h-full"
                      src={eventdata.image5}
                      alt="Image "
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <LoaderApi />
            )}

            <div className="hidden md:flex md:flex-col md:gap-y-8 ">
              <Link to="/learn">
                <div className="cta  ">
                  <div className="ctaimg bg-[#D3D0E9]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Learn about Us
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta5} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Find more resources
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
              <Link to="/about-us">
                <div className="cta  ">
                  <div className="ctaimg bg-[#515760]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#fafafa] font-[Inter]">
                      Learn about Us
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#fafafa] font-[Inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta1} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2  mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
              {/* <a
                href={`/blogs/${randomBlog1.title
                  .replaceAll(" ", "-")
                  .replaceAll("?", "")
                  .replaceAll(".", "")
                  .replaceAll(":", "")}`}
              >
                <div className="cta  ">
                  <div className="ctaimg bg-[#D3D0E9]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Related Article
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      {randomBlog1.title}
                    </p>
                  </div>
                  <div className="flex justify-between items-center my-2  mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn More
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Eventsdetails;
