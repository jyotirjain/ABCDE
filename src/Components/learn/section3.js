import React from "react";
import { FaYoutube } from "react-icons/fa";
import Bytes from "./content/bytes";
import { Link, Route, Routes } from "react-router-dom";

function Section3() {
  return (
    <div className="bg-[#F6F6FE] p-12 mb-12">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center w-full">
          <Routes>
            <Route path="/" element={<Bytes />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Section3;