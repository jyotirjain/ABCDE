import React, { useEffect, useState } from "react";
import API from "../../Apis/startupApis";
import masterApi from "../../Apis/investor";
import axios from "axios";
import moment from "moment";
import "moment-timezone";

const Main = () => {
  const [totalStartups, setTotalStartups] = useState(0);
  const [totalInvestors, setTotalInvestors] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [usersWithKyc, setUsersWithKyc] = useState(0);

  const dataList = [
    {
      id: 1,
      no: totalUsers,
      text: "Total Number of Users ",
    },
    {
      id: 2,
      no: totalStartups,
      text: "No. of Startup",
    },
    {
      id: 3,
      no: totalInvestors,
      text: "No. of Invester",
    },
    {
      id: 4,
      no: usersWithKyc,
      text: "No. of Kyc Completed  Users",
    },
  ];

  const [tableData, setTableData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    getData();

    getTotalUsers();
  }, []);

  const getData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup`
      );
      if (res.status === 200 && res.data?.data?.data) {
        const data = res.data.data.data;
        const filteredData = data.filter((item) => item.status === "accepted"); // Filter items with status "accepted"
        const formattedData = filteredData.map((item) => ({
          label: item.registeredCompanyName,
          amount: item.totalRaised,
          createdAt: item.created_at,
        }));
        formattedData.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setTableData(formattedData);
        setTotalStartups(data.length);
      }
    } catch (error) {
      // Handle error if needed
    }
  };



  const getTotalUsers = () => {
    axios
      .get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/investors`
      )
      .then((res) => {
        if (res.status === 200 && res.data?.data?.data) {
          const data = res.data.data.data;

          setTotalUsers(data.length); // Set the total number of users (investors) in state
          const investorsWithInvestment = data.filter(
            (investor) => investor.investment === "yes"
          );

          setTotalInvestors(investorsWithInvestment.length);
          const usersWithKycData = data.filter(
            (item) =>
              item.aadhar.status === "verified" &&
              item.pan.status === "verified" &&
              item.bank.status === "verified"
          );
          setUsersWithKyc(usersWithKycData.length);
        }
      })
      .catch((error) => {
        // Handle error if needed
      });
  };

  const totalPages = Math.ceil(tableData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Logic to get the current items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tableData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section>
        <div className="md:ml-[25px]  w-[100%] rounded-[20px]">
          <div className="mb-[20px]">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div className="relative md:w-[70%] w-full text-gray-600 md:mr-[5px] mb-[10px] md:mb-0">
                <input
                  type="search"
                  name="search"
                  placeholder="Search here"
                  className="bg-white h-[40px] w-full md:w-[100%] px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-[12px] top-[10px]"
                >
                  <div className="h-4 w-4 fill-current "></div>
                </button>
              </div>
              <div className="w-[100%] md:w-[20%] mx-[7px]">
                <div className="w-full">
                  <input
                    type="filter"
                    className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                  />
                </div>
              </div>
              <div className="w-[100%] md:w-[20%] ml-[5px] mt-[10px] md:mt-0">
                <div>
                  <button className="bg-[#202054] text-[#ffffff] md:px-6 md:py-[7px] py-[9px] px-8  rounded-[10px] hover:bg-black duration-200">
                    <h4 className="px-2 md:px-4">Export</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="  bg-white h-[850px]  w-[100%] md:rounded-[20px]  ">
            <div className="md:px-[35px] px-[15px] py-[40px] grid grid-cols-3 gap-4 ">
              {dataList.map((item, id) => (
                <div
                  key={id}
                  className="rounded-[7.3px] border-[2px] bg-[#F0D9FF] flex justify-center items-center h-[103.2px] cursor-pointer	"
                >
                  <div className="text-center  ">
                    <h4 className="font-[500] text-[20.24px] leading-[23.71px] text-[#252525] mb-[5px]">
                      {item.no}
                    </h4>
                    <div>
                      <p className="font-[400] font-[Inter] leading-[24px]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white  w-[100%] md:rounded-[20px] mt-6 px-4 py-2">
              <h2 className="text-xl font-bold mb-4">
                Company and Amount Table
              </h2>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-400 px-4 py-2">
                      Company
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Raised Amount
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Created At
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((item, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-4 py-2">
                        {item.label}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {item.amount}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {moment(item.createdAt)
                          .tz("Asia/Kolkata")
                          .format("DD-MMM-YY")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Pagination buttons */}
              <div className="flex justify-center mt-4">
                <button
                  className="bg-gray-300 text-gray-600 py-2 px-4 rounded-l"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  Previous
                </button>
                <button
                  className="bg-gray-300 text-gray-600 py-2 px-4 rounded-r"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
