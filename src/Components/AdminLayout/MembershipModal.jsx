import Select from "react-select";
import React, { useState } from "react";

function MembershipModal(props) {
  console.log("🚀 ~ file: MembershipModal.jsx:5 ~ MembershipModal ~ props:", props)
  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [selectedInvestorName, setSelectedInvestorName] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRtl, setIsRtl] = useState(false);

  const [inputdata, setInputdata] = useState({
    selectedInvestor: "",
    startdate: "",
    enddate: "",
    amount: "",
  });

  console.log("inputdata");
  console.log(props);

  function changehandle(e) {
    console.log(inputdata);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const setSelectedInvestorHandler = (newValue) => {
    setSelectedInvestor(newValue.value);
    setSelectedInvestorName(newValue.label);
  };

  const callback = props.callback;
  const handleCallback = (newValue) => {
    const data = {
      selectedInvestor,
      amount: inputdata.amount,
      startdate: inputdata.startdate,
      enddate: inputdata.enddate,
    };
    callback(data);
    setInputdata({
      selectedInvestor: "",
      startdate: "",
      enddate: "",
      amount: "",
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
            Add Membership
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
                      Add Membership
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
                          Subscription Start date{" "}
                        </label>
                        <input
                          className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="date"
                          placeholder="Enter here"
                          name="startdate"
                          onChange={changehandle}
                          value={inputdata.startdate}
                        />
                      </div>

                      <div className="w-full px-3 mb-5  relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Subscription End date
                        </label>

                        <input
                          className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="date"
                          placeholder="Enter here"
                          name="enddate"
                          onChange={changehandle}
                          value={inputdata.enddate}
                        />
                      </div>

                      <div className="w-full px-3 mb-5">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Amount
                        </label>
                        <input
                          className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="number"
                          placeholder="Enter here"
                          name="amount"
                          onChange={changehandle}
                          value={inputdata.amount}
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

export default MembershipModal;
