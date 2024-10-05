import React, { useState, useEffect } from "react";
import referimg from "../../assets/images/refer/referimg.svg";
import {
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { MdContentCopy } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { toast } from "react-toastify";

function Refer({ data, investor, startup, comission, withdrawTotal }) {
  const [copiedText, setCopiedText] = useState("");

  const handleCopy = (text) => {
    try {
      navigator.clipboard.writeText(text);
      setCopiedText(text);
      toast.success("Successfully copied to clipboard");
    } catch (error) {}
  };

  // Function to share the referral link on WhatsApp
  const shareOnWhatsApp = (to) => {
    const referralLink = `${process.env.REACT_APP_BASE_URL}/${
      to + data.referal_code
    }`;
    const message = `Check out this referral link: ${referralLink}`;
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
    );
  };

  // Function to share the referral link on Instagram
  const shareOnInstagram = (to) => {
    const referralLink = `${process.env.REACT_APP_BASE_URL}/${
      to + data.referal_code
    }`;
    const message = `Check out this referral link: ${referralLink}`;
    window.open(
      `https://www.instagram.com/messages/compose?text=${encodeURIComponent(
        message
      )}`
    );
  };

  // Function to share the referral link on LinkedIn
  const shareOnLinkedIn = (to) => {
    const referralLink = `${process.env.REACT_APP_BASE_URL}/${
      to + data.referal_code
    }`;
    const message = `Check out this referral link: ${referralLink}`;
    window.open(
      `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        referralLink
      )}&title=Referral Link&summary=${encodeURIComponent(
        message
      )}&source=${encodeURIComponent(process.env.REACT_APP_BASE_URL)}`
    );
  };

  // Function to share the referral link via email
  const shareViaEmail = (to) => {
    const referralLink = `${process.env.REACT_APP_BASE_URL}/${
      to + data.referal_code
    }`;
    const subject = "Check out this referral link!";
    const body = `Hi,\n\nI wanted to share this referral link with you: ${referralLink}\n\nRegards,\nYour Friend`;
    window.open(
      `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`
    );
  };

  return (
    <div className=" bg-[#ffffff] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)] rounded-[10px] p-4 md:p-8">
      <div className="mb-[20px] ">
        <h2 className="text-[#252525] text-xl not-italic font-normal leading-[100%] font-[Inter]">
          Refer and Earn Program{" "}
        </h2>
        <p className="text-[#828F99] text-[14px] md:text-base not-italic font-normal leading-[100%] font-[Inter] mt-[10px]">
          Refer your family and friends to Bizdateup and get commission on every
          investments they make.
        </p>
      </div>

      <div className="referdetails ">
        <div className="bg-[#9797FE] shadow-[0px_0.9943981766700745px_11.932777404785156px_0px_rgba(0,0,0,0.15)] rounded-[9.25px] w-full md:w-[47%]">
          <div className="refer-box py-[25px] px-5">
            <div className="flex gap-6">
              <div className="imgcircle">
                <img src={referimg} alt="img" />
              </div>
              <div className="">
                <label className="refercount mt-[20px]">
                  ₹ {parseFloat(comission.investorCommission).toFixed(2)}
                </label>
                <p className="">Investor commission</p>
              </div>
            </div>
            <div className="w-full mt-4 md:mt-6 mb-3 md:mb-4 border-[1px]  border-dashed border-[#e1e1e1]" />
            <div
              className="flex flex-col gap-5
            .000 md:gap-4 items-center"
            >
              <div className="referlink">
                <label>{data?.referal_code}</label>
                <MdContentCopy
                  onClick={() =>
                    handleCopy(
                      `${process.env.REACT_APP_BASE_URL}/in${data.referal_code}`
                    )
                  }
                />
              </div>
              <div className="flex text-[#9797FE] w-[40%] justify-between">
                <IoMail size={22} onClick={() => shareViaEmail("in")} />
                <IoLogoWhatsapp
                  size={22}
                  onClick={() => shareOnWhatsApp("in")}
                />
                <FaLinkedin size={22} onClick={() => shareOnLinkedIn("in")} />
                <FaInstagramSquare
                  size={22}
                  onClick={() => shareOnInstagram("in")}
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center h-[30px] w-full bg-[#9797FE] rounded-b-[9.25px] rounded-t-[-100px]  text-white text-sm not-italic font-normal leading-[100%] font-[Inter] px-4  ">
            {investor?.length} Referred Investers
          </div>{" "}
        </div>

        <div className="bg-[#9797FE] shadow-[0px_0.9943981766700745px_11.932777404785156px_0px_rgba(0,0,0,0.15)] rounded-[9.25px] w-full md:w-[47%]">
          <div className="refer-box py-5 md:py-[25px] px-3 md:px-5">
            <div className="flex gap-6">
              <div className="imgcircle">
                <img src={referimg} alt="img" />
              </div>
              <div className="">
                <label className="refercount mt-[20px]">
                  ₹ {parseFloat(comission.startupCommission).toFixed(2)}
                </label>
                <p className="">Startup commission</p>
              </div>
            </div>
            <div className="w-full mt-4 md:mt-6 mb-3 md:mb-4 border-[1px]  border-dashed border-[#e1e1e1]" />
            <div className="flex flex-col gap-5 md:gap-4 items-center">
              <div className="referlink">
                <label>{data?.referal_code}</label>
                <MdContentCopy
                  onClick={() =>
                    handleCopy(
                      `${process.env.REACT_APP_BASE_URL}/su${data.referal_code}`
                    )
                  }
                />
              </div>
              <div className="flex text-[#9797FE] w-[40%] justify-between">
                <IoMail size={22} onClick={() => shareViaEmail("su")} />
                <IoLogoWhatsapp
                  size={22}
                  onClick={() => shareOnWhatsApp("su")}
                />
                <FaLinkedin size={22} onClick={() => shareOnLinkedIn("su")} />
                <FaInstagramSquare
                  size={22}
                  onClick={() => shareOnInstagram("su")}
                />
              </div>
            </div>
          </div>
          <div className=" flex items-center h-[30px] w-full bg-[#9797FE] rounded-b-[9.25px] rounded-t-[-100px]  text-white text-sm not-italic font-normal leading-[100%] font-[Inter] px-4  ">
            {startup?.length} Referred Startups
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Refer;
