import React from "react";
import LiveCapmpaings from "./LiveCapmpaings";
import Navbar1 from "../../Navbar1/Navbar1";
import Footer2 from "../../Footer2/Footer2";
import { Helmet } from "react-helmet";
import Topsection from "./topsection";
import Dashboardmodal from "./dashboardmodal";

const PrinceDashboard = () => {
  return (
    <>
      <div className="font-[Inter]">
        {/* <Dashboardmodal/> */}
        <Topsection/>
        <Navbar1 verified={"true"} userType='investor' />
        <Helmet defer={false}>
          <title>
            Investment Dashboard | Startup Portfolio Preview | FAQs | Bizdateup
          </title>
          <meta
            name="description"
            content="Access your investment dashboard on Bizdateup. Explore startup opportunities, preview your portfolio, find answers to FAQs, and take important actions."
          />
          <meta
            name="keywords"
            content="investment dashboard, startup portfolio, FAQs, Bizdateup, startup opportunities"
          />
        </Helmet>

        <LiveCapmpaings />
        <Footer2 />
      </div>
      
    </>
  );
};

export default PrinceDashboard;
