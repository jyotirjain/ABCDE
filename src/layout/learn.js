import React from "react";
import Topsection from "../Components/Layout2/Topsection";
import Navbar from "../Components/Navbar1/Navbar1";
import Section1 from "../Components/learn/section1";
import Section2 from "../Components/learn/section2";
import Footer2 from "../Components/Footer2/Footer2";
import Section3 from "../Components/learn/section3";
import { Helmet } from "react-helmet";

function Learn() {
  return (
    <div>
      <Topsection />
      <Navbar verified={"true"} userType='investor'/>
      <Helmet defer={false}>
        <title>
          Learn About Startup Investing | Videos,Articles, and Resources by
          Bizdateup
        </title>
        <meta
          name="description"
          content="Discover the world of startup investing with Bizdateup's comprehensive learning resources. Watch videos, read articles, and access valuable materials to enhance your investment knowledge."
        />
        <meta
          name="keywords"
          content="learn about startup investing, videos, articles, resources, Bizdateup learning, investment knowledge"
        />
      </Helmet>
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
      <Footer2 />
    </div>
  );
}

export default Learn;
