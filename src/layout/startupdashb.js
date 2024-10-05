import React, { useEffect, useRef, useState, useMemo } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Raised from "../Components/dashboardstr/raised";
import demo from "./demodata.json";
import "../assets/css/styles.css";
import Cta12 from "../assets/images/cta/cta12.png";
import { SlArrowRightCircle } from "react-icons/sl";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Table from "./table";
import API from "../Apis/investor";
import { useTable, usePagination } from "react-table";
import { dateRedable } from "../script/helper";
import Footer2 from "../Components/Footer2/Footer2";
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
function Startupdashb() {
  const navigate = useNavigate();
  const [datas, setdata] = useState(demo);
  localStorage.getItem("StartupuserID");
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  // const [startupdata, setStartupData] = useState(
  //   JSON.parse(localStorage.getItem("authDataInvestor"))
  // );
  const [totalInvestment, setMyTotalInvestment] = useState(0.0);

  const [investors, setInvestedStartups] = useState([
    {
      id: 1,
      Date: "15/02/23",
      Invester: "Aditya N",
      Mode: "Offline",
      Amount: "30000",
    },
  ]);
  const [startup, setStartups] = useState([
    {
      logo: "",
      registeredCompanyName: "",
      shortDescription: "",
      tags: "",
      colour: "#F0D9FF",
    },
  ]);

  const fetchData = async () => {
    try {
      const response2 = await API.getStartupPortfolio({
        id: refId,
      });
      //
      //
      setStartups(response2.startup);
      setInvestedStartups(response2.investors);
      // setMyTotalInvestment(response2.totalInvestment[0].totalamount);
      //
      //
      // setInvestedStartups(response2.investedStartupDetails);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAction = (id) => {};

  const columns = [
    {
      Header: "Index",
      accessor: (row, index) => index + 1,
    },
    {
      Header: "Date",
      accessor: "createdAt",
      Cell: ({ value }) => dateRedable(value),
    },
    {
      Header: "Investor",
      accessor: "investorName",
    },
    {
      Header: "Mode",
      accessor: "type",
    },
    {
      Header: "Amount",
      accessor: "amountBreakdown.amount",
    },
    {
      Header: "Action",
      Cell: ({ row }) => (
        <button onClick={() => handleAction(row.original._id)}>Action</button>
      ),
    },
  ];

  const data1 = [
    {
      id: 1,
      date: "15/02/23",
      investor: "Aditya N",
      mode: "Offline",
      amount: "30000",
    },
    {
      id: 2,
      date: "15/02/23",
      investor: "Aditya N",
      mode: "Offline",
      amount: "30000",
    },
    {
      id: 3,
      date: "15/02/23",
      investor: "Aditya N",
      mode: "Offline",
      amount: "30000",
    },
    // and so on
  ];

  return (
    <div>
      <Navbar />
      <div className="startupdash bg-[#f5f5f5] p-4 md:p-6 xl:p-12 ">
        <Raised data={startup} />
        <div className="flex flex-col gap-y-8 sm:flex sm:flex-row w-[100%] md:max-w-[1300px] mt-8 gap-x-8">
          <div className="dashboardcta w-[100%]">
            <div className="dashboardcta2 bg-[#DAD3FF] flex justify-center items-center ">
              <label>{startup.totalRaised}</label>
            </div>
            <Link>
              <div className="flex justify-between items-center my-2  mx-5 ">
                <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                  Raised Amount
                </label>
                <div className="iicon md:block hidden text-[#828F99]  cursor-pointer  ml-2 relative">
                  <div className="tooltip right-2 ">
                    The total amount raised by our investor community.
                  </div>
                  <AiOutlineInfoCircle className="w-[25px] h-[25px]" />
                </div>
              </div>
            </Link>
          </div>
          <div className="dashboardcta w-[100%]">
            <div className="dashboardcta2 bg-[#DAD3FF] flex justify-center items-center ">
              <label>{startup.dealTerms?.targetAmount}</label>
            </div>
            <Link>
              <div className="flex justify-between items-center my-2 mx-5 ">
                <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                  Target Amount
                </label>
                <div className="iicon md:block hidden text-[#828F99]  cursor-pointer  ml-2 relative">
                  <div className="tooltip right-2 ">
                    The total amount which you are willing to raise.
                  </div>
                  <AiOutlineInfoCircle className="w-[25px] h-[25px]" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full md:max-w-[1300px]">
          <div>
            <div className="flex gap-x-16">
              <div className="w-[100%] xl:w-[74%]">
                <div className="mid my-4">
                  <h2>Investor Data</h2>
                  <button>Export</button>
                </div>
                <div></div>
                <div className="exportfile px-3 py-2 sm:px-5 sm:py-2">
                  <div className="export">
                    {/* <table className="box-border w-[100%] h-[227px] border shadow-[0px_1px_3px_rgba(0,0,0,0.25)] rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#252525]">
                      <thead className="box-border border rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#f7f7f7]">
                        <tr>
                          <th>Sr</th>
                          <th>Date</th>
                          <th>Name of Investor</th>
                          <th>Mode of Payment</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        {investors.map((current) => (
                          <tr key={current._id}>
                            <td className=" text-[#252525] ">{current.id}</td>
                            <td>{current.createdAt}</td>
                            <td>{current.investorName}</td>
                            <td>{current.type}</td>
                            <td>{current.amountBreakdown.amount}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table> */}

                    <div className="w-full overflow-x-auto md:overflow-hidden">
                      <Table data={investors} columns={columns} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="cards hidden xl:flex xl:flex-col xl:gap-y-8  xl:w-[20%]">
                <Link to="/startup/profile/">
                  <div className="cta mt-[70px] ">
                    <div className="ctaimg bg-[#e6b07b]">
                      <label className=" not-italic font-normal text-base leading-[19px] text-[#ffffff] font-[Inter]">
                        Go to Profile page
                      </label>
                      <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                        You can edit this page for content
                      </p>
                      <div className="flex justify-end mt-14">
                        <img src={Cta12} />
                      </div>
                    </div>
                    <div className="flex justify-between items-center py-2 mx-5">
                      <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                        Profile page
                      </label>
                      <SlArrowRightCircle />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Startupdashb;
