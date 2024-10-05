import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function Faq({ faqData }) {
  const [isItemOpen, setIsItemOpen] = useState(-1); // Updated initial state to -1
  const bodyRef = useRef();

  const toggleAccordionItem = (index) => {
    setIsItemOpen(isItemOpen === index ? -1 : index); // Updated state value
  };

  return (
    <div>
      {faqData.map((data, index) => (
        <div key={index} className="overflow-hidden mb-2">
          <button
            className="flex justify-between items-center px-4  py-5 w-full bg-white"
            onClick={() => toggleAccordionItem(index)}
          >
            <span>
              <h4 className="font-[400]  text-start  text-[18px] leading-[20px] text-[#202054]">
                {data.question}
              </h4>
            </span>
            <span>
              <BiChevronDown
                className={`text-[17px] mb-4 md:ml-0 ml-1 transition-all duration-500 ${
                  isItemOpen === index ? "rotate-180" : ""
                }`}
              ></BiChevronDown>
            </span>
          </button>

          {isItemOpen === index && (
            <div
              className="px-4 transition-all duration-[400ms] overflow-hidden"
              style={{
                height:
                  isItemOpen === index ? bodyRef.current?.scrollHeight : 0,
              }}
            >
              <div ref={bodyRef} className="">
                <p className="font-[400] pb-8 text-start text-[15px] leading-[24px] text-[#828F99]">
                  {data.answer}
                </p>
              </div>
            </div>
          )}

          <div className="">
            <hr className="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;