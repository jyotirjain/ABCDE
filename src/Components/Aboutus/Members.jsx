import React from "react";
import linkeden from "../../Images/linkeden.png";
import prince from "../../Images/Team/prince.png";
import jeet from "../../Images/Team/jeet.png";
import meet from "../../Images/Team/meet.png";
import aakash from "../../Images/Team/aakash.png";
import saloni from "../../Images/Team/saloni.png";

import alisha from "../../Images/Team/alisha.png";
import shweta from "../../Images/Team/shweta.png";
import onkar from "../../Images/Team/onkar.png";
import ninad from "../../Images/Team/ninad.png";
import vikas from "../../Images/Team/vikas.png";
import asiya from "../../Images/Team/asiya.png";
import karan from "../../Images/Team/karan.png";
import abhinav from "../../Images/Team/abhinav.png";
import dhwani from "../../Images/Team/dhwani.png";
import aditya from "../../Images/Team/aditya.png";
import muskan from "../../Images/Team/muskan.png";
import minal from "../../Images/Team/minal.png";

import blank from "../../Images/Team/blank.jpeg";

const Members = () => {
  const dataDigitalBestSeller = [
    {
      linkImg: jeet,
      name: " Jeet Chandan",
      linkedin: "https://www.linkedin.com/in/jeetchandan/",
      position: " Founder and MD",
    },
    {
      linkImg: meet,
      name: " Meet Jain ",
      linkedin: "https://www.linkedin.com/in/meet-jain-552153204/",
      position: " Co-Founder & CEO",
    },
    {
      linkImg: prince,
      name: " Prince D'mello ",
      linkedin: "https://www.linkedin.com/in/princedmello/",
      position: "CTO ",
    },
    {
      linkImg: aakash,
      name: " Aakash Goswami",
      linkedin: "https://www.linkedin.com/in/aakash-goswami-70839595/",
      position: "CGO",
    },
    {
      linkImg: abhinav,
      name: "Abhinav Mishra",
      linkedin: "https://www.linkedin.com/in/abhinav-mishra-b717a7147/",
      position: "Investor Relation Head",
    },
    {
      linkImg: muskan,
      name: "Muskan Agrawal",
      linkedin: "https://www.linkedin.com/in/muskan1997/",
      position: "Company Secretary and Portfolio Manager",
    },
    {
      linkImg: dhwani,
      name: "Dhwani Raithatha",
      linkedin: "",
      position: "Legal / Customer Success Manager ",
    },
    {
      linkImg: aditya,
      name: "Naveen Raikwar ",
      linkedin: "https://www.linkedin.com/in/naveen-raikwar-352173143/",
      position: "Investor Relation",
    },
    {
      linkImg: aditya,
      name: "Bhargav Makwana",
      linkedin: "https://www.linkedin.com/in/bhargav-makwana-253309197/",
      position: "Investor Relation",
    },

    {
      linkImg: aditya,
      name: "Aditya Narkar",
      linkedin: "https://www.linkedin.com/in/aditya-narkar-6a7a6724a/",
      position: "Jr Developer",
    },

    {
      linkImg: aditya,
      name: " Vikas Pawar ",
      linkedin: "https://www.linkedin.com/in/vikas-pawar-587821257/",
      position: " Design Head ",
    },
    {
      linkImg: aditya,
      name: "Mayuresh Khupte",
      linkedin: "",
      position: "Accountant",
    },
  ];

  return (
    <>
      <section className="flex justify-center">
        <div className="w-[100%] md:max-w-[1150px]  flex flex-col items-center md:px-0  pt-[20px] md:pb-[40px] pb-[30px]  font-[Inter]">
          <div className="md:flex md:justify-start w-full ">
            <h4 className="text-[28px] text-[#180048] md:max-w-[1150px]  md:ml-0  font-[400] pb-[23px] leading-[39.2px] ml-2 ">
              Meet the Team
            </h4>
            {/* <h4 className="leading-[24px] md:w-[672px] mx-auto text-[15px] font-[400] text-[#230152] font-[Inter] tracking-[0.2px]">
              Discover the Benefits of Investing with Bizdateup - Your Trusted
              Partner for Start-up Investment. Maximize your Returns with our
              Expertise and Proven Track Record.
            </h4> */}
          </div>
          <div className="w-fit md:w-[1150px] flex flex-col justify-center items-center md:grid sm:grid-cols-2 lg:grid-cols-3 gap-y-5 md:mt-[50px] mx-auto md:mb-[80px] px-2  md:px-0  ">
            {dataDigitalBestSeller.map((item, index) => (
              <div
                key={index}
                className="rounded-[10.76px]  px-[24.75px] w-[100%] md:w-[360px] pb-[35px] bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] md:mb-1 overflow-hidden cursor-pointer	"
              >
                <div className="pt-[24.75px]">
                  <div className="flex justify-between ">
                    <div className="flex items-center">
                      <div className="w-[70px]">
                        <img
                          src={item.linkImg}
                          alt=""
                          className="w-[100%] rounded-[50%]"
                        />
                      </div>
                      <div className="pl-[16.13px]">
                        <h3 className="font-[400] pb-[1.08px] text-[17.21px] font-[Inter] text-[#252525] leading-[25.81px]">
                          {item.name}
                        </h3>
                        <p className="font-[400] font-[Inter] text-[12.91px] leading-[15.12px] text-[#202054]">
                          {item.position}
                        </p>
                      </div>
                    </div>

                    <div className="w-[20px] overflow-hidden">
                      <a href={item.linkedin} target="_blank">
                        <img
                          src={linkeden}
                          alt=""
                          className="flex justify-end w-[100%]"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
