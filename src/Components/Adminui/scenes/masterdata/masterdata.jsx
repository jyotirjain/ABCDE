import React from "react";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarExport,
  GridFilterOperator,
  GridToolbarQuickFilter,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import "moment-timezone";
import investor from "../../../../Apis/investor";
import axios from "axios";
import {
  BsCheckSquareFill,
  BsFillExclamationCircleFill,
  BsSearch,
} from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import Masterdatamodal from "./masterdatamodal";

import exportFromJSON from "export-from-json";
import { LuDownload } from "react-icons/lu";

function Masterdata() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  const [originalUsers, setOriginalUsers] = useState([]); // Initialize this with your data
  const [tableData, setTableData] = useState(users);
  const [dateFilter, setDateFilter] = useState();
  const [customStartDate, setCustomStartDate] = useState();
  const [customEndDate, setCustomEndDate] = useState();

  // State to track the current page

  useEffect(() => {
    // setUserData();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/investors`)
        .then((res) => {
          const data = res.data.data.data;
          setUsers(data);
          setOriginalUsers(data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {}
  };
  const handleFilter = (e) => {
    const value = e.target.value;
    setFilterValue(value);
    applyFilter();
  };
  const applyFilter = () => {
    let filteredData = originalUsers;

    if (filterValue === "complete") {
      filteredData = originalUsers.filter(
        (item) =>
          item.aadhar.status === "verified" &&
          item.pan.status === "verified" &&
          item.bank.status === "verified"
      );
    } else if (filterValue === "incomplete") {
      filteredData = originalUsers.filter(
        (item) =>
          item.aadhar.status === "pending" &&
          item.pan.status === "pending" &&
          item.bank.status === "pending"
      );
    } else if (filterValue === "invested") {
      filteredData = originalUsers.filter((item) => item.investment === "yes");
    } else if (filterValue === "not_invested") {
      filteredData = originalUsers.filter((item) => item.investment === "no");
    } else {
      filteredData = originalUsers;
    }

    setUsers(filteredData); // Update the state with filtered data
  };

  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "Masterdata";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: user, fileName, exportType });
  };

  console.log(tableData);

  const handleDateFilter = (e) => {
    const value = e.target.value;
    setDateFilter(value);
    applyDateFilter(value, customStartDate, customEndDate);
  };

  const applyDateFilter = (dateFilter, customStartDate, customEndDate) => {
    const currentDate = moment();

    let filteredData = originalUsers;

    if (dateFilter === "today") {
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isSame(currentDate, "day")
      );
    } else if (dateFilter === "last7days") {
      const last7Days = moment().subtract(7, "days");
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isAfter(last7Days)
      );
    } else if (dateFilter === "thismonth") {
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isSame(currentDate, "month")
      );
    } else if (dateFilter === "lastmonth") {
      const lastMonth = moment().subtract(1, "month");
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isSame(lastMonth, "month")
      );
    } else if (dateFilter === "custom") {
      if (customStartDate && customEndDate) {
        filteredData = originalUsers.filter((item) =>
          moment(item.created_at).isBetween(
            moment(customStartDate).startOf("day"),
            moment(customEndDate).endOf("day")
          )
        );
      }
    }

    setUsers(filteredData);
  };

  const handleCustomDateChange = (date, isStartDate) => {
    if (isStartDate) {
      setCustomStartDate(date);
    } else {
      setCustomEndDate(date);
    }
    applyDateFilter(dateFilter, customStartDate, customEndDate);
  };

  const detailsrow = users
    .filter((item) => {
      if (filterValue === "") {
        return true;
      } else if (filterValue === "complete") {
        return (
          item.aadhar.status === "verified" &&
          item.pan.status === "verified" &&
          item.bank.status === "verified"
        );
      } else if (filterValue === "incomplete") {
        return (
          item.aadhar.status === "pending" &&
          item.pan.status === "pending" &&
          item.bank.status === "pending"
        );
      } else if (filterValue === "invested") {
        return item.investment === "yes";
      } else if (filterValue === "not_invested") {
        return item.investment === "no";
      } else {
        return false;
      }
    })
    .map((item, index) => {
      return {
        id: index + 1,
        date: moment(item.created_at).tz("Asia/Kolkata").format("DD-MMM-YY"),
        name: item.firstName + " " + item.lastName,

        email: item.email,
        phone: item.phone ? item.phone : "Not Available",
        kyc: item,
        invested: item?.investment ? item?.investment : "NA",
        details: item,
      };
    });

  const detailscolumn = [
    { field: "id", flex: 1, headerName: "Registrar ID" },
    { field: "date", flex: 2, headerName: "Date" },
    {
      field: "name",
      flex: 2,

      hideable: false,
      headerName: "Full Name",
    },

    { field: "email", flex: 2, headerName: "email" },
    { field: "phone", flex: 2, headerName: "phone" },
    {
      field: "kyc",
      flex: 1,
      headerName: "KYC Status",
      renderCell: (param) => {
        return (
          <>
            {param.row.kyc.aadhar.status === "verified" &&
            param.row.kyc.pan.status === "verified" &&
            param.row.kyc.bank.status === "verified" ? (
              <BsCheckSquareFill size={20} color="#008400" />
            ) : (param.row.kyc.aadhar.status === "verified" ||
                param.row.kyc.pan.status === "verified" ||
                param.row.kyc.bank.status === "verified") &&
              !(
                param.row.kyc.aadhar.status === "pending" &&
                param.row.kyc.pan.status === "pending" &&
                param.row.kyc.bank.status === "pending"
              ) ? (
              <BsFillExclamationCircleFill size={20} color="#E94E0B" />
            ) : param.row.kyc.aadhar.status === "pending" &&
              param.row.kyc.pan.status === "pending" &&
              param.row.kyc.bank.status === "pending" ? (
              <GiCancel size={20} color="#F70000" />
            ) : null}
          </>
        );
      },
    },
    {
      field: "invested",
      flex: 1,
      headerName: "Invested",
    },
    {
      field: "details",
      flex: 1,
      headerName: "Details",
      renderCell: (params) => {
        return <Masterdatamodal data={params.row} />;
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <div className="flex-wrap w-full md:flex md:flex-row items-center">
          <div className="w-fit">
            <button
              className="flex gap-2 text-[12px] py-[4px] px-[5px] text-[#e0e0e0] items-center"
              onClick={exportDataToCSV}
            >
              {" "}
              <LuDownload size={17} /> EXPORT
            </button>
          </div>
          <select
            value={filterValue}
            onChange={handleFilter}
            className="   bg-[#141B2D]  px-5 pr-10 rounded-[10px] text-[12px] flex items-center h-[30px] focus:outline-none text-[#e0e0e0]"
          >
            <option value="">Default</option>
            <option value="complete">KYC Complete</option>
            <option value="incomplete">KYC Incomplete</option>
            <option value="invested">Invested</option>
            <option value="not_invested">Not Invested</option>
          </select>
          <div className="flex items-center h-[30px] md:w-[20%] ">
            <div className="w-full">
              <select
                value={dateFilter}
                onChange={handleDateFilter}
                className="bg-[#141B2D] flex items-center   px-5 pr-10 rounded-[10px] text-[11] text-[#e0e0e0] focus:outline-none"
                placeholder="select date"
              >
                <option value="">Select Date Filter</option>
                <option value="today">Today</option>
                <option value="last7days">Last 7 days</option>
                <option value="thismonth">This Month</option>
                <option value="lastmonth">Last Month</option>
                <option value="custom">Custom date range</option>
              </select>
            </div>
          </div>

          {dateFilter === "custom" && (
            <div className="w-[170px] md:w-[20%] mx-[7px]">
              <div className="w-full">
                <input
                  type="date"
                  value={customStartDate}
                  onChange={(e) => handleCustomDateChange(e.target.value)}
                  className="  bg-[#141B2D] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                />
              </div>
            </div>
          )}
          {dateFilter === "custom" && (
            <div className="w-[170px] md:w-[20%] mx-[7px]">
              <div className="w-full">
                <input
                  type="date"
                  value={customEndDate}
                  onChange={(e) => handleCustomDateChange(e.target.value)}
                  className="bg-[#141B2D]  w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                />
              </div>
            </div>
          )}
        </div>
      </GridToolbarContainer>
    );
  }

  return (
    <Box m="20px">
      <Header title="MasterData" subtitle="List of all User data" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <div className=" overflow-x-scroll md:overflow-x-auto   md:w-full ">
          <div className="h-[550px] w-[600px] md:min-w-full">
            <DataGrid
              rows={detailsrow}
              columns={detailscolumn}
              slots={{
                toolbar: CustomToolbar,
              }}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Masterdata;
