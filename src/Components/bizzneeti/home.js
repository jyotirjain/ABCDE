import React from "react";
import heroimg from "../../assets/images/bizzneeti/logo with dbs.png";
import { FaCalendarDay, FaLocationDot } from "react-icons/fa6";

function Home() {
  return (
    <div className="hero-section">
      <div className="main-hero-section">
        <div className="mid-hero-section p-4 flex flex-col items-center mt-4 ">
          {/* <h2 className="text-[#fff] text-[16px] ">Bizdateup</h2>
          <span className="text-[#fff] text-[12px]">Presents</span>
          <div>
            <img className="" />
            <label>
              Startup
              <br />
              Investors
              <br />
              Conclave’24
            </label>
          </div> */}
          <img src={heroimg} />
        </div>

        <h1>Mumbai’s #1 Startup Ecosystem Event.</h1>
        <h3 className="text-[#fff] text-[18px] md:text-[22px] max-w-[320px] md:max-w-[600px] w-full text-center md:leading-9">
          Join Angel Investors, Startup Founders, and Leading Industry Experts &
          Shape the future of Indian Startups at the <br />
          <span className=" font-[700] outline px-2">
            Startup Investor's Conclave.
          </span>
        </h3>
        <div className="mt-6 flex gap-4">
          <label className="section-tags">
            {" "}
            <FaLocationDot /> The Lalit, Mumbai{" "}
          </label>
          <label className="section-tags">
            {" "}
            <FaCalendarDay /> 17th March 2024
          </label>
        </div>
      </div>
    </div>
  );
}

export default Home;
