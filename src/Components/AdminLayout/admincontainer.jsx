import React from "react";
import { Route, Routes } from "react-router";
import Statistics from "./Statistics";
import MasterData from "./MasterData";
import Invester from "./Invester";
import Startup from "./Startup";
import Accelarators from "./Accelarators";
import Oflinepayment from "./Oflinepayment";
import Events from "./Events";

import Startup_update from "./Startup_update";
import "./Admin.css";
import Redeem from "./Redeem";
import Membership from "./Membership";
import Blogcast from "./Blogcast";

const Admincontainer = () => {
  return (
    <div className="admin-container">
      <Routes>
        <Route path="/" element={<Statistics />} />
        <Route path="/invester" element={<MasterData />} />
        <Route path="/master_data" element={<Invester />} />
        <Route path="/startups" element={<Startup />} />
        <Route path="/accelarators" element={<Accelarators />} />
        <Route path="/ofline_payment" element={<Oflinepayment />} />
        <Route path="/events" element={<Events />} />
        <Route path="/redeem" element={<Redeem />} />

        <Route path="/startup_update" element={<Startup_update />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/broadcast" element={<Blogcast />} />
      </Routes>
    </div>
  );
};

export default Admincontainer;
