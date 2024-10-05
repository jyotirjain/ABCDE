import React from "react";
import "../../assets/css/styles.css";
import { Route, Routes } from "react-router";
import Dealsterms from "./content/dealsterms";
import Events from "./content/events";
import Faq from "./content/faq";
import Mentors from "./content/mentors";
import Pitch from "./content/pitch";
import Startup from "./content/startup";
import Teams from "./content/teams";
import Upload from "./content/upload";

function Profilecontainer() {
  return (
    <div className="profile-container w-full md:w-[75%] h-fit md:ml-[50px]  ">
      <Routes>
        <Route path="/" element={<Startup />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/dealsterms" element={<Dealsterms />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default Profilecontainer;
