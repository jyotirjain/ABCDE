import React from "react";
import logo from "../../assets/images/bizzneeti/Logo wo Title.png";

function Bizzfooter() {
  return (
    <div className=" bg-[#000000] py-[80px] px-[40px] flex justify-center  items-center flex-col ">
      <div className="w-full max-w-[1280px] efooter py-[40px] px-[56px] rounded-[16px] h-full min-h-[450px] flex flex-col-reverse items-center justify-between">
        <h1 className=" text-[30px] text-center md:text-[80px] text-[#fff] font-[700] font-[Eina01] leading-[33px] md:leading-[85px]">
          Startup <br />
          Investors <br />
          Conclave'24
        </h1>
        <img src={logo} className="w-[270px]" />
      </div>
      <div className=" flex justify-center">
        <p className="text-[#fff] max-w-[700px] text-center mt-4">
          For any support, please mail to support@bizdateup.com. Our support
          team will get back to you within 24 hours. The brands and companies
          that the instructors of Bizdateup are working or <br /> have worked,
          have no relation what so ever with Bizdateup.
          <br /> This site is not a part of the Facebook website or Facebook
          Inc. Additionally, This site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc.
          <br />
          <br /> 2023 © Bizdateup Technologies Pvt Ltd. All Copyrights reserved.
        </p>
      </div>
    </div>
  );
}

export default Bizzfooter;
