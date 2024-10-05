import React from "react";
import Cta8 from "../../assets/images/cta/cta8.png";
import cta23 from "../../assets/images/cta/cta23.png";

import Cta9 from "../../assets/images/cta/cta9.png";
import Navbar from "../Navbar1/Navbar1";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Startupapprove() {
  const navigate = useNavigate();

  function gotohome() {
    navigate("/raisefund");
  }

  return (
    <div>
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>Approved</title>
        <meta name="description" content="Approved description" />
      </Helmet>
      <div className="flex  justify-center items-center p-4 md:py-16 bg-[#fafafa]">
        <div className="flex gap-x-8 w-full md:w-[75%]  ">
          <div className="box-border flex justify-center p-4 w-full md:w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] ">
            <div className="flex flex-col justify-center items-center ">
              <div className=" flex justify-center items-center w-[170px] h-[170px] md:w-[288px] md:h-[239px] bg-[#E8EAF8] rounded-[50%]">
                <img src={cta23} alt="" className=" w-[100px] md:w-[150px]" />
              </div>
              <div className="mt-6">
                <label className="not-italic font-medium text-3xl leading-[45px] text-[#252525] font-[inter] ">
                Congratulations on your first step of fundraising
                </label>
              </div>
              <div>
                <p className="not-italic font-medium text-lg leading-6 text-[#828F99] font-[inter]">
                While we go through your details you can go check startups
                  onboarded by us.
                </p>
              </div>
              <button
                onClick={gotohome}
                className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[inter] mt-4"
              >
                Go to Raise Funds
              </button>
            </div>
          </div>
          <div className="md:w-[300px] hidden md:block">
            <div className=" flex flex-col gap-y-8">
              <Link to="/learn">
                <div className="cta">
                  <div className="ctaimg bg-[#3F66CCCC]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[inter]">
                      Learn about Us
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-16">
                      <img src={Cta8} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 mx-5">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
              <Link to="/about_us">
                <div className="cta ">
                  <div className="ctaimg bg-[#E7A536CC]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[inter]">
                      Learn about Us
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-14">
                      <img src={Cta9} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 mx-5">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[inter]">
                      Learn Now
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

export default Startupapprove;
