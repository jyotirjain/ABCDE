import React from "react";
import pratap from "../../assets/images/bizzneeti/Mahavir_Pratap_Sharma-removebg-preview.png";
import arun from "../../assets/images/bizzneeti/arjun_vaidya-removebg-preview.png";
import ashish from "../../assets/images/bizzneeti/Ashish_Fafadia-removebg-preview.png";
import meet from "../../assets/images/bizzneeti/MEET-removebg-preview.png";
import jeet from "../../assets/images/bizzneeti/JEET__1_-removebg-preview.png";
import utpal from "../../assets/images/bizzneeti/Utpal_Doshi__1_-removebg-preview.png";
import siddharth from "../../assets/images/bizzneeti/Pic_-_Sid__-_Siddharth_Sirigeri-removebg-preview.png";
import amit from "../../assets/images/bizzneeti/amit.png";
import aditya from "../../assets/images/bizzneeti/DSC_0062-03-removebg-preview.png";
import jeevika from "../../assets/images/bizzneeti/1655495950697-removebg-preview.png";
import kushal from "../../assets/images/bizzneeti/kushal.png";
import unknown from "../../assets/images/bizzneeti/2922506-removebg-preview.png";
import { FaLinkedin } from "react-icons/fa";

function Speakers() {
  return (
    <div
      id="speakers"
      className="bg-[#4C1145] py-[60px] px-[20px] md:py-[80px] md:px-[40px] flex flex-col items-center justify-center"
    >
      <h2 className="text-[60px] text-[#fff] font-[700] font-[Eina01] ">
        Speakers
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:max-w-[1280px] w-fit gap-6 gap-y-7 md:gap-8 mt-[80px]">
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            <img src={pratap} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal  flex justify-between">
              Mahavir Pratap Sharma{" "}
              <a
                href="https://www.linkedin.com/in/mahavir-pratap-sharma-26476915"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Chairman
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px]  md:text-[16px]">
              TiE India Angels and RAIN (Rajasthan Angels)
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px] ">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={arun} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Arjun Vaidya
              <a
                href="https://www.linkedin.com/in/arjunvaidya/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Co-Founder
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              V3 Ventures
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={ashish} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Ashish Fafadia
              <a
                href="https://www.linkedin.com/in/ashish-fafadia-4a7a415/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Partner
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Partner at Blume Ventures
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md">
            {" "}
            <img src={meet} alt="" className="ml-2" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Meet Jain
              <a
                href="https://www.linkedin.com/in/meetashokjain/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              CEO
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Bizdateup Technology Pvt Ltd
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={jeet} alt="" className="ml-2 h-[95%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Jeet Chandan
              <a
                href="https://www.linkedin.com/in/jeetchandan/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Managing Director
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Bizdateup Technology Pvt Ltd
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={utpal} alt="" className="ml-2 h-[90%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Utpal Doshi
              <a
                href="https://www.linkedin.com/in/utpal-doshi-a5707713/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Partner
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Partner at 100X.VC
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={siddharth} alt="" className="ml-2 h-[100%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Siddhart Sirigeri
              <a
                href="https://linkedin.com/in/siddharth-sirigeri"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Managing General Partner
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Endurance Capital
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={amit} alt="" className="ml-2 h-[100%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Amit Kumar
              <a
                href="https://www.linkedin.com/in/amit-d-kumar-30436a10/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Co-founding Partner
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              ah! Ventures Fund
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={aditya} alt="" className="ml-2 h-[100%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Aditya Arora
              <a href="https://www.linkedin.com/in/thefaadguy/" target="_blank">
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              CEO
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              Faad Network Pvt. Ltd
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={jeevika} alt="" className="ml-2 h-[95%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Jeevika Tyagi
              <a
                href="https://www.linkedin.com/in/jeevikatyagi/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Co-Founder & CEO
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              aastey
            </div>
          </div>
        </div>
        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end">
            {" "}
            <img src={kushal} alt="" className="ml-2 h-[95%]" />
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal flex justify-between ">
              Kushal Lodha
              <a
                href="https://www.linkedin.com/in/kushallodha548/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              Founder
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              KAGR
            </div>
          </div>
        </div>

        <div className="md:w-[290px]  md:h-[409px] h-[270px]">
          <div className=" md:w-[290px] aspect-square bg-[#FF706B] rounded-md flex items-end relative">
            <img src={unknown} alt="" className="ml-2 h-[90%]" />{" "}
            <div className="absolute inset-0 flex items-center justify-center w-full h-full  bg-opacity-80 backdrop-blur blur-[5px] p-4 rounded-md"></div>
            <div className="absolute w-fit h-fit z-10 top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4 ">
              <label className="text-[24px] text-[#4C1145] font-[600] text-center ">
                Coming
                <br /> Soon...
              </label>
            </div>
          </div>{" "}
          <div className="pt-4">
            <h3 className="text-white font-[Eina01] text-[14px] md:text-[16px] font-normal ">
              -
            </h3>
            <p className="text-[#ffffff80] font-[arial] text-[14px] md:text-[16px] ">
              -
            </p>
            <div className="text-[#FF706B] font-[arial] text-[14px] md:text-[16px]">
              -
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Speakers;
