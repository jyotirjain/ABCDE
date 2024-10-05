import React from "react";
import Section2 from "./Section2";
import TopResion2 from "./TopResion2";
import ExpandBeyond from "./ExpanpBeyond";
import Getstart from "./Getstart";
import Faq from "./Faq";
import InternationalGatway from "./InternationalGatway";
import Navbar from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";

import InternationalPayment from "./InternationalPayment";
import Topsection from "./Topsection";


import { Helmet } from "react-helmet";


const Layout2 = () => {
  return (
    <>
      <Topsection />
      <Navbar />
      <Helmet defer={false}>
        <title>Invest in Startups and Join the Startup Revolution | Bizdateup</title>
        <meta name="description" content="Discover the power of startup investing with Bizdateup. Invest in promising startups, diversify your portfolio, and be part of the entrepreneurial journey. Join now!" />
        <meta name="keyword" content="startup investing, invest in startups, diversify portfolio, join startup revolution, Bizdateup" />
      </Helmet>
      <Section2 />
      

      <TopResion2 />

      <ExpandBeyond />
      <InternationalPayment />

      <InternationalGatway />
      <Faq />
      <Getstart />

      {/* <LookingSupport /> */}


      <Footer2 />
    </>
  );
};

export default Layout2;
