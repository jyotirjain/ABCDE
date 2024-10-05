import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import API from "../../../../Apis/admin";

function Broadcast() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [value, setValue] = useState("");

  const [subject, setSubject] = useState("");

  const handleEditorChange = (content) => {
    setValue(content);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // const handleSubjectChange = (content) => {

  //   setSubject(content);

  // };

  const handleSubmit = async () => {
    // Handle submission here

    // You can use the 'value' and 'subject' states for further processing

    // console.log("Subject:", subject);

    // console.log("Content:", value);

    const data = {
      subject: subject,
      content: value,
      to: selectedOption,
    };

    const res = await API.sendBroadCast(data);

    console.log("🚀 ~ file: Blogcast.jsx:28 ~ handleSubmit ~ res:", res);
  };

  const [Default, setdefault] = useState(true);

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ font: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
      ["code-block"],
      [{ color: [] }, { background: [] }],
      [{ align: [] }],
      [{ size: ["small", false, "large", "huge"] }],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code-block",
    "color",
    "background",
    "align",
    "size",
  ];

  return (
    <Box m="20px">
      <Header
        title="Broadcast Mail"
        // subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <div>
          <div className="bg-[#3E4396]  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px] ">
            <div className="md:px-[20px] md:py-[20px] px-[15px] py-[20px] ">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="UsersWithoutKYC"
                    checked={selectedOption === "UsersWithoutKYC"}
                    onChange={handleOptionChange}
                  />
                  <label>Users Without KYC</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="UsersWithKYC"
                    checked={selectedOption === "UsersWithKYC"}
                    onChange={handleOptionChange}
                  />
                  <label>Users With KYC</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="UsersWithNoInvestment"
                    checked={selectedOption === "UsersWithNoInvestment"}
                    onChange={handleOptionChange}
                  />
                  <label>Users With No Investment</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="UsersWithSomeInvestment"
                    checked={selectedOption === "UsersWithSomeInvestment"}
                    onChange={handleOptionChange}
                  />
                  <label>Users With Some Investment</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="PremiumMembers"
                    checked={selectedOption === "PremiumMembers"}
                    onChange={handleOptionChange}
                  />
                  <label>Premium Members</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="ReferedUsers"
                    checked={selectedOption === "ReferedUsers"}
                    onChange={handleOptionChange}
                  />
                  <label>Refered Users</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="Accelerator"
                    checked={selectedOption === "Accelerator"}
                    onChange={handleOptionChange}
                  />
                  <label>Accelerator</label>
                </span>
                <span className="flex gap-1">
                  <input
                    type="radio"
                    value="AllUsers"
                    checked={selectedOption === "AllUsers"}
                    onChange={handleOptionChange}
                  />
                  <label>All Users</label>
                </span>
              </div>

              <div className="w-[100%]">
                <input
                  type="text"
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  placeholder="Enter the subject"
                  value={subject}
                  onChange={handleSubjectChange}
                />

                <div className="w-[100%] mt-[40px]">
                  <ReactQuill
                    className="h-[600px] mb-[20px] bg-white text-[#252525] "
                    theme="snow"
                    value={value}
                    onChange={handleEditorChange}
                    modules={modules}
                    formats={formats}
                    placeholder="Enter the Broadcast message"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200 mt-10"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}

export default Broadcast;
