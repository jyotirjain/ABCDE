import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

function DetailModal({ data }) {
  const [showModal, setShowModal] = useState(false);

  const options = [
    { value: "Healthcare", label: "Healthcare" },
    { value: "Technology", label: "Technology" },
    { value: "Retail", label: "Retail" },
    { value: "Fintech", label: "Fintech" },
    { value: "Ecommerce", label: "Ecommerce" },
    { value: "Artificial intelligence ", label: "Artificial intelligence " },
    { value: "Educational technology", label: "Educational technology" },
    { value: "Logistics", label: "Logistics" },
    { value: "Financial services", label: "Financial services" },
    { value: "Construction", label: "Construction" },
    { value: "Health technology ", label: "Health technology " },
    { value: "Education Entertainment ", label: "Education Entertainment " },
    { value: "Tourism", label: "Tourism" },
    { value: "Cloud computing ", label: "Cloud computing " },
    { value: "Big data ", label: "Big data " },
    { value: "Aerospace", label: "Aerospace" },
    { value: "Virtual reality", label: "Virtual reality" },
  ];

  const handleChange = (selectedOption, actionMeta) => {};
  const handleInputChange = (inputValue, actionMeta) => {};

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
                <div className="border-0 rounded-lg h-[600px] shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none overflow-y-auto">
                  {/*header*/}
                  <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                    <h4 className="text-[19px] px-[20px]  font-[400] text-[#202054] leading-[28.8px]">
                      Profile
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

                    <form className="w-full ">
                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Upload Profile image
                          </label>

                          <input
                            className=" appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                            type="file"
                            placeholder="Enter your first name here "
                          />
                          <div className="flex w-full mt-10 md:mb-0 ">
                            <div className="w-full md:w-1/2 pr-3  ">
                              <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                                First Name
                              </label>
                              <input
                                className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                                type="text"
                                placeholder="Enter your first name here "
                                value={data.founderFirstName}
                              />
                            </div>
                            <div className="w-full md:w-1/2 ">
                              <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                                Last Name
                              </label>
                              <input
                                className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                                id="grid-last-name"
                                type="text"
                                placeholder="Enter your last name here"
                                value={data.founderLastName}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Hello, what’s the name of your startup/company?
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                            type="text"
                            placeholder="Enter your first name here "
                            value={data.registeredCompanyName}
                          />
                          <div className="w-full   mt-10 md:mb-0">
                            <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                              Email ID
                            </label>
                            <input
                              className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="email"
                              placeholder="Enter your email id here "
                              value={data.email}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="flex flex-wrap w-full ">
                          <div className=" w-full md:w-1/2 px-3">
                            <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                              Co-fonder name
                            </label>
                            <input
                              className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                              id="grid-last-name"
                              type="text"
                              placeholder="Enter Co-fonder name here"
                            />
                          </div>
                          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                              Contact number
                            </label>
                            <input
                              className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                              type="number"
                              placeholder="Enter your first name here "
                              value={data.phone}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Where is company based?
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            value={data.companyBased}
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Company Description
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter Company Description here"
                            name="shortDescription"
                            value={data.shortDescription}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            How Much funds you looking invest
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-white focus:outline-none focus:border-gray-500"
                            type="number"
                            placeholder="Enter here "
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label
                            htmlFor="bank_name"
                            className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                          >
                            Stage of you Startup?
                          </label>
                          <select
                            defaultValue={"DEFAULT"}
                            id="bank_name"
                            className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-gray-500 block w-full p-2.5 "
                          >
                            <option value="DEFAULT">pre-revenue</option>
                            <option value="US">kotak Mahindra Bank</option>
                            <option value="CA">Axis Bank</option>
                            <option value="FR">State Bank of India</option>
                          </select>
                        </div>
                      </div>

                      <div className="flex  flex-wrap mx-3 mb-6">
                        <div className="w-full md:w-1/2 px-3">
                          <div>
                            <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                              Hove you raise fund before ?
                            </label>
                          </div>

                          <div className="md:flex mt-[15px] items-center flex-wrap grid grid-cols-2 gap-8">
                            <div className="flex items-center mr-4 px-3">
                              <input
                                id="inline-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                              />
                              <label
                                htmlFor="inline-radio"
                                className="ml-2  text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                Yes
                              </label>
                            </div>
                            <div className="flex items-center mr-4">
                              <input
                                id="inline-2-radio"
                                type="radio"
                                value=""
                                name="inline-radio-group"
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                              />
                              <label
                                htmlFor="inline-2-radio"
                                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                            htmlFor="grid-password"
                          >
                            Youtube Link
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="Enter your Youtube Link here "
                            name="youtubeVideoUrl"
                            value={data.youtubeVideoUrl}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                            htmlFor="grid-password"
                          >
                            Key Highlight 1
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-password"
                            placeholder="Enter your Key Highlight 1 Here "
                            value={data?.keyHighlights?.keyHighlight1}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                            htmlFor="grid-password"
                          >
                            Key Highlight 2
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-password"
                            placeholder="Enter your Key Highlight 2 Here "
                            name="keyHighlight2"
                            value={data?.keyHighlights?.keyHighlight2}
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                            htmlFor="grid-password"
                          >
                            Key Highlight 3
                          </label>
                          <input
                            className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-password"
                            name="keyHighlight3"
                            placeholder="Enter your Key Highlight 3 Here "
                            value={data?.keyHighlights?.keyHighlight3}
                          />
                        </div>
                      </div>

                      <div className="flex flex-wrap mx-3 mb-6 pb-[70px]">
                        <div className="w-full px-3">
                          <label
                            className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[11px] mb-[5px]"
                            htmlFor="grid-password"
                          >
                            Select your Preferred sector
                          </label>
                          <CreatableSelect
                            options={options}
                            onChange={handleChange}
                            onInputChange={handleInputChange}
                            isMulti
                            styles={colorStyles}
                            
                          />
                        </div>
                      </div>
                      <div className="w-[100%] flex md:justify-end  justify-center pr-[20px] pt-[50px] pb-[70px]">
                        <div className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                          <h4 className="px-[30px]"> Confirm</h4>
                        </div>
                      </div>
                    </form>
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
