import React, { useEffect } from "react";
import Navbar from "../Navbar1/Navbar1";
import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { Blogdata } from "./blogdata";
import { Link } from "react-router-dom";
import Footer2 from "../Footer2/Footer2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RightCircleOutlined } from "@ant-design/icons";
import Loader from "../loader/loader";
import { Helmet } from "react-helmet";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta5 from "../../assets/images/cta/cta5.png";
import LoaderApi from "../LoaderApi/LoaderApi";

function cleanTitleForRoute(title) {
  const cleanedTitle = title.replace(/[.:?]/g, "");
  return cleanedTitle.replace(/ /g, "-");
}

function Blogpage() {
  const { title } = useParams();
  const [blogdata, setblogdata] = useState(null);
  const originalTitle = cleanTitleForRoute(title);

  const navigate = useNavigate();

  const handleLinkClick = () => {
    navigate(`/blogs/${cleanTitleForRoute(randomBlog1.title)}`);
  };

  useEffect(() => {
    console.log("Original Title:", originalTitle);
    let blog = Blogdata.find(
      (blog) => cleanTitleForRoute(blog.title) === originalTitle
    );
    console.log("Blog Data:", blog);

    if (blog) {
      setblogdata(blog);
    }
  }, []);

  const getRandomUniqueIndex = (currentIndex, otherIndex) => {
    let random = Math.floor(Math.random() * Blogdata.length);
    while (
      random === currentIndex ||
      random === otherIndex ||
      random === blogdata?.id
    ) {
      random = Math.floor(Math.random() * Blogdata.length);
    }
    return random;
  };

  const randomBlogIndex1 = getRandomUniqueIndex(
    Blogdata.findIndex((blog) => blog.title === originalTitle),
    -1
  );
  const randomBlog1 = Blogdata[randomBlogIndex1];

  return (
    <div>
      {blogdata && (
        <Helmet>
          <title>{blogdata.metaTitle}</title>
          <meta name="description" content={blogdata.metaDescription} />
        </Helmet>
      )}
      <Navbar verified={"true"} userType={"investor"} />
      <div className="flex justify-center p-3 lg:p-6 bg-[#fafafa]">
        <div className="w-[100%] md:max-w-[1220px] lg:w-[75%]">
          <Link to="/blogs">
            <label className="not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter] flex items-center my-6">
              <MdOutlineKeyboardArrowLeft />
              GO BACK
            </label>
          </Link>
          <div className="flex gap-x-10  lg:w-[100%]">
            {blogdata ? (
              <div className="profile-container w-[100%] h-fit flex flex-col gap-4 lg:w-[75%]">
                <h2 className="not-italic font-normal text-[22px] md:text-[28px] leading-[33px] text-[#252525] font-[Inter]">
                  {blogdata.title}
                </h2>
                <p className="not-italic font-normal text-[15.6657px] leading-[18px] text-[#828F99] font-[Inter]">
                  {blogdata.date}
                </p>
                <div className="md:aspect-video my-4 md:overflow-hidden  md:object-contain md:rounded-[10px]">
                  <img
                    className="w-full h-full"
                    src={blogdata.image}
                    alt="Blog Image "
                  />
                </div>
                <label
                  className="not-italic font-normal text-[16px] leading-[30px] text-[#252525] font-[Inter]"
                  dangerouslySetInnerHTML={{ __html: blogdata.para }}
                />
                {blogdata.image2 && (
                  <img
                    className="w-full h-full"
                    src={blogdata.image2}
                    alt="Blog Image "
                  />
                )}

                <p className="not-italic whitespace-pre-line font-normal text-[16px] leading-[30px] text-[#252525] font-[Inter]">
                  {blogdata.desc2}
                </p>
              </div>
            ) : (
              <LoaderApi />
            )}

            <div className="hidden md:flex md:flex-col md:gap-y-8 ">
              <Link to="/learn">
                <div className="cta  ">
                  <div className="ctaimg bg-[#D3D0E9]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Learn about Us
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta5} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2 mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Find more resources
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
              <Link to="/about-us">
                <div className="cta  ">
                  <div className="ctaimg bg-[#515760]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#fafafa] font-[Inter]">
                      Learn about Us
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#fafafa] font-[Inter]">
                      Learn more about us
                    </p>
                    <div className="flex justify-end mt-12">
                      <img src={Cta1} />
                    </div>
                  </div>
                  <div className="flex justify-between items-center my-2  mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn Now
                    </label>
                    <RightCircleOutlined />
                  </div>
                </div>
              </Link>
              <a
                href={`/blogs/${randomBlog1.title
                  .replaceAll(" ", "-")
                  .replaceAll("?", "")
                  .replaceAll(".", "")
                  .replaceAll(":", "")}`}
              >
                <div className="cta  ">
                  <div className="ctaimg bg-[#D3D0E9]">
                    <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                      Related Article
                    </label>
                    <p className="xl:w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                      {randomBlog1.title}
                    </p>
                  </div>
                  <div className="flex justify-between items-center my-2  mx-5 py-1">
                    <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                      Learn More
                    </label>
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

export default Blogpage;
