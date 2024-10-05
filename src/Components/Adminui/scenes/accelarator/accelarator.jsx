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
import Accelaratormodal from "./accelaratormodal";
import { LuDownload } from "react-icons/lu";
import exportFromJSON from "export-from-json";

function Accelarator() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [filterval, setfilterval] = useState("");
  const [userdata, setUserData] = useState("");
  // State to track the current page

  useEffect(() => {
    // setUserData();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/accelerator/list`)
        .then((res) => {
          setUsers(res.data.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {}
  };

  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "Accelarator";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: user, fileName, exportType });
  };

  const detailsrow = users.map((item, index) => {
    return {
      id: index + 1,

      name: item.name,
      email: item.AcceleratorInfo.email,
      phone: item.AcceleratorInfo.phone,
      gender: item.AcceleratorInfo.gender,
      referralno: item.referal_code,
      commissionrate: `Investor ${
        item.rate?.length > 0
          ? item.rate[item.rate.length - 1].investorRate
          : "N/A"
      } / Startup ${
        item.rate?.length > 0
          ? item.rate[item.rate.length - 1].startupRate
          : "N/A"
      }`,
      commission: item,
      action: "",
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, width: 100, headerName: "Registrar ID" },
    { field: "name", flex: 2, headerName: "Name" },
    {
      field: "email",
      flex: 2,
      headerName: "email",
    },
    {
      field: "phone",
      flex: 2,
      headerName: "Phone",
    },
    {
      field: "gender",
      flex: 1,
      headerName: "Gender",
    },
    { field: "referralno", flex: 2, headerName: "Referral no" },
    { field: "commissionrate", flex: 2, headerName: "Commission Rate" },
    {
      field: "commission",
      flex: 1.5,
      headerName: "Commission",
      renderCell: (param) => {
        return <Accelaratormodal data={param.row} />;
      },
    },
    {
      field: "action",
      flex: 1.5,
      headerName: "Action",
      renderCell: (param) => {
        return (
          <>
            <Button
              sx={{
                background: "#90CAF9",
                ":hover": {
                  bgcolor: "#42A5F5",
                },
              }}
            >
              Delete
            </Button>
          </>
        );
      },
    },
  ];

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />

        <div className="w-fit">
          <button
            className="flex gap-2 text-[12px] py-[4px] px-[5px] text-[#e0e0e0] items-center"
            onClick={exportDataToCSV}
          >
            {" "}
            <LuDownload size={17} /> EXPORT
          </button>
        </div>
      </GridToolbarContainer>
    );
  }

  return (
    <Box m="20px">
      <Header title="Accelarator" subtitle="List of Accelarator" />
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
          <div className="h-[550px] w-[800px] md:min-w-full">
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

export default Accelarator;
