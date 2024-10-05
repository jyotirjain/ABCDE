import React from "react";
import "../../../assets/css/styles.css";
import upload from "../../../assets/images/upload.png";
import { useState } from "react";
import API from "../../../Apis/startupApis";

import { useNavigate } from "react-router-dom";

function Events() {
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  const navigate = useNavigate();
  const [inputvalue, setinputvalue] = useState({
    title: "",
    url: "",
    time: "",
    date: "",
  });
  const [file, setFile] = useState({});

  const handleAddFormChange = (e) => {
    e.preventDefault();
    if (e.target.name === "banner") {
      setinputvalue({ ...inputvalue, [e.target.name]: e.target.files[0] });
    } else {
      setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // fetch(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/events`, {
    fetch(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputvalue }),
    })
      .then((response) => response.json())
      .then((data) => {
        // alert("Event Added Successfully");
        navigate("/profile/faq");
      })
      .catch((error) => {});
  };

  const handleAddFormSubmit = async (event) => {
    event.preventDefault(event);

    const data = new FormData();
    data.append("file", file);
    data.append("refId", refId);
    data.append("url", inputvalue.url);
    data.append("time", inputvalue.time);
    data.append("title", inputvalue.title);
    data.append("date", inputvalue.date);

    const res = await API.eventAdd(data);

    navigate("/startup/profile/faq");

    setinputvalue({
      url: "",
      time: "",
      date: "",
      title: "",
    });
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };
  return (
    <div>
      <h2>Events</h2>
      <div>
        <form onSubmit={handleAddFormSubmit}>
          <label>Title</label>
          <input type="text" name="title" onChange={handleAddFormChange} />

          <label>Date</label>
          <input type="date" name="date" onChange={handleAddFormChange} />

          <label>Time</label>
          <input type="time" name="time" onChange={handleAddFormChange} />

          <label>URL</label>
          <input type="url" name="url" onChange={handleAddFormChange} />

          <div className="bottom-content">
            <label className="lb">Banner</label>
            <input
              type="file"
              className="banner-in"
              name="banner"
              onChange={handleFileChange}
            />
            <label
              className="uploadlabel"
              onClick={() => document.querySelector(".banner-in").click()}
            >
              <img src={upload} />
              MAX Size 10MBb
            </label>
          </div>
          <button>Confirm</button>
          {/* <button type="submit">Confirm</button> */}
        </form>
      </div>
    </div>
  );
}

export default Events;
