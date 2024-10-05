import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import logo from "../../assets/images/bizzneeti/Logo wo Title.png";

function Bizznavbar() {
  const [open, setOpen] = useState(false);

  const scrollers = document.querySelectorAll(".scroller");

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }

  function addAnimation() {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
    });
  }

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close the mobile menu after navigation
  };

  return (
    <nav className="fixed z-10 md:flex md:justify-center w-full">
      <div className=" hidden md:flex justify-between w-full max-w-[1280px] h-[60px] rounded-b-[16px] bg-[#4C1145] py-[8px] px-[10px] ">
        <div className="flex gap-3 w-full">
          <div className="bg-[#551D4E] h-fit p-[8px] text-[20px] leading-none rounded-[8px] text-[#fff] font-[600]  ">
            SIC24
          </div>
          <div>
            <img src={logo} className="h-[38px]" />
          </div>
          <div className="h-[43px] rounded-[8px] w-[600px] bg-[#0000001a] flex justify-between p-[1px]">
            <label
              onClick={() => handleNavigation("about")}
              className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]"
            >
              About
            </label>
            {/* <label className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              Benefit
            </label> */}
            <label
              onClick={() => handleNavigation("speakers")}
              className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]"
            >
              Speaker
            </label>
            <label
              onClick={() => handleNavigation("agenda")}
              className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]"
            >
              Agenda
            </label>
            <label
              onClick={() => handleNavigation("tickets")}
              className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]"
            >
              Tickets
            </label>
            {/* <label className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]">
              Our Sponsors
            </label> */}
            <label
              onClick={() => handleNavigation("faq")}
              className="text-[#fff] transition-[background-color] duration-300 ease-[ease-out] hover:bg-[#ffffff0d] hover:rounded-lg text-[12px] tracking-[2px] contrast-[15.2] font-[arial] p-[12px]"
            >
              FAQ
            </label>
          </div>
        </div>

        <div className="flex gap-2 w-1/2 justify-end ">
          <div className="py-[8px] px-[12px] h-[40px] flex items-center bg-[#000] text-[16px] text-[#fff] leading-none font-mono   rounded-[8px] ">
            17 March 2024. The Lalit
          </div>
          <div
            onClick={() => handleNavigation("tickets")}
            className="py-[12px] px-[16px] h-[40px] bg-[#ff7068] text-[16px] text-[#fff] leading-none font-mono rounded-[8px] "
          >
            Register Now
          </div>
        </div>
      </div>
      <div className="flex justify-between md:hidden w-full h-[60px] bg-[#4C1145] py-[8px] px-[20px]">
        <div className=" h-fit p-[8px] text-[20px] leading-none rounded-[8px] text-[#fff] font-[600]  ">
          SIC24
        </div>
        <div
          onClick={() => handleNavigation("tickets")}
          className="py-[12px] px-[16px] h-[40px] bg-[#ff7068] text-[14px] text-[#fff] leading-none font-mono rounded-[8px] "
        >
          Register Now
        </div>
        <div className="bg-[#551D4E] h-fit p-[8px] text-[20px] leading-none rounded-[8px] text-[#fff] font-[600] ">
          <RxHamburgerMenu onClick={() => setOpen(!open)} />
        </div>
      </div>
      {/* <div className="bg-[#000000] scroller ">
        <ul className="scroller__list">
          <li className="text-[#fff] font-[arial] text-[10px]">
            Inc Fintech Startup
          </li>
          <li className="text-[#fff] font-[arial] text-[10px]">
            Inc Fintech Startup
          </li>
          <li className="text-[#fff] font-[arial] text-[10px]">
            Inc Fintech Startup
          </li>
        </ul>
      </div> */}
      <div
        className={
          open
            ? " md:hidden fixed w-full h-screen bottom-0 top-[60px] bg-[#4C1145] ease-in-out z-[500] duration-500"
            : "fixed bottom-[-100%]"
        }
      >
        <div className="flex flex-col px-[20px] pb-[30px] h-[90%] justify-end gap-4">
          <button
            onClick={() => handleNavigation("about")}
            className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]"
          >
            About
          </button>
          {/* <button className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]">
            Benefit
          </button> */}
          <button
            onClick={() => handleNavigation("speakers")}
            className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]"
          >
            Speakers
          </button>
          <button
            onClick={() => handleNavigation("agenda")}
            className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]"
          >
            Agenda
          </button>
          <button
            onClick={() => handleNavigation("tickets")}
            className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]"
          >
            Tickets
          </button>
          {/* <button className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]">
            Our Sponsors
          </button> */}
          <button
            onClick={() => handleNavigation("faq")}
            className="w-full py-4 text-[#fff] bg-[#ffffff0d] rounded-[10px] text-[14px]"
          >
            FAQ
          </button>
          <div className="w-full py-4 text-[#fff] flex text-[14px] gap-2 justify-center">
            <a
              target="_black"
              href="https://www.facebook.com/Bizdateuptechnologies"
              className="w-[40px] h-[40px] rounded bg-[#ffffff0d] p-[8px] flex justify-center items-center "
            >
              <FaFacebookF size={15} />
            </a>
            <a
              target="_black"
              href="https://www.instagram.com/bizdateup"
              className="w-[40px] h-[40px] rounded bg-[#ffffff0d] p-[8px] flex justify-center items-center "
            >
              <RiInstagramFill size={15} />
            </a>
            <a
              target="_black"
              href="https://www.linkedin.com/company/bizdateup/mycompany/"
              className="w-[40px] h-[40px] rounded bg-[#ffffff0d] p-[8px] flex justify-center items-center "
            >
              <FaLinkedin size={15} />
            </a>
            <a
              target="_black"
              href="https://www.youtube.com/@bizdateup8281"
              className="w-[40px] h-[40px] rounded bg-[#ffffff0d] p-[8px] flex justify-center items-center "
            >
              <FaYoutube size={15} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Bizznavbar;
