// import React from 'react'
import React, { useState, useEffect, useRef } from "react";
import API from "../../../Apis/startupApis";
import { NavLink, useNavigate } from "react-router-dom";
import edit from "../../../assets/images/edit.png";
import del from "../../../assets/images/delete.png";

function Faq() {
  // const refId = ;
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  const data = [];
  const [InputValues, setInputValues] = useState({
    refId: refId,
    question: "",
    answer: "",
  });
  const formRef = useRef(null);

  const handleFormChange = (e) => {
    e.preventDefault();
    setInputValues({ ...InputValues, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const SubmitForm = async (e) => {
    e.preventDefault();
    setInputValues({ refId: refId });
    let res;
    // const data = new FormData();
    // InputValues.append("refId", refId);
    // setInputValues({ ...InputValues, ["refId"]: refId });
    // data.append("question", InputValues.question);
    // data.append("answer", InputValues.answer);
    if (editMode) {
      // InputValues.append("editId", editId);

      res = await API.faqUpdate(InputValues);

      setEditMode(false);
      setEditId(null);
      if (res.data.code == 200) {
        fetchData();
      }
    } else {
      setInputValues({ ...InputValues, refId: refId });

      res = await API.faqAdd(InputValues);

      if (res.data.code == 200) {
        fetchData();
      }
    }

    setInputValues({
      refId: refId,
      question: "",
      answer: "",
    });
    formRef.current.reset();
  };
  const [datas, setdata] = useState(data);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleNext = (event) => {
    // alert("Hello");
    event.preventDefault();
    navigate("/Startup/dashboard");
  };

  const handleEdit = (event, id) => {
    event.preventDefault(event);
    const itemToEdit = datas.find((current) => current._id === id);

    setInputValues(itemToEdit);
    // setInputValues({ ...InputValues, ["editId"]: id });

    setInputValues({
      refId: refId,
      editId: id,
      question: itemToEdit.question,
      answer: itemToEdit.answer,
    });
    setEditMode(true);
    setEditId(id);
  };

  const handleDelete = async (event, id) => {
    event.preventDefault(event);
    const delData = {
      refId: refId,
      delId: id,
    };
    const res = await API.faqDelete(delData);
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await API.faqFetch({ refId: refId });

      setdata(response.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter] ">
          FAQ
        </h2>
        <button className="add" onClick={SubmitForm}>
          Add Question
        </button>
      </div>

      <div>
        {/* <form onSubmit={SubmitForm}> */}
        <form ref={formRef}>
          <label>Add Question</label>
          <input
            name="question"
            onChange={handleFormChange}
            defaultValue={InputValues.question}
          />
          <label>Answer</label>
          <input
            name="answer"
            onChange={handleFormChange}
            defaultValue={InputValues.answer}
          />
          <div className="w-full overflow-x-auto md:overflow-hidden">
            <table className="w-full mt-2">
              <thead>
                <tr>
                  <th>Sr</th>
                  <th>Question</th>
                  <th>Answer</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {datas.map((current) => (
                  <tr key={current._id}>
                    <td>{current._id}</td>
                    <td>{current.question}</td>
                    <td>{current.answer}</td>
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

          <button onClick={handleNext}>Finish</button>
        </form>
      </div>
    </div>
  );
}

export default Faq;
