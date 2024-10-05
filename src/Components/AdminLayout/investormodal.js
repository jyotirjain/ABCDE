import React, { useEffect, useState } from "react";
import API from "../../Apis/admin";
import upload from "../../assets/images/upload.png";
import "../../assets/css/styles.css";

import { data } from "jquery";
import { ToastContainer, toast } from "react-toastify";
import { IoMdEye } from "react-icons/io";
function Investormodal(props, callback, callbackDelete) {
  console.log("🚀 ~ file: investormodal.js:5 ~ Investormodal ~ props:", props);
  console.log(
    "🚀 ~ file: investormodal.js:5 ~ Investormodal ~ props:",
    props.data.legal
  );
  const [showModal, setShowModal] = useState(false);
  const [investmentData] = useState(props.data);
  const handleApprovedClickCallback = props.handleApprovedClickCallback;
  const handleRejectClickCallback = props.handleRejectClickCallback;

  const [clickedInsideModal, setClickedInsideModal] = useState(false);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  // const openFileInNewTab = () => {
  //   if (image) {
  //     const fileUrl = URL.createObjectURL(image);
  //     window.open(fileUrl, "_blank");
  //   }
  // };

  const openFileInNewTab = () => {
    if (image) {
      try {
        const fileUrl = URL.createObjectURL(image);

        // Open the file in a new tab
        window.open(fileUrl, "_blank");
      } catch (error) {
        console.error("Error opening file:", error);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image to submit.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("id", props.data._id);

    try {
      // const res = API.addLegal(formData);
      // if (res) {
      //   callback;
      //   toast.success(res.data.message);
      //   toast.success("Legal Document Successfully Updated");
      // }
      toast.success("Legal Document Successfully Updated");
      const res = API.addLegal(formData);
      setShowModal(false);
      if (res) {
        callback();
        // toast.success(res.data.message);
        // toast.success("Legal Document Successfully Updated");
        if (res.code === 200) {
          // toast.success(res.data.message);
          // toast.success("Legal Document Successfully Updated");
          setShowModal(false);
        }
      }
      // toast.success("Legal Document Successfully Updated");
      setShowModal(false);
    } catch (error) {
      console.log("err", error);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const res = API.deleteLegal({
      id: props.data._id,
      fileName: props.data.legal,
    });
    toast.success("Legal Document Successfully Deleted");
    setShowModal(false);
    if (res) {
      callback();
    }
  };

  // useEffect(() => {
  //   // Add an event listener to handle clicks outside of the modal content
  //   const handleOutsideClick = (e) => {
  //     if (!clickedInsideModal && showModal) {
  //       setShowModal(false);
  //     }
  //     // Reset the clickedInsideModal state
  //     setClickedInsideModal(false);
  //   };

  //   // Attach the event listener when the modal is shown
  //   if (showModal) {
  //     window.addEventListener("click", handleOutsideClick);
  //   } else {
  //     // Remove the event listener when the modal is hidden
  //     window.removeEventListener("click", handleOutsideClick);
  //   }

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("click", handleOutsideClick);
  //   };
  // }, [showModal, clickedInsideModal]);

  return (
    <section>
      {props?.data?.legal ? (
        <div
          className="bg-[#298F29] cursor-pointer text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <h4 className="px-[25px] text-[11.2px]"> View</h4>
        </div>
      ) : (
        <div
          className="bg-[#202054] cursor-pointer text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <h4 className="px-[25px] text-[11.2px]"> upload</h4>
        </div>
      )}

      {showModal ? (
        <>
          <div
            // onClick={() => setClickedInsideModal(true)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[850px]  my-6 mx-auto ">
              {/*content*/}
              <div className="border-0 rounded-lg  pt-[15px] shadow-lg relative flex flex-col w-full h-[600px] bg-white outline-none focus:outline-none overflow-y-auto">
                {/*header*/}
                <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                  <h4 className="text-[19px] px-[20px]  font-[400] text-[#202054] leading-[28.8px]">
                    {props.data.investorName} data{" "}
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
                    <div className="flex flex-wrap w-full items-center ">
                      <div className=" w-full md:w-1/2 px-3">
                        <label className="block md:flex uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                          Investor
                        </label>
                        <input
                          // className="appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                          className="logo-in flex flex-col box-border  h-[11.25rem] justify-center items-center not-italic font-normal text-[13.33px] leading-4 text-[#828f99] rounded-[5px] border-2 border-dashed border-[#dddddd] w-full  "
                          id="grid-last-name"
                          type="file"
                          onChange={handleImageChange}
                        />
                        {/* <label
                          className="flex flex-col box-border  h-[11.25rem] justify-center items-center not-italic font-normal text-[13.33px] leading-4 text-[#828f99] rounded-[5px] border-2 border-dashed border-[#dddddd] w-full"
                          onClick={() => {
                            // alert("Hello");
                            document.querySelector(".logo-in").click();
                          }}
                        >
                          <img
                            src={upload}
                            alt="imageupload"
                            className=" overflow-hidden "
                          />
                          Certificate
                        </label> */}
                        {image ? (
                          <p
                            onClick={openFileInNewTab}
                            className=" underline flex text-[15px] gap-1 cursor-pointer"
                          >
                            View <IoMdEye />
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] flex md:justify-end  justify-center pr-[20px] pt-[50px] pb-[70px]">
                    {props?.data?.legal ? (
                      <a
                        className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                        target="_blank"
                        href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${props?.data?.legal}`}

                        // href={`https://s3.console.aws.amazon.com/s3/object/bizdateupbucket?region=ap-south-1&prefix=${props.data.legal}`}
                      >
                        <h4 className="px-25 text-11.2">View</h4>
                      </a>
                    ) : null}{" "}
                    <div className="bg-[#202054] text-[#ffffff] mx-2 md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200 cursor-pointer">
                      <h4
                        className="px-[25px] text-[11.2px]"
                        onClick={handleSubmit}
                      >
                        Update Certificate
                      </h4>
                    </div>
                    {/* </div>
                      <div className="w-[100%] flex md:justify-end  justify-center pr-[20px] pt-[50px] pb-[70px]"> */}
                    {props?.data?.legal ? (
                      <div className="bg-[#b82020] text-[#ffffff] md:px-4 mx-2 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200 cursor-pointer">
                        <h4
                          className="px-[25px] text-[11.2px]"
                          onClick={handleDelete}
                        >
                          Remove Certificate
                        </h4>
                      </div>
                    ) : null}
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
  );
}

export default Investormodal;
