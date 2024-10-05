import React from "react";
import logoSmall from "../../../assets/images/logosmall.png";
import vector from "../../../assets/images/Vector.png";
import { bytesdata } from "./bytesdata";

function Bytes() {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col justify-start w-[100%]">
        <h1 className="not-italic font-medium text-[28px] leading-[42px] text-[#202054] font-[Inter]">
          Tutorials
        </h1>
        <div className="grid md:grid-cols-3 w-fit gap-4">
          {bytesdata.map((bytes) => {
            return (
              <div
                key={bytes.id}
                className="w-[362px] h-[356px] rounded-[10px] bg-[#ffffff] p-3 flex flex-col justify-between"
              >
                <div className="aspect-video rounded-[10px] overflow-hidden flex justify-center items-center flex-2 ">
                  <iframe
                    src={bytes.youtubtlink}
                    className="object-contain w-full "
                  />
                </div>
                <div className="flex flex-col justify-between h-[150px]">
                  <div className="flex items-center pt-2 gap-1">
                    <img src={logoSmall} />
                    <label className="not-italic font-semibold text-sm leading-[18px] text-[#252525] font-[Inter]">
                      {bytes.title}
                    </label>
                  </div>
                  <p className="not-italic font-normal text-sm leading-[18px] text-[#8A8A8E] font-[Inter] py-2 overflow-hidden">
                    {bytes.desc}
                  </p>
                </div>
                <a
                  href={bytes.videolink}
                  target="_blank"
                  className="cursor-pointer mt-2"
                >
                  <div className="flex text-center items-center justify-end cursor-pointer">
                    <img
                      src={vector}
                      className="w-[16px] h-[16px] cursor-pointer"
                    />
                    <label className="not-italic font-semibold text-[14px] ml-1 cursor-pointer text-[#202054] font-[Inter]">
                      Watch Video
                    </label>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bytes;
