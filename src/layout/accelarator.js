import React from "react";
import Invester from "../Components/accelerator/invester";
import Startupacc from "../Components/accelerator/startupacc";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Cta12 from "../assets/images/cta/cta12.png";
import { SlArrowRightCircle } from "react-icons/sl";
import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Footer2 from "../Components/Footer2/Footer2";

function Accelarator() {
  const navigate = useNavigate();

  const handlecta = () => {
    navigate("/");
  };

  return (
    <div>
      <Navbar verified={"true"} userType="startup" />
      <div className="accelarator p-4 md:p-6 xl:p-12">
        <div className="acc-container w-full  md:max-w-[1500px] 2xl:w-[65%]   flex flex-col justify-center items-center">
          <div className="acc-com w-[100%]  py-10 px-10">
            <h2>Syndicate Name</h2>
            <div className=" flex flex-col gap-y-6 md:flex md:flex-row  md:gap-x-8 mt-9 md:justify-around">
              <div className="tag">
                <p>Investors refer</p>
                <label>20</label>
              </div>
              <div className="tag">
                <p>Startups refer </p>
                <label>20</label>
              </div>
              <div className="tag">
                <p>Total refer</p>
                <label>₹10000</label>
              </div>
            </div>
          </div>
          <div className="mid-acc w-[100%]  my-6">
            <input type="search" placeholder="Search" className="px-4" />
            <button className=" sm:text-[18px]">Redeem now</button>
          </div>
          <div className="flex flex-col md:flex md:flex-row gap-8 w-[100%] ">
            <div className="flex flex-col w-full gap-8">
              <div className="dashboardcta w-full">
                <div className="dashboardcta2 bg-[#CBD7FD]   ">
                  <label>10,000</label>
                  <p>Number of Startups</p>
                </div>
                <div className="flex justify-between items-center my-2 mx-5 ">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Raised Amount
                  </label>
                  <SlArrowRightCircle className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="dashboardcta w-full">
                <div className="dashboardcta2 bg-[#91FA80]   ">
                  <label>₹10,000</label>
                  <p>Profit earned</p>
                 
                </div>
                <div className="flex justify-between items-center my-2 mx-5 ">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Raised Amount
                  </label>
                  <SlArrowRightCircle className="w-[25px] h-[25px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-8">
              <div className="dashboardcta w-full">
                <div className="dashboardcta2 bg-[#DDFC74]    ">
                  <label>10,000</label>
                  <p>Number of Investors</p>
                </div>
                <div className="flex justify-between items-center my-2 mx-5 ">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Raised Amount
                  </label>
                  <SlArrowRightCircle className="w-[25px] h-[25px]" />
                </div>
              </div>
              <div className="dashboardcta w-full">
                <div className="dashboardcta2 bg-[#F0D9FF]   ">
                  <label>Agreement</label>
                </div>
                <div className="flex justify-between items-center my-2 mx-5 ">
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Raised Amount
                  </label>
                  <SlArrowRightCircle className="w-[25px] h-[25px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="btm-acc w-full ">
            <div className="w-full xl:w-[78%]">
              <div className="acclink flex my-4">
                {/* saloni ma'am */}
                <NavLink
                  to="/startup/accelarator/"
                  className="tab"
                  activeclassname="active"
                >
                  <div className="tabtext">Investor</div>
                </NavLink>
                <NavLink
                  to="/startup/accelarator/startup"
                  className="tab"
                  activeclassname="active"
                >
                  <div className="tabtext">Startup</div>
                </NavLink>
              </div>
              <div className="acc-content px-3 py-2 sm:px-5 sm:py-2">
                <Routes>
                  <Route path="/" element={<Invester />} />
                  <Route path="/startup" element={<Startupacc />} />
                </Routes>
              </div>
            </div>
            <div className="cards hidden xl:flex xl:flex-col xl:gap-y-8  xl:w-[20%]">
              <div className="cta mt-[70px] ">
                <div className="ctaimg bg-[#E0A467]">
                  <label className=" not-italic font-normal text-base leading-[19px] text-[#ffffff] font-[Inter]">
                    Go to Profile Page
                  </label>
                  <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#828F99] font-[Inter]">
                    You can edit this page for content
                  </p>
                  <div className="flex justify-end mt-16">
                    <img src={Cta12} />
                  </div>
                </div>
                <div
                  onClick={handlecta}
                  className="flex justify-between items-center my-2 mx-5"
                >
                  <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                    Profile Page
                  </label>
                  <SlArrowRightCircle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Accelarator;
