import React from "react";
import { Fragment, useState } from "react";

import { AiOutlineRight } from "react-icons/ai";
import { accordions } from "./DataRaisefund";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const FaqRaisefund = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <>
      <section>
        <div className=" w-[100%]  relative md:px-0 px-[16px] font-[Inter] ">
          <div className="md:flex justify-center md:w-[1148px] w-[100%] mx-auto md:pt-[103px] pt-[16px] md:pb-[114.58px] pb-[50px]">
            <div className="md:w-[40%] text-[#180048] mb-[30px]  ">
              <h4 className="text-[28px]  md:block flex justify-center items-center md:w-[303px] md:pb-[66px] pb-[20px] font-[400] leading-[39.62px] tracking-[0.2px] font-[Inter] ">
                Frequently Asked Questions
              </h4>
              <p className="pb-[8px] md:block hidden text-[#FC9D35] md:text-[16px] text-[14px] font-[400] leading-[26px] tracking-[0.3px] font-[Inter]  ">
                Have more questions?
              </p>
              <Link to="/Contactus">
                <p className=" md:flex  hidden items-center justify-start md:text-[15px] text-[14px] font-[400] leading-[24px] tracking-[0.2px] font-[Inter] ">
                  Visit our support page{" "}
                  <AiOutlineRight className="ml-[11px]" />
                </p>
              </Link>
            </div>

            <div className="md:w-[60%] ">
              <div>
                {accordions.map((item, id) => {
                  // destruct
                  const { question, answer } = item;
                  return (
                    <div className="text-start pb-[10px] rounded-md" key={id}>
                      {/* passing two props to this component */}
                      <Accordion
                        question={question}
                        answer={answer}
                      ></Accordion>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqRaisefund;
