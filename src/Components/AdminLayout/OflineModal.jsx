import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Select from "react-select";

import "react-datepicker/dist/react-datepicker.css";

function OfloneModal(props) {
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [selectedInvestorName, setSelectedInvestorName] = useState(null);
  const [selectedStartup, setSelectedStartup] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRtl, setIsRtl] = useState(false);
  const [inputarr, setInputarr] = useState([]);

  const [inputdata, setInputdata] = useState({
    name: "",
    startupName: "",
    totalamount: "",
    dateOfpayment: "",
    TransactionId: "",
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { totalamount, dateOfpayment, TransactionId } = inputdata;
  function changhandle() {
    setInputarr([...inputarr, { totalamount, dateOfpayment, TransactionId }]);

    setInputdata({
      totalamount: "",
      dateOfpayment: "",
      TransactionId: "",
      dateOfpayment: "",
    });
  }

  const setSelectedInvestorHandler = (newValue) => {
    setSelectedInvestor(newValue.value);
    setSelectedInvestorName(newValue.label);
  };

  const setSelectedStartupHandler = (newValue) => {
    setSelectedStartup(newValue.value);
  };

  const callback = props.callback;
  const handleCallback = (newValue) => {
    const data = {
      selectedInvestor,
      selectedStartup,
      name: selectedInvestorName,
      totalAmount: inputdata.totalamount,
      date: inputdata.dateOfpayment,
      reference: inputdata.TransactionId,
      dateOfpayment: inputdata.dateOfpayment,
    };
    callback(data);
    setInputdata({
      totalamount: "",
      dateOfpayment: "",
      TransactionId: "",
    });
    setShowModal(false);
  };

  return (
    <>
      <section>
        <div
          className="bg-[#202054] text-center text-[#ffffff] md:px-1 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <h4 className=" text-[16px]  text-[#FFFFFF] font-[400] leading-[18.75px] cursor-pointer">
            {" "}
            Add transaction
          </h4>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex  fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[1000px]  my-6 mx-auto ">
                {/*content*/}
                <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full h-[600px] bg-white outline-none focus:outline-none ">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                    <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px] mx-8">
                      Add Transaction
                    </h4>

                    <div
                      className="ml-auto leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" flex items-center justify-center cursor-pointer  text-black  h-5 w-5  text-2xl  outline-none focus:outline-none">
                        ×
                      </span>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="relative p-6 flex-auto pb-[px]">
                    <div className="flex flex-wrap mx-3 mb-6">
                      <div className="w-full px-3 mb-2  relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Investor name
                        </label>

                        <Select
                          className="basic-single block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                          classNamePrefix="Select Investor"
                          // defaultValue={colourOptions[0]}
                          name="name"
                          isDisabled={isDisabled}
                          defaultValue={selectedInvestor}
                          // isLoading={isLoading}
                          // isClearable
                          isRtl={isRtl}
                          isSearchable={isSearchable}
                          options={props?.investors}
                          // value={selectedInvestor}
                          onChange={setSelectedInvestorHandler}
                          // onChange={(event)=>{setSelectedInvestor(event.target.value)}}
                        />

                        {/* <button
                          type="submit"
                          className="absolute left-[22px] bottom-[25px]  "
                        >
                          <div className="h-4 w-4 fill-current ">
                            <BsSearch />
                          </div>
                        </button> */}
                      </div>
                      <div className="w-full px-3 mb-2  relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Startup Name
                        </label>
                        {/* <input
                          className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] pl-9 pr-2 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                          type="text"
                          placeholder="select statrtup"
                          name="startupName"
                          onChange={changehandle}
                          value={inputdata.startupName}
                        /> */}
                        <Select
                          className="basic-single block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                          classNamePrefix="select statrtup"
                          // defaultValue={colourOptions[0]}
                          defaultValue={selectedStartup}
                          isDisabled={isDisabled}
                          // isLoading={isLoading}
                          // isClearable={isClearable}
                          isRtl={isRtl}
                          isSearchable={isSearchable}
                          name="startupName"
                          // value={selectedStartup}
                          options={props?.startups}
                          onChange={setSelectedStartupHandler}
                        />
                        {/* <button
                          type="submit"
                          className="absolute left-[22px] bottom-[25px]  "
                        >
                          <div className="h-4 w-4 fill-current ">
                            <BsSearch />
                          </div>
                        </button> */}
                      </div>

                      <div className="w-full px-3 mb-5 ">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Total amount
                        </label>
                        <input
                          className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="number"
                          placeholder="Enter here"
                          name="totalamount"
                          onChange={changehandle}
                          value={inputdata.totalamount}
                        />
                      </div>

                      <div className="w-full px-3 mb-5  relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Date of payment
                        </label>

                        <input
                          className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="date"
                          placeholder="Enter here"
                          name="dateOfpayment"
                          onChange={changehandle}
                          value={inputdata.dateOfpayment}
                        />
                      </div>

                      <div className="w-full px-3 mb-5">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Transaction id
                        </label>
                        <input
                          className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="number"
                          placeholder="Enter here"
                          name="TransactionId"
                          onChange={changehandle}
                          value={inputdata.TransactionId}
                        />
                      </div>
                    </div>
                    <div className="w-[100%] flex md:justify-end  justify-center pr-[25px]  ">
                      <div
                        className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                        onClick={handleCallback}
                      >
                        <h4 className="px-[30px]"> Add</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  );
}

export default OfloneModal;
