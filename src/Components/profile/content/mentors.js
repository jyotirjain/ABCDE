import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../../assets/css/styles.css";
import upload from "../../../assets/images/upload.png";
// import data from "./mockdata.json";
import edit from "../../../assets/images/edit.png";
import del from "../../../assets/images/delete.png";
import API from "../../../Apis/startupApis";
import { ImagetoBase64 } from "../../../utility/imagetoBase64";

function Mentors() {
  const data = [];
  const formRef = useRef(null);
  const [datas, setdata] = useState(data);
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
  });

  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [file, setFile] = useState({});
  const [imagedata, setImagedata] = useState({
    image: "",
  });

  const fetchData = async () => {
    try {
      const response = await API.mentorFetch({ refId: refId });
      // const result = await response.json();

      setdata(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    // Fetch data from an API or other data source
    fetchData(); // Call the fetchData function when the component loads
  }, []); // Empty dependency array ensures this effect runs only on component mount

  const handleAddFormChange = (e) => {
    e.preventDefault();
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

    //
  };

  const navigate = useNavigate();
  const handleNext = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // ...
    // Navigate to another page
    navigate("/startup/profile/dealsterms");
  };
  const handleAddFormSubmit = async (event) => {
    event.preventDefault(event);

    const data = new FormData();
    data.append("file", file);
    data.append("refId", refId);
    data.append("fullName", inputvalue.fullName);
    // data.append("designation", inputvalue.designation);
    data.append("linkedinUrl", inputvalue.linkedinUrl);
    data.append("description", inputvalue.description);

    if (editMode && Object.keys(file).length === 0) {
      // `file` is empty

      data.append("profileImage", inputvalue.profileImage);
    }
    let res;
    if (editMode) {
      data.append("editId", editId);

      res = await API.mentorUpdate(data);

      setEditMode(false);
      setEditId(null);
      if (res.data.code == 200) {
        fetchData();
      }
    } else {
      res = await API.mentorAdd(data);
      if (res.data.code == 200) {
        fetchData();
      }
    }

    // }
    formRef.current.reset();
    setinputvalue({
      fullName: "",
      designation: "",
      description: "",
      linkedinUrl: "",
      refId: refId,
    });
  };

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
    const res = await API.mentorDelete(delData);
    fetchData();
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter] ">
          Mentor
        </h2>
        <button className="add" onClick={handleAddFormSubmit}>
          {" "}
          {editMode ? "Update Mentor" : "Add Mentor"}
        </button>
      </div>

      <div>
        <form ref={formRef}>
          <div className="teamcontent flex flex-col  md:flex md:flex-row ">
            <div className="upload-logo">
              <label>upload</label>
              <input
                name="profile"
                type="file"
                className="logo-in"
                onChange={handleFileChange}
              />
              <label
                className="logo-box"
                onClick={() => document.querySelector(".logo-in").click()}
              >
                <img
                  src={imagedata.image ? imagedata.image : upload}
                  className=" overflow-hidden"
                />
                <p>Max 10MB</p>
                Mentor profile
              </label>
            </div>
            <div className="w-full">
              <div className="fullname w-[100%] flex flex-col md:flex md:flex-row md:gap-x-4">
                <div className="nm w-[100%]">
                  <label>Full Name</label>
                  <input
                    name="fullName"
                    onChange={handleAddFormChange}
                    defaultValue={inputvalue.fullName}
                    placeholder="Full Name"
                  />
                </div>
                {/* <div className="nm">
                  <label>Last Name</label>
                  <input />
                </div> */}
              </div>
              <label className="tlb">Description</label>
              <textarea
                className="texta w-full"
                onChange={handleAddFormChange}
                name="description"
                defaultValue={inputvalue.description}
                placeholder="Description"
              />

              <label className="tlb">LinkedIn Url</label>
              <input
                type="url"
                className="inp w-full"
                onChange={handleAddFormChange}
                defaultValue={inputvalue.linkedinUrl}
                name="linkedinUrl"
                placeholder="Linkedin00 Profile"
              />
            </div>
          </div>

          <div className="w-full overflow-x-scroll md:overflow-hidden">
            <table className="w-full mt-2">
              <thead>
                <tr>
                  <th>Name</th>

                  <th>Description</th>
                  <th>LinkedIn</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {datas?.map((current) => (
                  <tr key={current._id}>
                    <td>{current.fullName}</td>
                    <td>{current.description}</td>

                    <td className="flex justify-center">
                      {current.linkedinUrl}
                    </td>
                    <td>
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
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button onClick={handleNext}>Next</button>
        </form>
      </div>
    </div>
  );
}

export default Mentors;
