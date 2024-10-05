import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from "react-icons/fa";
import ellipse from "../../Images/ellipse.png";
import midEllipse from "../../Images/midEllipse.png";
import smallEllipse from "../../Images/smallEllipse.png";

const Footer = () => {
  return (
    <>
      <section >
        <div className="bg-[#070E26] w-[100%] md:h-[735px] h-[1760px] p-5  relative">
        <div className="md:max-w-[1240px] md:mx-auto py-[50px]  text-[#FFFFFF] text-[15px] ">
          <div className="block md:flex">
            <div className="md:w-[50%] w-[100%]">
              <p className="md:pt-[45px] tracking-[0.4px] leading-[1.5] ">
                Bizdateup stands firmly on the pillars of trust, accountability,
                diversity, quality and reliability. Our platform aims to bring
                retail investors into the game of startup investments to
                increase funding opportunities for deserving startups to boost
                the economy while creating great returns and profitability for
                the investors.
              </p>
              <div className="md:flex my-9">
                <div className="flex md:justify-between justify-around md:w-[25%] w-[100%] cursor-pointer ">
                  <a
                    target="_black"
                    href="https://www.facebook.com/bizdateupindia"
                  >
                    <FaFacebookSquare size={30} />
                  </a>
                  <a target="_black" href="https://www.instagram.com/bizdateup">
                    <FaInstagram size={30} />
                  </a>
                  <a target="_black" href="https://www.twitter.com/date_biz">
                    <FaTwitterSquare size={30} />
                  </a>
                </div>
                <div className="md:px-[80px] text-center md:text-start pt-9 md:pt-[0]">
                  <h6 className="font-bold text-[#FFFFFF]">Contact Us</h6>
                  <ul className="py-2">
                    <li className="py-2 text-sm">KAJHSH779@GMAIL.COM</li>
                    <li className="py-2 text-sm">9857845787</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=" md:flex md:justify-around  md:w-[50%] w-[100%] grid grid-cols-2 gap-6  ">
              <div>
                <h6 className=" text-[#FFFFFF] font-bold">About</h6>
                <ul className="py-2 cursor-pointer">
                  <li className="py-2 text-sm">Home</li>
                  <li className="py-2 text-sm">Invest</li>
                  <li className="py-2 text-sm">Raise Funds</li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-[#FFFFFF]">Support</h6>
                <ul className="py-2 cursor-pointer">
                  <li className="py-2 text-sm">Contact Us</li>
                  <li className="py-2 text-sm">Privacy Policy</li>
                  <li className="py-2 text-sm">Risk of Investment</li>
                  <li className="py-2 text-sm">Terms of Use</li>
                  <li className="py-2 text-sm">Refund Policy</li>
                  <li className="py-2 text-sm">Cancellation Policy</li>
                </ul>
              </div>
              <div>
                <h6 className="font-bold text-[#FFFFFF]">Investments</h6>
                <ul className="py-2 cursor-pointer">
                  <li className="py-2 text-sm">Invest</li>
                  <li className="py-2 text-sm">Raise Fund</li>
                  <li className="py-2 text-sm">News</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:pt-2 w-[100%] pt-11 tracking-[0.4px] leading-[1.5]">
            <p>
              All trademarks and logos or registered trademarks and logos found
              on this Site or mentioned herein belong to their respective owners
              and are solely being used for informational purposes. Information
              provided herein has been gathered from public sources. Bizdateup
              Technologies Pvt Ltd disclaims any and all responsibility in
              connection with veracity of this data. Information presented on
              this website is for educational purposes only and should not be
              treated as legal, financial , or any other form of advice.
              Bizdateup Technologies Pvt Ltd is not liable for financial or any
              other form of loss incurred by the user or any affiliated party on
              the basis of information provided herein. Bizdateup Technologies
              Pvt Ltd is neither a stock exchange nor does it intend to get
              recognized as a stock exchange under the Securities Contracts
              Regulation Act, 1956. Bizdateup Technologies Pvt Ltd is not
              authorized by the capital markets regulator to solicit
              investments. The securities traded on these platforms are not
              traded on any regulated exchange. Bizdateup also provides that it
              does not facilitate any online or offline buying, selling, or
              trading of securities. This Site will be updated on a regular
              basis.
            </p>
          </div>
          <div className="pt-[88px] text-center  text-[14px] ">
            <h3>2023 © Bizdateup. All Copyrights reserved.</h3>
          </div>
          <img
            src={ellipse}
            alt=""
            className="absolute md:right-[90px] md:top-[170px] right-[20px] top-[390px]"
          />
          <img
            src={midEllipse}
            alt=""
            className="absolute md:right-[200px] md:top-[250px] right-[20px] top-[500px] "
          />
          <img
            src={midEllipse}
            alt=""
            className="absolute md:left-[460px] md:top-[320px] left-[110px] top-[870px] "
          />
          <img
            src={smallEllipse}
            alt=""
            className="absolute md:left-[350px] md:top-[360px] left-[80px] top-[910px]"
          />
        </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
