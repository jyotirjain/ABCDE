import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Investment from "../Components/portfolio/investment";
import Listofstrtup from "../Components/portfolio/listofstrtup";
import Updates from "../Components/portfolio/updates";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Cta4 from "../assets/images/cta/cta4.png";
import { RightCircleOutlined } from "@ant-design/icons";

import API from "../Apis/investor";
import Footer2 from "../Components/Footer2/Footer2";
import { Helmet } from "react-helmet";
import Loader from "../Components/loader/loader";
import Noportfolio from "../Components/portfolio/noportfolio";
import LoaderApi from "../Components/LoaderApi/LoaderApi";

function Portfolio() {
  const [refId] = useState(localStorage.getItem("authRefInvestor"));
  const [userdata, setUserData] = useState(
    JSON.parse(localStorage.getItem("authDataInvestor"))
  );

  const [loader, setLoader] = useState(true); // State to handle the loader visibility
  const navigate = useNavigate();
  const [totalInvestmentByDate, setTotalInvestmentByDate] = useState({});
  const [percentageByCompany, setPercentageByCompany] = useState({});
  const [totalInvestment, setMyTotalInvestment] = useState(0);

  const [investedStartups, setInvestedStartups] = useState([
    // {
    //   logo: "",
    //   registeredCompanyName: "Immersive labs Immersive labs",
    //   shortDescription: "",
    //   tags: "",
    //   colour: "#F0D9FF",
    // },
  ]);

  const fetchData = async () => {
    try {
      const response2 = await API.getPortfolio({
        investor: refId,
      });

      setMyTotalInvestment(response2.totalInvestment[0].totalamount);

      setInvestedStartups(response2.investedStartupDetails);
      setTotalInvestmentByDate(response2.totalInvestmentByDate);
      setPercentageByCompany(response2.percentageByCompany);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoader(false); // Hide the loader after 3 seconds
    }, 2000);
  }, []);

  const handlecta = () => {
    navigate("/invest");
  };

  return (
    <>
      {loader ? (
        <LoaderApi />
      ) : (
        <>
          {investedStartups.length !== 0 ? (
            <>
              <Navbar verified={"true"} userType="investor" />
              <Helmet defer={false}>
                <title>
                  Investment Portfolio | Track Your Startup Investments |
                  Bizdateup
                </title>
                <meta
                  name="description"
                  content="Monitor and track your startup investments on Bizdateup. Get detailed insights, performance data, and updates on your investment portfolio."
                />
                <meta
                  name="keywords"
                  content="investment portfolio, track investments, Bizdateup, performance data"
                />
              </Helmet>
              <div className="flex flex-col items-center py-6 md:py-8 bg-[#fafafa]">
                <div className="w-[90%] md:max-w-[1500px] 2xl:w-[65%]">
                  <h2 className="not-italic font-normal text-[27.65px] leading-[41px] text-[#202054] font-[Inter]">
                    Portfolio
                  </h2>
                  <div className="flex flex-col gap-y-7">
                    <div className="lg:flex lg:flex-row flex flex-col  gap-8">
                      <Investment
                        investment={totalInvestment}
                        totalInvestmentByDate={totalInvestmentByDate}
                        percentageByCompany={percentageByCompany}
                        startupsCount={investedStartups.length}
                        clallback={fetchData}
                      />
                      <div className="hidden lg:block">
                        <Updates />
                      </div>
                    </div>
                    <div className="flex gap-8">
                      <Listofstrtup data={investedStartups} />
                      <div className="hidden lg:flex lg:w-[400px]">
                        <div onClick={handlecta} className="cta  h-fit">
                          <div className="ctaimg bg-[#C3C3EC]">
                            <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                              Invest More, Diversify more
                            </label>
                            <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                              Diversify your investment portfolio by investing
                              in multiple startups.
                            </p>
                            <div className="flex justify-end mt-16 ">
                              <img
                                src={Cta4}
                                className="aspect-square w-[65%]"
                              />
                            </div>
                          </div>
                          <div className="flex justify-between items-center my-2 mx-5 py-1">
                            <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                              Explore More
                            </label>
                            <RightCircleOutlined />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:hidden">
                      <Updates />
                    </div>
                  </div>
                </div>
              </div>
              <Footer2 />
            </>
          ) : (
            <Noportfolio />
          )}
        </>
      )}
    </>
  );
}

export default Portfolio;
