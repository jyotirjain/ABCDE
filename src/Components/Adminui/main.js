import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Investor from "./scenes/investor/investor";
import Masterdata from "./scenes/masterdata/masterdata";
import Startup from "./scenes/startup/startup";
import Accelarator from "./scenes/accelarator/accelarator";
import Offline_payment from "./scenes/offline_payment/offline_payment";
import Startup_update from "./scenes/startup_update/startup_update";
import Redeem from "./scenes/redeem/redeem";
import Membership from "./scenes/membership/membership";
import Events from "./scenes/events/events";
import Broadcast from "./scenes/broadcast/broadcast";

function Main() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <div className="flex w-full relative">
      <Sidebar isSidebar={isSidebar} />
      <main className="w-full h-full">
        <Topbar setIsSidebar={setIsSidebar} />
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="/investor" element={<Investor />} />
          <Route path="/masterdata" element={<Masterdata />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/accelarator" element={<Accelarator />} />
          <Route path="/offline_payment" element={<Offline_payment />} />
          <Route path="/startup_update" element={<Startup_update />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/event" element={<Events />} />
          <Route path="/broadcast" element={<Broadcast />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/form" element={<Form />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/line" element={<Line />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/geography" element={<Geography />} />
        </Routes>
      </main>
    </div>
  );
}

export default Main;
