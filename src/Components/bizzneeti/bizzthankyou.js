import React from "react";
import Bizznavbar from "./bizznavbar";
import Bizzfooter from "./bizzfooter";
import thankyou from "../../assets/images/bizzneeti/download (7) 1.png";
import { Helmet } from "react-helmet";

function Bizzthankyou() {
  return (
    <div>
      <Helmet>
       
      </Helmet>
      <Bizznavbar />
      <div className="flex justify-center py-[60px] px-[40px]">
        <div className="w-full max-w-[1280px] bg-[#4C1145] p-[20px] mt-6 rounded-xl h-[700px] flex flex-col justify-center items-center">
          <img src={thankyou} className=" w-[200px] md:w-[300px]" />
          <h2 className=" text-[25px] md:text-[30px] font-[500] text-[#fff] text-center  ">
            Form Is Submitted Successfully
          </h2>
          <p className=" text-[18px] md:text-[25px] font-normal text-[#fff] text-center ">
            Your form has submitted we will review your and get back to you,
            Thankyou
          </p>
        </div>
      </div>
      <Bizzfooter />{" "}
    </div>
  );
}

export default Bizzthankyou;
