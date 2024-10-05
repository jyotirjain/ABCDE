import React, { useEffect, useState } from "react";
import masterApi from "../../../../Apis/investor";
import adminApi from "../../../../Apis/admin";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";

function Redeem() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);

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
  const detailsrow = users.map((item, index) => {
    return {
      id: index + 1,
      name: item.AcceleratorDetails?.name,
      email: item.userDetails?.email,
      totalcommission: item.totalCommission,
      redeemable: item.redemable,
      redeem: item.amount,
      details: "",
      action: "",
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, width: 100, headerName: "Registrar ID" },
    { field: "name", flex: 1, width: 100, headerName: "Name" },
    { field: "email", flex: 1, width: 100, headerName: "Email" },
    {
      field: "totalcommission",
      flex: 1,
      width: 100,
      headerName: "Total Commission",
    },
    { field: "redeemable", flex: 1, headerName: "Redeemable Commission" },
    { field: "redeem", flex: 1, headerName: "Redeem" },
    { field: "details", flex: 1, headerName: "Details" },
    { field: "action", flex: 1, headerName: "Action" },
  ];

  return (
    <Box m="20px">
      <Header
        title="Redeem"
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
        <div className=" overflow-x-scroll md:overflow-x-auto  md:w-full ">
          <div className="h-[550px] w-[600px] md:min-w-full">
            <DataGrid
              rows={detailsrow}
              columns={detailscolumn}
              components={{ Toolbar: GridToolbar }}
              pageSizeOptions={[5, 10, 25]}
              sx={{ width: "100%" }}
            />
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Redeem;
