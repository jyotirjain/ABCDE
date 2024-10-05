import React from "react";
import { Fragment, useState } from "react";

import { AiOutlineRight } from "react-icons/ai";
import { accordions } from "./Data";
import Accordion from "./Accordion";
import { Link } from "react-router-dom";

const Faq = () => {
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

                {/* <Fragment>
                  <Accordion open={open === 1}>
                    <AccordionHeader onClick={() => handleOpen(1)}>
                      <div className=" text-start pb-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          Who can be an investor on Bizdateup?
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          Indian citizens who are at least 21 years old and have
                          a solid grasp of investing are eligible to become an
                          investor on Bizdateup.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 2}>
                    <AccordionHeader onClick={() => handleOpen(2)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] md:w-auto w-[95%] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          What's the minimum amount of investment one can start
                          with on Bizdateup?{" "}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          The minimum amount one can invest through Bizdateup is
                          ₹20,000/-.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 3}>
                    <AccordionHeader onClick={() => handleOpen(3)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          {" "}
                          How does the entire process of Startup investing work
                          on Bizdateup?{" "}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          Create a Profile: Begin your angel investing journey
                          by creating a Bizdateup profile. KYC Verification:
                          Once the investor's KYC has been successfully
                          verified, they will be added to Bizdateup and given
                          access to curated startups to invest in. Invest in
                          Startups: Once an investor finds a startup that
                          matches their vision and interests on the "Invest"
                          page, they can invest with a single click.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 4}>
                    <AccordionHeader onClick={() => handleOpen(4)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          {" "}
                          How much does Bizdateup charge for each investment you
                          make through the platform?{" "}
                        </p>
                      </div>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          Bizdateup currently charges no commission to investors
                          on investments made through the platform. The primary
                          goal is to establish a dependable and transparent
                          ecosystem for investors in promising Indian startups.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 5}>
                    <AccordionHeader onClick={() => handleOpen(5)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          What is the minimum and maximum funds a startup can
                          raise on Bizdateup?{" "}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          Currently, a startup can raise funds on Bizdateup
                          ranging from INR 5 Lakhs to INR 1 Cr.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 6}>
                    <AccordionHeader onClick={() => handleOpen(6)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          What kind of startups can register to raise funds
                          through Bizdateup?{" "}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          There are no restrictions on the type of business or
                          industry in which startups can operate. The only
                          requirement was that the startup's product/service or
                          offering be unique and have a large potential market
                          to cater to.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 7}>
                    <AccordionHeader onClick={() => handleOpen(7)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          How does the entire process of fundraising work on
                          Bizdateup?{" "}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          Create Profile Onboarding: The first step is for a
                          startup founder to share relevant information about
                          his company and other KYC requirements. These details
                          are gathered using a form and forwarded to the team
                          for vetting and due diligence. Due diligence: The team
                          verifies all business details, vets KYC, and so on to
                          ensure that the startup's information is accurate. The
                          startup will only be launched on Bizdateup after this.
                          After the startup has passed the vetting process, a
                          fundraising campaign with a specific goal amount is
                          launched on platform
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                  <Accordion open={open === 8}>
                    <AccordionHeader onClick={() => handleOpen(8)}>
                      <div className=" text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[16px] text-[15px] font-[400] leading-[24px] font-[Inter]">
                          What is the eligibility criteria for a startup to
                          register on Bizdateup?{" "}
                        </p>
                      </div>
                    </AccordionHeader>
                    <AccordionBody>
                      <div className="text-start py-[10px]">
                        <p className=" text-[#180048] md:text-[15px] text-[14px] font-[400] leading-[24px] font-[Inter] tracking-[0.2px]">
                          A startup should be: registered in India and
                          incorporated within the last three years Execute a
                          one-of-a-kind business concept with a reasonable
                          target market size & At the very least, should have an
                          MVP.
                        </p>
                      </div>
                    </AccordionBody>
                  </Accordion>
                </Fragment> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
