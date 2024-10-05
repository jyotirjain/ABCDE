import Contactus from "./Components/contactus/contactus";
import Login from "./Components/login/login";
import Otp from "./Components/otp_page/otp";
import Signup from "./Components/signup/signup";
import Startuplogin from "./Components/startup-auth/startuplogin";
import Startupotp from "./Components/startup-auth/startupotp";
import Startupsignup from "./Components/startup-auth/startupsignup";
import Startupform from "./Components/startupform/startupform";
import Privpolicy from "./Components/Static pages/privpolicy";
import Cancelpolicy from "./Components/Static pages/cancelpolicy";
import Refundpolicy from "./Components/Static pages/refundpolicy";
import Riskinvest from "./Components/Static pages/riskinvest";
import Terms from "./Components/Static pages/terms";
import Profile from "./layout/profile";
import Startupdashb from "./layout/startupdashb";
import Layout1 from "./Components/Layout1/Layout1";
import Pitch from "./Components/profile/content/pitch";
import Accelarator from "./layout/accelarator";
import LayoutProfile from "./Components/Profile_layout/LayoutProfile";
import Statistics from "./Components/AdminLayout/Statistics";
import MasterData from "./Components/AdminLayout/MasterData";
import Invester from "./Components/AdminLayout/Invester";
import Startup from "./Components/AdminLayout/Startup";
import Accelarators from "./Components/AdminLayout/Accelarators";
import PrinceDashboard from "./Components/PrinceDashboard/LiveCapmpaings/PrinceDashboard";
import Error from "./layout/error";
import Thankyou from "./layout/thankyou";
import Faq from "./Components/Faq/faq";
import Approve from "./layout/approve";
import Payment from "./layout/payment";
import Layout2 from "./Components/Layout2/Layout2";
import Portfolio from "./layout/portfolio";
import AdminLayout from "./Components/AdminLayout/AdminLayout";
import Explore from "./layout/explore";
import News from "./layout/news";
import Raisefunds from "./layout/raisefunds";
import Startupdetails from "./layout/startupdetails";
import Offlinepayment from "./Components/paymentpages/offlinepayment";
import Gst from "./Components/calculators/gst";
import Equity from "./Components/calculators/equity";
import Equitydilution from "./Components/calculators/equitydilution";
import Sit from "./Components/calculators/sit";
import Onlinepayment from "./Components/paymentpages/onlinepayment";
import StartupOfflinepayment from "./Components/StartupDetail/OflinePayments";
import StartupOnlinepayment from "./Components/StartupDetail/OnlinePayments";
import StartupPdf from "./Components/StartupDetail/Pdf";
import StartupDetails from "./Components/StartupDetail/StartupDetail";
import Unauthorized from "./Components/error/unauthorized";
import AdminLogin from "./Components/AdminLayout/AdminloginWithPassword";
import Drop from "./Components/cashfreedrop/drop";
import Empequity from "./Components/calculators/empequity";
import Investmentportfolio from "./Components/calculators/investmentportfolio";
import Dcf from "./Components/calculators/dcf";
import Mmm from "./Components/calculators/mmm";
import Scorecard from "./Components/calculators/scorecard";
import Revenuegrowth from "./Components/calculators/revenuegrowth";
import Ventureroi from "./Components/calculators/ventureroi";
import Captable from "./Components/calculators/captable";
import Convertible from "./Components/calculators/convertible";
import Cashflow from "./Components/calculators/cashflow";
import Breakeven from "./Components/calculators/breakeven";
import Eic from "./Components/calculators/eic";
import Investmentreturn from "./Components/calculators/investmentreturn";
import Burnrate from "./Components/calculators/burnrate";
import Debttoequity from "./Components/calculators/debttoequity";
import Roi from "./Components/calculators/roi";
import Termsheet from "./Components/calculators/termsheet";
import Ebitda from "./Components/calculators/ebitda";
import Irr from "./Components/calculators/irr";
import Blog from "./Components/blog/blog";
import Resource from "./Components/resouces/resource";
import Berkus from "./Components/calculators/berkus";
import Blogpage from "./Components/blog/blogpage";
import Noportfolio from "./Components/portfolio/noportfolio";
import Press from "./Components/press/press";
import AboutUs from "./Components/Aboutus/AboutUs";
import Learn from "./layout/learn";
import Startupapprove from "./Components/startupform/startupapprove";
import RaisedFund from "./Components/RaisedFund/RaisedFund";
import Redirector from "./Components/redirector/redirect";
import ReferRedirector from "./Components/redirector/referal";
import Closeddeals from "./Components/closed_deals/closeddeals";
import Startupupdate from "./Components/Startupupdate/startupupdate";
import Updatedetail from "./Components/Startupupdate/updatedetail";
import Transaction from "./Components/transactions/transaction";
import Referandearn from "./layout/referandearn";
import Portfolio2 from "./layout/portfolio2";

import PortfolioTester from "./layout/pdfTester";

import Report from "./Components/portfolio2/report/report";
import Shipeanddelivery from "./Components/Static pages/shipeanddelivery";
import Ordersummary from "./Components/Static pages/ordersummary";
import Events from "./Components/Events/events";
import Eventsdetails from "./Components/Events/eventsdetails";
import LoaderApi from "./Components/LoaderApi/LoaderApi";
// import Adminui from "./Components/Adminui/App";
import RedirectToCalendly from "./calendly";
import Bizzneeti from "./layout/bizzneeti";
import StartupForm from "./Components/bizzneeti/startupForm";
import Bizzthankyou from "./Components/bizzneeti/bizzthankyou";
import Bizzthankyou2 from "./Components/bizzneeti/bizzthankyou2";

export const protectedRoutesAdmin = [
  //admin
  {
    path: "/statistics",
    component: <Statistics />,
  },
  {
    path: "/master_data",
    component: <MasterData />,
  },
  {
    path: "/invester",
    component: <Invester />,
  },
  {
    path: "/startups",
    component: <Startup />,
  },

  { path: "/admin/*", component: <AdminLayout /> },
  // { path: "/ofline_payment", component: <Startup /> },
  // { path: "/e-sign", component: <Startup /> },
  // { path: "/events", component: <Startup /> },
];

export const protectedRoutesStartup = [
  //startup
  {
    path: "/Startup/form",
    component: <Startupform />,
  },
  {
    path: "/Startup/dashboard",
    component: <Startupdashb />,
  },
  {
    path: "/Startup/Accelarator/*",
    component: <Accelarator />,
  },
  { path: "/ofline_payment", component: <Startup /> },
  { path: "/e-sign", component: <Startup /> },
  { path: "/pitch", component: <Pitch /> },
  {
    path: "/events",
    component: <Startup />,
  },
  {
    path: "/startup/profile/*",
    component: <Profile />,
    unAuthComp: <Unauthorized data="startup" url="/Profile" />,
  },
];
export const protectedRoutesInvestor = [
  {
    path: "/startup/startupofflinepayment",
    component: <StartupOfflinepayment />,
  },

  {
    path: "/startup/startuponlinepayment",
    component: <StartupOnlinepayment />,
  },
  { path: "/startup/startuponPdf", component: <StartupPdf /> },
  {
    path: "/startup/startupondetails/:startData",
    component: <StartupDetails />,
  },
  { path: "/investor/dashboard", component: <PrinceDashboard /> },
  { path: "/payment", component: <Payment /> },
  { path: "/Onlinepayment", component: <Onlinepayment /> },
  { path: "/Offlinepayment", component: <Offlinepayment /> },
  { path: "/invest/*", component: <Explore /> },
  { path: "/investnow/*", component: <Payment /> },
  { path: "/portfolio2", component: <Portfolio /> },
  { path: "/portfolio", component: <Portfolio2 /> },
  {
    path: "/layoutprofile/*",
    component: <LayoutProfile />,
    unAuthComp: <Unauthorized data="investor" />,
  },

  { path: "/refer-and-earn", component: <Referandearn /> },
  //commmon
];
export const loggedinInvestorroutes = [
  { path: "/", component: <Layout2 /> },
  { path: "/Login", component: <Login /> },
];

export const loggedinStartuproutes = [
  { path: "/", component: <Layout2 /> },
  { path: "/Startup/login", component: <Startuplogin /> },
];

export const unProtectedRoutes = [
  //admin

  { path: "/Admin/login", component: <AdminLogin /> },

  { path: "/Report", component: <Report /> },

  { path: "/:redirect", component: <ReferRedirector /> },

  // { path: "/startup/startupondetails/offline/:startData", component: <StartupDetails /> },
  // { path: "/startup/startupondetails/offlinepayment/:startData", component: <StartupDetails /> },
  //startup

  {
    path: "/accelarators",
    component: <Accelarators />,
  },

  { path: "/Startup/signup", component: <Startupsignup /> },

  { path: "/Startup/otp/:id", component: <Startupotp /> },
  //investor
  { path: "/signup", component: <Signup /> },

  { path: "/Otp/:id", component: <Otp /> },

  {
    path: "/Startup/Accelarator/*",
    component: <Accelarator />,
  },
  {
    path: "/pdfTester",
    component: <PortfolioTester />,
  },
  {
    path: "/Startup/Accelarator/*",
    component: <Accelarator />,
  },

  //commmon

  { path: "/privacy_policy", component: <Privpolicy /> },
  { path: "/cancel_policy", component: <Cancelpolicy /> },
  { path: "/refund_policy", component: <Refundpolicy /> },
  { path: "/risk_investment", component: <Riskinvest /> },
  { path: "/terms_of_use", component: <Terms /> },
  { path: "/shipanddelivery", component: <Shipeanddelivery /> },
  { path: "/ordersummary", component: <Ordersummary /> },
  { path: "/Contactus", component: <Contactus /> },
  { path: "/unauthorized", component: <Unauthorized /> },
  { path: "/noportfolio", component: <Noportfolio /> },
  { path: "/press", component: <Press /> },
  { path: "/learn/*", component: <Learn /> },
  { path: "/calculators/gst_calculators", component: <Gst /> },
  { path: "/calculators/equity_calculator", component: <Equity /> },
  {
    path: "/calculators/equity_dilution_calculator",
    component: <Equitydilution />,
  },
  { path: "/calculators/startup_investment_calculator", component: <Sit /> },
  { path: "/calculators/equity_investment_calculator", component: <Eic /> },
  {
    path: "/calculators/Investment_return_calculator",
    component: <Investmentreturn />,
  },
  { path: "/calculators/venture_roi_calculator", component: <Ventureroi /> },
  {
    path: "/calculators/revenue_growth_calculator",
    component: <Revenuegrowth />,
  },
  { path: "/calculators/Burn_rate_calculator", component: <Burnrate /> },
  {
    path: "/calculators/Debt_to_equity_calculator",
    component: <Debttoequity />,
  },
  { path: "/calculators/Employee_equity_calculator", component: <Empequity /> },
  {
    path: "/calculators/Investment_portfolio_calculator",
    component: <Investmentportfolio />,
  },
  { path: "/calculators/discounted_cash_flow_calculator", component: <Dcf /> },
  {
    path: "/calculators/market_multiple_method_calculator",
    component: <Mmm />,
  },
  { path: "/calculators/scorecard_calculator", component: <Scorecard /> },
  { path: "/calculators/berkus_calculator", component: <Berkus /> },
  { path: "/calculators/cap_table_calculator", component: <Captable /> },
  {
    path: "/calculators/convertible_note_calculator",
    component: <Convertible />,
  },
  { path: "/calculators/Term_sheet_calculator", component: <Termsheet /> },
  { path: "/calculators/irr_calculator", component: <Irr /> },
  { path: "/calculators/ebitda_calculator", component: <Ebitda /> },
  { path: "/calculators/cash_flow_calculator", component: <Cashflow /> },
  { path: "/calculators/break_even_calculator", component: <Breakeven /> },
  { path: "/calculators/roi_calculator", component: <Roi /> },
  { path: "/about-us", component: <AboutUs /> },
  { path: "/closed-deals", component: <Closeddeals /> },
  { path: "/Startup_update", component: <Startupupdate /> },
  { path: "/socialLogin", component: <Redirector /> },
  { path: "/blogs", component: <Blog /> },
  { path: "/blogs/:title", component: <Blogpage /> },
  { path: "/calculators", component: <Resource /> },
  { path: "/news", component: <News /> },
  { path: "/aboutus", component: <AboutUs /> },
  { path: "/raisefund", component: <RaisedFund /> },
  { path: "/startupname", component: <Startupdetails /> },
  { path: "/faq", component: <Faq /> },
  { path: "/approve", component: <Approve /> },
  { path: "/startup/wait-for-approve", component: <Startupapprove /> },
  { path: "/thankyou", component: <Thankyou /> },

  { path: "/startup_update_details/:id", component: <Updatedetail /> },
  { path: "/transaction_history", component: <Transaction /> },
  { path: "/paymentDrop", component: <Drop /> },

  { path: "/noportfolio", component: <Noportfolio /> },
  { path: "*", component: <Error /> },
  { path: "/events", component: <Events /> },
  { path: "/events/:title", component: <Eventsdetails /> },
  // { path: "/loader", component: <LoaderApi /> },
  // { path: "/adminui/*", component: <Adminui /> },
  {
    path: "/cto/",
    component: <RedirectToCalendly />,
  },
  { path: "/sic24", component: <Bizzneeti /> },
  { path: "/sic24/startup_form", component: <StartupForm /> },
  { path: "/sic24/startup/thankyou", component: <Bizzthankyou /> },
  { path: "/sic24/thankyou", component: <Bizzthankyou2 /> },
];
