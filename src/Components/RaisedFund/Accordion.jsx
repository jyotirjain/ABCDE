import React, { useState } from "react";

/* import react-icons */
import { BiChevronDown } from "react-icons/bi";

/* import framer-motion */
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ question, answer }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* question section */}
      <div
        onClick={() => setShow(!show)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1 className="text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter] md:h-[45px] h-auto md:w-[100%] w-[90%] ">
          {question}
        </h1>
        <BiChevronDown
          className={`text-[17px] mb-4 md:ml-0 ml-1 transition-all duration-500 ${
            show ? "rotate-180" : ""
          }`}
        ></BiChevronDown>
      </div>

      {/* answer section */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-clip"
          >
            <p className="text-[#180048] md:text-[15px] pb-4 text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px] mb-[5px]">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="">
        <hr className="" />
      </div>
    </>
  );
};

export default Accordion;
