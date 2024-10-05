import React from "react";
import SectionRaisefund from "./SectionRaisefund";
import Navbar1 from "../Navbar1/Navbar1";
import Footer2 from "../Footer2/Footer2";
import TopResionraisefund from "./TopResionraisefund";
import ExpanpRaisefund from "./ExpanpRaisefund";
import FactRaisefund from "./FactRaisefund";
import FaqRaisefund from "./FaqRaisefund";
import Topsection from "../Layout2/Topsection";

const RaisedFund = () => {
  return (
    <section>
      <>
        <Topsection />
        <Navbar1 />

        <SectionRaisefund />
        <TopResionraisefund />
        <ExpanpRaisefund />
        <FactRaisefund />
        <FaqRaisefund />

        <Footer2 />
      </>
    </section>
  );
};

export default RaisedFund;
