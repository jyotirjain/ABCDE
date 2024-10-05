import React, { useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const AccordionItem = ({ accordionItem }) => {
  const [isItemOpen, setIsItemOpen] = useState(false);
  const bodyRef = useRef();
  const toggleAccordionItem = () => {
    setIsItemOpen(!isItemOpen);
  };

  return (
    <div className="overflow-hidden mb-2">
      <button
        className="flex justify-between items-center px-4 h-[67px] w-full bg-white "
        onClick={toggleAccordionItem}
      >
        <span>
          <h4 className="font-[400]  text-start  text-[14px] leading-[16.41px] text-[#202054]">
            {accordionItem.header}
          </h4>
        </span>
        <span>
          {/* <i className={`fa-solid fa-angle-down transition ${isItemOpen && "rotate-180"}`}></i> */}
          <BiChevronDown
            className={`text-[17px] mb-4 md:ml-0 ml-1 transition-all duration-500 ${
              isItemOpen ? "rotate-180" : ""
            }`}
          ></BiChevronDown>
        </span>
      </button>

      <div
        className="px-4 transition-all duration-[400ms] overflow-hidden"
        style={{ height: isItemOpen ? bodyRef.current?.offsetHeight : 0 }}
      >
        <div ref={bodyRef} className="">
          <p className="font-[400]  pb-8  text-start  text-[12px] leading-[14.06px] text-[#828F99]">
            {accordionItem.body}
          </p>
        </div>
      </div>
      <div className="">
        <hr className="" />
      </div>
    </div>
  );
};

const Accordion = () => {
  const accordionContent = [
    {
      header: " How does investing in startups work? ",
      body: " Investing in startups involves providing capital to early-stage companies in exchange for equity. As the company grows and becomes more valuable, so does the value of your investment.",
    },
    {
      header: "  What are the risks of investing in startups?",
      body: " Investing in startups can be risky, as many new businesses fail to become profitable. It's important to do your research and understand the risks before investing, and to only invest what you can afford to lose.",
    },
    {
      header: "  How do I know which startups to invest in?  ",
      body: " Research is key when it comes to identifying promising startups to invest in. Look for companies with strong leadership, a solid business plan, and a clear path to profitability. It's also important to consider the market demand for the product or service the startup is offering.",
    },
    {
      header: " What is KYC and why is it required for investing?",
      body: "   KYC stands for Know Your Customer, and it's a process used by financial institutions to verify the identity of their clients. It's required for investing to prevent fraud and money laundering, and to ensure that investments are only made by authorized individuals.",
    },
  ];

  return (
    <>
      <div className="w-[100%] ">
        {accordionContent.map((accordionItem, index) => (
          <AccordionItem key={index} accordionItem={accordionItem} />
        ))}
      </div>
    </>
  );
};

export default Accordion;

//               </AccordionHeader>
//               <AccordionBody>
//                 <p className="font-[400]  text-start  text-[12px] leading-[14.06px] text-[#828F99]">
//                   KYC stands for Know Your Customer, and it's a process used by
//                   financial institutions to verify the identity of their
//                   clients. It's required for investing to prevent fraud and
//                   money laundering, and to ensure that investments are only made
//                   by authorized individuals.
//                 </p>
//               </AccordionBody>
//             </div>
//           </Accordion>

//           <div className="px-[22px] pb-[25px] pt-[20px]">
//             <Accordion>
//               <Link to="/faq">
//                 <div className="flex justify-end items-center">
//                   <div>
//                     <h4 className="font-[400] text-[13.33px] leading-[15.62px] text-[#202054] pr-[10px] ">
//                       View More
//                     </h4>
//                   </div>
//                   <div className="pr-[8px]">
//                     <SlArrowRightCircle size={14} />
//                   </div>
//                 </div>
//               </Link>
//             </Accordion>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Faq;
