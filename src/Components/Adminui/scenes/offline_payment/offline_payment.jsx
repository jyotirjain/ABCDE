import React from "react";
import { Box, Button } from "@mui/material";
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
import axios from "axios";
import API from "../../../../Apis/startupApis";
import paymentApi from "../../../../Apis/payment";
import masterApi from "../../../../Apis/investor";
import Offline_payment_modal from "./offline_payment_modal";
import Offline_details from "./offline_details";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import exportFromJSON from "export-from-json";
import { LuDownload } from "react-icons/lu";

function Offline_payment() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [startups, setStartups] = useState(null);
  const [investors, setInvestors] = useState(null);
  const [pendingPayment, setPendingPayment] = useState([]);

  const fetchData = async () => {
    try {
      const response = await API.fetchStartupAndInvestor();

      if (response.code === 200) {
        setStartups(response.data.data.startups);
        setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };

  const handleOfflinePayment = async (amountBreakdown) => {
    try {
      // const response = await API.fetchStartupById({refId:startData})
      //
      //
      //  setstartups(response.data.data);
      const paymentdata = {
        order_amount: amountBreakdown.totalAmount,
        order_currency: "INR",
        order_note: "Test order",
        customer_id: amountBreakdown.selectedInvestor,
        customer_name: amountBreakdown.name,
        dateOfpayment: amountBreakdown.dateOfpayment,
        customer_email: "",
        customer_phone: "",
        startupId: amountBreakdown.selectedStartup,
        amount: amountBreakdown.totalAmount,
        reference: amountBreakdown.reference,
        convenienceFee: 0,
        tds: 0,
        gst: 0,
      };

      // alert(paymentdata);

      const response = await paymentApi.createOfflineOrderAdmin(paymentdata);
      //
      //
      if (response.data.code === 200 && response.data.data.order_id) {
        fetchOfflinePayment();
        // alert("Investment Successfull");
      }
    } catch (error) {}
  };

  async function handleApprovedClick(id) {
    const data = {
      id: id,
      action: "accepted",
    };
    const res = await paymentApi.offlinePaymentVerify(data);

    if (res.code === 200) {
      fetchOfflinePayment();
    }
  }

  async function handleRejectClick(id) {
    const data = {
      id: id,
      action: "rejected",
    };
    const res = await paymentApi.offlinePaymentVerify(data);

    if (res.code === 200) {
      fetchOfflinePayment();
    }
  }

  useEffect(() => {
    // setUserData();
    fetchData();
    fetchOfflinePayment();
  }, []);

  const fetchOfflinePayment = async () => {
    try {
      const response = await masterApi.fetchInvestorOfflinePayment();

      if (response.data.code === 200) {
        setPendingPayment(response.data.data);
        //  setStartups(response.data.data.startups);
        //  setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };

  const detailsrow = pendingPayment.map((item, index) => {
    return {
      id: index + 1,
      date: moment(item.dateOfpayment).tz("Asia/Kolkata").format("DD-MMM-YY"),
      name: item.investorName,
      company: item.companyName,
      amount:
        Number(item.amountBreakdown?.totalamount) +
        Number(item.amountBreakdown?.convenienceFee) +
        Number(item.amountBreakdown?.gst),
      details: item,
      action: item,
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, width: 100, headerName: "Registrar ID" },
    { field: "date", flex: 1, width: 350, headerName: "Date" },
    { field: "name", flex: 2, headerName: "Name" },
    { field: "company", flex: 1, headerName: "Company Name" },
    { field: "amount", flex: 1, headerName: "Amount" },
    {
      field: "details",
      flex: 1,
      headerName: "Details",
      renderCell: (param) => {
        return (
          <Offline_details
            data={param.row}
            handleApprovedClick={handleApprovedClick}
            handleRejectClick={handleRejectClick}
          />
        );
      },
    },
    {
      field: "action",
      flex: 1,
      headerName: "Action",
      renderCell: (param) => {
        console.log(param.row.action);
        return (
          <div className="flex gap-2">
            {param.row.action.status === "pending" ? (
              <>
                <AiFillCheckCircle
                  className="cursor-pointer"
                  size={25}
                  color="#38B737"
                  onClick={() => handleApprovedClick(param.row.action._id)}
                />
                <MdCancel
                  className="cursor-pointer"
                  size={25}
                  color="#F60000"
                  onClick={() => handleRejectClick(param.row.action._id)}
                />
                {/* <Button
                  variant="contained"
                  onClick={() => handleApprovedClick(param.row.action._id)}
                  sx={{
                    background: "#90CAF9",
                    ":hover": {
                      bgcolor: "#42A5F5",
                    },
                  }}
                >
                  Approved
                </Button>

                <Button
                  variant="contained"
                  onClick={() => handleRejectClick(param.row.action._id)}
                  sx={{
                    background: "#90CAF9",
                    ":hover": {
                      bgcolor: "#42A5F5",
                    },
                  }}
                >
                  Reject
                </Button> */}
              </>
            ) : (
              <div>
                <h4>{param.row.action.status}</h4>
              </div>
            )}
          </div>
        );
      },
    },
  ];
  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "Offline_payment";
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
        title="Offline Payment"
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
        <Offline_payment_modal
          callback={handleOfflinePayment}
          startups={startups}
          investors={investors}
        />
        <div className=" overflow-x-scroll md:overflow-x-auto md:w-full ">
          <div className="h-[550px] w-[1000px] md:min-w-full">
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

export default Offline_payment;
