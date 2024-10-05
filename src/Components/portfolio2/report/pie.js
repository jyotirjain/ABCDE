import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function Pie(props) {
  const [pie, setpie] = useState({
    series: [],
    options: {
      chart: {
        width: "100px",
        height: "300px",
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
          size: 300,
        },
      },
      dataLabels: {
        enabled: false,
      },
      labels: [],

      fill: {
        type: "gradient",
      },
      legend: {
        position: "left",
        horizontalAlign: "left",
        fontFamily: "Inter",
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
        style: {
          fontFamily: "Inter",
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: "100px",
              height: "300px",
            },
            legend: {
              position: "left",
              horizontalAlign: "left",
            },
          },
        },
      ],
    },
  });

  const pieChartData = Object.entries(props.percentageByCompany).map(
    ([company, percentage]) => ({ x: company, y: percentage })
  );
  console.log("props", props.percentageByCompany);
  useEffect(() => {
    setpie({
      // series: Object.values(props.percentageByCompany.map(p => p.toFixed(2))),
      series: Object.values(props.percentageByCompany),
      options: {
        chart: {
          width: "100px",
          height: "300px",
          type: "donut",
        },
        plotOptions: {
          pie: {
            startAngle: -90,
            endAngle: 270,
            size: 300,
          },
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: "gradient",
        },
        labels: Object.keys(props.percentageByCompany),
        legend: {
          position: "left",
          horizontalAlign: "left",

          fontFamily: "Inter",
          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
        },
        title: {
          text: "Holdings by Percentage",
          style: {
            fontSize: "16px",
            fontFamily: "Inter",
            fontWeight: "400",
            color: "#646464",
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: "100px",
                height: "300px",
              },
              legend: {
                position: "left",
                horizontalAlign: "left",
              },
            },
          },
        ],
      },
    });
  }, [props]);

  return (
    <div className="w-fit h-[150px] flex" id="pdfchart">
      <ReactApexChart
        options={pie.options}
        series={pie.series}
        // series={[{ data: pieChartData }]}
        type="donut"
        width="100%"
        height="135px"
      />
    </div>
  );
}

export default Pie;
