import React from "react";
import { NavLink } from "react-router-dom";

import { IoPersonOutline } from "react-icons/io5";
import { SlPeople } from "react-icons/sl";
import { TbDotsCircleHorizontal } from "react-icons/tb";
import { RiBankLine } from "react-icons/ri";
import "../../assets/css/styles.css";

const FirstBox = () => {
  return (
    <>
      <section>
        <div className=" md:block hidden px-2 py-4 lg:max-w-[302px] bg-white shadow-[0px_1px_12px_rgba(0,0,0,0.15)] rounded-[10px]">
          <ul className="investside">
            <NavLink
              to="/layoutprofile/"
              className="link"
              activeclassname="active"
            >
              <li className=" flex cursor-pointer justify-start text-[#000000] items-center py-[15px] ">
                <span className="px-[30px]">
                  <IoPersonOutline size={25} />
                </span>
                <h4 className="pl-[10px] text-[18px] font-[400]  leading-[21.09px]">
                  Profile
                </h4>
              </li>
            </NavLink>
            <NavLink
              to="/layoutprofile/kyc"
              className="link"
              activeclassname="active"
            >
              <li className="flex cursor-pointer justify-start text-[#000000] items-center py-[15px]   ">
                <span className="px-[30px]">
                  <SlPeople size={25} />
                </span>
                <h4 className="pl-[10px] text-[18px] font-[400] leading-[21.09px]">
                  KYC
                </h4>
              </li>
            </NavLink>
            <NavLink
              to="/layoutprofile/bankdetail"
              className="link"
              activeclassname="active"
            >
              <li className="flex cursor-pointer justify-start text-[#000000] items-center active:py-[15px] py-[15px] ">
                <span className="px-[30px]">
                  <RiBankLine size={25} />
                </span>
                <h4 className="pl-[10px] text-[18px] font-[400] leading-[21.09px]">
                  {" "}
                  Bank details
                </h4>
              </li>
            </NavLink>
            <NavLink
              to="/layoutprofile/others"
              className="link"
              activeclassname="active"
            >
              <li className="flex cursor-pointer justify-start items-center text-[#000000] py-[15px] ">
                <span className="px-[30px]">
                  <TbDotsCircleHorizontal size={25} />
                </span>
                <h4 className="pl-[10px] text-[18px] font-[400] leading-[21.09px]">
                  Other
                </h4>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="block md:hidden px-2 py-4 lg:max-w-[302px] bg-white shadow-[0px_1px_12px_rgba(0,0,0,0.15)] rounded-[10px] mb-4">
          <div className="profile-sidebar flex justify-between gap-2">
            {" "}
            <NavLink
              to="/layoutprofile/"
              className="link"
              activeclassname="active"
            >
              <li className=" flex flex-col cursor-pointer justify-start text-[#000000] items-center py-[15px] ">
                <span className="px-[10px]">
                  <IoPersonOutline size={25} />
                </span>
                <h4 className=" text-[18px] font-[400]  leading-[21.09px]">
                  Profile
                </h4>
              </li>
            </NavLink>
            <NavLink
              to="/layoutprofile/kyc"
              className="link"
              activeclassname="active"
            >
              <li className=" flex flex-col cursor-pointer justify-start text-[#000000] items-center py-[15px] ">
                <span className="px-[10px]">
                  <SlPeople size={25} />
                </span>
                <h4 className=" text-[18px] font-[400]  leading-[21.09px]">
                  KYC
                </h4>
              </li>
            </NavLink>
            <NavLink
              to="/layoutprofile/bankdetail"
              className="link"
              activeclassname="active"
            >
              <li className=" flex flex-col cursor-pointer justify-start text-[#000000] items-center py-[15px] ">
                <span className="px-[10px]">
                  <RiBankLine size={25} />
                </span>
                <h4 className=" text-[18px] font-[400]  leading-[21.09px]">
                  Bank
                </h4>
              </li>
            </NavLink>
            <NavLink
              to="/layoutprofile/others"
              className="link"
              activeclassname="active"
            >
              <li className=" flex flex-col cursor-pointer justify-start text-[#000000] items-center py-[15px] ">
                <span className="px-[10px]">
                  <TbDotsCircleHorizontal size={25} />
                </span>
                <h4 className=" text-[18px] font-[400]  leading-[21.09px]">
                  Others
                </h4>
              </li>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default FirstBox;
