import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Navbar1/Navbar1";
import { startupdata } from "../explore/startupdata";
import { Link, useNavigate } from "react-router-dom";
import { SlArrowRightCircle } from "react-icons/sl";
import Footer2 from "../Footer2/Footer2";
import CompanyLogo3 from "../../Images/CompanyLogo3.png";
import { Helmet } from "react-helmet";
import Loader from "../loader/loader";
import API from "../../Apis/investor";
import shoppingBag1 from "../../Images/shoppingBag1.png";
import { BsFillCheckCircleFill } from "react-icons/bs";

function Closeddeals() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const [closeDeal, setCloseDeal] = useState([
    {
      logo: CompanyLogo3,
      registeredCompanyName: "",
      shortDescription:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      tags: "",
      colour: "#F0D9FF",
    },
  ]);
  const handleClosedDealClick = async (id) => {
    // alert(id);
    const data = {
      id: id,
    };
    navigate("/startup/startupondetails/" + id, { state: data });
  };
  const fetchClosedDeal = async () => {
    try {
      const response = await API.getStartupsClosedView({});

      //
      setCloseDeal(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    setloader(true);
    fetchClosedDeal();
    setloader(false);
  }, []);

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${value / 10000000}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${value / 100000}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${value / 1000}K`;
    } else {
      return value;
    }
  }

  const handleInvestClick = async (id) => {
    const data = {
      id: id,
    };
    navigate("/startup/startupondetails/" + id, { state: data });
  };

  return (
    <div>
      <Helmet defer={false}>
        <title>Closed Startups | Completed Campaigns | Bizdateup</title>
        <meta
          name="description"
          content="View the list of closed startups and completed fundraising campaigns on Bizdateup. Get insights into past investment opportunities and outcomes."
        />
        <meta
          name="keyword"
          content="closed startups, completed campaigns, Bizdateup, investment opportunities"
        />
      </Helmet>
      <Navbar />
      <div className="flex justify-center p-7">
        <div className=" w-full md:max-w-[1350px] 2xl:w-[75%]  ">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
            {" "}
            Startups we have successfully funded
          </h2>
          <div className="w-full  grid  md:grid-cols-2 xl:grid-cols-3 gap-x-[35px] ">
            {closeDeal.map((data, index) => (
              <div
                onClick={() => handleClosedDealClick(data._id)}
                key={index}
                className="md:max-w-[400px] p-4 mx-auto w-[100%] rounded-[11.19px] md:min-h-[400px] overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] mb-[20px]"
              >
                <div className="w-[100%] border-[#d1d1d1] border-[0.1px] h-[209.12px] flex justify-center  rounded-[5.59px] ">
                  <img
                    src={"https://www.bizdateup.com/v1/banner/" + data.banner}
                    alt=""
                    className="w-[100%]  object-contain rounded-[5.59px]	"
                  />
                </div>
                <div className="pl-[10.74px] pr-[29.27px] pb-[10px] pt-[20px] ">
                  <div className="flex  items-center">
                    <div className=" absolute top-[200.51px]  border-[#d1d1d1] border-[0.1px] bg-white w-[70px] h-[70px] rounded-[11px] overflow-hidden flex items-center justify-center ">
                      <img
                        src={"https://www.bizdateup.com/v1/logo/" + data.logo}
                        alt=""
                        className="w-[100%] h-[70px] rounded-[11.19px]    object-contain"
                      />
                    </div>
                    <div className="pl-[79.47px] font-[Inter]  relative bottom-3 h-6  text-[20px] font-[600] text-[#202054]">
                      {data.registeredCompanyName.length > 17
                        ? `${data.registeredCompanyName.slice(0, 13)}...`
                        : data.registeredCompanyName}
                    </div>
                  </div>

                  <div className="pt-[10.22px] text-[14px] font-[Inter] font-[400] leading-[18.36px]  text-[#828F99]">
                    {data.shortDescription.slice(0, 80)}...
                  </div>
                  <div></div>

                  <div className="flex gap-2 mt-6">
                    {data.tags &&
                      data.tags.map((tagString, tagIndex) => {
                        var tagsm = tagString.split(",");
                        return (
                          <div
                            key={tagIndex}
                            className="flex justify-start flex-wrap  items-center "
                          >
                            {tagsm.map((tag, innerTagIndex) => (
                              // <span key={innerTagIndex}>{tag}</span>
                              <div
                                key={innerTagIndex}
                                className="flex mt-1 justify-center bg-[#9797FE] items-center pb-[1px] border-[0.5px] rounded-[7499.3px]  px-[20px] mr-[11px] h-[25px]"
                              >
                                <div className="w-[15px] pr-[2.75px]">
                                  <img
                                    src={shoppingBag1}
                                    alt=""
                                    className="w-[100%]"
                                  />
                                </div>

                                <p className="font-[400] leading-[14.54px] font-[Inter] text-[#252525] text-[14.54px] ">
                                  {tag}
                                </p>
                              </div>
                            ))}
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Closeddeals;
