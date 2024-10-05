import React from "react";
import { Route, Routes } from "react-router";
import Dealsterms from "../Components/profile/content/dealsterms";
import Pitch from "../Components/profile/content/pitch";
import Startup from "../Components/profile/content/startup";
import Upload from "../Components/profile/content/upload";
import Profilecontainer from "../Components/profile/profilecontainer";
import Sidebar from "../Components/profile/sidebar";
import Teams from "../Components/profile/content/teams";
import Mentors from "../Components/profile/content/mentors";
import Events from "../Components/profile/content/events";
import Faq from "../Components/profile/content/faq";
import Navbar from "../Components/Navbar1/Navbar1";
import Footer from "../Components/Footer/Footer";
import Footer2 from "../Components/Footer2/Footer2";
import { Helmet } from "react-helmet";

function Profile(user) {
  return (
    <div>
      <Navbar verified={"true"} userType='investor'/>
      <Helmet defer={false}>
        <title>Startup Profile</title>
        <meta name="description" content="Startup Profile description" />
      </Helmet>
      <div className="profile  md:p-[20px] ">
        <div className="w-[85%] md:max-w-[1300px] ">
          <h1>Startup</h1>
          <div className="content flex flex-col gap-y-8  md:flex md:flex-row">
            <Sidebar />
            <Profilecontainer />
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Profile;
