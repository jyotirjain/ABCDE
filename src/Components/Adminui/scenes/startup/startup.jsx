import React from "react";
import { Box, Button, Stack, Switch, Typography } from "@mui/material";
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
import { styled } from "@mui/system";
import Detailsmodal from "./detailsmodal";
import Portfoliomodal from "./portfoliomodal";
import Pitch from "./pitch";
import Action from "./action";
import ActiveStatus from "./activeStatus";
import adminAPI from "../../../../Apis/admin";
import exportFromJSON from "export-from-json";
import { LuDownload } from "react-icons/lu";

function Startup() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [users, setUsers] = useState([]);
  const [searchdata, setsearchdata] = useState([]);
  const [filterval, setfilterval] = useState("");
  const [userdata, setUserData] = useState("");
  // State to track the current page

  const [data, setData] = useState({
    id: null,
    action: null,
  });

  useEffect(() => {
    // setUserData();
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      axios
        .get(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup`)
        .then((res) => {
          setUsers(res.data.data.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    } catch (error) {}
  };

  console.log("yser", users);

  useEffect(() => {
    if (data.id && data.action) {
      const fetchData = async () => {
        const res = await adminAPI.activeStatus(data);
        // Assuming getData is a separate function, you can call it here.

        if (res.code === 200) {
          // setIsApproved(false);
          // If you need to do anything else based on the response, you can add it here.
        }
      };
      fetchData();
    }
  }, [data]);

  const exportDataToCSV = () => {
    const user = detailsrow; // Replace with your data
    const fileName = "Startup";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: user, fileName, exportType });
  };

  // Define your getData function here
  // You can use a similar pattern as above to trigger fetching data based on other events.

  // Define your handleActiveStatus function
  function handleActiveStatus(id, action) {
    setData({ id, action });
  }

  const [isLive, setIsLive] = useState(true); // Default to 'Live'

  const handleSwitchChange = () => {
    // Toggle between 'Live' and 'Closed' when the switch is clicked
    setIsLive(!isLive);
  };

  const detailsrow = users.map((item, index) => {
    return {
      id: index + 1,
      company: item.registeredCompanyName,
      email: item.email,
      details: item,
      potfolio: item,
      pitch: item,
      action: item,
      live: item.activeStatus.status,
      foundername: item.founderFirstName + " " + item.founderLastName,
      phone: item.phone,
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, headerName: "Registrar ID" },
    { field: "company", flex: 2, headerName: "Company" },
    {
      field: "email",
      flex: 2,
      headerName: "Email",
    },
    {
      field: "details",
      flex: 1,
      headerName: "Details",
      renderCell: (param) => {
        return <Detailsmodal data={param.row} />;
      },
    },
    {
      field: "portfolio",
      flex: 1,
      headerName: "portfolio",
      renderCell: (param) => {
        return (
          <Portfoliomodal
            id={param.row.details._id}
            data={param.row}
            callback={fetchData}
          />
        );
      },
    },
    {
      field: "pitch",
      flex: 1,
      headerName: "pitch",
      renderCell: (param) => {
        return <Pitch data={param.row} />;
      },
    },
    {
      field: "action",
      flex: 1,
      headerName: "action",
      renderCell: (param) => {
        return (
          <>
            {" "}
            <Action data={param} />{" "}
          </>
        );
      },
    },
    {
      field: "live",
      flex: 1,
      headerName: "live",
      renderCell: (param) => {
        return <ActiveStatus data={param.row} />;
      },
    },
    { field: "foundername", flex: 1, headerName: "foundername" },
    { field: "phone", flex: 1, headerName: "phone" },
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
        </div>
      </GridToolbarContainer>
    );
  }

  return (
    <Box m="20px">
      <Header title="Startups Data" subtitle="List of Startup data" />
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
        <div className=" overflow-x-scroll  md:overflow-x-auto   md:w-full ">
          <div className="h-[550px] w-[1100px] md:min-w-full   ">
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

export default Startup;
