import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Sidebar from "../Components/explore/sidebar";
import Ccds from "../Components/explore/ccds";
import Ccps from "../Components/explore/ccps";
import Equity from "../Components/explore/equity";
import Startup from "../Components/explore/startup";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer2 from "../Components/Footer2/Footer2";
import CompanyLogo3 from "../Images/CompanyLogo3.png";
import API from "../Apis/startupApis";
import { Helmet } from "react-helmet";
import Loader from "../Components/loader/loader";

import Cta6 from "../assets/images/cta/cta6.png";
import Cta7 from "../assets/images/cta/cta7.png";
import { BiRightArrowCircle } from "react-icons/bi";
import LoaderApi from "../Components/LoaderApi/LoaderApi";

function Explore() {
  const [loader, setloader] = useState(false);
  const navigate = useNavigate();
  const [startupsccds, setstartupscds] = useState([
    // {
    //   logo: CompanyLogo3,
    //   registeredCompanyName: "",
    //   shortDescription: "",
    //   tags: "",
    //   colour: "#F0D9FF",
    // },
  ]);
  const [startupsccps, setstartupsccps] = useState([
    // {
    //   logo: CompanyLogo3,
    //   registeredCompanyName: "",
    //   shortDescription: "",
    //   tags: "",
    //   colour: "#F0D9FF",
    // },
  ]);
  const [startupsequity, setstartupsequity] = useState([
    // {
    //   logo: CompanyLogo3,
    //   registeredCompanyName: "",
    //   shortDescription: "",
    //   tags: "",
    //   colour: "#F0D9FF",
    // },
  ]);
  const [startupse, setstartups] = useState([
    // {
    //   logo: CompanyLogo3,
    //   registeredCompanyName: "",
    //   shortDescription: "",
    //   tags: "",
    //   colour: "#F0D9FF",
    // },
  ]);

  const fetchStartupCcps = async () => {
    try {
      const response = await API.fetchStartupByType({ tos: "CCPS" });

      //
      setstartupsccps(response.data.data);
    } catch (error) {}
  };

  const fetchStartupCcds = async () => {
    try {
      const response = await API.fetchStartupByType({ tos: "CCDS" });

      //
      setstartupscds(response.data.data);
    } catch (error) {}
  };

  const fetchStartupEquity = async () => {
    try {
      const response = await API.fetchStartupByType({ tos: "equity" });

      setstartupsequity(response.data.data);
    } catch (error) {}
  };

  const fetchStartup = async () => {
    try {
      const response = await API.fetchStartupByType({ tos: "startup" });
      //
      //
      setstartups(response.data.data);
    } catch (error) {}
  };

  const handleInvestClick = async (id) => {
    // alert(id);
    const data = {
      id: id,
    };
    navigate("/startup/startupondetails/" + id, { state: data });
  };

  const count = {
    ccps: startupsccps.length,
    ccds: startupsccds.length,
    equity: startupsequity.length,
    startup: startupse.length,
  };

  useEffect(() => {
    setloader(true);
    fetchStartup();
    fetchStartupCcps();
    fetchStartupCcds();
    fetchStartupEquity();
    setloader(false);
  }, []);

  // const [callbackResult, setCallbackResult] = useState(null);

  // const handleCallback = async (result) => {
  //   setCallbackResult(result);
  // };

  return (
    <>
      {loader ? (
        <LoaderApi />
      ) : (
        <>
          <Navbar verified={"true"} userType="investor" />
          <Helmet defer={false}>
            <title>
              Invest in Startups | Explore Startup Opportunities | Bizdateup
            </title>
            <meta
              name="description"
              content="Discover and invest in promising startups on Bizdateup. Explore a wide range of startup opportunities and become a part of their success story."
            />
            <meta
              name="keyword"
              content="invest in startups, startup opportunities, Bizdateup, success story"
            />
          </Helmet>
          <div className="bg-[#fafafa] flex justify-center items-center md:p-[30px]">
            <div className="flex flex-col w-[90%] md:max-w-[1500px] ">
              <h1>Explore Startups</h1>
              <div className="flex flex-col md:flex md:flex-row gap-8">
                <Sidebar count={count} />

                <div className="w-[100%] md:w-[75%] lg:w-[95%] flex flex-col">
                  {/* <Ccds callback={handleInvestClick} startup1={startupsccds} /> */}
                  {startupsccds.length === 0 ? (
                    ""
                  ) : (
                    <Ccds
                      callback={handleInvestClick}
                      startup1={startupsccds}
                    />
                  )}
                  {/* <Ccps callback={handleInvestClick} startup2={startupsccps} /> */}
                  {startupsccps.length === 0 ? (
                    ""
                  ) : (
                    <Ccps
                      callback={handleInvestClick}
                      startup2={startupsccps}
                    />
                  )}
                  {/* <Equity callback={handleInvestClick} startup3={startupsequity} /> */}
                  {startupsequity.length === 0 ? (
                    ""
                  ) : (
                    <Equity
                      callback={handleInvestClick}
                      startup3={startupsequity}
                    />
                  )}
                  {/* <Startup callback={handleInvestClick} startup4={startupse} /> */}
                  {/* {startupse.length === 0 ? (
                    ""
                  ) : (
                    <Startup
                      callback={handleInvestClick}
                      startup4={startupse}
                    />
                  )} */}
                </div>
                <div className="cards flex md:hidden flex-col gap-8">
                  <Link className="h-fit" to="/closed-deals">
                    <div className="border-[2px] md:w-[280px] h-[204px] rounded-[10px] shadow-[0px_1px_12px_rgba(0,0,0,0.15)]  bg-white  ">
                      <div className="flex items-start px-[30px]  h-[170px] rounded-[10px] bg-[#D0F2C3] relative p-4">
                        <div className=" ">
                          <h4 className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                            Closed Deals
                          </h4>
                          <label className="not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                            Check all the success full startups which are
                            funded.
                          </label>
                          <div className="absolute flex justify-end bottom-[-5px] right-0">
                            <img src={Cta6} alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center px-[25px] my-2 ">
                        <div>
                          <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                            See now
                          </h4>
                        </div>
                        <div>
                          <BiRightArrowCircle />
                        </div>
                      </div>
                    </div>
                  </Link>
                  <a
                    href="https://chat.whatsapp.com/KI3jbUdxUeY4WfI8SgtdqC"
                    target="_blank"
                  >
                    <section>
                      <div className="border-[2px] md:w-[280px] h-[204px] rounded-[10px] shadow-[0px_1px_12px_rgba(0,0,0,0.15)]  bg-white ">
                        <div className="flex items-start px-[30px]  h-[170px] rounded-[10px] bg-[#E0C77D] relative p-4">
                          <div className=" ">
                            <h4 className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                              Join Our Investor's Community
                            </h4>
                            <label className="not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                              Get daily Investment updates on WhatsApp
                            </label>
                            <div className="absolute flex justify-end bottom-[-5px] right-0">
                              <img src={Cta6} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-[25px] my-2 ">
                          <div>
                            <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                              Join now
                            </h4>
                          </div>
                          <div>
                            <BiRightArrowCircle />
                          </div>
                        </div>
                      </div>
                    </section>
                  </a>

                  <Link to="/learn">
                    <section>
                      <div className="border-[2px] md:w-[280px] h-[204px] rounded-[10px]  bg-white  ">
                        <div className="flex  items-start  relative h-[170px] rounded-[10px] bg-[#E1DDF8] p-4 ">
                          <div className="">
                            <h4 className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                              Get started now
                            </h4>
                            <label className="not-italic font-normal w-5 text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                              Follow These Simple Steps to Get Started
                            </label>
                            <div className="flex justify-end absolute bottom-0 right-0">
                              <img src={Cta7} alt="" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between items-center px-[25px] my-2">
                          <div>
                            <h4 className="font-[400] leading-[18.75px] text-[#252525]">
                              Learn now
                            </h4>
                          </div>
                          <div>
                            <BiRightArrowCircle />
                          </div>
                        </div>
                      </div>
                    </section>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer2 />
        </>
      )}
    </>
  );
}

export default Explore;
