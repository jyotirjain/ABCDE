import React from "react";
import { Blogdata } from "./blogsdata";
import { RightCircleOutlined } from "@ant-design/icons";

import { Link } from "react-router-dom";
import { useState } from "react";

function Blogs() {
  const [blog, setblog] = useState(Blogdata);

  const filteritem = (categItem) => {
    const updatedItems = Blogdata.filter((curElem) => {
      return curElem.category === categItem;
    });
    setblog(updatedItems);
  };
  return (
    <div>
      <div className="flex ">
        <div className="w-[100%]">
          
          <div className="w-[100%] pb-4 grid gap-4 pt-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-6 md:grid-cols-3  md:gap-x-16 md:gap-y-12">
            {blog.map((data, index) => {
              return (
                <div className="flex justify-center">
                  <Link to={`/blogs/${data.id}`}>
                    <div
                      className=" sm:w-[290px]  md:w-[300px] md:h-[400px]  xl:w-[360px] xl:h-[452px] shadow-[0px_1px_16px_rgba(0,0,0,0.15)] rounded-[10px] bg-[#ffffff]"
                      key={data.id}
                    >
                      <div className=" blogs-content w-full xl:h-[418px] rounded-[10.3802px] flex flex-col gap-6 bg-[#f7ecff] p-[15px]">
                        <div className="aspect-[5/3] overflow-hidden bg-slate-50 rounded-[10.3802px]">
                          <img src={data.image} className="w-full" />
                        </div>
                        <label className=" not-italic font-normal md:text-[18px] xl:text-[20.3426px] leading-[23px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                          {data.title}
                        </label>
                        <p className="module overflow sm:before:right-10 md:before:right-16 before:right-4 not-italic h-[50px]  overflow-hidden text-ellipsis font-normal md:text-[15px] xl:text-[15.822px] leading-[25px] tracking-[0.226028px] text-[#180048] font-[Inter]">
                          {data.para}
                        </p>
                      </div>
                      <div className="flex justify-between items-center my-2 mx-5 text-center">
                        <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                          Get Started
                        </label>

                        <RightCircleOutlined />
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="flex justify-end">
            <Link to="/blogs">
              <button className="w-[149px] h-10 not-italic font-normal text-base leading-[22px] text-center tracking-[0.2px] text-white bg-[#180048] font-[Inter]">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
