import axios from "axios";
import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import moment from "moment";
import "moment-timezone";

function Events() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [events, setEvents] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup`
      );

      if (response.status === 200) {
        const data = response.data.data.data;
        const eventsData = data.flatMap((startup) =>
          startup.events.map((event) => ({
            ...event,
            registeredCompanyName: startup.registeredCompanyName,
          }))
        );
        setEvents(eventsData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const detailsrow = events.map((item, index) => {
    return {
      id: index + 1,
      company: item.registeredCompanyName,
      date: moment(item.date).tz("Asia/Kolkata").format("DD MMM YY"),
      time: item.time,
      url: item.url,
    };
  });

  const detailscolumn = [
    { field: "id", flex: 1, headerName: "Registrar ID" },
    { field: "company", flex: 2, headerName: "Registerd Company Name" },
    { field: "date", flex: 1, headerName: "Date of Event" },
    { field: "time", flex: 1, headerName: "Time of Event" },
    { field: "url", flex: 2, headerName: "Event URL" },
  ];

  return (
    <Box m="20px">
      <Header
        title="Events"
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

export default Events;
