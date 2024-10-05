import React from "react";
import "./App.css";
import jwt_decode from "jwt-decode";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  unProtectedRoutes,
  protectedRoutesAdmin,
  protectedRoutesStartup,
  protectedRoutesInvestor,
  loggedinInvestorroutes,
  loggedinStartuproutes,
} from "./routes";
import NotFound from "./Components/error/notfound";
import { ToastContainer } from "react-toastify";

function PrivateRoute({ children, role }) {
  const token = localStorage.getItem(
    `token${role.charAt(0).toUpperCase() + role.slice(1)}`
  );
  const isAuthenticated = token !== null;
  const redirectTo =
    role === "admin"
      ? "/Admin/login"
      : role === "startup"
      ? "/Startup/login"
      : "/login";

  if (isAuthenticated) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (currentTime > decodedToken.exp) {
      localStorage.removeItem(
        `token${role.charAt(0).toUpperCase() + role.slice(1)}`
      );
      return <Navigate to={redirectTo} />;
    }
    return children;
  }
  return <Navigate to={redirectTo} />;
}

function RedirectRoute({ children, role }) {
  const token = localStorage.getItem(
    `token${role.charAt(0).toUpperCase() + role.slice(1)}`
  );
  const isAuthenticated = token !== null;
  const redirectTo =
    role === "admin"
      ? "/Admin/dashboard"
      : role === "startup"
      ? "/Startup/dashboard"
      : "/investor/dashboard";

  if (isAuthenticated) {
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if (currentTime > decodedToken.exp) {
      localStorage.removeItem(
        `token${role.charAt(0).toUpperCase() + role.slice(1)}`
      );
      // return <Navigate to={redirectTo} />;
      return children;
    }
    return <Navigate to={redirectTo} />;
  }
  return children;
  // return <Navigate to={redirectTo} />;
}

function App() {
  return (
    <div className="app">
      <div className="w-full">
        {/* <Router> */}
        <Routes>
          {unProtectedRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}

          {protectedRoutesStartup.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute role="startup">{route.component}</PrivateRoute>
              }
            />
          ))}

          {protectedRoutesAdmin.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute role="admin">{route.component}</PrivateRoute>
              }
            />
          ))}

          {protectedRoutesInvestor.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute role="investor">{route.component}</PrivateRoute>
              }
            />
          ))}

          {loggedinInvestorroutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <RedirectRoute role="investor">{route.component}</RedirectRoute>
              }
            />
          ))}

          {loggedinStartuproutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <RedirectRoute role="startup">{route.component}</RedirectRoute>
              }
            />
          ))}

        

          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* </Router> */}
        <ToastContainer position="bottom-right" />
        <div></div>
      </div>
    </div>
  );
}

export default App;
