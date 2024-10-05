import React from "react";
import {
  PDFViewer,
  PDFDownloadLink,
  Image,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

import { FiMail } from "react-icons/fi";
import Inter from "../../../assets/font/Inter-Regular.ttf";
import polygon1 from "../../../assets/images/portfolio/Polygon1.png";
import Doublebar from "./doublebar";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

const stackedbar = ({ data }) => {};

const MyPDF = ({ data, endpoint }) => {
  Font.register({ family: "Inter", src: Inter });

  const [doubleGraphImageSrc, setDoubleGraphImageSrc] = React.useState("");

  async function generateDoubleGraphImage(dataItem) {
    // Create a reference to the double graph component
    const doubleGraphRef = React.createRef();

    // Render the double graph component to an image
    try {
      const image = await htmlToImage.toPng(doubleGraphRef.current);

      // Set the image source in the state
      setDoubleGraphImageSrc(image);
    } catch (error) {
      console.error("Error generating double graph image:", error);
    }
  }

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

  function calculateCurrentInvestment(startup) {
    const currentValuation = startup?.portfolio?.currentValuation || 0;
    const investedAmount = startup?.investedAmount || 0;
    const investedValuation = startup?.dealTerms?.valuation || 0;

    const currentInvestment = formatNumberWithDecimal(
      (currentValuation * investedAmount) / investedValuation
    );

    return currentInvestment;
  }

  function increasevaluation(startup) {
    const currentValuation = startup?.portfolio?.currentValuation || 0;
    const investedValuation = startup?.dealTerms?.valuation || 0;

    return formatNumberWithDecimal(
      100 * (currentValuation / investedValuation) - 100
    );
  }

  function numberOfShares(startup) {
    const investedamount = startup?.investedAmount || 0;
    const sharesprice = startup?.portfolio?.shareprice || 0;

    return sharesprice == 0
      ? null
      : formatNumberWithDecimal(investedamount / sharesprice);
  }

  const styles = StyleSheet.create({
    container: {
      fontFamily: "Inter",
      fontSize: 12,
      color: "#333",
      backgroundColor: "#FFF",
      position: "relative",
    },
    topbar: {
      width: "100vw",
      height: "12px",
      position: "absolute",
      top: 0,
      backgroundColor: "#F3B518",
    },
    bottombar: {
      width: "100vw",
      height: "12px",
      position: "absolute",
      bottom: 0,
      backgroundColor: "#F3B518",
    },
    logocontainer: {
      width: "100%",
      display: "flex",

      alignItems: "center",
      borderBottom: "1px solid #fce9ba",
    },
    image: {
      width: "125px",
      paddingTop: "20px",
      paddingBottom: "10px",
    },
    titlecontainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
    },
    titles: {
      color: "#252525",
      fontFamily: "Inter",
      fontSize: "16px",
    },
  });

  return (
    <Document>
      {data.map((item, index) => {
        const currentInvestment = Math.round(calculateCurrentInvestment(item));
        const increase = Math.abs(increasevaluation(item));

        const numOfShares = Math.round(numberOfShares(item));

        return (
          <Page key={index} size="A4" style={styles.container}>
            {/* Company Logo */}

            <View style={styles.topbar} />
            <View style={styles.bottombar} />
            <Image src={doubleGraphImageSrc} style={styles.image} />
          </Page>
        );
      })}
    </Document>
  );
};

const PDFDownloadButton = ({ data, user, endpoint }) => {
  return (
    <>
      <PDFDownloadLink
        className="w-full md:w-[130px]  h-[39px] shrink-0 rounded-[10px]  flex text-center justify-center items-center bg-[#d62b2b] text-[#252525] text-base not-italic font-normal leading-[normal]"
        document={<MyPDF data={data} endpoint={endpoint} />}
        fileName={user + "_report.pdf"}
      >
        {/* <MyPDF data={data} /> */}
        {({ blob, url, loading, error }) =>
          loading ? "Loading..." : "Download"
        }
        {/* <PDFViewer style={{ width: '100vw', height: '100vh' }}>
        <MyPDF data={data} />
        {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download here')}
      </PDFViewer> */}
      </PDFDownloadLink>
    </>
  );
};

export default PDFDownloadButton;
