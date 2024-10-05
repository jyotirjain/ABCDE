import React, { useState } from "react";
import "../../../assets/css/styles.css";
import upload from "../../../assets/images/upload.png";
// import { useState } from "react";
import { Progress, Space, Typography } from "antd";

//  const [files, setfile] = useState({});
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Upload2() {
  const [files, setFiles] = useState([]);
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  const navigate = useNavigate();
  const handleNext = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // ...
    // Navigate to another page
    navigate("/startup/profile/events");
  };
  const uploadFileChange = (e) => {
    let file = Array.from(e.target.files);
    if (file.length > 0) {
      file.map((item, index) => {
        var formdata = new FormData();
        formdata.append("refId", refId);
        formdata.append("name", item.name);
        formdata.append("file", item);
        var requestOptions = {
          method: "POST",
          body: formdata,
        };
        fetch(
          `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/addDueFile`,
          requestOptions
        )
          .then((response) => {
            toast.success("File Uploaded Successfully");
          })
          .catch((error) => {
            toast.error("File Upload Failed");
          });
      });
    }
  };

  return (
    <div>
      <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter] ">
        Upload
      </h2>
      <form>
        <div className=" flex flex-col gap-y-8 md:flex md:flex-row">
          <div className="upload-logo">
            <label>upload</label>
            {/* //    <Space direction="horizontal">
          //  <Upload multiple customRequest={handlefileupload}>
            //  <label className="logo-box">
              //  <img src={upload} />
               // <p>Max 10MB</p>
              //  Pitch File
            //  </label>
          //  </Upload>
         // </Space> */}

            <input
              type="file"
              className="logo-in"
              multiple
              onChange={uploadFileChange}
            />
            <label
              className="logo-box"
              onClick={() => document.querySelector(".logo-in").click()}
            >
              <img src={upload} alt="" />
              <p>Max 10MB</p>
              Pitch File
            </label>
          </div>

          <ToastContainer position="bottom-right" />
          <div className="flex flex-col">
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
export default Upload2;
