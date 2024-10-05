import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";
import cta26 from "../../assets/images/cta/cta26.png";

function Investment(props) {
  const [graph, setgraph] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        // categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        categories: Object.keys(props.totalInvestmentByDate),
      },
    },
    series: [
      {
        name: "series-1",
        data: Object.values(props.totalInvestmentByDate),
        // data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
  });

  const [pie, setpie] = useState({
    series: [],
    options: {
      chart: {
        width: "50px",
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
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
        width: 220,
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
              width: "100%",
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

  useEffect(() => {
    if (props) {
      setgraph({
        options: {
          chart: {
            id: "basic-bar",
            width: "50px",
          },
          xaxis: {
            categories: Object.keys(props.totalInvestmentByDate),
          },
        },
        series: [
          {
            name: "series-1",
            data: Object.values(props.totalInvestmentByDate),
          },
        ],
      });

      setpie({
        // series: Object.values(props.percentageByCompany.map(p => p.toFixed(2))),
        series: Object.values(props.percentageByCompany),
        options: {
          chart: {
            width: "50px",
            type: "donut",
          },
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 270,
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
                  width: "100%",
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
    }
  }, [props]);

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${value / 10000000}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${value / 100000}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${value / 1000}K`;
    } else {
      return value;
    }
  }

  return (
    <div className="w-[100%]">
      <div className="h-fit">
        <div className="md:flex md:flex-row flex flex-col gap-10">
          <div className="flex flex-col w-full md:w-1/2 shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#f5e7ff]  h-[164px] transform transition-all duration-300 hover:translate-y-[-3px]">
            <div className="bg-white rounded-t-[10px] px-6 pt-4 pb-2">
              <label className="text-[#646464] text-base not-italic font-normal leading-[normal] font-[Inter]">
                Overview
              </label>
              <div className="flex items-end justify-between">
                <div className="pb-2">
                  <h2 className="text-[#414141] text-[32px] not-italic font-normal leading-[31.925px] font-[Inter]">
                    ₹ {formatValuation(props.investment)}
                  </h2>
                  <label className="text-[#646464] text-base not-italic font-normal leading-[normal] font-[Inter]">
                    Total amount invested
                  </label>
                </div>
                <img src={cta26} className="mr-12 w-[95px]" />
              </div>
            </div>
            <div className=" rounded-[0px_0px_10px_10px] px-5 my-1 bg-[#f5e7ff]">
              <label className=" text-[#4A4A4A] text-sm not-italic font-normal leading-[normal] font-[Inter]">
                Invested in{" "}
                <span className="font-bold">{props.startupsCount}</span>{" "}
                startups
              </label>
            </div>
          </div>
          <div className=" hidden w-1/2  md:flex md:flex-row  gap-10 transform transition-all duration-300 hover:translate-y-[-3px]">
            <div className="box-border w-full  border rounded-[14.5854px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)] p-2 pt-2 bg-white">
              <div className="pt-2">
                <ReactApexChart
                  options={pie.options}
                  series={pie.series}
                  // series={[{ data: pieChartData }]}
                  type="donut"
                  width="100%"
                  height="135px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
