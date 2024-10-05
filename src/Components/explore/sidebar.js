import React from "react";
import { Link } from "react-router-dom";
import { BiRightArrowCircle } from "react-icons/bi";

import Cta6 from "../../assets/images/cta/cta6.png";
import Cta7 from "../../assets/images/cta/cta7.png";

function Sidebar(props) {
  const menuitem = [
    {
      path: "/invest/",
      name: "CCDS",
      noofstartup: props.count.ccds,
    },
    {
      path: "/invest/CCPS",
      name: "CCPS",
      noofstartup: props.count.ccps,
    },
    {
      path: "/invest/equity",
      name: "Equity",
      noofstartup: props.count.equity,
    },
    // {
    //   path: "/invest/Startup",
    //   name: "Startup",
    //   noofstartup: props.count.startup,
    // },
  ];

  const handleSidebarItemClick = (event, id, noofstartup) => {
    event.preventDefault();
    if (noofstartup > 0) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const showLearnLink =
    props.count.ccds +
      props.count.ccps +
      props.count.equity +
      props.count.startup >
    1;

  return (
    <div className="containize flex flex-col gap-y-7">
      <div className="sidebar-container w-full md:w-[280px]">
        <div className="w-full">
          {menuitem.map((item, index) => (
            <Link
              // to={item.path}
              key={index}
              className="link justify-between"
              onClick={(e) =>
                handleSidebarItemClick(e, item.name.toLowerCase())
              }
            >
              <div
                className={
                  item.noofstartup == 0
                    ? "text-[18px] text-[#666666]"
                    : "link-text"
                }
              >
                {item.name}
              </div>
              <div
                className={
                  item.noofstartup == 0
                    ? "text-[18px] text-[#666666]"
                    : "link-text"
                }
              >
                {item.noofstartup}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="cards hidden md:flex md:flex-col md:gap-8">
        <Link className="h-fit" to="/closed-deals">
          <div className="border-[2px] md:w-[280px] h-[204px] rounded-[10px] shadow-[0px_1px_12px_rgba(0,0,0,0.15)]  bg-white  ">
            <div className="flex items-start px-[30px]  h-[170px] rounded-[10px] bg-[#D0F2C3] relative p-4">
              <div className=" ">
                <h4 className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                  Closed Deals
                </h4>
                <label className="not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                  Check all the success full startups which are funded.
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

        {showLearnLink && (
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
        )}
      </div>
    </div>
  );
}

export default Sidebar;
