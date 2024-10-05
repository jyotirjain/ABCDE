
import { Progress, Space, Typography } from "antd";
import Upload from "antd/es/upload/Upload";
import axios from "axios";
import React, { useState } from "react";

import "../../../assets/css/styles.css";
import upload from "../../../assets/images/upload.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Pitch() {
  const [files, setfile] = useState({});
  const [refId] = useState(localStorage.getItem("StartupuserID"));

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // ...
    // Navigate to another page
    navigate("/startup/profile/teams");
  };

  const handlefileupload = ({ file }) => {
    setfile((pre) => {
      return { ...pre, [file.uid]: file };
    });

    const getFileObject = (progress) => {
      return {
        name: file.name,
        uid: file.uid,
        progress: progress,
      };
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("refId", refId);

    axios
      .post(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/pitch`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenStartup")}`,
        },
        onUploadProgress: (event) => {
          setfile((pre) => {
            return { ...pre, [file.uid]: getFileObject(event.progress) };
          });
        },
      })
      .then((response) => {
        // Show a success message to the user

        // alert("File uploaded successfully!");
        toast.success("File uploaded successfully!");
        navigate("/startup/profile/teams");
      })
      .catch((error) => {
        // Show an error message to the user
        // alert("There was an error uploading the file.");
        toast.error("There was an error uploading the file.");
      });
  };

  return (
    <div>
      <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter] ">
        Pitch
      </h2>
      <form>
        <div className=" flex flex-col gap-y-8 md:flex md:flex-row md:gap-x-8">
          <div className="upload-logo">
            <label>upload</label>
            {/* <input type="file" className="logo-in" /> */}
            <Space direction="horizontal">
              <Upload
                showUploadList={false}
                single
                customRequest={handlefileupload}
              >
                <label className="logo-box">
                  <img src={upload} />
                  <p>Max 10MB</p>
                  Pitch File
                </label>
              </Upload>
            </Space>
          </div>
          <ToastContainer position="bottom-right" />
          <div className="flex flex-col w-[100%] md:w-[65%]">
            {Object.values(files).map((file, index) => {
              return (
                <Space
                  direction="vertical"
                  style={{
                    border: 2,
                    borderStyle: "solid",
                    borderColor: "#DDDDDD",
                    borderRadius: 5,

                    width: "100%",
                    padding: 8,
                    margin: 5,
                  }}
                >
                  <Space>
                    <Typography>{file.name}</Typography>
                  </Space>
                  <Progress
                    className="progress"
                    percent={Math.ceil(file.progress * 100)}
                    strokeColor={"#202054"}
                  />
                </Space>
              );
            })}
          </div>
        </div>
        <button onClick={handleNext}>Next</button>
      </form>
    </div>
  );
}

export default Pitch;
