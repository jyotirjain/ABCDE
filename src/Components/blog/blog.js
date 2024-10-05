import React, { useState } from "react";
import { Blogdata } from "./blogdata";
import Navbar from "../Navbar1/Navbar1";
import Topsection from "../Layout2/Topsection";

import Section1 from "./section1";
import { AiOutlineRight } from "react-icons/ai";
import { RightCircleOutlined } from "@ant-design/icons";

import Subtract2 from "../../assets/images/Subtract2.png";
import Subtract3 from "../../assets/images/Subtract3.png";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Footer2 from "../Footer2/Footer2";
import { Helmet } from "react-helmet";

function cleanTitleForRoute(title) {
  const cleanedTitle = title.replace(/[.:?]/g, "");
  return cleanedTitle.replace(/ /g, "-");
}

function Blog() {
  const [blog, setblog] = useState(Blogdata);

  return (
    <div>
      <Topsection />
      <Navbar verified={"true"} />
      <Helmet defer={false}>
        <title>
          Startup Investing Blog | Insights, Tips, and News from Bizdateup
        </title>
        <meta
          name="description"
          content="Explore the Bizdateup blog for valuable insights, tips, and news about startup investing. Stay informed and make smarter investment decisions with our expert articles."
        />
        <meta
          name="keywords"
          content="startup investing blog, insights, tips, news, Bizdateup blog, investment decisions"
        />
      </Helmet>
      <Section1 />
      <div className="flex justify-center">
        <div className="w-[80%] flex justify-center">
          <div className="w-fit py-12 grid gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 md:grid-cols-3 md:gap-x-16 md:gap-y-12">
            {blog.map((data, index) => {
              return (
                <div className="flex justify-center" key={index}>
                  <Link to={`/blogs/${cleanTitleForRoute(data.title)}`}>
                    {" "}
                    {/* Update the Link URL */}
                    <div
                      className=" sm:w-[290px]  md:w-[300px] md:h-[400px]  xl:w-[360px] xl:h-[380px] shadow-[0px_1px_16px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#ffffff]"
                      key={data.id}
                    >
                      <div className=" blogs-content w-full xl:h-[350px] rounded-[10.3802px] flex flex-col  bg-[#f7ecff] p-[15px]">
                        <div className="aspect-[5/3] overflow-hidden bg-slate-50 mb-6 rounded-[10.3802px]">
                          <img src={data.image} className="w-full" />
                        </div>
                        <label className=" not-italic font-normal md:text-[18px] mb-3  xl:text-[20.3426px] leading-[23px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                          {data.title.slice(0, 25)}...
                        </label>
                        <p dangerouslySetInnerHTML={{ __html: data.para.slice(0,68) }} className=" not-italic font-normal md:text-[15px] xl:text-[15.822px] leading-[25px] tracking-[0.226028px] text-[#b6a2dd] font-[Inter]">
                          {/* {data.para.slice(0, 68)}... */}
                        </p>
                      </div>
                      <div className="flex justify-between items-center py-2 mx-5 text-center">
                        <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                          Read more
                        </label>

                        <RightCircleOutlined />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer2 />
    </div>
  );
}

export default Blog;
