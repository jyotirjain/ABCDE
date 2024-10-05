import React from "react";

function Contactform() {
  return (
    <div className="w-[100%] lg:w-[70%]">
      <h2 className="not-italic font-normal text-[19.2px] leading-[29px] text-[#202054] font-[Inter]">
        Contact
      </h2>
      <label className="not-italic font-normal text-base leading-6 text-[#252525] font-[Inter]">
        Send us a message
      </label>
      <form>
        <div className="flex flex-col gap-x-10 w-[100%] md:flex md:flex-row  ">
          <div className="nm w-[100%]">
            <label>
              First Name<span>*</span>
            </label>
            <input placeholder="First Name" />
          </div>
          <div className="nm w-[100%]">
            <label>
              Last Name<span>*</span>
            </label>
            <input placeholder="Last Name" />
          </div>
        </div>
        <label>
          Email Id<span>*</span>
        </label>
        <input placeholder="Email Address " />

        <label>
          Mobile Number<span>*</span>
        </label>
        <input placeholder="Mobile Number" />

        <label>Type the Message here</label>
        <textarea placeholder="Message here" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contactform;
