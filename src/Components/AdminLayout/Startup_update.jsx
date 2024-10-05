import React, { useState, useEffect } from "react";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import axios from "axios";
import API from "../../Apis/admin";
import { toast } from "react-toastify";

function Startup_update() {
  const [startsUpdates, setStartsUpdates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRtl, setIsRtl] = useState(false);
  const [startups, setStartups] = useState([]);
  const [files, setFile] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [tempImg, setTempImg] = useState(null);
  const [inputdata, setInputdata] = useState({
    startupName: "",
    title: "",
    content: "",
    file: null,
  });
  const [editingData, setEditingData] = useState(null);

  const fetchStartupUpdates = async () => {
    try {
      const response = await API.startupUpddatesFetchAdmin();
      setStartsUpdates(response.data.data);
    } catch (error) {}
  };

  const handleDelete = async (id) => {
    console.log("🚀 ~ file: Startup_update.jsx:34 ~ handleDelete ~ id:", id);
    const res = await API.startupUpddatesDelete({ id });
    toast.success(res.data.message);
    fetchStartupUpdates();
  };

  const handleAdd = async () => {
    const data = new FormData();
    data.append("file", files[0]);
    data.append("startup", selectedStartup.value);
    data.append("title", inputdata.title);
    data.append("content", inputdata.content);
    const res = await API.addStatusupdate(data);
    toast.success(res.data.message);
    // Clear input fields
    setSelectedStartup(null);
    setInputdata({
      startupName: "",
      title: "",
      content: "",
      file: null,
    });
    setFile(null);

    // Close modal
    setShowModal(false);

    // Fetch updated startup updates list
    fetchStartupUpdates();
  };

  const handleEdit = async () => {
    const data = new FormData();
    data.append("id", editingId);
    data.append("file", files);
    data.append("startup", selectedStartup.value);
    data.append("title", inputdata.title);
    data.append("content", inputdata.content);
    const res = await API.editStatusupdate(data);

    toast.success(res.data.message);

    // Clear input fields
    setSelectedStartup(null);
    setInputdata({
      startupName: "",
      title: "",
      content: "",
      file: null,
    });
    setFile(null);

    // Close modal
    setShowModal(false);

    // Fetch updated startup updates list
    fetchStartupUpdates();
  };

  const handleFileChange = (event) => {
    setFile(event.target.files);
  };

  const handleChange = (e) => {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  };

  const setSelectedStartupHandler = (newValue) => {
    setSelectedStartup(newValue);
  };

  const getData = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup_update_lists`
      );
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

  useEffect(() => {
    fetchStartupUpdates();
    getData();
  }, []);

  const handleEditModalOpen = (data) => {
    setShowModal(true);
    setEditingData(data);
    setSelectedStartup({ value: data.startup, label: data.company_name });
    setTempImg(data.file);
    setEditingId(data._id);
    setInputdata({
      startupName: data.startupName,
      title: data.title,
      content: data.content,
      file: null,
    });
  };

  const handleModalClose = () => {
    setShowModal(false);
    setEditingData(null);
    setSelectedStartup(null);
    setInputdata({
      startupName: "",
      title: "",
      content: "",
      file: null,
    });
    setFile(null);
  };

  // function handleDownload() {
  //   // Logic to trigger the PDF download
  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = ;
  //   downloadLink.download = "pitchdeck.pdf";
  //   downloadLink.click();
  // }
  return (
    <>
      <section>
        <div className="md:ml-[25px]  w-[100%] rounded-[20px]">
          <div className="mb-[20px]">
            <div className="flex justify-between items-center">
              <div className="relative w-[80%] text-gray-600 mr-[5px]">
                <input
                  type="search"
                  name="serch"
                  placeholder="Search here"
                  className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-[12px] top-[10px]"
                >
                  <div className="h-4 w-4 fill-current">
                    <BsSearch />
                  </div>
                </button>
              </div>

              <div className="w-[20%] ml-[5px]">
                <div>
                  <div
                    className="bg-[#202054] text-center text-[#ffffff] md:px-1 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                    type="button"
                    onClick={() => setShowModal(true)}
                  >
                    <h4 className="text-[16px] text-[#FFFFFF] font-[400] leading-[18.75px] cursor-pointer">
                      Add Startup update
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px]">
            <div className="md:px-[20px] px-[15px] py-[20px]">
              <div className="w-[100%]">
                <div className="w-[100%]">
                  <div className="overflow-x-auto">
                    <table border="1" className="w-[100%] text-start">
                      <thead>
                        <tr>
                          <th className="py-[30px] px-[30px] border-[1px]">
                            Id
                          </th>
                          <th className="px-[10px] py-[30px] border-[1px]">
                            Startup
                          </th>
                          <th className="px-[10px] py-[30px] border-[1px]">
                            Title
                          </th>
                          {/* <th className="px-[10px] py-[30px] border-[1px]">Content</th> */}
                          <th className="px-[15px] py-[30px] border-[1px]">
                            File Upload
                          </th>
                          <th className="px-[15px] py-[30px] border-[1px]">
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {startsUpdates?.map((tdata, i) => (
                          <tr key={i}>
                            <td className="border-[1px] px-[25px]">{i + 1}</td>
                            <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                              {tdata.company_name}
                            </td>
                            <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                              {tdata.title}
                            </td>
                            {/* <td className="border-[1px] px-[50px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                              {tdata.content}
                            </td> */}
                            {/* <a
                              // href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${tdata.banner}`}
                              className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]"
                            >
                              view
                            </a> */}
                            <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                              View
                            </td>
                            <td className="border-[1px] px-[20px]">
                              <div
                                className="bg-[#202054] text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                                onClick={() => handleDelete(tdata._id)}
                              >
                                <h4 className="px-[25px] text-[11.2px]">
                                  delete
                                </h4>
                              </div>
                              <div
                                className="bg-[#202054] text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                                onClick={() => handleEditModalOpen(tdata)}
                              >
                                <h4 className="px-[25px] text-[11.2px]">
                                  edit
                                </h4>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-[50px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <>
          {/* Modal content */}
          <div className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-[1000px] my-6 mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-[600px] bg-white outline-none focus:outline-none">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                  <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px] mx-8">
                    {editingData ? "Edit Startup Update" : "Add Startup Update"}
                  </h4>
                  <div
                    className="ml-auto leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleModalClose}
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
                      <textarea
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
                        name="files"
                        onChange={handleFileChange}
                        // value={files}
                      />
                    </div>

                    {/* <a
                      href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${files}`}
                      target="_blank"
                      className="px-4"
                    >
                      View file
                    </a> */}
                  </div>
                  <div className="w-[100%] flex md:justify-end justify-center pr-[25px]">
                    <div
                      className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                      onClick={editingData ? handleEdit : handleAdd}
                    >
                      <h4 className="px-[30px]">
                        {editingData ? "Edit" : "Add"}
                      </h4>
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
    </>
  );
}

export default Startup_update;
