import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function Valuation({ valuationGraph }) {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: valuationGraph?.investedCompany,
      },
    },
    series: [
      {
        name: "Expected",
        data: valuationGraph?.expectedValuation,
      },
      {
        name: "Invested",
        data: valuationGraph?.investedValuation,
      },
    ],
  });

  function formatNumberWithDecimal(value) {
    // if (typeof value === "number") {
    // Check if the number has more than 1 decimal place
    if (value % 1 !== 0) {
      // If it has more than 1 decimal place, format with 2 decimal places
      return value.toFixed(2);
    } else {
      // If it has 0 or 1 decimal place, format with 1 decimal place
      return value.toFixed(1);
    }
    // } else {
    // Handle invalid input, e.g., non-numeric values
    // return "Invalid Number";
    // }
  }

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${formatNumberWithDecimal(value / 10000000)}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${formatNumberWithDecimal(value / 100000)}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${formatNumberWithDecimal(value / 1000)}K`;
    } else {
      return value;
    }
  }
  useEffect(() => {
    // Update chartData whenever valuationGraph changes
    setChartData({
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            export: {
              csv: {
                filename: "Expected Valuation vs Invested Valuation",
                columnDelimiter: ",",
                headerCategory: "category",
                headerValue: "value",
                dateFormatter(timestamp) {
                  return new Date(timestamp).toDateString();
                },
              },
              svg: {
                filename: "Expected Valuation vs Invested Valuation",
              },
              png: {
                filename: "Expected Valuation vs Invested Valuation",
              },
            },
          },
        },
        xaxis: {
          categories: valuationGraph?.investedCompany,
          labels: {
            trim: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (value, opt) {
            return formatValuation(value);
          },
        },
      },

      series: [
        {
          name: "Invested",
          data: valuationGraph?.investedValuation,
        },
        {
          name: "Expected",
          data: valuationGraph?.expectedValuation,
        },
      ],
    });
  }, [valuationGraph]);

  return (
    <div className="w-full md:block hidden shadow-[0px_1px_8px_rgba(0,0,0,0.15)] rounded-[10px] bg-white py-5 px-5">
      <label className="text-[#252525] text-[19.33px] not-italic font-normal leading-[normal] font-[Inter]">
        Invested Valuation vs Expected Valuation
      </label>
      <div className="h-[346px] shrink-0 border rounded-[10px] border-solid border-[#DDD] p-5 mt-4">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          height="100%"
        />
      </div>
    </div>
  );
}

export default Valuation;
