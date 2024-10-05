import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import API from "../../../Apis/startupApis";

function Dealsterms() {
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  const [InputValues, setInputValues] = useState({
    refId: refId,
    typeOfSecurity: "",
    valuation: 0,
    discount: 0,
    minimumInvestment: 0,
    targetAmount: 0,
  });
  const navigate = useNavigate();
  const handleNext = (event) => {
    event.preventDefault();
    // Perform form submission logic
    // ...
    // Navigate to another page
    navigate("/profile/upload");
  };
  const handleFormChange = (e) => {
    e.preventDefault();
    if (e.target.name === "typeOfSecurity") {
      setInputValues({ ...InputValues, [e.target.name]: e.target.value });
    } else {
      setInputValues({
        ...InputValues,
        [e.target.name]: Number(e.target.value),
      });
    }
  };

  const SubmitForm = async (e) => {
    e.preventDefault();
    const res = await API.dealTermsAdd(InputValues);

    if (res) {
      navigate("/startup/profile/upload");
      // handleNext();
    }
  };
  const fetchData = async () => {
    try {
      const response = await API.dealTermFetch({ refId: refId });

      setInputValues({
        refId: refId,
        typeOfSecurity: response.data.data.typeOfSecurity,
        valuation: response.data.data.valuation,
        discount: response.data.data.discount,
        minimumInvestment: response.data.data.minimumInvestment,
        targetAmount: response.data.data.targetAmount,
      });
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h2 className="not-italic font-normal text-[19.2px] leading-[41px] text-[#202054] font-[Inter] ">
        Deal Terms
      </h2>
      <form onSubmit={SubmitForm}>
        <label>Security</label>
        <select
          name="typeOfSecurity"
          required
          value={InputValues?.typeOfSecurity}
          onChange={handleFormChange}
          className="w-full"
        >
          <option value="">Select a category</option>
          <option value="CCDS">CCDS</option>
          <option value="CCPS">CCPS</option>
          <option value="equity">Equity</option>
          <option value="startup">startup</option>
        </select>

        <label>Valuation</label>
        <input
          name="valuation"
          required
          value={InputValues?.valuation}
          type="number"
          onChange={handleFormChange}
        />

        <label>Discount of Valuation</label>
        <input
          name="discount"
          required
          value={InputValues?.discount}
          type="number"
          onChange={handleFormChange}
        />

        <label>Minimum Investment</label>
        <select
          name="minimumInvestment"
          required
          value={InputValues?.minimumInvestment}
          onChange={handleFormChange}
          className="w-full"
        >
          <option value="">select</option>
          <option value="20000">₹20,000</option>
          <option value="30000">₹30,000</option>
          <option value="50000">₹50,000</option>
          <option value="60000">₹60,000</option>
          <option value="100000">₹1,00,000</option>
          <option value="200000">₹2,00,000</option>
        </select>
        {/* <input name="minimumInvestment" onChange={handleFormChange} /> */}

        <label>Target Amount</label>
        <input
          name="targetAmount"
          required
          type="number"
          value={InputValues?.targetAmount}
          onChange={handleFormChange}
        />

        <button>Submit</button>
      </form>
    </div>
  );
}

export default Dealsterms;
