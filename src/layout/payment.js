import { Progress } from "antd";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// import Revamp from "../assets/images/revamp.png";

import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Onlinepayment from "../Components/paymentpages/onlinepayment";
import Paybg from "../assets/images/paybg.png";
import Offlinepayment from "../Components/paymentpages/offlinepayment";
import { Route, Routes } from "react-router";
import CompanyLogo3 from "../Images/CompanyLogo3.png";
import API from "../Apis/startupApis";
import Footer2 from "../Components/Footer2/Footer2";

function Payment() {
  const endpoint = process.env.REACT_APP_TEST_URL;
  const location = useLocation();
  const startData = location.state?.id;
  const refId = localStorage.getItem("authRefInvestor");
  
  

  const [startups, setstartups] = useState({
    logo: CompanyLogo3,
    registeredCompanyName: "",
    shortDescription: "",
    tags: "",
    colour: "#F0D9FF",
  });

  const fetchData = async () => {
    try {
      const response = await API.fetchStartupById({ refId: startData });

      setstartups(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar verified={"true"} userType="investor" />
      <div className="bg-[#fafafa] p-4 lg:flex lg:justify-center lg:p-12">
        <div
          className="flex flex-col justify-center gap-y-6 lg:w-[90%] xl:w-[80%] lg:flex 
          lg:flex-row lg:gap-x-6"
        >
          <div className="flex flex-col gap-y-6 lg:w-[70%]">
            <div className="raised w-full  p-2 ">
              <div className="flex gap-x-4">
                <img
                  src={endpoint + "/v1/logo/" + startups?.logo}
                  alt={startups?.logo}
                />

                <div className="raisecom">
                  <h2>{startups?.registeredCompanyName}</h2>
                  <p>Raised</p>
                  <Progress
                    percent={80}
                    strokeColor={"#202054"}
                    className="w-[100%] not-italic font-medium text-[16.5785px] leading-[19px] text-right text-[rgba(36,37,82,0.9)] opacity-90 font-[Inter]"
                  />
                </div>
              </div>
            </div>
            <div className=" w-full  lg:flex lg:justify-center xl:w-full  ">
              <img
                src={Paybg}
                alt=""
                className="w-full md:h-[500px] shadow-[0px_1px_12px_rgba(0,0,0,0.15)] "
              />
            </div>
            <div className="paymentbox hidden md:flex md:h-full"></div>
          </div>
          <div>
            <div className="paymentbox p-4 lg:w-[400px] xl:w-[450px] 2xl:w-[475px]">
              <Routes>
                <Route
                  path="/"
                  element={<Onlinepayment amount={3000} type={"online"} />}
                />
                <Route
                  path="/offlinepayment"
                  element={
                    <Offlinepayment
                      amount={3000}
                      type={"online"}
                      id={refId}
                      investorData={startData}
                      startUpData={refId}
                    />
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Payment;
