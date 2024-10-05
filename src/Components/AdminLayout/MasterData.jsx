import React, { useEffect, useState } from "react";
// import Approved from "./Approved";
// import NavFirst from "./NavFirst";
// import Pending from "./Pending";
// import Rejected from "./Rejected";
import { BsSearch } from "react-icons/bs";
import masterApi from "../../Apis/investor";
import ReactPaginate from "react-paginate";
import exportFromJSON from "export-from-json";
import moment from "moment";
import "moment-timezone";
import Investormodal from "./investormodal";
import { ToastContainer } from "react-toastify";

const ITEMS_PER_PAGE = 10;

const INITIAL_STATE = [
  {
    id: "",
    date: " ",
    Investor_Name: "",
    Startup_Name: "",
    Mode: "",
    amount: "",
    Share_Certificate: "",
  },
];
const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};
function truncateInvestorName(fullName) {
  // Check if the investor name contains "("
  const indexOfOpeningParenthesis = fullName?.indexOf(" (");

  // If "(" exists, return the part of the name before it; otherwise, return the full name
  return indexOfOpeningParenthesis !== -1
    ? fullName?.substring(0, indexOfOpeningParenthesis)
    : fullName;
}
const MasterData = () => {
  const [users, setUsers] = useState(INITIAL_STATE);
  const [searchdata, setsearchdata] = useState([]);
  const [filterval, setfilterval] = useState("");
  const [userdata, setUserData] = useState("");
  // State to track the current page
  const [currentPage, setCurrentPage] = useState(0);

  // State to store unique company names for the dropdown filter
  const [uniqueCompanyNames, setUniqueCompanyNames] = useState([]);

  // Calculate the total number of pages
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
      const response = await masterApi.fetchInvestormasterdata();

      if (response.data.code === 200) {
        const data = response.data.data;

        setUsers(response.data.data);
        setsearchdata(response.data.data);
        setUserData(response.data.data);
        //  setStartups(response.data.data.startups);
        //  setInvestors(response.data.data.investors);

        // Extract unique company names from the data
        const uniqueNames = Array.from(
          new Set(data.map((item) => item.companyName))
        );
        setUniqueCompanyNames(uniqueNames);
      }
    } catch (error) {}
  };

  const handleExport = () => {
    // Assuming startsUpdates is an array of objects where each object represents a row in the table
    const exportedData = users.map((rowData) => {
      // Map each row to only the specific columns you want to export
      return {
        Investor_Name: truncateInvestorName(rowData.investorName),
        Company_Name: rowData.companyName,
        date: moment(rowData.dateOfpayment)
          .tz("Asia/Kolkata")
          .format("DD-MMM-YY"),
        Type: rowData.type,
        Legal: rowData.legal,
        amount: rowData.amountBreakdown.amount,
        convenienceFee: rowData.amountBreakdown.convenienceFee,
        gst: rowData.amountBreakdown.gst,
        tds: rowData.amountBreakdown.tds,
        totalamount: rowData.amountBreakdown.totalamount,
        reference: rowData.reference,
        // Add more properties as needed
      };
    });

    // Now 'exportedData' contains only the specific columns you want to export
    console.log("Exported Data: ", exportedData);

    // You can now use 'exportedData' for further processing, like exporting to a file
    // For example, you can use a library like 'xlsx' to export to an Excel file
    const fileName = "Invester";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data: exportedData, fileName, exportType });
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

  const renderUsers = () => {
    const currentPageData = getCurrentPageData();
    return currentPageData?.map((item, index) => {
      return (
        <tr key={item._id}>
          <td className="border-[1px] px-[25px] py-[30px] ">
            {index + 1 + startIndex}
          </td>
          <td className="border-[1px] w-[75px] ">
            {/* {dateRedable(item.dateOfpayment)} */}
            {moment(item.dateOfpayment).tz("Asia/Kolkata").format("DD-MMM-YY")}
          </td>
          <td className="border-[1px] px-[30px]">
            {truncateInvestorName(item.investorName)}
          </td>

          <td className="border-[1px] px-[30px]">{item.companyName}</td>
          <td className="border-[1px] px-[30px]">{item.type}</td>
          <td className="border-[1px] px-[30px]">
            {Number(item.amountBreakdown?.totalamount) +
              Number(item.amountBreakdown?.convenienceFee) +
              Number(item.amountBreakdown?.gst)}
          </td>
          <td className="border-[1px] px-[30px]">
            <Investormodal data={item} callback={fetchData} />
          </td>
        </tr>
      );
    });
  };

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          {Object.keys(INITIAL_STATE[0]).map((key, id) => (
            <th
              key={id}
              className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]"
            >
              {capitalize(key)}
            </th>
          ))}
        </tr>
      </thead>
    );
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setUsers(userdata); // Reset to the original data if the filter is empty
    } else {
      const filterResult = searchdata.filter((item) =>
        item.investorName.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setUsers(filterResult);
    }
    setfilterval(e.target.value);
  };

  // Event handler for the dropdown filter
  const handleCompanyFilter = (e) => {
    const selectedCompany = e.target.value;
    if (selectedCompany === "all") {
      setUsers(userdata); // Show all data if "All" is selected from the dropdown
    } else {
      const filterResult = userdata.filter(
        (item) => item.companyName === selectedCompany
      );
      console.log(filterResult);
      setUsers(filterResult);
    }
  };

  return (
    <>
      <section>
        <div className=" md:ml-[25px]  w-[100%] rounded-[20px]  ">
          <div className="mb-[20px]">
            <div className="flex justify-between items-center  ">
              <div className="relative  w-[60%] text-gray-600 mr-[5px]">
                <input
                  type="search"
                  name="serch"
                  placeholder="Search here"
                  value={filterval}
                  onInput={(e) => handleFilter(e)}
                  className="bg-white h-[40px] w-full px-5 pr-10  rounded-[10px] text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-[12px] top-[10px] "
                >
                  <div className="h-4 w-4 fill-current ">
                    <BsSearch />
                  </div>
                </button>
              </div>
              <div className="w-[20%] mx-[7px]">
                <div className="w-full">
                  <select
                    className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                    onChange={handleCompanyFilter}
                  >
                    <option value="all">All Companies</option>
                    {uniqueCompanyNames.map((company, index) => (
                      <option key={index} value={company}>
                        {company}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-[20%]  ml-[5px]">
                <div>
                  <button
                    onClick={handleExport}
                    className="bg-[#202054] text-[#ffffff] md:px-6 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                  >
                    <h4 className="px-[30px]"> Export</h4>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="  bg-white  w-[100%] md:rounded-[20px]  pb-[25px] ">
            <div className="px-[20px] py-[20px]  ">
              <div className="w-[100%] overflow-x-auto">
                <table className="w-[100%] text-start">
                  {renderHeader()}
                  <tbody>{renderUsers()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeclassname={"active"}
          />
        </div>
      </section>
    </>
  );
};

export default MasterData;
