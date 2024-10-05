import React from "react";

import { RightCircleOutlined } from "@ant-design/icons";
import Zee from "../assets/images/zee.png";
import Midday from "../assets/images/midday.png";
import Theweek from "../assets/images/theweek.png";
import outlook from "../assets/images/outlook.png";
import Footer2 from "../Components/Footer2/Footer2";
import Navbar from "../Components/Navbar1/Navbar1";
import { Helmet } from "react-helmet";

function News() {
  return (
    <div>
      <Navbar  />
      <Helmet defer={false}>
        <title>News</title>
        <meta name="description" content="News description" />
      </Helmet>
      <div className="p-8 flex justify-center">
        <div className="sm:w-[90%] lg:w-[80%]">
          <h1>Bizdateup : Press releases</h1>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 xl:grid-cols-3 md:gap xl:gap-x-16 xl:gap-y-12">
            <div>
              <a
                href="https://www.zeebiz.com/agencies/bizdateup-ensures-the-best-funding-and-investment-opportunities-202314"
                target="_blank"
              >
                <div className="w-[360px] h-[270px] shadow-[0px_1px_16px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#ffffff]">
                  <div className="w-[361px] h-[228px] rounded-[10.3802px] p-6 bg-[#E3E9FE] flex flex-col gap-5">
                    <div className="box-border w-[84.51px] h-[84.51px] rounded-[10px] border-[0.5px] border-solid border-[#DDDDDD] bg-[#ffffff] flex items-center ">
                      <img src={Zee} />
                    </div>
                    <label className="not-italic font-normal text-lg leading-[25px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                      BizDateUp ensures the best funding and investment
                      opportunities
                    </label>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    Read more
                    <RightCircleOutlined />
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://www.mid-day.com/brand-media/article/make-your-investment-and-funding-processes-streamlined-with-bizdateups-startup-solutions-23248814"
                target="_blank"
              >
                <div className="w-[360px] h-[270px] shadow-[0px_1px_16px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#ffffff]">
                  <div className="w-[361px] h-[228px] rounded-[10.3802px] p-6 bg-[#E3E9FE] flex flex-col gap-5">
                    <div className="box-border w-[84.51px] h-[84.51px] rounded-[10px] border-[0.5px] border-solid border-[#DDDDDD] bg-[#ffffff] flex items-center ">
                      <img src={Midday} />
                    </div>
                    <label className="not-italic font-normal text-lg leading-[25px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                      Make your investment and funding processes streamlined
                      with BizdateUp's startup solutions
                    </label>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    Read more
                    <RightCircleOutlined />
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://www.theweek.in/news/biz-tech/2022/09/30/jeet-chandan-founder-and-md-of-bizdateup-decodes-what-it-takes-to-be-a-successful-entrepreneur.html"
                target="_blank"
              >
                <div className="w-[360px] h-[270px] shadow-[0px_1px_16px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#ffffff]">
                  <div className="w-[361px] h-[228px] rounded-[10.3802px] p-6 bg-[#E3E9FE] flex flex-col gap-5">
                    <div className="box-border w-[84.51px] h-[84.51px] rounded-[10px] border-[0.5px] border-solid border-[#DDDDDD] bg-[#ffffff] flex items-center ">
                      <img src={Theweek} />
                    </div>
                    <label className="not-italic font-normal text-lg leading-[25px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                      Jeet Chandan, Founder & MD of BizDateUp, decodes what it
                      takes to be a successful entrepreneur
                    </label>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    Read more
                    <RightCircleOutlined />
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a
                href="https://www.outlookindia.com/outlook-spotlight/serial-entrepreneur-evangelist-and-startup-mentor-jeet-chandan-rewriting-the-rules-of-the-business-landscape-news-224593"
                target="_blank"
              >
                <div className="w-[360px] h-[270px] shadow-[0px_1px_16px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#ffffff]">
                  <div className="w-[361px] h-[228px] rounded-[10.3802px] p-6 bg-[#E3E9FE] flex flex-col gap-5">
                    <div className="box-border w-[84.51px] h-[84.51px] rounded-[10px] border-[0.5px] border-solid border-[#DDDDDD] bg-[#ffffff] flex items-center ">
                      <img src={outlook} />
                    </div>
                    <label className="not-italic font-normal text-lg leading-[25px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                      Serial Entrepreneur, Evangelist And Startup Mentor : Jeet
                      Chandan Rewriting The Rules Of The Business Landscape
                    </label>
                  </div>
                  <div className="flex justify-between items-center p-2">
                    Read more
                    <RightCircleOutlined />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default News;
