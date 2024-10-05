import { Progress } from "antd";
import React from "react";


function Raised(props) {
  
  
  const percentage = (props.data?.dealTerms?.targetAmount/ props.data?.dealTerms?.targetAmount) * 100;

  const balanced = (Number(props.data?.dealTerms?.targetAmount) - Number(props.data?.dealTerms?.targetAmount))
  
  
  return (
    <div className='raised w-[100%] md:max-w-[1300px] py-10 px-10'>
      <div className='flex gap-x-4'>
        <img
          src={"https://www.bizdateup.com/v1/logo/" + props.data.logo}
          alt=''
          className='w-[10%]'
        />

        <div className='raisecom'>
          <h2>{props.data.registeredCompanyName}</h2>
          <Progress
            percent={percentage}
            strokeColor={"#202054"}
            className='w-[100%] not-italic font-medium text-[16.5785px] leading-[19px] text-right text-[rgba(36,37,82,0.9)] opacity-90 font-[Inter]'
          />
        </div>
      </div>
      <div className=' flex flex-col gap-y-6 md:flex md:flex-row  md:gap-x-8 mt-9 md:justify-around'>
        <div className='tag flex gap-12'>
          <p>Start Date</p>
          <label></label>
        </div>
        <div className='tag flex gap-12'>
          <p>Closes in </p>
          <label></label>
        </div>
        <div className='tag flex gap-12'>
          <p>balanced</p>
          <label>{balanced}</label>
        </div>
      </div>
    </div>
  );
}

export default Raised;
