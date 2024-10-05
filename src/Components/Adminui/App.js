import { useState } from "react";
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
import Login from "./scenes/authentication/login";
import Main from "./main";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="/auth/*" element={<Login />} />
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
