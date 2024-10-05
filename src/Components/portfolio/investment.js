import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import Chart from "react-apexcharts";

function Investment(props) {
  const [graph, setgraph] = useState({
    options: {},
    series: [],
  });

  const [pie, setpie] = useState({
    series: [],
    options: {},
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
          },
          // xaxis: {
          //   categories: Object.keys(props.totalInvestmentByDate),
          // },
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
            width: 380,
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
            position: "bottom",
            horizontalAlign: "left",

            fontFamily: "Inter",
            formatter: function (val, opts) {
              return val + " - " + opts.w.globals.series[opts.seriesIndex];
            },
          },
          title: {
            text: "Percentage by Company",
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
                  position: "bottom",
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
      <div className="  h-fit shadow-[0px_1px_8px_rgba(0,0,0,0.25)] rounded-[10px] left-[150px] top-[163px] bg-white py-7 px-7">
        <div className="md:flex md:flex-row flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col justify-center p-5 md:w-[215px] h-[102px] rounded-[14.5714px] top-[189px] bg-[#f0d9ff] not-italic font-semibold text-sm leading-5 text-[#1C1C1C] font-[Inter] ">
              Total Investment
              <br />
              <span className="text-[20px]">
                ₹ {formatValuation(props.investment)}
              </span>
            </div>
            <div className=" flex flex-col justify-center p-5 md:w-[215px] h-[102px] rounded-[14.5854px] top-[311px] bg-[#ccd7fe] not-italic font-semibold text-sm leading-5 text-[#1C1C1C] font-[Inter]">
              No. of Startup
              <br />
              <span className="text-[20px]">{props.startupsCount}</span>
            </div>
          </div>
          <div className="flex flex-col w-full  md:flex md:flex-row  gap-10">
            <div className="box-border md:block hidden w-full h-[227px] border rounded-[14.5854px] border-solid border-[#F0D9FF] bg-white">
              <div className="">
                <Chart
                  options={graph.options}
                  series={graph.series}
                  type="line"
                  width="100%"
                  height="227"
                />
              </div>
            </div>
            <div className="box-border w-full h-[227px] border rounded-[14.5854px] border-solid border-[#F0D9FF] bg-white">
              <div className="">
                <ReactApexChart
                  options={pie.options}
                  series={pie.series}
                  // series={[{ data: pieChartData }]}
                  type="donut"
                  width="100%"
                  height="250px"
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
