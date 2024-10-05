import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import {dateRedable} from "../../script/helper"
function DetailModal(props) {
  const [showModal, setShowModal] = useState(false);
  const [investmentData] = useState(props.data);
  const handleApprovedClickCallback = props.handleApprovedClickCallback;
  const handleRejectClickCallback = props.handleRejectClickCallback;
  
  
  const options = [
    { value: "Health tech", label: "Health tech" },
    { value: "Fintech", label: "Fintech" },
    { value: "Ev", label: "Ev" },
    { value: "Ed tech", label: "Ed tech" },
  ];
  const handleChange = (selectedOption, actionMeta) => {
    
  };
  const handleInputChange = (inputValue, actionMeta) => {
    
  };
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,
        // backgroundColor: data.color,
        backgroundColor: "#E1DDF8",

        color: "#E1DDF8",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "black",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "black",
        cursor: "pointer",

        ":hover": {
          color: "red",
        },
      };
    },
  };

  return (
    <>
      <section>
        <div
          className="bg-[#202054] cursor-pointer text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <h4 className="px-[25px] text-[11.2px]"> View</h4>
        </div>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[1000px]  my-6 mx-auto ">
                {/*content*/}
                <div className="border-0 rounded-lg  pt-[15px] shadow-lg relative flex flex-col w-full h-[600px] bg-white outline-none focus:outline-none overflow-y-auto">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                    <h4 className="text-[19px] px-[20px]  font-[400] text-[#202054] leading-[28.8px]">
                      Investment Details for order <span>#{investmentData.orderId}</span>
                    </h4>

                    <div
                      className="ml-auto leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className=" flex items-center justify-center cursor-pointer text-black  h-5 w-5  text-2xl  outline-none focus:outline-none">
                        ×
                      </span>
                    </div>
                  </div>
                  {/*body*/}

                  <div className="relative p-6 flex-auto pb-[px]">
                    {/* <form action="">
                    <label htmlhtmlFor=""></label>
                  <input type="file" onChange={handleChange} />
            
                  </form> */}

                    {/* <form className="w-full "> */}
                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            OrderId
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                            type="text"
                            defaultValue={investmentData.orderId}
                          />
                         
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Name of your Investor.
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                            type="text"
                            defaultValue={investmentData.investorName}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="flex flex-wrap w-full ">

                          <div className=" w-full md:w-1/2 px-3">
                            <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                              Transaction No
                            </label>
                            <input
                              className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="text"
defaultValue={investmentData.reference}
                            />
                          </div>
                          <div className=" w-full md:w-1/2 px-3">
                            <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                              Name of Startup
                            </label>
                            <input
                              className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="text"
                              defaultValue={investmentData.companyName}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Total Amount
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                            type="number"
                          defaultValue={investmentData.amountBreakdown.totalamount}
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Invested at
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            defaultValue={dateRedable(investmentData.createdAt)}
                          />
                        </div>
                      </div>

                  
                      <div className="w-[100%] flex md:justify-end  justify-center pr-[20px] pt-[50px] pb-[70px]">
                        <div className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                        <h4
                                        className="px-[25px] text-[11.2px]"
                                        onClick={() =>
                                          handleApprovedClickCallback(investmentData._id)
                                        }
                                      >
                                        Approved
                                      </h4>
                        </div>
                      {/* </div>
                      <div className="w-[100%] flex md:justify-end  justify-center pr-[20px] pt-[50px] pb-[70px]"> */}
                        <div className="bg-[#b82020] text-[#ffffff] md:px-4 mx-2 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                        <h4
                                        className="px-[25px] text-[11.2px]"
                                        onClick={() =>
                                          handleRejectClickCallback(investmentData._id)
                                        }
                                      >
                                        Reject
                                      </h4>
                        </div>
                      </div>
                    {/* </form> */}
                  </div>

                  {/*footer*/}
                  {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div> */}
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

export default DetailModal;
