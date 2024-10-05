import { green } from "@mui/material/colors";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Tickets() {
  const navigate = useNavigate();

  return (
    <div
      id="tickets"
      className="bg-[#fff] md:py-[80px] md:px-[40px] flex flex-col items-center justify-center "
    >
      <div className="max-w-[1280px] w-full flex justify-center py-[40px] bg-[#4C1145] md:rounded-[16px] ">
        <h2 className="text-[#fff] text-[60px] font-[Eina01] font-[700] uppercase  ">
          tickets
        </h2>{" "}
      </div>
      <div className="bg-[#1A0C18] max-w-[1280px] w-full md:rounded-[16px] overflow-hidden  mt-4 ">
        <div className="w-full h-[60px] bg-[#4C1145]  "></div>
        <div className="flex justify-center">
          <div className="p-[20px] flex flex-col items-center md:grid md:grid-cols-3 w-fit justify-center gap-6 ">
            <div className="bg-[#ffffff] max-w-[340px] w-full h-full rounded-[16px] p-[28px] ">
              <div className="flex">
                <div>
                  <div className="py-1 px-2 bg-[#333333] text-[10px] font-mono tracking-[2px] w-fit text-white uppercase rounded-[5px] ">
                    Only 2 Slot remaining
                  </div>
                  <div className="text-[28px] font-[Eina01, sans] text-[#1a1725] font-[600] leading-[1.2] py-3">
                    General Pass
                  </div>
                  <label className="text-[20px] font-[Eina01, sans] text-[#1a1725] font-[400] leading-[1.2] py-3 ">
                    The perfect plan for those looking to raise investor funds.
                  </label>
                  <div className="flex gap-2 items-center mt-4">
                    <div className="text-[48px] flex text-[#ff706b] font-[arial]  font-[700] ">
                      ₹2,499<sup className="text-[10px] mt-6 ">+GST</sup>
                    </div>
                  </div>
                  <ul className=" flex flex-col text-[18px] gap-2">
                    <li className="flex gap-2 items-start w-full">
                      <RxCross2 color="red" size={20} />
                      Direct pitch to Investors
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <RxCross2 color="red" size={20} /> VIP and Speaker Lounge
                      Access
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <RxCross2 color="red" size={20} />5 star arrangements for{" "}
                      <br />
                      Lunch & High-Tea
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" /> Identified as an Individual
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" />
                      Opportunity to Invest in <br />
                      Pitching Startup
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />
                      Networking coffee breaks
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" /> Personal marketing & branding
                    </li>

                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />
                      Networking meet with Startups
                    </li>
                  </ul>
                  <a href="https://rzp.io/l/KhMuPcn" target="_blank">
                    <button className="w-full py-2 mt-2   border-[1px] border-[#000] rounded-[20px]">
                      Book Ticket
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#ffffff] max-w-[340px] w-full h-full rounded-[16px] p-[28px] ">
              <div className="flex">
                <div>
                  <div className="py-1 px-2 bg-[#333333] text-[10px] font-mono tracking-[2px] w-fit text-white uppercase rounded-[5px] ">
                    Early-Bird Offer ends in 2 days
                  </div>
                  <div className="text-[28px] font-[Eina01, sans] text-[#1a1725] font-[600] leading-[1.2] py-3">
                    Gold Pass
                  </div>
                  <label className="text-[20px] font-[Eina01, sans] text-[#1a1725] font-[400] leading-[1.2] py-3 ">
                    The perfect plan for those looking to invest funds.
                  </label>
                  <div className="flex gap-2 items-center mt-4">
                    <div className="text-[48px] flex text-[#ff706b] font-[arial]  font-[700] ">
                      ₹4999<sup className="text-[10px] mt-6">+GST</sup>
                    </div>
                    <div className="text-[16px] font-[arial] text-[#81818180]  ">
                      <del>/₹10,000</del>
                    </div>
                  </div>
                  <ul className=" flex flex-col text-[18px] gap-2">
                    <li className="flex gap-2 items-start w-full">
                      <RxCross2 color="red" size={20} />
                      Direct pitch to Investors
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <RxCross2 color="red" size={20} /> VIP and Speaker Lounge
                      Access
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />5 star arrangements for <br />
                      Lunch & High-Tea
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" /> Identified as an Individual
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" />
                      Opportunity to Invest in <br />
                      Pitching Startup
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />
                      Networking coffee breaks
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" /> Personal marketing & branding
                    </li>

                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />
                      Networking meet with Startups
                    </li>
                  </ul>
                  <a
                    href="https://payments.cashfree.com/forms/bizneeti"
                    target="_blank"
                  >
                    {" "}
                    <button className="w-full py-2 mt-2 border-[1px] border-[#000] rounded-[20px]">
                      Book Ticket (50% Discount)
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#ffffff] max-w-[340px] w-full rounded-[16px] p-[28px] ">
              <div className="flex">
                <div>
                  <div className="py-1 px-2 bg-[#333333] text-[10px] font-mono tracking-[2px] w-fit text-white uppercase rounded-[5px] ">
                    Early-Bird Offer ends in 2 days
                  </div>
                  <div className="text-[28px] font-[Eina01, sans] text-[#1a1725] font-[600] leading-[1.2] py-3">
                    VIP Pass
                  </div>
                  <label className="text-[20px] font-[Eina01, sans] text-[#1a1725] font-[400] leading-[1.2] py-3 ">
                    The perfect plan for those looking to invest funds.
                  </label>
                  <div className="flex gap-2 items-center mt-4">
                    <div className="text-[48px] flex text-[#ff706b] font-[arial]  font-[700] ">
                      ₹9999<sup className="text-[10px] mt-6 ">+GST</sup>
                    </div>
                    <div className="text-[16px] font-[arial] text-[#81818180]  ">
                      <del>/₹20,000</del>
                    </div>
                  </div>
                  <ul className=" flex flex-col text-[18px] gap-2">
                    <li className="flex gap-2 items-start w-full">
                      <RxCross2 color="red" size={20} />
                      Direct pitch to Investors
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" /> VIP and Speaker Lounge Access
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" /> Dedicated Seating Area <br />
                      with Name Tag
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" />
                      Opportunity to Invest in <br />
                      Pitching Startup
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" />
                      Direct Access to all the <br /> panel and Startups during
                      <br />
                      the Event and Networking Sessions
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />
                      Networking coffee breaks
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      <FaCheck color="#009100" /> Personal marketing & branding
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />5 star arrangements for <br />
                      Lunch & High-Tea
                    </li>
                    <li className="flex gap-2 items-start w-full">
                      {" "}
                      <FaCheck color="#009100" />
                      Networking meet with Startups
                    </li>
                  </ul>
                  <a
                    href="https://payments.cashfree.com/forms/VIP-PASS"
                    target="_blank"
                  >
                    <button className="w-full py-2 mt-2 border-[1px] border-[#000] rounded-[20px]">
                      Book Ticket (50% Discount)
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tickets;
