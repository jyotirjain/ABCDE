import React from "react";
import AboutSection from "./AboutSection";
import Topsection from "../Layout2/Topsection";
import Navbar1 from "../Navbar1/Navbar1";

import Members from "./Members";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";
import AboutInvest from "./AboutInvest";

import InternationalAboutus from "./InternationalAboutus";

const AboutUs = () => {
  return (
    <>
      <Helmet defer={false}>
        <title>Discover Our Vision and Mission | About Bizdateup</title>
        <meta
          name="description"
          content=" Learn about Bizdateup's vision and mission to revolutionize startup investing. Discover how we connect investors with promising startups and help fuel entrepreneurial success."
        />
        <meta
          name="keyword"
          content="Bizdateup, startup investing platform, vision and mission, connecting investors, fueling entrepreneurial success"
        />
      </Helmet>
      <section>
        <Topsection />
        <Navbar1 />
        <AboutSection />
        <AboutInvest />
        {/* <MissionAboutus /> */}
        <Members />
        <InternationalAboutus />
        {/* <Paymentaboutus /> */}

        {/* <Videoaboutus /> */}

        <Footer2 />
      </section>
    </>
  );
};

export default AboutUs;
