import React, { useState } from "react";
import Select from "react-select";

function EventModal() {
  const [showModal, setShowModal] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [inputarr, setInputarr] = useState([]);

  const [selectedStartup, setSelectedStartup] = useState(null);

  const [inputdata, setInputdata] = useState({
    startupName: "",
    title: "",
    date: "",
    time: "",
    link: "",
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const setSelectedStartupHandler = (newValue) => {
    setSelectedStartup(newValue.value);
  };


  // const callback = props.callback;
  // const handleCallback = (newValue) => {
  //   const data = {
     
  //     selectedStartup,
  //     title: inputdata.title,
  //     date: inputdata.date,
  //     time: inputdata.time,
  //     link: inputdata.link,
  
  //   };
  //   callback(data);
    
  //   setShowModal(false);
  // };


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
            Add Event
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
                      Add Event
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
                    <form>
                      <div className="flex flex-wrap mx-3 mb-6">
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
                            //   options={props?.startups}
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
                        <div className="w-full px-3 mb-2  relative">
                          <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Event Title{" "}
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="title"
                            onChange={changehandle}
                            value={inputdata.title}
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
                        <div className="w-full px-3 mb-5  relative">
                          <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Date of Event
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="date"
                            placeholder="Enter here"
                            name="date"
                            onChange={changehandle}
                            value={inputdata.date}
                          />
                        </div>

                        <div className="w-full px-3 mb-5 ">
                          <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Time of Event
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="time"
                            placeholder="Enter here"
                            name="time"
                            onChange={changehandle}
                            value={inputdata.time}
                          />
                        </div>

                        <div className="w-full px-3 mb-5">
                          <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Link{" "}
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="url"
                            placeholder="Enter here"
                            name="link"
                            onChange={changehandle}
                            value={inputdata.link}
                          />
                        </div>
                      </div>
                      <div className="w-[100%] flex md:justify-end  justify-center pr-[25px]  ">
                        <button type="submit"
                          className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                          // onClick={handleCallback}
                        >
                          <h4 className="px-[30px]"> Add</h4>
                        </button>
                      </div>
                    </form>
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

export default EventModal;
