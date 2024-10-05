import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";

function Doublebar(startup) {
  const [bar, setbar] = useState({
    series: [],
    options: {
      chart: {
        type: "bar",
        height: 430,
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top",
          },
        },
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"],
        },
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"],
      },
      tooltip: {
        shared: true,
        intersect: false,
      },
      xaxis: {
        categories: ["amount", "valuation"],
        show: false,
        labels: {
          show: false,
        },
      },
    },
  });

  useEffect(() => {
    function formatNumberWithDecimal(value) {
      if (value % 1 !== 0) {
        return value.toFixed(2);
      } else {
        return value.toFixed(1);
      }
    }

    function calculateCurrentInvestment(startup) {
      const currentValuation = startup?.portfolio?.currentValuation || 0;
      const investedAmount = startup?.investedAmount || 0;
      const investedValuation = startup?.dealTerms?.valuation || 0;
      return formatNumberWithDecimal(
        (currentValuation * investedAmount) / investedValuation
      );
    }

    const seriesData = [
      {
        data: [startup.investedAmount, startup.dealTerms?.valuation],
      },
      {
        data: [
          calculateCurrentInvestment(startup),
          startup.portfolio?.currentValuation,
        ],
      },
    ];

    setbar((prevChartData) => ({
      ...prevChartData,
      series: seriesData,
    }));
  }, [startup]);

  return (
    <>
      <div className="w-fit  flex" id="pdfbarchart">
        <ReactApexChart
      
          type="bar"
          width={300}
          height={200}
          options={bar.options}
          series={bar.series}
        />
      </div>
    </>
  );
}

export default Doublebar;
