import React from "react";
import Contactform from "./content/contactform";
import Staticcontact from "./content/staticcontact";
import cta15 from "../../assets/images/cta/cta15.png";
import Navbar from "../Navbar1/Navbar1";

import Footer2 from "../Footer2/Footer2";
import { RightCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Contactus() {
  const navigate = useNavigate();

  const handlecta = () => {
    navigate("/invest");
  };

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <Helmet defer={false}>
        <title>
          Get in Touch with Bizdateup | Contact Us for Investor Inquiries
        </title>
        <meta
          name="description"
          content="Contact Bizdateup for any investor inquiries or questions. Our team is here to assist you. Reach out to us through our contact form or email and we'll get back to you promptly."
        />
        <meta
          name="keywords"
          content="Bizdateup contact, investor inquiries, contact form, email, assistance"
        />
      </Helmet>
      <div className="bg-[#f5f5f5] p-2 pb-[55px] flex flex-col items-center">
        <div className="w-[95%] md:max-w-[1500px] xl:w-[75%]">
          <h1 className=" ">Connect with Bizdateup</h1>
          <div className="flex flex-col justify-center items-center ">
            <div className="contact-container w-[100%] xl:w-[100%]">
              <div className="contact-part flex flex-col-reverse gap-y-8 lg:flex lg:flex-row lg:gap-x-4 xl:gap-x-24">
                <Staticcontact />
                <Contactform />
              </div>
            </div>
            <div
              onClick={handlecta}
              className="designlb mt-7 w-[100%] xl:w-[100%] "
            >
              <div className="design flex flex-col relative p-6">
                <div className="flex flex-col justify-center gap-2">
                  <h2 className="not-italic font-normal text-[27.65px] leading-8 text-[#252525] font-[Inter]">
                    Join the Startup Revolution Today with Bizdateup
                  </h2>
                  <label className="not-italic font-[400] text-base leading-[19px] text-[#252525] font-[Inter]">
                    Join the movement towards innovative investment
                    opportunities with Bizdateup's startup revolution.
                  </label>
                </div>
                <img
                  className="md:block hidden md:absolute right-4 top-1 "
                  src={cta15} alt=""
                />
              </div>
              <Link to="/invest">
                <div className="flex justify-between items-center my-2 mx-5 py-1">
                  <label>Invest Now</label>
                  <RightCircleOutlined />
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

export default Contactus;
