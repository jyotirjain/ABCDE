import React from "react";
import Navbar from "../Navbar1/Navbar1";
import { RightCircleOutlined } from "@ant-design/icons";
import Zee from "../../assets/images/zee.png";
import Midday from "../../assets/images/midday.png";
import Theweek from "../../assets/images/theweek.png";
import outlook from "../../assets/images/outlook.png";
import Footer2 from "../Footer2/Footer2";
import Cta8 from "../../assets/images/cta/cta8.png";
import Cta9 from "../../assets/images/cta/cta9.png";
import { SlArrowRightCircle } from "react-icons/sl";
import { Link } from "react-router-dom";

function Press() {
  const news = [
    {
      img: Zee,
      title: "BizDateUp ensures the best funding and investment opportunities",
      link: "https://www.zeebiz.com/agencies/bizdateup-ensures-the-best-funding-and-investment-opportunities-202314",
    },
    {
      img: Midday,
      title:
        "Make your investment and funding processes streamlined with BizdateUp's startup solutions",
      link: "https://www.mid-day.com/brand-media/article/make-your-investment-and-funding-processes-streamlined-with-bizdateups-startup-solutions-23248814",
    },
    {
      img: Theweek,
      title:
        " Jeet Chandan, Founder & MD of BizDateUp, decodes what it takes to be a successful entrepreneur",
      link: "https://www.theweek.in/news/biz-tech/2022/09/30/jeet-chandan-founder-and-md-of-bizdateup-decodes-what-it-takes-to-be-a-successful-entrepreneur.html",
    },
    {
      img: outlook,
      title:
        "Serial Entrepreneur, Evangelist And Startup Mentor : Jeet Chandan Rewriting The Rules Of The Business Landscape",
      link: "https://www.outlookindia.com/outlook-spotlight/serial-entrepreneur-evangelist-and-startup-mentor-jeet-chandan-rewriting-the-rules-of-the-business-landscape-news-224593",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-8 flex justify-center">
        <div className="sm:w-[90%] md:max-w-[1500px] 2xl:w-[65%]">
          <h2 className="not-italic font-normal text-[24px] md:text-[27.65px] leading-[41px] text-[#202054] font-[Inter] mb-5">
            Bizdateup : Press releases
          </h2>
          <div className="flex gap-6 ">
            <div className="flex flex-col gap-4">
              {news.map((item, index) => (
                <>
                  <a href={item.link} target="_blank">
                    <div className="news-cta md:h-[170px]" key={index}>
                      <div className="news-cta-bg flex gap-5 md:h-[134px]">
                        <div className="box-border w-[84.51px] h-[84.51px] aspect-square rounded-[10px] border-[0.5px] border-solid border-[#DDDDDD] bg-[#ffffff] flex justify-center items-center ">
                          <img src={item.img} />
                        </div>
                        <div className="flex flex-col gap-2">
                          <label className="text-[#180048] text-[18px] not-italic font-normal leading-[24.912px] tracking-[0.226px] font-[Inter]">
                            {item.title}
                          </label>
                          <p className=" text-[#4A4F53] text-xs not-italic font-normal leading-[normal] font-[Inter]">
                            Join the elite group of successful startup investors
                            with our exclusive membership.
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center my-2 mx-5 py-1 ">
                        <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[inter]">
                          Read more
                        </label>
                        <SlArrowRightCircle size={20} />
                      </div>
                    </div>
                  </a>
                </>
              ))}
            </div>

            <div className=" hidden md:flex md:flex-col md:gap-y-8 md:w-[350px]">
              <Link to="/learn">
                <div className="cta">
                  <div className="ctaimg bg-[#3F66CCCC]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[inter]">
                      Learn about Us
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-16">
                      <img src={Cta8} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 mx-5 py-1 ">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
              <Link to="/about_us">
                <div className="cta ">
                  <div className="ctaimg bg-[#E7A536CC]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[inter]">
                      Meet the Team
                    </label>
                    <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[inter]">
                      Learn more about our excellent team
                    </p>
                    <div className="flex justify-end mt-14">
                      <img src={Cta9} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 mx-5 py-1 ">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Press;
