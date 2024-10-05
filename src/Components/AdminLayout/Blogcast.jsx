import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import API from '../../Apis/admin'

const Blogcast = () => {
  
  const [value, setValue] = useState("");
  
  const [subject, setSubject] = useState("");

  const handleEditorChange = (content) => {
  
    setValue(content);
  
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const [selectedOption, setSelectedOption] = useState('');

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
      "subject": subject,
      "content": value,
      "to":selectedOption
    }
    
    const res = await API.sendBroadCast(data);

    console.log("🚀 ~ file: Blogcast.jsx:28 ~ handleSubmit ~ res:", res)

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
    <div>
      <div className="bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px] ">
        <div className="md:px-[20px] md:py-[20px] px-[15px] py-[20px] ">
        <div className="flex flex-wrap gap-2 mb-4">
      <span className="flex gap-1">
        <input
          type="radio"
          value="UsersWithoutKYC"
          checked={selectedOption === 'UsersWithoutKYC'}
          onChange={handleOptionChange}
        />
        <label>Users Without KYC</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="UsersWithKYC"
          checked={selectedOption === 'UsersWithKYC'}
          onChange={handleOptionChange}
        />
        <label>Users With KYC</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="UsersWithNoInvestment"
          checked={selectedOption === 'UsersWithNoInvestment'}
          onChange={handleOptionChange}
        />
        <label>Users With No Investment</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="UsersWithSomeInvestment"
          checked={selectedOption === 'UsersWithSomeInvestment'}
          onChange={handleOptionChange}
        />
        <label>Users With Some Investment</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="PremiumMembers"
          checked={selectedOption === 'PremiumMembers'}
          onChange={handleOptionChange}
        />
        <label>Premium Members</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="ReferedUsers"
          checked={selectedOption === 'ReferedUsers'}
          onChange={handleOptionChange}
        />
        <label>Refered Users</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="Accelerator"
          checked={selectedOption === 'Accelerator'}
          onChange={handleOptionChange}
        />
        <label>Accelerator</label>
      </span>
      <span className="flex gap-1">
        <input
          type="radio"
          value="AllUsers"
          checked={selectedOption === 'AllUsers'}
          onChange={handleOptionChange}
        />
        <label>All Users</label>
      </span>
    </div>

          <div className="w-[100%]">
            <input
              type="text"
              className="w-[100%] md:mb-[20px] mb-[10px] px-[10px] py-[5px] border rounded"
              placeholder="Enter the subject"
              value={subject}
              onChange={handleSubjectChange}
            />
        

            <div className="w-[100%] mt-[40px]">
              <ReactQuill
                className="h-[600px] mb-[20px] "
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
  );
};

export default Blogcast;
