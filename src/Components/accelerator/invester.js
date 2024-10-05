import React, { useState } from "react";
import demo from "../../layout/demodata.json";

import Investerdata from "./investerdata";
import Refer from "./refer";

function Invester() {
  const datas = useState(demo);

  return (
    <div className="startupacc">
      <div className="startupacctp">
        <Refer/>
        {/* <button className="bg-[#ffffff] text-[#202054] ">Refer Link</button> */}
        <button className="w-[114px] h-[31px] not-italic font-normal text-base leading-[19px] text-white rounded-[7.7392px] bg-[#202054] font-[Inter]">
          Export
        </button>
      </div>
      <div className="mt-2">
        <Investerdata data={datas} />
      </div>
    </div>
  );
}

export default Invester;
