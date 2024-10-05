import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import adminApi from "../../Apis/admin";

function StartupUpdateModal() {
  const [showModal, setShowModal] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [startups, setStartups] = useState([]);
  const [file, setFile] = useState(null);

  const [selectedStartup, setSelectedStartup] = useState(null);

  const [inputdata, setInputdata] = useState({
    startupName: "",
    title: "",
    content: "",
    file: null,
  });

  const handleAdd = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("startup", selectedStartup.value);
    data.append("title", inputdata.title);
    data.append("content", inputdata.content);

    try {
      const res = await adminApi.addStatusUpdate(data);
      // Rest of the logic for adding the status update
    } catch (error) {
      console.error("Error adding status update:", error);
    }
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const getData = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup`);
      const data = response.data.data.data;
      const selectedData = data.map((item) => ({
        value: item._id,
        label: item.registeredCompanyName,
      }));
      setStartups(selectedData);
    } catch (error) {
      console.error("Error fetching startup data:", error);
    }
  };

  const setSelectedStartupHandler = (newValue) => {
    setSelectedStartup(newValue);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <section>
        <div
          className="bg-[#202054] text-center text-[#ffffff] md:px-1 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          onClick={() => setShowModal(true)}
          role="button"
        >
          <h4 className="text-[16px] text-[#FFFFFF] font-[400] leading-[18.75px] cursor-pointer">
            Add Startup update
          </h4>
        </div>
        {showModal && (
          <>
            {/* Modal content */}
            <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[1000px] my-6 mx-auto">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-[600px] bg-white outline-none focus:outline-none">
                  {/* Header */}
                  <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                    <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px] mx-8">
                      Add Startup update
                    </h4>
                    <div
                      className="ml-auto leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                      role="button"
                    >
                      <span className="flex items-center justify-center cursor-pointer text-black h-5 w-5 text-2xl outline-none focus:outline-none">
                        ×
                      </span>
                    </div>
                  </div>
                  {/* Body */}
                  <div className="relative p-6 flex-auto pb-[px]">
                    <div className="flex flex-wrap mx-3 mb-6">
                      <div className="w-full px-3 mb-2 relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Startup Name
                        </label>
                        <Select
                          className="basic-single block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                          classNamePrefix="select startup"
                          defaultValue={selectedStartup}
                          isDisabled={isDisabled}
                          isRtl={isRtl}
                          options={startups}
                          isSearchable={isSearchable}
                          onChange={setSelectedStartupHandler}
                        />
                      </div>
                      <div className="w-full px-3 mb-2 relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Title
                        </label>
                        <input
                          className="appearance-none block text-gray-700 border border-gray-200 rounded w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Enter here"
                          name="title"
                          onChange={handleChange}
                          value={inputdata.title}
                        />
                      </div>
                      <div className="w-full px-3 mb-5 relative">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Content
                        </label>
                        <input
                          className="appearance-none block text-gray-700 border border-gray-200 rounded w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="Enter here"
                          name="content"
                          onChange={handleChange}
                          value={inputdata.content}
                        />
                      </div>
                      <div className="w-full px-3 mb-5">
                        <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          File Upload
                        </label>
                        <input
                          className="appearance-none block text-gray-700 border border-gray-200 rounded w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="file"
                          name="file"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                    <div className="w-[100%] flex md:justify-end justify-center pr-[25px]">
                      <div
                        className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                        onClick={handleAdd}
                        role="button"
                      >
                        <h4 className="px-[30px]"> Add</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal overlay */}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        )}
      </section>
    </>
  );
}

export default StartupUpdateModal;
