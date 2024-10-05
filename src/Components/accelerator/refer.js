import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";

function Refer() {
  const [showModal, setShowModal] = useState(false);

  const refer = () => {
    toast.success("Copied succesfully");
  };

  return (
    <section>
      <button
        className=" flex justify-center items-center  w-[133px] h-[31px] shrink-0 border text-[#202054] text-base not-italic font-normal leading-[normal] rounded-[7.739px] border-solid border-[#202054] bg-white font-[Inter]"
        onClick={() => setShowModal(true)}
      >
        Refer Link
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[1000px] flex justify-center  my-6 mx-auto ">
              {/*content*/}
              <div className=" relative w-[599px] h-[90px] shrink-0 shadow-[0px_1px_16px_0px_rgba(0,0,0,0.25)] rounded-[10px] bg-white p-2 pb-2">
                {/*header*/}
                <div className="flex items-center justify-between border-solid border-slate-200 rounded-t">
                  <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px] ">
                    Refer for Startup
                  </h4>

                  <div
                    className=" leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" flex items-center justify-center cursor-pointer  text-black  h-5 w-5  text-2xl  outline-none focus:outline-none">
                      ×
                    </span>
                  </div>
                </div>
                {/*body*/}
                <div>
                  <p className=" text-[#828F99] text-[10px] not-italic font-normal leading-[23.8px] tracking-[0.4px] font-[Inter]">
                    Refer a startups
                  </p>
                  <div className="w-[584px] flex justify-between h-6 shrink-0  bg-[#d9d9d9] rounded-[5px]">
                    <p className="text-[#00F] text-[9px] not-italic font-light leading-[23.8px] tracking-[0.4px]  font-[Inter]"></p>
                    <CopyToClipboard>
                      <div
                        type="button"
                        onClick={refer}
                        className="w-[47px] h-6 flex justify-center items-center shrink-0 border text-[#828F99] text-[10px] not-italic font-normal leading-[normal] rounded-[5px] border-solid border-[#DDD] bg-[#fff]"
                      >
                        Copy
                      </div>
                    </CopyToClipboard>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ToastContainer position="bottom-right"/>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </section>
  );
}

export default Refer;
