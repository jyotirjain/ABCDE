import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Button = (props) => {
  return (
    <button className="bg-[#180048] text-white border-[1px] border-white  md:px-8 md:w-auto w-full py-2 rounded-[10px] hover:bg-[#3e1c7d] duration-200">
      <h4 className="flex items-center justify-center ">
        {props.name}

        <span className="md:block hidden pt-[4px] pl-[8px]">
          
        </span>
      </h4>
    </button>
  );
};

export default Button;
