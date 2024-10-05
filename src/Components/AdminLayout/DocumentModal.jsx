import Select from "react-select";

import React, { useState, useEffect } from "react";

import CreatableSelect from "react-select/creatable";

import API from "../../Apis/admin";
import { toast } from "react-toastify";
import upload from "../../assets/images/upload.png";
import { IoMdEye } from "react-icons/io";

function DetailModal({ id, portfolio, callback, tdatas }) {
  // console.log("🚀 ~ file: DocumentModal.jsx:13 ~ DetailModal ~ tdatas:", tdatas)
  // console.log("🚀 ~ file: DocumentModal.jsx:13 ~ DetailModal ~ portfolio:", portfolio)
  const [showModal, setShowModal] = useState(false);

  const [file1, setFile] = useState([]);
  const [file, setFileData] = useState({
    files: [],
  });
  // console.log("🚀 ~ file: DocumentModal.jsx:19 ~ DetailModal ~ file:", file)

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  // console.log("🚀 ~ file: DocumentModal.jsx:16 ~ DetailModal ~ file1:", file1)
  const [file2, setFile2] = useState(null);

  const [inputdata, setInputdata] = useState({
    id: id,
    currentAmount: portfolio?.currentAmount,
    currentValuation: portfolio?.currentValuation,
    expectedValuation: portfolio?.expectedValuation,
    currentRevenue: portfolio?.currentRevenue,
    ARR: portfolio?.ARR,
    MRR: portfolio?.MRR,
    nextRound: portfolio?.nextRound,
    profitable: portfolio?.profitable,
    shareprice: portfolio?.shareprice,
    exitStrategy: portfolio?.exitStrategy,
    sharecertificate: portfolio?.shareCertificate,
    certificate1: portfolio?.certificate1,
    certificate2: portfolio?.certificate2,
    certificates: portfolio?.certificates,
    updated_date: portfolio?.updatedDate,
  });

  // console.log(
  // "🚀 ~ file: DocumentModal.jsx:33 ~ DetailModal ~ inputdata:",
  // inputdata
  // );

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const deleteCert = async (key, file, id, index) => {
    // console.log("🚀 ~ file: DocumentModal.jsx:35 ~ deleteCert ~ id:", id);
    // console.log("🚀 ~ file: DocumentModal.jsx:35 ~ deleteCert ~ file:", file);
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this certificate?"
    );
    if (!isConfirmed) {
      return;
    }

    const updatedCertificates = inputdata.certificates.filter(
      (_, i) => i !== index
    );
    setInputdata({ ...inputdata, certificates: updatedCertificates });

    const res = await API.deleteCert({ key, file, id });
    if (res) {
      callback();
    }
  };

  const [filePreviews, setFilePreviews] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files);
    const selectedFiles = event.target.files;

    // Update the file previews
    const previews = Array.from(selectedFiles).map((file) =>
      URL.createObjectURL(file)
    );
    setFilePreviews(previews);
    return;
  };
  const handlePreview = () => {
    filePreviews.forEach((preview) => window.open(preview, "_blank"));
  };
  useEffect(() => {
    return () => {
      filePreviews.forEach((preview) => URL.revokeObjectURL(preview));
    };
  }, [filePreviews]);

  // const handleFileChange = (e) => {
  //   //   setFile(event.target.files);
  //   const { name, files } = e.target;
  //   setFileData((prevData) => ({
  //     ...prevData,
  //     [name]: files,
  //   }));
  // };

  const openFileInNewTab1 = () => {
    if (file1) {
      const fileUrl = URL.createObjectURL(file1);
      window.open(fileUrl, "_blank");
    }
  };
  const handleFileChange2 = (event) => {
    setFile2(event.target.files[0]);
    return file2 ? toast.success("Certificate Uploaded") : null;
  };

  const handleAdd = async () => {
    const files = [file1, file2];

    const data = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   data.append("files[]", files[i]);
    // }

    console.log(id);
    // data.append("files", file);
    file1.forEach((item, index) => {
      data.append(`files`, item);
      // data.append(`files[${index}]`, item);
    });
    // data.append("file2", file2);
    data.append("id", inputdata.id);
    data.append("currentAmount", inputdata.currentAmount);
    data.append("currentValuation", inputdata.currentValuation);
    data.append("expectedValuation", inputdata.expectedValuation);
    data.append("currentRevenue", inputdata.currentRevenue);
    data.append("ARR", inputdata.ARR);
    data.append("MRR", inputdata.MRR);
    data.append("nextRound", inputdata.nextRound);
    data.append("profitable", inputdata.profitable);
    data.append("shareprice", inputdata.shareprice);
    data.append("exitStrategy", inputdata.exitStrategy);

    const res = await API.addStartupPortfolio(data);
    // console.log("🚀 ~ file: DocumentModal.jsx:133 ~ handleAdd ~ res:", res)
    // toast.success(res.data.message);
    // if (res.code === 200) {
    //   callback();
    // }

    // try {
    //   const res = await API.addStartupPortfolio(data);

    if (res.code === 200) {
      toast.success("Portfolio updated successfully!");
      callback();
    } else {
      toast.error("Failed to update portfolio. Please try again.");
    }
    // } catch (error) {
    //   toast.error("An error occurred while updating the portfolio.");
    // }

    setFile([]);
    setShowModal(false);
  };

  useEffect(() => {
    setInputdata({
      id: id,
      currentAmount: portfolio?.currentAmount,
      currentValuation: portfolio?.currentValuation,
      expectedValuation: portfolio?.expectedValuation,
      currentRevenue: portfolio?.currentRevenue,
      ARR: portfolio?.ARR,
      MRR: portfolio?.MRR,
      nextRound: portfolio?.nextRound,
      profitable: portfolio?.profitable,
      shareprice: portfolio?.shareprice,
      exitStrategy: portfolio?.exitStrategy,
      sharecertificate: portfolio?.shareCertificate,
      certificate1: portfolio?.certificate1,
      certificate2: portfolio?.certificate2,
      updated_date: portfolio?.updatedDate,
      certificates: portfolio?.certificates,
    });
  }, [portfolio]);

  return (
    <>
      <section>
        <div
          className="bg-[#202054] cursor-pointer text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          type="button"
          onClick={() => {
            setShowModal(true);
            // callback()
          }}
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
                      Portfolio
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
                    <div className="flex mx-3 mb-6">
                      <div className="flex flex-col w-full">
                        <div className="w-full px-3 mb-2  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Current amount invested of startup{" "}
                          </label>
                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="currentAmount"
                            onChange={changehandle}
                            value={inputdata?.currentAmount}
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

                        <div className="w-full px-3 mb-5 mt-3 relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Current Valuation
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="currentValuation"
                            onChange={changehandle}
                            value={inputdata?.currentValuation}
                          />
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Expected valuation for next round{" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="expectedValuation"
                            onChange={changehandle}
                            value={inputdata?.expectedValuation}
                          />
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Current revenue{" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="currentRevenue"
                            onChange={changehandle}
                            value={inputdata.currentRevenue}
                          />
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            ARR in %{" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="ARR"
                            onChange={changehandle}
                            value={inputdata.ARR}
                          />
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            MRR in %{" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="MRR"
                            onChange={changehandle}
                            value={inputdata.MRR}
                          />
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Updated date
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="date"
                            placeholder="Enter here"
                            name="updated_date"
                            onChange={changehandle}
                            value={inputdata.updated_date}
                          />
                        </div>
                      </div>

                      <div className="w-full">
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Expect time for next round (in months){" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="nextRound"
                            onChange={changehandle}
                            value={inputdata.nextRound}
                          />
                        </div>

                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Profitable{" "}
                          </label>

                          <select
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="profitable"
                            onChange={changehandle}
                            value={inputdata.profitable}
                          >
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Shares Price{" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="shareprice"
                            onChange={changehandle}
                            value={inputdata.shareprice}
                          />
                        </div>
                        <div className="w-full px-3 mb-5  relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Exit Strategy{" "}
                          </label>

                          <input
                            className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="Enter here"
                            name="exitStrategy"
                            onChange={changehandle}
                            value={inputdata.exitStrategy}
                          />
                        </div>
                        <div
                          className="w-full px-3 mb-1 
                        relative"
                        >
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Share certificate 1{" "}
                          </label>
                          <div className="">
                            <input
                              multiple
                              className="logo-in flex flex-col box-border  h-[11.25rem] justify-center items-center not-italic font-normal text-[13.33px] leading-4 text-[#828f99] rounded-[5px] border-2 border-dashed border-[#dddddd] w-full"
                              id="grid-last-name"
                              type="file"
                              placeholder="Enter here"
                              name="shareCertificate"
                              onChange={handleFileChange}
                              // value={inputdata.shareCertificate}
                            />
                          </div>
                          <div className="grid grid-cols-5">
                            {filePreviews.map((preview, index) => (
                              <div key={index}>
                                <a
                                  href={preview}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Preview {index + 1}
                                </a>
                              </div>
                            ))}
                          </div>

                          <button onClick={() => handlePreview()}>
                            Preview Files
                          </button>
                        </div>

                        <div className="w-full px-3 mb-5 relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Share certificates{" "}
                          </label>

                          {inputdata?.certificates.length > 0 && (
                            <>
                              {inputdata.certificates.map(
                                (certificate, index) => (
                                  <div
                                    key={index}
                                    className="flex items-center border p-4 mb-4 rounded"
                                  >
                                    <a
                                      rel="noreferrer"
                                      className="w-80 text-blue-500 cursor-pointer text-center"
                                      target="_blank"
                                      //  href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${certificate}`}
                                      href={certificate.certificate}
                                    >
                                      {`View Share Certificate ${index + 1}`}
                                    </a>
                                    <div className="w-[100%] flex md:justify-end  justify-center pr-[25px]  ">
                                      <div
                                        className="bg-[red] text-[#ffffff] md:px-2 md:py-[5px] py-[3px] px-3 rounded-[10px] hover:bg-red-500 cursor-pointer duration-200"
                                        onClick={() => {
                                          deleteCert(
                                            certificate.key,
                                            certificate._id,
                                            id,
                                            index
                                          );
                                        }}
                                      >
                                        <h4 className="px-[30px]">Delete</h4>
                                      </div>
                                    </div>
                                  </div>
                                )
                              )}
                            </>
                          )}

                          {isConfirmOpen && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-700 bg-opacity-50">
                              <div className="bg-white p-4 rounded">
                                <p>Are you sure you want to delete?</p>
                                <span
                                  className="bg-red-500 text-white px-4 py-2 rounded mx-2"
                                  // onClick={handleConfirmDelete}
                                >
                                  Confirm
                                </span>
                                <span
                                  className="bg-gray-300 px-4 py-2 rounded mx-2"
                                  // onClick={handleCancelDelete}
                                >
                                  Cancel
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] flex md:justify-end  justify-center pr-[25px]  ">
                      <div
                        className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                        onClick={handleAdd}
                      >
                        <h4 className="px-[30px]">Submit</h4>
                      </div>
                    </div>
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

                  {/*header*/}
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
