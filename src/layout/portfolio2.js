import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Investment from "../Components/portfolio2/investment";
import Listofstrtup from "../Components/portfolio2/listofstrtup";
import Updates from "../Components/portfolio/updates";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Cta28 from "../assets/images/cta/cta28.png";
import Cta11 from "../assets/images/cta/cta11.png";

import { RightCircleOutlined } from "@ant-design/icons";
import PDFDownloadButton from "../Components/portfolio2/report/report";

import API from "../Apis/investor";
import Footer2 from "../Components/Footer2/Footer2";
import { Helmet } from "react-helmet";
import Loader from "../Components/loader/loader";
import Valuation from "../Components/portfolio2/valuation";
import ReactApexChart from "react-apexcharts";
import cta27 from "../assets/images/cta/cta27.png";

import Noportfolio from "../Components/portfolio/noportfolio";
import LoaderApi from "../Components/LoaderApi/LoaderApi";

function Portfolio2() {
  const [refId] = useState(localStorage.getItem("authRefInvestor"));

  const [userdata, setUserData] = useState(
    JSON.parse(localStorage.getItem("authDataInvestor"))
  );

  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const [totalInvestmentByDate, setTotalInvestmentByDate] = useState({});
  const [percentageByCompany, setPercentageByCompany] = useState({});
  const [percentageByType, setPercentageByType] = useState({});
  const [totalInvestment, setMyTotalInvestment] = useState(0);
  const [valuationGraph, setValuationgraph] = useState({});
  const [legal, setlegal] = useState({});

  const [investedStartups, setInvestedStartups] = useState([]);

  function generateGraph() {
    setValuationgraph({
      investedCompany: investedStartups?.map(
        (name) => `${name.registeredCompanyName}`
      ),
      expectedValuation: investedStartups?.map(
        (expectedValuation) =>
          `${
            expectedValuation?.portfolio?.expectedValuation
              ? expectedValuation?.portfolio?.expectedValuation
              : 0
          }`
      ),
      investedValuation: investedStartups?.map(
        (investedValuation) => `${investedValuation?.dealTerms?.valuation}`
      ),
    });
  }

  const fetchData = async () => {
    try {
      const response2 = await API.getPortfolio({
        investor: refId,
      });
      setMyTotalInvestment(response2.totalInvestment[0].totalamount);
      setInvestedStartups(response2.investedStartupDetails);
      setTotalInvestmentByDate(response2.totalInvestmentByDate);
      setPercentageByCompany(response2.percentageByCompany);
      setPercentageByType(response2?.totalInvestmentPercentageByType);
      setlegal(response2.legalDocs);
    } catch (error) {}
  };
  console.log(
    "🚀 ~ file: portfolio2.js:36 ~ Portfolio2 ~ valuationGraph:",
    valuationGraph
  );
  useEffect(() => {
    generateGraph();
  }, [investedStartups]);
  useEffect(() => {
    fetchData();
    setTimeout(() => {
      setLoader(false); // Hide the loader after 3 seconds
    }, 3000);
  }, []);

  const handlecta = () => {
    navigate("/invest");
  };
  const [pie, setpie] = useState({
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        width: 500,
        type: "donut",
        offsetY: 1,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Comedy", "Action", "SciFi", "Drama", "Horror"],

      fill: {
        type: "gradient",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",

        fontFamily: "Inter",
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
        style: {
          fontFamily: "Inter",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
              horizontalAlign: "left",
            },
          },
        },
      ],
    },
  });

  const [pie2, setpie2] = useState({
    series: [],
    options: {
      chart: {
        width: 500,
        type: "donut",
        offsetY: 1,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      labels: [],

      fill: {
        type: "gradient",
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",

        fontFamily: "Inter",
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
        style: {
          fontFamily: "Inter",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100%",
            },
            legend: {
              position: "bottom",
              horizontalAlign: "left",
            },
          },
        },
      ],
    },
  });

  useEffect(
    () => {
      setpie({
        // series: Object.values(props.percentageByCompany.map(p => p.toFixed(2))),
        series: Object.values(percentageByCompany),
        options: {
          chart: {
            width: 500,
            type: "donut",
            offsetY: 1,
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270,
            },
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "gradient",
          },
          labels: Object.keys(percentageByCompany),
          legend: {
            position: "bottom",
            horizontalAlign: "left",

            fontFamily: "Inter",
            formatter: function (val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex];
            },
          },
          title: {
            text: "Percentage by Company",
            style: {
              fontFamily: "Inter",
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: "100%",
                },
                legend: {
                  position: "bottom",
                  horizontalAlign: "left",
                },
              },
            },
          ],
        },
      });
      setpie2({
        // series: Object.values(props.percentageByCompany.map(p => p.toFixed(2))),
        series: Object.values(percentageByType),
        options: {
          chart: {
            width: 500,
            type: "donut",
            offsetY: 1,
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270,
            },
          },
          dataLabels: {
            enabled: false,
          },
          fill: {
            type: "gradient",
          },
          labels: Object.keys(percentageByType),
          legend: {
            position: "bottom",
            horizontalAlign: "left",

            fontFamily: "Inter",
            formatter: function (val, opts) {
              return (
                val.toUpperCase() +
                " - " +
                opts.w.globals.series[opts.seriesIndex]
              );
            },
          },
          title: {
            text: "",
            style: {
              fontFamily: "Inter",
            },
          },
          responsive: [
            {
              breakpoint: 480,
              options: {
                chart: {
                  width: "100%",
                },
                legend: {
                  position: "bottom",
                  horizontalAlign: "left",
                },
              },
            },
          ],
        },
      });
    },
    // }
    [percentageByCompany, percentageByType]
  );

  return (
    <>
      {loader ? (
        <LoaderApi />
      ) : (
        <>
          {/* {investedStartups.length != "0" ? (
            <> */}
          <Navbar verified={"true"} userType="investor" />
          <Helmet defer={false}>
            <title>
              Investment Portfolio | Track Your Startup Investments | Bizdateup
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
            <div className="w-[95%] md:max-w-[1500px] 2xl:w-[65%]">
              <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-2">
                Portfolio
              </h2>
              <div className="md:flex md:flex-row flex flex-col  gap-7">
                {investedStartups.length != "0" ? (
                  <div className=" flex flex-col  w-full gap-8">
                    <Investment
                      investment={totalInvestment}
                      totalInvestmentByDate={totalInvestmentByDate}
                      percentageByCompany={percentageByCompany}
                      startupsCount={investedStartups.length}
                      clallback={fetchData}
                    />
                    <Listofstrtup data={investedStartups} legal={legal} />
                    {/* <Valuation valuationGraph={valuationGraph} /> */}
                    {/* {valuationGraph.length > 0 && <Valuation valuationGraph={valuationGraph} />} */}
                    {valuationGraph &&
                      Object.keys(valuationGraph).length > 0 && (
                        <Valuation valuationGraph={valuationGraph} />
                      )}
                  </div>
                ) : (
                  <>
                    <div className="box-border flex justify-center md:w-[75%] border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] p-4 ">
                      <div className="flex flex-col justify-center items-center ">
                        <div className=" flex justify-center items-center w-[288px] h-[288px] bg-[#E8EAF8] rounded-[500px]">
                          <img src={cta27} alt="" className="w-[200px]" />
                        </div>
                        <div className="mt-6 flex">
                          <label className="not-italic text-center font-medium text-[20px] md:text-[26px] md:leading-[45px] text-[#252525] font-[Inter] ">
                            Your portfolio is waiting for you to make your first
                            investment!
                          </label>
                        </div>
                        <div>
                          <p className="not-italic font-normal text-sm md:text-base text-center leading-6 text-[#828F99] font-[Inter]">
                            Start building your investment portfolio now
                          </p>
                        </div>
                        <Link to="/invest">
                          <button className="w-[173px] h-[42px] rounded-[10px] bg-[#202054] text-[#ffffff] not-italic font-normal text-base leading-[19px] font-[Inter] mt-4">
                            Explore now
                          </button>
                        </Link>
                      </div>
                    </div>
                  </>
                )}

                <div className="flex flex-col gap-8 md:w-[300px]">
                  <div className="hidden w-[300px] lg:block">
                    <Updates />
                  </div>
                  {investedStartups.length != "0" ? (
                    <div className="w-full lg:flex lg:w-[300px] transform transition-all duration-300 hover:translate-y-[-3px]">
                      <div className="  shadow-[0px_1px_30px_0px_rgba(0,0,0,0.15)] rounded-[10px] w-full  h-fit p-[22px] bg-[#ffffff]">
                        <div className="flex md:flex-col ">
                          <div>
                            <label className="text-black text-xl not-italic font-normal leading-7 font-[Inter]">
                              Report
                            </label>
                            <p className="text-[#967E7E] text-[15px] not-italic font-normal leading-7 font-[Inter]">
                              Get your portfolio report
                            </p>
                            <div className="block md:hidden mt-1">
                              <PDFDownloadButton
                                data={investedStartups}
                                user={
                                  userdata?.firstName + "_" + userdata?.lastName
                                }
                                endpoint={process.env.REACT_APP_BASE_URL}
                              />
                            </div>
                          </div>

                          <img
                            className=" w-[120px] md:w-[150px]"
                            src={Cta28}
                          />
                        </div>
                        {/* <button className="   ">
                        DOWNLOAD
                      </button> */}
                        <div className="hidden md:block">
                          <PDFDownloadButton
                            data={investedStartups}
                            user={
                              userdata?.firstName + "_" + userdata?.lastName
                            }
                            endpoint={process.env.REACT_APP_BASE_URL}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link to="/invest">
                      <div className="cta ">
                        <div className="ctaimg bg-[#C0E1F5]">
                          <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                            Explore more startups
                          </label>
                          <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#4A4F53] font-[Inter]">
                            Invest in startups which will revolutionize the
                            world.
                          </p>
                          <div className="flex justify-end mt-12">
                            <img src={Cta11} alt="" />
                          </div>
                        </div>
                        <div className="flex justify-between items-center my-2 mx-5 py-1">
                          <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                            Invest Now
                          </label>
                          <RightCircleOutlined />
                        </div>
                      </div>
                    </Link>
                  )}

                  {investedStartups.length != "0" ? (
                    <div className="hidden lg:flex lg:w-[300px] transform transition-all duration-300 hover:translate-y-[-3px]">
                      <div className="w-[305px] h-[385px] shrink-0 shadow-[0px_1px_30px_0px_rgba(0,0,0,0.15)] rounded-[10px] bg-white p-5">
                        <label className="text-[#646464] text-[16px] not-italic font-normal leading-[normal] font-[Inter]">
                          Percentage by Instrument type
                        </label>
                        <ReactApexChart
                          options={pie2?.options}
                          series={pie2?.series}
                          // series={[{ data: pieChartData }]}
                          type="donut"
                          width="100%"
                          height="400px"
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="lg:hidden">
                  <Updates />
                </div>
              </div>
            </div>
          </div>
          <Footer2 />
          {/* </>
          ) : (
            <Noportfolio />
          )} */}
        </>
      )}
    </>
  );
}

export default Portfolio2;
