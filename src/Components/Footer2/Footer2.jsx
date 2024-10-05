import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

import logo from "../../Images/Layout2/logo.png";

const Footer2 = () => {
  return (
    <>
      <section>
        <div className="bg-[#ffffff] w-[100%] ">
          <div className="md:max-w-[1190px]  md:mx-auto pt-[50px] pb-[35px]  md:px-[25px] px-[16px] text-[#180048] text-[15px] ">
            <div className="block md:flex justify-around mb-[45px] md:mb-0">
              <div className="md:w-[60%] md:flex md:justify-start w-[100%]">
                <div className=" md:w-auto w-full ">
                  <img src={logo} alt="logo" className="md:cursor-pointer" />
                </div>
              </div>

              <div className="md:w-[40%] w-[100%] ">
                <div className="md:flex md:justify-end  ">
                  <div className="flex items-center pt-[11px] md:pt-0  ">
                    <p className=" md:block hidden font-[Inter] mr-[27px] font-[400] leading-[23px] text-[#260F53] ">
                      Follow Us
                    </p>

                    <a
                      target="_black"
                      href="https://www.facebook.com/Bizdateuptechnologies"
                      className="mr-[10.88px]  text-[#CAC5DA] cursor-pointer rounded-[50%]"
                    >
                      <FaFacebookSquare size={30} />
                    </a>
                    <a
                      target="_black"
                      href="https://www.instagram.com/bizdateup"
                      className="mr-[10.88px] text-[#CAC5DA] cursor-pointer rounded-[50%]"
                    >
                      <FaInstagram size={30} />
                    </a>
                    <a
                      target="_black"
                      href="https://www.twitter.com/date_biz"
                      className="mr-[10.88px]  text-[#CAC5DA] cursor-pointer rounded-[50%]"
                    >
                      <FaTwitterSquare size={30} />
                    </a>
                    <a
                      target="_black"
                      href="https://www.linkedin.com/company/bizdateup/mycompany/"
                      className="mr-[10.88px]  text-[#CAC5DA] cursor-pointer rounded-[50%]"
                    >
                      <AiFillLinkedin size={30} />
                    </a>
                    <a
                      target="_black"
                      href="https://www.youtube.com/@bizdateup8281"
                      className=" text-[#CAC5DA] rounded-[50%]"
                    >
                      <FaYoutubeSquare size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className=" md:flex justify-between w-[100%]  grid grid-cols-2 gap-4 md:mt-[67px] mt-[25px]  ">
              <div className="mb-[17px] md:mb-0">
                <h6 className=" text-[#180048] font-[500] text-[20px] leading-[23px] tracking-[0.2px] font-[Inter]">
                  {" "}
                  Platform
                </h6>
                <ul className="font-[400] md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] pt-[23px] cursor-pointer">
                  <a href="/invest">
                    <li className=" pb-2 ">Invest</li>
                  </a>
                  <a href="/raisefund">
                    <li className="py-2 ">Raise fund</li>
                  </a>

                  <a href="/closed-deals">
                    <li className="py-2 ">Closed deals</li>
                  </a>

                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
                  >
                    <li className="py-2  flex items-center ">
                      Membership{" "}
                      <span className=" py-1 ml-[7px] rounded-[11.19px] bg-[#9797FE] ">
                        <p className=" px-[7px]  font-[400] text-[12px] leading-[12px] text-center font-[Inter]  text-white">
                          NEW
                        </p>
                      </span>
                    </li>
                  </a>
                  <a href="/startup_update">
                    <li className="py-2  flex items-center ">
                      Startup Updates{" "}
                      <span className=" py-1 ml-[7px] rounded-[11.19px] bg-[#9797FE] ">
                        <p className=" px-[7px]  font-[400] text-[12px] leading-[12px] text-center font-[Inter]  text-white">
                          NEW
                        </p>
                      </span>
                    </li>
                  </a>
                </ul>
              </div>
              <div className="mb-[17px] md:mb-0">
                <h6 className="font-[500] text-[20px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#180048]">
                  Bizdateup
                </h6>
                <ul className="font-[400] md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] pt-[23px] cursor-pointer">
                  <a href="/about-us">
                    <li className=" pb-2 ">About us</li>
                  </a>
                  <a href="/learn">
                    <li className="py-2 ">Learn</li>
                  </a>
                  <a href="/press">
                    <li className="py-2 ">Media & Press</li>
                  </a>
                  <a href="/contactus">
                    <li className="py-2 ">Careers</li>
                  </a>
                  <a href="/faq">
                    <li className="py-2 ">FAQ</li>
                  </a>
                </ul>
              </div>
              <div className="mb-[17px] md:mb-0">
                <h6 className="font-[500] text-[20px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#180048]">
                  Help & Support
                </h6>
                <ul className="font-[400]  md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] pt-[23px] cursor-pointer">
                  <li className=" pb-2 ">
                    <a href="mailto:support@bizdateup.com">
                      support@bizdateup.com{" "}
                    </a>
                  </li>
                  <li className="py-2 ">
                    <a href="tel:+917738583751">+91-7738583751 </a>
                  </li>
                  <a href="/Contactus">
                    {" "}
                    <li className="py-2 ">Contact us</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://calendly.com/bizdateup/bizdateup-investor-application"
                  >
                    <li className="py-2  flex items-center">
                      Book One-to-one{" "}
                      <span className=" py-1 ml-[7px] rounded-[11.19px] bg-[#9797FE] ">
                        <p className=" px-[7px]  font-[400] text-[12px] leading-[12px] text-center font-[Inter]  text-white">
                          NEW
                        </p>
                      </span>
                    </li>
                  </a>
                </ul>
              </div>
              <div className=" md:hidden block"></div>
              <div className="mb-[17px] md:mb-0">
                <h6 className="font-[500] text-[20px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#180048]">
                  Quick Links
                </h6>
                <ul className="font-[400]  md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] pt-[23px] cursor-pointer">
                  <a href="/calculators">
                    <li className=" pb-2 ">Calculators </li>
                  </a>
                  <a href="/blogs">
                    {" "}
                    <li className="py-2 ">Blogs </li>
                  </a>
                  <a href="/events">
                    {" "}
                    <li className="py-2 ">Events</li>
                  </a>
                  {/* <a href="javascript:void(0);"> */}
                  <li className="py-2  flex items-center">
                    {" "}
                    News{" "}
                    <span className=" py-1 ml-[7px] rounded-[11.19px] bg-[#9797FE] ">
                      <p className=" px-[7px]  font-[400] text-[12px] leading-[12px] text-center font-[Inter]  text-white">
                        Coming soon
                      </p>
                    </span>
                  </li>
                  {/* </a> */}
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://chat.whatsapp.com/KI3jbUdxUeY4WfI8SgtdqC"
                  >
                    <li className="py-2 ">Upcoming Demo days</li>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://chat.whatsapp.com/KI3jbUdxUeY4WfI8SgtdqC"
                  >
                    <li className="py-2 ">Join Community</li>
                  </a>
                </ul>
              </div>
              <div className=" md:hidden sm:hidden block"></div>
              <div className=" md:block hidden mb-[17px] md:mb-0">
                <h6 className="font-[500] text-[20px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#180048]">
                  Registered office
                </h6>
                <p className="font-[400] md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] lg:max-w-[272px] pt-[23px]">
                605, Sukh Sagar CHS Limited, N.S. Patkar Marg, Charni Road,   <br/>Mumbai - 400007
                </p>
                <p className="font-[400] md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] lg:max-w-[272px] pt-[12px]">
                  CIN U72900MH2022379408
                </p>
              </div>
            </div>
            <div className="block md:hidden mb-[17px] md:mb-0">
              <h6 className="font-[500] text-[20px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#180048]">
                Registered office
              </h6>
              <p className="font-[400] md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] lg:max-w-[272px] pt-[23px]">
              605, Sukh Sagar CHS Limited, N.S. Patkar Marg,Charni Road, Mumbai - 400007
              </p>
              <p className="font-[400] md:text-[16px] text-[14px] leading-[23px] tracking-[0.2px] font-[Inter] text-[#918AA0] lg:max-w-[272px] pt-[12px]">
                CIN U72900MH2022379408
              </p>
            </div>

            <div className="border-t-[1px] border-b-[1px] border-[#828F99]   md:mt-[68px] mt-[31px]">
              <div className="md:flex items-center justify-between lg:h-[63px]   ">
                <div className=" md:flex grid grid-cols-3 justify-between md:text-[15px] py-[14px] md:py-0 text-[12px] font-[Inter] md:font-[400] text-[#918AA0] leading-[23px]">
                  <a href="/privacy_policy">
                    <p className=" pl-2 md:pl-0 pb-[5px] md:pb-0 cursor-pointer">
                      Privacy Policy
                    </p>
                  </a>

                  <a href="/risk_investment">
                    {" "}
                    <p className="md:pl-[30px] pb-[5px] md:pb-0 cursor-pointer">
                      Risk of Investment
                    </p>
                  </a>
                  <a href="/terms_of_use">
                    {" "}
                    <p className="md:pl-[30px] pl-3 cursor-pointer">
                      Terms of Use
                    </p>
                  </a>
                  <a href="/refund_policy">
                    <p className="md:pl-[30px] pl-2 cursor-pointer">
                      Refund Policy
                    </p>
                  </a>
                  <a href="/cancel_policy">
                    {" "}
                    <p className="md:pl-[30px] md:w-auto w-[150px] cursor-pointer">
                      Cancellation Policy
                    </p>
                  </a>
                </div>

                <div className=" border-t-[1px] md:border-none  border-[#828F99] md:py-0 py-[8px] ">
                  <p className="md:text-[16px] text-[14px] md:text-base text-center font-[Inter]  font-[400] leading-[23px] text-[#180048]">
                    Bizdateup technologies Pvt Ltd • 2023 All Rights Reserved
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-[30px] ">
              <h4 className="text-[20px] font-[Inter] font-[500] leading-[23px] tracking-[0.2px] text-[#180048]">
                Disclaimer :
              </h4>
              <p className="md:mt-[23px] mt-[5px] text-[11px] font-[Inter] font-[400] leading-[23px] tracking-[0.2px] text-[#918AA0]">
                All trademarks and logos or registered trademarks and logos
                found on this Site or mentioned herein belong to their
                respective owners and are solely being used for informational
                purposes. Information provided herein has been gathered from
                public sources. Bizdateup Technologies Pvt Ltd disclaims any and
                all responsibility in connection with veracity of this data.
                Information presented on this website is for educational
                purposes only and should not be treated as legal, financial , or
                any other form of advice. Bizdateup Technologies Pvt Ltd is not
                liable for financial or any other form of loss incurred by the
                user or any affiliated party on the basis of information
                provided herein. Bizdateup Technologies Pvt Ltd is neither a
                stock exchange nor does it intend to get recognized as a stock
                exchange under the Securities Contracts Regulation Act, 1956.
                Bizdateup Technologies Pvt Ltd is not authorized by the capital
                markets regulator to solicit investments. The securities traded
                on these platforms are not traded on any regulated exchange.
                Bizdateup also provides that it does not facilitate any online
                or offline buying, selling, or trading of securities.
              </p>
              <p className="mt-[30px] text-[13px] font-[Inter] font-[400] leading-[23px] tracking-[0.2px] text-[#918AA0]">
                This Site will be updated on a regular basis.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer2;
