import React from "react";
import { Box } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import moment from "moment";
import "moment-timezone";
import masterApi from "../../../../Apis/investor";
import InvestmentDetailsModal from "../../../AdminLayout/investmentDetailsModal";
import Investmentmodal from "./investmentmodal";
import exportFromJSON from "export-from-json";
import { LuDownload } from "react-icons/lu";

function Investor() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [filterval, setfilterval] = useState("");
  const [userdata, setUserData] = useState("");
  const [uniqueCompanyNames, setUniqueCompanyNames] = useState([]);
  // State to track the current page

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

  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "investor";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: user, fileName, exportType });
  };

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

  const detailsrow = users.map((item, index) => {
    return {
      id: index + 1,
      date: moment(item.dateOfpayment).tz("Asia/Kolkata").format("DD-MMM-YY"),
      investorName: item.investorName,
      companyName: item.companyName,
      type: item.type,
      amount:
        Number(item.amountBreakdown?.totalamount) +
        Number(item.amountBreakdown?.convenienceFee) +
        Number(item.amountBreakdown?.gst),
      sharecertificate: item,
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, headerName: "Registrar ID" },
    { field: "date", flex: 1, headerName: "Date" },
    {
      field: "investorName",
      flex: 1,
      hideable: false,
      headerName: "Investor",
    },
    { field: "companyName", flex: 1, headerName: "Company" },
    { field: "type", flex: 1, headerName: "type" },
    { field: "amount", flex: 1, headerName: "amount" },
    {
      field: "sharecertificate",
      flex: 1,
      headerName: "Share Certificate",
      renderCell: (param) => {
        return <Investmentmodal data={param.row} callback={fetchData} />;
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <div className="flex items-center">
          <div>
            <button
              className="flex gap-2 text-[12px] py-[4px] px-[5px] text-[#e0e0e0] items-center"
              onClick={exportDataToCSV}
            >
              {" "}
              <LuDownload size={17} /> EXPORT
            </button>
          </div>
          <select
            className="bg-[#141B2D] h-[40px] w-[170px] px-5 pr-10 rounded-[10px] text-[12px] focus:outline-none"
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
      </GridToolbarContainer>
    );
  }

  return (
    <Box m="20px">
      <Header title="Investors" subtitle="List of All Investor data " />
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
        <div className=" overflow-x-scroll md:overflow-y-hidden   md:w-full ">
          <div className="h-[550px] w-[600px] md:min-w-full  overflow-y-auto ">
            <DataGrid
              rows={detailsrow}
              columns={detailscolumn}
              slots={{
                toolbar: CustomToolbar,
              }}
              pageSizeOptions={[5, 10, 25]}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Investor;
