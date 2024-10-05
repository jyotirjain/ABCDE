import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";
import { useState } from "react";
import ReactApexChart from "react-apexcharts";

function LineChart({
  isCustomLineColors = false,
  isDashboard = false,
  userData,
}) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const usersByJoiningDate = {};
  if (userData) {
    userData.forEach((user) => {
      const joinDate = user.created_at; // Replace 'joiningDate' with the actual property that holds the joining date
      if (usersByJoiningDate[joinDate]) {
        usersByJoiningDate[joinDate]++;
      } else {
        usersByJoiningDate[joinDate] = 1;
      }
    });
  }

  // Prepare data for the chart
  const chartData = Object.keys(usersByJoiningDate).map((date) => {
    return {
      x: new Date(date).toISOString(),
      y: usersByJoiningDate[date],
    };
  });

  const dates = [];
console.log(userData)
  const [line, setLine] = useState({
    series: [
      {
        name: "User Joining Dates",
        data: chartData,
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "User Joining Dates",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        title: {
          text: "User Count",
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return val.toFixed(0);
          },
        },
      },
    },
  });

  return (
    <ReactApexChart
      options={line.options}
      series={line.series}
      type="area"
      height={350}
    />
  );
}

export default LineChart;
