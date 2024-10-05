import React from "react";
import { useState } from "react";
import data from "../../layout/demodata.json";
import Investor from "./investor";
import Startup from "./startup";
import Withdraw from "./withdraw";
import exportFromJSON from "export-from-json";

function Referdata({ investor, startup, withdraw }) {
  console.log("🚀 ~ file: referdata.js:8 ~ Referdata ~ withdraw:", withdraw)
  console.log("🚀 ~ file: referdata.js:7 ~ Referdata ~ startup:", startup)
  console.log("🚀 ~ file: referdata.js:7 ~ Referdata ~ investor:", investor)
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };


  const handleExport = () => {
    // Assuming startsUpdates is an array of objects where each object represents a row in the table
    const exportedData = investor.map((rowData) => {
      // Map each row to only the specific columns you want to export
      return {
        Investor_Name: rowData.name,
        Email: rowData.email,
        // date: moment(rowData.dateOfpayment)
        //   .tz("Asia/Kolkata")
        //   .format("DD-MMM-YY"),
        kyc: rowData.kyc,
        // Legal: rowData.legal,
        // amount: rowData.amountBreakdown.amount,
        // convenienceFee: rowData.amountBreakdown.convenienceFee,
        // gst: rowData.amountBreakdown.gst,
        // tds: rowData.amountBreakdown.tds,
        // totalamount: rowData.amountBreakdown.totalamount,
        // reference: rowData.reference,
        // Add more properties as needed
      };
    });

    // Now 'exportedData' contains only the specific columns you want to export
    console.log("Exported Data: ", exportedData);

    // You can now use 'exportedData' for further processing, like exporting to a file
    // For example, you can use a library like 'xlsx' to export to an Excel file
    const fileName = "Referral";
    const exportType = exportFromJSON.types.csv;
    exportFromJSON({ data: exportedData, fileName, exportType });
  };
  return (
    <div className="">
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <button
            className={toggleState === 1 ? "referbtnactive" : "referbtn"}
            onClick={() => toggleTab(1)}
          >
            {" "}
            Investor
          </button>
          <button
            className={toggleState === 2 ? "referbtnactive" : "referbtn"}
            onClick={() => toggleTab(2)}
          >
            {" "}
            Startups
          </button>
          <button
            className={toggleState === 3 ? "referbtnactive" : "referbtn"}
            onClick={() => toggleTab(3)}
          >
            {" "}
            History
          </button>
        </div>
        <button onClick={handleExport} className="hidden md:flex justify-center items-center gap-[9.016px] text-white text-[14.425px] not-italic font-normal leading-[normal] px-[25.244px] h-[27px] rounded-[6.977px] bg-[#202054] font-[Inter]">
          Export
        </button>
      </div>
      <div className="mt-4 overflow-scroll md:overflow-hidden">
        <div className={toggleState === 1 ? " duration-600  " : "hidden"}>
          {investor && Object.keys(investor).length > 0 ?
            <Investor data={investor} />
            : null}
        </div>
        <div className={toggleState === 2 ? " duration-600  " : "hidden"}>
          {Object.keys(startup).length > 0 ?
            <Startup data={startup} />
            :
            null
          }
        </div>
        <div className={toggleState === 3 ? "duration-600" : "hidden"}>
          {withdraw && Object.keys(withdraw).length > 0 ?
            <Withdraw data={withdraw} />
            :
            null
          }
        </div>
      </div>
      <button onClick={handleExport} className="flex md:hidden justify-center items-center gap-[9.016px] text-white text-[14.425px] not-italic font-normal leading-[normal] w-full h-[27px] rounded-[6.977px] bg-[#202054] font-[Inter]">
        Export
      </button>
    </div>
  );
}

export default Referdata;
