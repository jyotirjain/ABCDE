import React, { useEffect, useRef, useState } from "react";
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
  Svg,
} from "@react-pdf/renderer";

import { FiMail } from "react-icons/fi";
import Inter from "../../../assets/font/Inter-Regular.ttf";
import polygon1 from "../../../assets/images/portfolio/Polygon1.png";
import pdfbg from "../../../assets/images/portfolio/pdfbg.png";
import { TfiWorld } from "react-icons/tfi";
import { CiMail } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
// import web from "../../../assets/images/portfolio/web.svg";
import web from "../../../assets/images/portfolio/web.png";
import mail from "../../../assets/images/portfolio/mail.png";
import insta from "../../../assets/images/portfolio/insta.png";
import phone from "../../../assets/images/portfolio/phone.png";
import premiumcta from "../../../Images/premiumcta.png";

import Pie from "./pie";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";
import Doublebar from "./doublebar";
import html2canvas from "html2canvas";
import ReactApexChart from "react-apexcharts";
import moment from "moment";

const convertChartToImage = async (chartId) => {
  const chartNode = document.getElementById(chartId);

  try {
    const imageDataUrl = await htmlToImage.toPng(chartNode);
    return imageDataUrl;
  } catch (error) {
    console.error("Error converting chart to image:", error);
    return null;
  }
};

const MyPDF = ({ data, endpoint, ctaTexts }) => {
  Font.register({ family: "Inter", src: Inter });

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
      paddingTop: "30px",
      paddingBottom: "10px",
    },
    pdfbgwrap: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      zIndex: 2,
    },
    pdfbg: {
      width: "260px",
      height: "230px",
    },
    titlecontainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: "30px",
      paddingBottom: "10px",
    },
    titles: {
      color: "#252525",
      fontFamily: "Inter",
      fontSize: "16px",
      fontWeight: "ultrabold",
    },
    imageFromApiView: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 5,
      marginTop: "10px",
    },
    imageView: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "35px",
      height: "35px",
      borderRadius: "4.808px",
      border: "1.016px solid #DDD",
      objectFit: "contain",
      marginRight: 10, // Add some right margin to separate the image from the text
      padding: "4px",
    },
    imageFromApi: {
      width: "100%", // Set an appropriate width for the thumbnail image
      height: "100%", // Set an appropriate height for the thumbnail image
    },
    title2: {
      fontSize: "16px",
      fontWeight: "medium",
      color: "#252525",
      marginBottom: "2px",
      textAlign: "left",
    },
    caption: {
      color: "#828F99",
      fontSize: "8px",
      fontWeight: "bold",
    },
    container2: {
      width: "100%",
      paddingTop: "",
      paddingHorizontal: "30px",
      paddingBottom: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    chartcontainer: {
      display: "flex",
      flexDirection: "column",
      border: "2px solid #f2f2f2",
      width: "100%",
      height: "172px",
    },
    chartstitle: {
      fontSize: "14px",
      color: "#252525",
      borderBottom: "2px solid #f2f2f2",
      display: "flex",
      alignItems: "center",
      width: "100%",
      paddingTop: "5px",
      paddingBottom: "5px",
      textAlign: "center",
    },
    chartcontent: {
      display: "flex",

      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "140px",
      borderRight: "2px solid #f2f2f2",
      borderBottom: "2px solid #f2f2f2",
    },
    chart: {
      display: "flex",
      width: "100%",
      height: "100%",
    },
    detailscontainer: {
      display: "flex",

      alignItems: "center",
      border: "2px solid #f2f2f2",
      width: "100%",
      height: "230px",
      marginTop: "20px",
    },
    detailstitle: {
      fontSize: "14px",
      color: "#252525",
      borderBottom: "2px solid #f2f2f2",
      display: "flex",
      alignItems: "center",
      width: "100%",
      paddingTop: "10px",
      paddingBottom: "10px",
      textAlign: "center",
    },
    investmentdate: {
      fontSize: "10px",
      color: "#252525",
      // borderBottom: "2px solid #f2f2f2",
      display: "flex",
      alignItems: "center",
      width: "100%",
      paddingTop: "7px",
      paddingBottom: "7px",
      textAlign: "center",
      paddingTop: "10px",
      paddingBottom: "10px",
    },
    tableRow: {
      flexDirection: "row",
    },
    tableCellHead: {
      display: "flex",
      color: "#41484d",
      fontFamily: "Inter",
      fontSize: "11px",
      fontStyle: "normal",
      fontWeight: 400,
      padding: "8px 10px",
      // lineHeight: "16px",
    },

    tableCell: {
      width: "40%",
      textAlign: "right",
      borderLeft: "2px solid #f2f2f2",
      padding: "8px 10px",
    },
    rowR: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      justifyContent: "space-between",
      borderTop: "2px solid #f2f2f2",
      borderLeft: "2px solid #eaeaea",
    },
    rowL: {
      display: "flex",
      flexDirection: "row",
      width: "50%",
      justifyContent: "space-between",

      borderTop: "2px solid #f2f2f2",
      borderRight: "2px solid #eaeaea",
    },
    ctabox: {
      width: "100%",
      height: "185px",
      backgroundColor: "#FEFAEE",
      position: "relative",
      overflow: "hidden",
      borderRadius: "7px",
      marginTop: "50px",
    },
    eclipse: {
      position: "absolute",
      width: "60px",
      height: "60px",
      flexShrink: 0,
      backgroundColor: "#fcedcc",
      borderRadius: "50%",
      opacity: 0.9,
    },
    ctacontainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      justifyContent: "space-between",
      padding: "20px",
    },
    ctatext: {
      color: "#252525",
      fontSize: "16px",
      marginTop: "40px",
    },
    ctabtn: {
      backgroundColor: "#e4c27b",
      color: "#252525",
      fontSize: "11.065px",
      padding: "3px 7px",
      width: "172px",
      borderRadius: "5px",
      marginTop: "10px",
    },
    disclaimer: {
      fontSize: "12px",
      color: "#252525",
      textAlign: "center",
      marginTop: "30px",
    },
    disclaimertxt: {
      fontSize: "8px",
      color: "#252525",
      textAlign: "center",
      width: "265px",
      marginTop: "5px",
      lineHeight: "1px",
    },
    footercontainer: {
      position: "absolute",
      bottom: "5px",
      width: "100%",
      height: "85px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      borderTop: "1px solid #fce9ba",
      padding: "15px 10px",
    },
    footerlinks: {
      display: "flex",
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    links: {
      fontSize: "10px",
      color: "#292929",
      fontWeight: "semibold",
    },
    address: {
      width: "100%",
      display: "flex",
      textAlign: "center",
      fontSize: "8px",
      color: "#252525",
      marginTop: "20px",
    },
  });
  useEffect(() => {
    convertChartToImage();
  }, []);
  const pieChartImage = convertChartToImage("pdfchart");

  return (
    <Document>
      {data.map((item, index) => {
        const currentInvestment = Math.round(calculateCurrentInvestment(item));
        const increase = Math.abs(increasevaluation(item));

        const numOfShares = Math.round(numberOfShares(item));

        const currentCtaText = ctaTexts[index];

        return (
          <Page key={index} size="A4" style={styles.container}>
            {/* Company Logo */}
            <View style={styles.topbar} />
            <View style={styles.bottombar} />

            <View style={styles.logocontainer}>
              <Image
                src={
                  endpoint + "/static/media/Bizlogo.359698304c9a3ee8d84f.png"
                }
                style={styles.image}
              />
            </View>
            <View style={styles.pdfbgwrap}>
              <Image src={pdfbg} style={styles.pdfbg} />
            </View>
            <View style={styles.titlecontainer}>
              <Text style={styles.titles}>Startup Portfolio Report</Text>
              <View style={styles.imageFromApiView}>
                <View style={styles.imageView}>
                  <Image
                    src={endpoint + "/v1/logo/" + item.logo}
                    style={styles.imageFromApi}
                  />
                </View>

                <View>
                  <Text style={styles.title2}>
                    {item.registeredCompanyName}
                  </Text>
                  <Text style={styles.caption}>
                    Type of Investment : {item.dealTerms.typeOfSecurity}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.container2}>
              <View style={styles.detailscontainer}>
                <Text style={styles.detailstitle}>Detailed Updates</Text>
                <Text style={styles.investmentdate}>
                  Date of investment :
                  {moment(
                    item?.investedDetails[item.investedDetails.length - 1]
                      ?.investedDate
                  )
                    .utc()
                    .format("YYYY-MM-DD")}
                </Text>
                <View style={styles.tableRow}>
                  <View style={styles.rowL}>
                    <Text style={styles.tableCellHead}>Invested Amount:</Text>
                    <Text style={styles.tableCell}>{item.investedAmount}</Text>
                  </View>
                  <View style={styles.rowR}>
                    <Text style={styles.tableCellHead}>
                      {" "}
                      Invested Valuation:
                    </Text>
                    <Text style={styles.tableCell}>
                      {item.dealTerms?.valuation}
                    </Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.rowL}>
                    <Text style={styles.tableCellHead}>Current Amount:</Text>
                    <Text style={styles.tableCell}>
                      {currentInvestment ? currentInvestment : "-"}
                    </Text>
                  </View>
                  <View style={styles.rowR}>
                    <Text style={styles.tableCellHead}>Current Valuation:</Text>
                    <Text style={styles.tableCell}>
                      {item?.portfolio?.currentValuation}
                    </Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.rowL}>
                    <Text style={styles.tableCellHead}>Number of Shares:</Text>
                    <Text style={styles.tableCell}>
                      {" "}
                      {numOfShares ? formatNumberWithDecimal(numOfShares) : "-"}
                    </Text>
                  </View>
                  <View style={styles.rowR}>
                    <Text style={styles.tableCellHead}>
                      {" "}
                      Expected Valuation:
                    </Text>
                    <Text style={styles.tableCell}>
                      {item.portfolio?.expectedValuation}
                    </Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.rowL}>
                    <Text style={styles.tableCellHead}>Invested Revenue:</Text>
                    <Text style={styles.tableCell}>{item.revenue}</Text>
                  </View>
                  <View style={styles.rowR}>
                    <Text style={styles.tableCellHead}>ARR:</Text>
                    <Text style={styles.tableCell}>{item?.portfolio?.ARR}</Text>
                  </View>
                </View>
                <View style={styles.tableRow}>
                  <View style={styles.rowL}>
                    <Text style={styles.tableCellHead}> Current Revenue:</Text>
                    <Text style={styles.tableCell}>
                      {" "}
                      {item?.portfolio?.currentRevenue}
                    </Text>
                  </View>
                  <View style={styles.rowR}>
                    <Text style={styles.tableCellHead}>MRR:</Text>
                    <Text style={styles.tableCell}>{item?.portfolio?.MRR}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.ctabox}>
                <View
                  style={{ ...styles.eclipse, top: "-35px", left: "8px" }}
                />
                <View
                  style={{ ...styles.eclipse, top: "-25px", left: "-20px" }}
                />
                <View
                  style={{ ...styles.eclipse, top: "-30px", right: "0px" }}
                />
                <View
                  style={{ ...styles.eclipse, top: "-15px", right: "-20px" }}
                />
                <View style={styles.ctacontainer}>
                  <View style={{ width: "70%" }}>
                    <Text style={styles.ctatext}>{currentCtaText}</Text>
                    <Text style={styles.ctabtn}>
                      Invest more, Diversify More
                    </Text>
                  </View>
                  <Image src={premiumcta} style={{ width: "160px" }} />
                </View>
              </View>

              <Text style={styles.disclaimer}>Disclaimer</Text>
              <Text style={styles.disclaimertxt}>
                All the expected values are referenced or calculated by
                Bizdateup’s Financial team and are just for reference.
              </Text>
            </View>

            <View style={styles.footercontainer}>
              <View style={styles.footerlinks}>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: "2px" }}
                >
                  <Image src={web} style={{ width: "11px" }} />
                  <Text style={styles.links}>www.bizdateup.com</Text>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: "2px" }}
                >
                  <Image src={mail} style={{ width: "11px" }} />
                  <Text style={styles.links}> support@bizdateup.com</Text>
                </View>

                <View
                  style={{ display: "flex", flexDirection: "row", gap: "2px" }}
                >
                  <Image src={insta} style={{ width: "11px" }} />
                  <Text style={styles.links}>bizdateup</Text>
                </View>
                <View
                  style={{ display: "flex", flexDirection: "row", gap: "2px" }}
                >
                  <Image src={phone} style={{ width: "11px" }} />
                  <Text style={styles.links}> 8945756982</Text>
                </View>
              </View>
              <Text style={styles.address}>
                G2, Empire Business Centre, Empire Complex, 414 Senapati Bapat
                Marg, Delisle Rd, near shreeniwas mill, Lower Parel, Mumbai,
                Maharashtra, 400013{" "}
              </Text>
            </View>
          </Page>
        );
      })}
    </Document>
  );
};

const PDFDownloadButton = ({ data, user, endpoint }) => {
  const ctaTexts = [
    "We're excited to see your investments grow with us – welcome!",
    "Thank you for choosing us as your startup investment partner.",
    "Your investment is a vote of confidence in our vision – thank you!",
    "You're now part of our exclusive investor network – congratulations!",
    "Cheers to your new role as an investor in our community.",
    "Your investment decision is a milestone for us – thank you!",
    "We're thrilled to have you as an investor with us.",
    "We look forward to a successful investment journey with you.",
  ];

  return (
    <>
      {/* <MyPDF data={data} endpoint={endpoint} /> */}
      <PDFDownloadLink
        className="w-full md:w-[130px]  h-[39px] shrink-0 rounded-[10px]  flex text-center justify-center items-center bg-[#ebe9e9] text-[#252525] text-base not-italic font-normal leading-[normal]"
        document={<MyPDF data={data} endpoint={endpoint} ctaTexts={ctaTexts} />}
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
      {/* <PDFViewer style={{ width: '100vw', height: '100vh' }}>
        <MyPDF data={data} />
        {({ blob, url, loading, error }) => (loading ? 'Loading...' : 'Download here')}
      </PDFViewer> */}
    </>
  );
};

export default PDFDownloadButton;
