import React, { useEffect, useState } from "react";

import { BsSearch } from "react-icons/bs";
import masterApi from "../../Apis/investor";
import adminApi from "../../Apis/admin";
import ReactPaginate from "react-paginate";
import exportFromJSON from "export-from-json";
import moment from 'moment'; import 'moment-timezone'; 
import RedeemDatamodel from "./redeemDatamodel";

const ITEMS_PER_PAGE = 10;

const INITIAL_STATE = [
  {
    id: "",
    date: " ",
    Investor_Name: "",
    Company_Name: "",
    Mode: "",
    amount: "",
  },
];

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

const Redeem = () => {
  const [users, setUsers] = useState(INITIAL_STATE);
  const [searchdata, setsearchdata] = useState([]);
  const [filterval, setfilterval] = useState("");
  const [userdata, setUserData] = useState([]);

  // State to track the current page

  const [currentPage, setCurrentPage] = useState(0);

  // State to store unique company names for the dropdown filter
  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  // Calculate the starting and ending index of the current page
  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  useEffect(() => {
    // setUserData();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await masterApi.fetchRequestedReedem();

      if (response.data.code === 200) {
        const data = response.data.data;

        setUsers(response.data.data);
        setsearchdata(response.data.data);
        setUserData(response.data.data);
        //  setStartups(response.data.data.startups);
        //  setInvestors(response.data.data.investors);

        // Extract unique company names from the data
        // const uniqueNames = Array.from(
        //   new Set(data.map((item) => item.companyName))
        // );
        // setUniqueCompanyNames(uniqueNames);
      }
    } catch (error) {}
  };

  const exportDataToCSV = () => {
    const fileName = "Invester";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data: users, fileName, exportType });
  };

  // Function to get the current page's data
  const getCurrentPageData = () => {
    return users.slice(startIndex, endIndex);
  };

  // Event handler for page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleActiveStatus = async (id, action) => {
    const data = {
      id: id,
      action: action,
    };

    const res = await adminApi.withdraw_status(data);

    console.log("🚀 ~ file: Redeem.jsx:96 ~ handleActiveStatus ~ res:", res);

    // fetchData();

    if (res.code === 200) {
      fetchData();

    }
  };

  return (
    <div className="bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px] ">
      <div className="md:px-[20px] px-[15px] py-[20px] ">
        <div className="w-[100%]">
          <div className="w-[100%] ">
            <div className=" overflow-x-auto">
              <table border="1" className="w-[100%] text-start ">
                <thead>
                  <tr>
                    <th className="py-[30px] px-[30px] border-[1px]">Id</th>
                    <th className="px-[15px] py-[30px] border-[1px]">Name </th>
                    <th className="px-[10px] py-[30px] border-[1px]">Email</th>
                    <th className="px-[15px] py-[30px] border-[1px]">
                      Total Commission
                    </th>
                    <th className="px-[15px] py-[30px] border-[1px]">
                      Redeemable Commission
                    </th>
                    <th className="px-[15px] py-[30px] border-[1px]">Redeem</th>
                    <th className="px-[15px] py-[30px] border-[1px]">Status</th>
                    <th className="px-[15px] py-[30px] border-[1px]">View</th>
                  </tr>
                </thead>
                <tbody>
                  {userdata?.map((tdata, i) => (
                    <tr>
                      <td className="border-[1px] px-[25px]">{i + 1}</td>
                      <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                        {tdata.AcceleratorDetails?.name}
                      </td>
                      <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                        {tdata.userDetails?.email}
                        {/* email */}
                      </td>
                      <td className="border-[1px] px-[20px]">
                      {tdata.totalCommission}
                      </td>
                      
                      
                      <td className="border-[1px] px-[20px]">
                      {tdata.redemable}
                      </td>


                      <td className="border-[1px] px-[20px]">{tdata.amount}</td>
                      <td className="border-[1px] px-[20px] ">
                       {tdata.status == "pending"?
                        <>
                          <div className="bg-[#202054] text-[#ffffff] mx-[5px] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                            <h4
                              className="px-[25px] text-[11.2px]"
                              onClick={() => handleActiveStatus(tdata._id , "approve")}
                            >
                              Accept
                            </h4>
                          </div>

                          <div className="bg-[#202054] text-[#ffffff] mx-[5px] md:px-1 mt-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                            <h4
                              className="px-[25px] text-[11.2px]"
                              onClick={() => handleActiveStatus(tdata._id , "rejected")}
                            >
                              Reject
                            </h4>
                          </div>
                        </>
                        :tdata.status == "approve"?
                        "Approve":
                        "Rejected"
                       }
                      </td>
                      <td className="flex justify-between items-center py-[25px] border-[1px] px-[20px]">
                        <RedeemDatamodel
                          mData={tdata}
                          callback={handleActiveStatus}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-[50px]">
              <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                // onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeclassname={"active"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Redeem;
