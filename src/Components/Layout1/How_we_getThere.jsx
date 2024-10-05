import React, { useState } from "react";
import light_circle from "../../Images/light_circle.png";
import dark_circle from "../../Images/dark_circle.png";
import bigWhite_circle from "../../Images/bigWhite_circle.png";

import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { SlArrowRightCircle } from "react-icons/sl";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-4 w-4 mr-[15px] transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const How_we_getThere = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <section>
        <div className="w-[100%] bg-[#ffffff] md:h-[900px] h-[1000]  relative md:p-0 p-[20px]">
          <div className="text-center text-[#202054] pt-[150px] pb-8 ">
            <h4 className="md:text-[30px] text-[20px] font-[400]">
              How We Get There
            </h4>
          </div>

          <div className="md:w-[50%] w-[100%] flex justify-end pt-9  ">
            <div className="flex  w-[509px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] justify-between items-center rounded-[15px]">
              <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className="z-30  bg-white">
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="h-[100px] "
                >
                  <div className="px-[20px]">
                    <img src={light_circle} alt="" />
                  </div>
                  <div className="leading-[28px] tracking-[1.19304px] px-[20px]">
                    <h4 className="md:text-[22px] text-[14px] font-[400] text-[#202054] text-left ">
                      Early investment means greater rewards
                    </h4>
                  </div>
                </AccordionHeader>

                {/* <AccordionBody>
                  <p className="font-[400] text-[12px] leading-[14.06px] text-[#828F99] pb-[36px] pt-[9px]  pl-[105px] md:pr-[100px] pr-[50px] ">
                    we are drone-tech start-up platform called start-up
                  </p>
                </AccordionBody> */}
              </Accordion>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]  flex justify-end pt-9">
            <div className="flex  w-[509px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] justify-between items-center rounded-[15px]">
              <Accordion open={open === 2} icon={<Icon id={2} open={open}  />} className="z-30  bg-white">
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="h-[100px]"
                >
                  <div className="px-[20px]">
                    <img src={dark_circle} alt="" className="w-[50px]" />
                  </div>
                  <div className="leading-[28px] tracking-[1.19304px] px-[20px]">
                    <h4 className="md:text-[22px] text-[14px] font-[400] text-[#202054] text-left ">
                      Startups revolutionizing the world
                    </h4>
                  </div>
                </AccordionHeader>

                <AccordionBody>
                  <p className="pb-[36px] pt-[9px]  text-[#555770] pl-[105px] md:pr-[100px] pr-[50px] md:text-[14px] text-[12px] font-[300] leading-[24px] tracking-[0.5px] ">
                    The word of Startups is booming. from real estate to
                    healthcare, they’re taking over the word. out of every 10
                    companies 2 of them are Startups and this statistics are
                    growing on a very rapid scale. invest in these growing
                    startups and be a part of this revolution.{" "}
                  </p>
                </AccordionBody>
              </Accordion>
            </div>
          </div>
          <div className="md:w-[50%] w-[100%]  flex justify-end pt-9">
            <div className="flex  w-[509px]  shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] duration-[0.3s] justify-between items-center rounded-[15px]">
              <Accordion open={open === 3} icon={<Icon id={3} open={open} />} className="z-30  bg-white">
                <AccordionHeader
                  onClick={() => handleOpen(3)}
                  className="h-[100px]"
                >
                  <div className="px-[20px]">
                    <img src={light_circle} alt="" className="w-[50px]" />
                  </div>
                  <div className="leading-[28px] tracking-[1.19304px] px-[20px]">
                    <h4 className="md:text-[22px] text-[16px] font-[400] text-[#202054] md:pr-[140px]">
                      Impact Investment
                    </h4>
                  </div>
                </AccordionHeader>

                {/* <AccordionBody>
                  <p className="font-[400] text-[12px] leading-[14.06px] text-[#828F99] pb-[36px] pt-[9px]  pl-[105px] md:pr-[100px] pr-[50px] ">
                    we are drone-tech start-up platform called start-up
                  </p>
                </AccordionBody> */}
              </Accordion>
            </div>
          </div>

          <div className="absolute md:right-0 md:bottom-[180px] right-0 bottom-[40px] md:block hidden">
            <img src={bigWhite_circle} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default How_we_getThere;
