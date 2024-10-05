import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import "../../../assets/css/styles.css";
import upload from "../../../assets/images/upload.png";
// import data from "./mockdata.json";
import edit from "../../../assets/images/edit.png";
import del from "../../../assets/images/delete.png";
import API from "../../../Apis/startupApis";
import { ToastContainer, toast } from "react-toastify";
import { ImagetoBase64 } from "../../../utility/imagetoBase64";

function Teams() {
  const data = [];
  const formRef = useRef(null);
  const [datas, setdata] = useState(data);
  const [imagedata, setImagedata] = useState({
    image: "",
  });
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  // const [inputvalue, setinputvalue] = useState({
  //   fullName: "dipjyoti kashyap",
  //   designation: "webdeveloper",
  //   description: "mearn full stack developer",
  //   linkedinUrl: "https://www.linkedin.com/in/john-doe-123456789/"
  // });

  const [inputvalue, setinputvalue] = useState({
    fullName: "",
    designation: "",
    description: "",
    linkedinUrl: "",
    profileImage: "",
  });

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [file, setFile] = useState({});

  // const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handleNext = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // ...
    // Navigate to another page

    navigate("/startup/profile/mentors");
  };

  const fetchData = async () => {
    try {
      const response = await API.teamFetch({ refId: refId });

      setdata(response.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddFormChange = (e) => {
    e.preventDefault();
    if (!file && !editMode) {
      toast.error("Please upload a profile image");
      return;
    }

    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (event) => {
    const data = await ImagetoBase64(event.target.files[0]);
    //

    setImagedata((preve) => {
      return {
        ...preve,
        image: data,
      };
    });

    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault(event);

    const data = new FormData();
    data.append("file", file);
    data.append("refId", refId);
    data.append("fullName", inputvalue.fullName);
    data.append("designation", inputvalue.designation);
    data.append("linkedinUrl", inputvalue.linkedinUrl);
    data.append("description", inputvalue.description);
    let res;
    if (editMode && Object.keys(file).length === 0) {
      // `file` is empty

      toast.warn("File is Empty");
      data.append("profileImage", inputvalue.profileImage);
    }
    if (editMode) {
      data.append("editId", editId);

      res = await API.teanmUpdate(data);

      setEditMode(false);
      setEditId(null);
      if (res.data.code == 200) {
        toast.success("Team member Updated");
        fetchData();
      }
    } else {
      res = await API.teamAdd(data);
      if (res.data.code == 200) {
        toast.success("Team member Added");
        fetchData();
      } else {
        toast.error("Team member Added Failed");
      }
    }

    setinputvalue({
      fullName: "",
      designation: "",
      description: "",
      linkedinUrl: "",
      refId: refId,
    });
    formRef.current.reset();
  };

  // };

  const handleEdit = (event, id) => {
    event.preventDefault(event);
    const itemToEdit = datas.find((current) => current._id === id);

    setinputvalue(itemToEdit);
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault(event);
    const delData = {
      refId: refId,
      delId: id,
    };
    const res = await API.teamDelete(delData);
    fetchData();

    toast.warn("Team Member Deleted");
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter] ">
          Teams
        </h2>
        <button className="add" onClick={handleAddFormSubmit} type="submit">
          {editMode ? "Update" : "Add"}
        </button>
      </div>

      <div>
        <form ref={formRef}>
          <div className="teamcontent flex flex-col  md:flex md:flex-row">
            <div className="upload-logo mt-[36px]">
              <label> upload</label>
              <input
                type="file"
                className="logo-in"
                name="profileImage"
                onChange={handleFileChange}
              />
              <label
                className="logo-box"
                onClick={() => {
                  // alert("Hello");
                  document.querySelector(".logo-in").click();
                }}
              >
                <img
                  src={imagedata.image ? imagedata.image : upload}
                  alt="imageupload"
                  className=" overflow-hidden "
                />
                <p>Max 10MB</p>
                Profile image
              </label>
            </div>
            <div className="w-[100%]">
              <div className="fullname w-[100%] flex flex-col md:flex md:flex-row md:gap-x-4">
                <div className="nm w-[100%]">
                  <label>Name</label>
                  <input
                    name="fullName"
                    placeholder="enter Name"
                    onChange={handleAddFormChange}
                    defaultValue={inputvalue.fullName}
                  />
                </div>
                <div className="nm w-[100%]">
                  <label>Designation</label>
                  <input
                    name="designation"
                    placeholder="Enter Designation"
                    onChange={handleAddFormChange}
                    defaultValue={inputvalue.designation}
                  />
                </div>
              </div>

              <label className="tlb mt-9 ">Description</label>
              <textarea
                name="description"
                onChange={handleAddFormChange}
                className="texta w-[100%]"
                placeholder="company description"
                defaultValue={inputvalue.description}
              />

              <label className="tlb mt-9">LinkedIn Url</label>
              <input
                type="url"
                name="linkedinUrl"
                onChange={handleAddFormChange}
                defaultValue={inputvalue.linkedinUrl}
                className="inp w-[100%]"
                placeholder="linkedin Profile"
              />
            </div>
          </div>

          <span className=" w-full md:overflow-hidden  overflow-x-scroll  ">
            <table className="mt-4 w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>Description</th>
                  <th>LinkedIn</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {datas?.map((current) => (
                  <tr key={current._id}>
                    <td>{current.fullName}</td>
                    <td>{current.designation}</td>
                    <td>{current.description}</td>
                    <td>{current.linkedinUrl}</td>
                    <td className="flex justify-center">
                      <button
                        onClick={(e) => handleEdit(e, current._id)}
                        className={"edit" + current._id}
                      >
                        Edit
                      </button>
                      <img
                        src={edit}
                        onClick={() =>
                          document.querySelector(`.edit${current._id}`).click()
                        }
                        alt={current._id}
                      />

                      <button
                        onClick={(event) => handleDelete(event, current._id)}
                        className={"delete" + current._id}
                      >
                        Delete
                      </button>
                      <img
                        src={del}
                        onClick={() =>
                          document
                            .querySelector(`.delete${current._id}`)
                            .click()
                        }
                        alt={current._id}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </span>

          <button onClick={handleNext}>Next</button>
        </form>
        <ToastContainer position="bottom-right" />
      </div>
    </div>
  );
}

export default Teams;
