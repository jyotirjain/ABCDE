import React, { useState } from "react";
import FirstBox from "./FirstBox";
import InverterContainer from "./InverterContainer";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const LayoutProfile = () => {
  const [open, setOpen] = useState(false);
  const handelNav = () => {
    setOpen(!open);
  };
  return (
    <>
      <Navbar verified={"true"} userType="investor" />

      <div className="w-[100%] bg-[#f2f2f2] relative   font-[Inter] ">
        <div className="pb-[60px] md:pt-0 pt-[30px]  lg:px-0 md:px-[20px] sm:px-[20px] px-[20px]">
          <div className="lg:flex md:block  lg:justify-between md:justify-center justify-center  md:w-[100%] sm:w-[100%] lg:max-w-[1144px] mx-auto ">
            <div className="md:block ">
              <div className=" text-[#202054] ">
                <h4 className="md:text-[30px] text-[24px] font-[400] py-[10px] md:py-[25px]">
                  Account
                </h4>
              </div>
              <FirstBox />
              <SecondBox />
              <ThirdBox />
            </div>
            <div className="md:pt-[95px]">
              <InverterContainer />
            </div>
          </div>
        </div>
        
      </div>

      <Footer2 />
    </>
  );
};

export default LayoutProfile;