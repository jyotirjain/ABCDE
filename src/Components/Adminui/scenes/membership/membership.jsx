import React, { useEffect, useState } from "react";
import API from "../../../../Apis/startupApis";
import ApiMember from "../../../../Apis/investor";
import masterApi from "../../../../Apis/investor";
import moment from "moment";
import "moment-timezone";
import { Box, Chip } from "@mui/material";
import {
  DataGrid,
  GridToolbar,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import Membershipmodal from "./membershipmodal";
import exportFromJSON from "export-from-json";
import { LuDownload } from "react-icons/lu";

function Membership() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);

  const [startups, setStartups] = useState(null);
  const [investors, setInvestors] = useState(null);
  const [premiumMembers, setPremiumMembers] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.fetchStartupAndInvestor();

      if (response.code === 200) {
        setStartups(response.data.data.startups);
        setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };

  const fetchMembers = async () => {
    try {
      const response = await masterApi.premiumMember();
      console.log("response");
      console.log(response);
      if (response.data.code === 200) {
        setPremiumMembers(response.data.data);
        //  setStartups(response.data.data.startups);
        //  setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };

  const handleMember = async (memberBreakdown) => {
    try {
      console.log(memberBreakdown);
      // const paymentdata = {
      //   order_amount: amountBreakdown.totalAmount,
      //   order_currency: "INR",
      //   order_note: "Test order",
      //   customer_id: amountBreakdown.selectedInvestor,
      //   customer_name: amountBreakdown.name,
      //   dateOfpayment: amountBreakdown.dateOfpayment,
      //   customer_email: "",
      //   customer_phone: "",
      //   startupId: amountBreakdown.selectedStartup,
      //   amount: amountBreakdown.totalAmount,
      //   reference: amountBreakdown.reference,
      //   convenienceFee: 0,
      //   tds: 0,
      //   gst: 0,
      // };
      const memberData = {
        refId: memberBreakdown.selectedInvestor,
        startdate: memberBreakdown.startdate,
        enddate: memberBreakdown.enddate,
        amount: memberBreakdown.amount,
      };

      const response = await ApiMember.getMembership(memberData);
      console.log(response);
      fetchMembers();
      // if (response.data.code === 200 && response.data.data.order_id) {
      // fetchOfflinePayment();
      // }
    } catch (error) {}
  };

  useEffect(() => {
    // setUserData();
    fetchData();
    fetchMembers();
    // fetchOfflinePayment();
  }, []);

  const detailsrow = premiumMembers.map((item, index) => {
    return {
      id: index + 1,
      name: item.firstName + " " + item.lastName,
      startdate: moment(item?.membership.startDate).utc().format("DD-MMM-YY"),
      enddate: moment(item?.membership.endDate).utc().format("DD-MMM-YY"),
      amount: item?.membership.amount,
      status: item,
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, headerName: "Registrar ID" },
    { field: "name", flex: 2, headerName: "Name" },
    { field: "startdate", flex: 2, headerName: "Start Date" },
    { field: "enddate", flex: 2, headerName: "End Date" },
    { field: "amount", flex: 2, headerName: "Amount" },
    {
      field: "status",
      flex: 2,
      headerName: "Status",
      renderCell: (param) => {
        console.log("param", param.row);
        return (
          <>
            {new Date(param.row?.status?.membership?.endDate).getTime() >
            Date.now() ? (
              <Chip variant="outlined" color="success" label="Active" />
            ) : (
              <Chip variant="outlined" color="error" label="Expired" />
            )}
          </>
        );
      },
    },
  ];

  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "Membership";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: user, fileName, exportType });
  };

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
        </div>
      </GridToolbarContainer>
    );
  }

  return (
    <Box m="20px">
      <Header
        title="Membership"
        // subtitle="List of Contacts for Future Reference"
      />
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
        <Membershipmodal
          callback={handleMember}
          startups={startups}
          investors={investors}
        />

        <div className=" overflow-x-scroll md:overflow-x-auto   md:w-full ">
          <div className="h-[550px] w-[600px] md:min-w-full">
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

export default Membership;
