import React, { useEffect, useRef, useState } from "react";

import PDFDownloadButton from "../Components/portfolio2/report/report2";
import PDFDownloadButton1 from "../Components/portfolio2/report/reprt3";
import API from "../Apis/investor";

import Loader from "../Components/loader/loader";
import Pie from "../Components/portfolio2/report/pie";
import Doublebar from "../Components/portfolio2/report/doublebar";
import LoaderApi from "../Components/LoaderApi/LoaderApi";

function Portfolio2() {
  const [refId] = useState(localStorage.getItem("authRefInvestor"));

  const [loader, setloader] = useState(false);

  const [investedStartups, setInvestedStartups] = useState([]);

  const [percentageByCompany, setPercentageByCompany] = useState({});

  const fetchData = async () => {
    try {
      const response2 = await API.getPortfolio({
        investor: refId,
      });
      console.log(
        "🚀 ~ file: pdfTester.js:24 ~ fetchData ~ response2:",
        response2
      );

      setInvestedStartups(response2.investedStartupDetails);
      setPercentageByCompany(response2.percentageByCompany);
    } catch (error) {
      console.log("error", error);
    }
  };
  console.log(
    "🚀 ~ file: pdfTester.js:31 ~ Portfolio2 ~ investedStartups:",
    investedStartups
  );
  useEffect(() => {
    setloader(true);
    fetchData();
    setloader(false);
  }, []);

  return (
    <>
      {loader ? (
        <LoaderApi />
      ) : (
        <>
          {/* <Pie percentageByCompany={percentageByCompany} />

          {investedStartups.map((startup, index) => (
            <Doublebar key={index} startup={startup} />
          ))} */}

          <PDFDownloadButton
            endpoint={process.env.REACT_APP_BASE_URL}
            data={investedStartups}
          />
          
        </>
      )}
    </>
  );
}

export default Portfolio2;
