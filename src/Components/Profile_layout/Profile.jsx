import React from "react";

import { useState, useEffect } from "react";

import { MdEdit } from "react-icons/md";

import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import API from "../../Apis/authApis";
import investAPI from "../../Apis/investor";

import { getUser } from "../../script/socialcheck";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Profile = () => {
  const navigate = useNavigate();
  const initialvalue = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    refer: sessionStorage.getItem("investorReferalLink"),
  };

  const location = useLocation();

  const country = ["India", "NRI"];
  const states = {
    India: [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
    ],
    NRI: ["NRI"],
  };
  const [selectcountry, setSelectcountry] = useState("");
  //
  const [formData, setFormData] = useState(initialvalue);
  const registerMethod2 = localStorage.getItem("loginMethod2");
  const registerMethod = localStorage.getItem("loginMethod");

  const [refId, setRefId] = useState(null);

  const [editmode, seteditmode] = useState(false);

  const [phoneValid, setPhoneValid] = useState(false);
  //
  //

  async function fetchData() {
    const temprefId = localStorage.getItem("authRefInvestor");

    setRefId(temprefId);
    // if (registerMethod === "local") {
    const res = await investAPI.fetch(temprefId);

    setFormData({
      ...formData,
      firstName: res.data.data.firstName,
      lastName: res.data.data.lastName,
      phone: res.data.data.phone,
      email: res.data.data.email,
      gender: res.data.data.gender,
      address: res.data.data.address.address,
      city: res.data.data.address.city,
      state: res.data.data.address.state,
      pincode: res.data.data.address.pincode,
      country: res.data.data.address.country,
    });

    if (
      !res.data.data.firstName ||
      !res.data.data.lastName ||
      !res.data.data.phone ||
      !res.data.data.email ||
      !res.data.data.gender ||
      !res.data.data.address.address ||
      !res.data.data.address.city ||
      !res.data.data.address.state ||
      !res.data.data.address.pincode ||
      !res.data.data.address.country
    ) {
      seteditmode(true);
      // alert(true);
    }

    // if(
    //   res.data.data.country!=='NRI'
    // ){

    // }
    // }
  }

  async function handleSocialRegistration() {
    if (registerMethod === "social") {
      const users = await getUser(registerMethod2, "investor");

      const res = await investAPI.fetchbyInvestorByproviderId(
        users.user.providerId
      );

      // refId = res._id;
      setRefId(res._id);
      setFormData({
        ...formData,
        firstName: res.data.data.firstName,
        lastName: res.data.data.lastName,
        phone: res.data.data.phone,
        email: res.data.data.email,
        gender: res.data.data.gender,
        address: res.data.data.address.address,
        city: res.data.data.address.city,
        state: res.data.data.address.state,
        pincode: res.data.data.address.pincode,
        country: res.data.data.address.country,
      });
      seteditmode(true);
    }

    if (
      registerMethod2 === "loginSocial" ||
      registerMethod2 === "signupSocial"
    ) {
      navigate("/dashboard");
      return;
    }
  }

  useEffect(() => {
    if (registerMethod === "local" || registerMethod === "social") {
      // alert("local");
      // alert("local");
      fetchData();

      // fetchData();
    } else {
      fetchData();
      // alert("social");
      // alert("social");
      // handleSocialRegistration();
    }
  }, []);

  // if (registerMethod=="local") {
  //   data = JSON.parse(localStorage.getItem('authData'));
  // }

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function registerComplete(e) {
    e.preventDefault();
    let newField;

    // if (registerMethod=="local") {
    // newField = {"refId": refId}
    // }
    // else{
    // }
    // if (isformempty()) {
    //   toast.error("Please fill in all fields");
    //   return;
    // }
    if (validatePhone() != false) {
      toast.error("Please provide a valid phone number");
      if (isformempty()) {
        toast.error("Please fill in all fields");
        return;
      }
    } else {
      newField = { refId: refId };

      const newFormData = { ...formData, ...newField };

      const res = await API.signupComplete(newFormData);

      if (res.code == 200) {
        toast.success("Profile Completed");
        seteditmode(false);
        sessionStorage.removeItem("investorReferalLink");

        // toast.success("Success")
        if (res.data.status.includes("profile")) {
          navigate("/layoutprofile/");
        } else if (
          res.data.status.includes("pan") ||
          res.data.status.includes("aadhar")
        ) {
          navigate("/layoutprofile/kyc");
        } else if (res.data.status.includes("bank")) {
          navigate("/layoutprofile/bankdetail");
        } else if (res.data.status.includes("other")) {
          navigate("/layoutprofile/others");
        } else {
          navigate("/investor/dashboard");
        }
      }
    }
  }

  function isformempty() {
    for (const field in formData) {
      if (!formData[field]) {
        return false;
      }
    }
    return true;
  }

  const handleEditmode = () => {
    seteditmode(false);
  };

  const validatePhone = () => {
    // phone
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      // toast.error("Please provide a valid phone number");
      return true;
    } else {
      return false;
    }

    // pincode
    const regex = /^[1-9]{1}[0-9]{2}\s{0,1}[0-9]{3}$/;
    if (formData.pincode === null) {
      return "false";
    }
    if (regex.test(formData.pincode)) {
      return "true";
    } else {
      return "false";
    }
  };

  const handleWrapperClick = () => {
    if (!editmode) {
      // Show the toast message when input is clicked in disabled mode
      toast.warn("Click on the edit button to edit the input.");
    }
  };

  return (
    <>
      <section>
        <Helmet defer={false}>
          <title>
            Profile General Details | Personal Information | Bizdateup
          </title>
          <meta
            name="description"
            content=" Update your general details in your Bizdateup profile. Manage your personal information, contact details, and preferences for a seamless experience."
          />
          <meta
            name="keywords"
            content="profile general details, personal information, contact details, preferences, Bizdateup"
          />
        </Helmet>
        <div className=" bg-white lg:w-[808px] md:w-[100%] sm:w-[100%] w-[100%] rounded-[20px]   ">
          <div className="md:px-[35px] px-[15px] py-[40px]">
            <div className="flex justify-between items-center mb-[15px] md:pr-[25px] ">
              <div className="pl-[20px] ">
                <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px]">
                  Personal details
                </h4>
              </div>
              <div className="">
                <button
                  // onClick={() => seteditmode(true)}
                  // disabled={!editmode && isformempty()}
                  onClick={() => seteditmode(true)}
                  className=" bg-[#F1F6FB] text-[#202054] md:px-6 md:py-[10px] py-[9px] px-2 rounded-[10px] hover:bg-[#f3f3fa] duration-200"
                >
                  <h4 className="md:px-[30px] px-[10px] flex justify-evenly items-center text-[16px] font-[400] text-[#202054] leading-[18.75px]">
                    Edit
                    <span className="pl-[7px]">
                      <MdEdit />
                    </span>
                  </h4>
                </button>
              </div>
            </div>
            <form className="w-full " onSubmit={registerComplete}>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                    First Name
                  </label>
                  <div onClick={handleWrapperClick} className="cursor-pointer">
                    <input
                      className={`appearance-none block  text-gray-700 border  border-gray-200  rounded w-full py-[10px] px-4 mb-3 leading-tight ${
                        editmode ? "bg-white" : "bg-gray-100"
                      }   focus:outline-none focus:border-gray-500`}
                      type="text"
                      defaultValue={formData.firstName}
                      placeholder="Enter your first name here "
                      onChange={handleInputChange}
                      name="firstName"
                      disabled={editmode ? false : true}

                      // disabled={!!formData.email}
                    />
                  </div>

                  {/* {} */}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                    Last Name
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      className={`appearance-none block  text-gray-700 border border-gray-200 rounded  w-full py-[10px] px-4 leading-tight focus:outline-none ${
                        editmode ? "bg-white" : "bg-gray-100"
                      }  focus:border-gray-500`}
                      id="grid-last-name"
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name here"
                      defaultValue={formData.lastName}
                      onChange={handleInputChange}
                      // disabled={!editmode && formData.lastName !== ""}
                      disabled={editmode ? false : true}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Email id
                  </label>
                  <div>
                    <input
                      className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-gray-100 focus:border-gray-500"
                      id="grid-password"
                      type="email"
                      defaultValue={formData.email}
                      placeholder="Enter your email id here"
                      onChange={handleInputChange}
                      name="email"
                      // disabled={!!formData.email}
                      disabled={!!formData.email}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="phone"
                  >
                    Mobile number
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      className={`inputs  appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none ${
                        editmode ? "bg-white" : "bg-gray-100"
                      } focus:border-gray-500`}
                      id="phone"
                      type="number"
                      defaultValue={formData.phone}
                      placeholder="Enter your mobile Number Here "
                      onChange={handleInputChange}
                      // disabled={!editmode && formData.phone !== ""}
                      disabled={editmode ? false : true}
                      name="phone"
                    />
                  </div>
                </div>
              </div>

              <div className="md:flex flex-col flex-wrap mx-3 mb-6 ">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Gender
                  </label>
                  <div className="md:flex flex-wrap mx-3 md:mb-6 mb-[10px] grid grid-cols-2 gap-8">
                    <div className="flex items-center mr-4 ">
                      <div onClick={handleWrapperClick}>
                        <input
                          id="inline-radio"
                          type="radio"
                          value="male"
                          // value={formData.gender}
                          onChange={handleInputChange}
                          // disabled={!editmode && formData.gender !== ""}
                          disabled={editmode ? false : true}
                          name="gender"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                          checked={formData.gender === "male" ? true : false}
                        />
                      </div>

                      <label
                        htmlFor="inline-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Male
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <div onClick={handleWrapperClick}>
                        <input
                          id="inline-2-radio"
                          type="radio"
                          // gender="female"

                          value="female"
                          // checked={formData.gender === "female"}
                          onChange={handleInputChange}
                          // disabled={!editmode && formData.gender !== ""}
                          disabled={editmode ? false : true}
                          checked={formData.gender === "female" ? true : false}
                          name="gender"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        />
                      </div>

                      <label
                        htmlFor="inline-2-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Female
                      </label>
                    </div>
                    <div className="flex md:pl-0 pl-[2px] items-center mr-4">
                      <input
                        id="inline-checked-radio"
                        type="radio"
                        // gender="Other"
                        value="other"
                        // checked={formData.gender === "other"}
                        onChange={handleInputChange}
                        // disabled={!editmode && formData.gender !== ""}
                        disabled={editmode ? false : true}
                        name="gender"
                        checked={formData.gender === "other" ? true : false}
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  "
                      />
                      <label
                        htmlFor="inline-checked-radio"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                        Other
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none ${
                        editmode ? "bg-white" : "bg-gray-100"
                      } focus:border-gray-500`}
                      id="grid-password"
                      type="text"
                      value={formData.address}
                      onChange={handleInputChange}
                      // disabled={!editmode && formData.address !== ""}
                      disabled={editmode ? false : true}
                      name="address"
                      placeholder="Enter your Address here"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 md:mb-0 mb-6">
                  <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                    Country
                  </label>
                  {/* <select
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    disabled={editmode}
                    onChange={handleInputChange}
                    defaultValue={formData.pincode}
                    name="country"
                  // onChange={(e) => {
                  //   setSelectcountry(e.target.value);
                  // }}
                  >
                    {country.map((countrys, index) => {
                      return <option key={index}>{countrys}</option>;
                    })}
                  </select> */}

                  <div onClick={handleWrapperClick}>
                    <select
                      disabled={editmode ? false : true}
                      onChange={handleInputChange}
                      value={formData.country}
                      name="country"
                      className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none ${
                        editmode ? "bg-white" : "bg-gray-100"
                      } focus:border-gray-500`}
                    >
                      <option value=""> Select Country </option>
                      <option value="INDIA"> INDIA</option>
                      <option value="NRI">NRI</option>
                    </select>
                  </div>
                </div>

                <div className="w-full md:w-1/2 px-3">
                  {formData?.country === "INDIA" ? (
                    <div>
                      <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                        State
                      </label>
                      {/* <select
                        defaultValue={formData.state}
                        onChange={handleInputChange}
                        name="state"
                        className=" appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                      >
                        {states[formData?.country].map((state, id) => {
                          return <option key={id}>{state}</option>;
                        })}
                      </select>
                    </div>
                  )} */}
                      {/* <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter your state Here "
                    defaultValue={formData.state}
                    name="state"
                  /> */}

                      <div onClick={handleWrapperClick}>
                        <select
                          disabled={editmode ? false : true}
                          // defaultValue={formData.state}
                          onChange={handleInputChange}
                          name="state"
                          value={formData.state}
                          className={` appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none ${
                            editmode ? "bg-white" : "bg-gray-100"
                          } focus:border-gray-500`}
                        >
                          <option value="default"> Select State </option>

                          <option value="Andhra Pradesh">
                            {" "}
                            Andhra Pradesh{" "}
                          </option>
                          <option value="Arunachal Pradesh">
                            {" "}
                            Arunachal Pradesh{" "}
                          </option>
                          <option value="Assam"> Assam</option>
                          <option value="Bihar"> Bihar </option>
                          <option value="Chhattisgarh"> Chhattisgarh </option>
                          <option value="Goa"> Goa </option>
                          <option value="Gujarat"> Gujarat</option>
                          <option value="Haryana"> Haryana </option>
                          <option value="Himachal Pradesh">
                            {" "}
                            Himachal Pradesh{" "}
                          </option>
                          <option value="Jharkhand"> Jharkhand </option>
                          <option value="Karnataka"> Karnataka </option>
                          <option value="Kerala"> Kerala </option>
                          <option value="Madhya Pradesh">
                            {" "}
                            Madhya Pradesh{" "}
                          </option>
                          <option value="Maharashtra"> Maharashtra </option>
                          <option value="Manipur"> Manipur </option>
                          <option value="Meghalaya"> Meghalaya </option>
                          <option value="Mizoram"> Mizoram </option>
                          <option value="Nagaland"> Nagaland </option>
                          <option value="Odisha"> Odisha </option>
                          <option value="Punjab"> Punjab </option>
                          <option value="Rajasthan"> Rajasthan </option>
                          <option value="Sikkim"> Sikkim </option>
                          <option value="Tamil Nadu"> Tamil Nadu </option>
                          <option value="Telangana"> Telangana </option>
                          <option value="Tripura"> Tripura </option>
                          <option value="Uttar Pradesh"> Uttar Pradesh </option>
                          <option value="Uttarakhand"> Uttarakhand </option>
                          <option value="West Bengal"> West Bengal </option>
                        </select>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                    city
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      className={`appearance-none block w-full  text-gray-700 border  border-gray-200  rounded py-[10px] px-4 mb-3 leading-tight  ${
                        editmode ? "bg-white" : "bg-gray-100"
                      } focus:outline-none focus:border-gray-500`}
                      type="text"
                      placeholder="Enter your city Here "
                      // disabled={!formData.city}
                      defaultValue={formData.city}
                      onChange={handleInputChange}
                      // disabled={!editmode && formData.city !== ""}
                      disabled={editmode ? false : true}
                      name="city"
                    />
                  </div>

                  {/* <select
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    disabled={editmode}
                    onChange={handleInputChange}
                    defaultValue={formData.pincode}
                    name="country"
                  // onChange={(e) => {
                  //   setSelectcountry(e.target.value);
                  // }}
                  >
                    {country.map((countrys, index) => {
                      return <option key={index}>{countrys}</option>;
                    })}
                  </select> */}

                  {/* <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    id="grid-last-name"
                    type="text"
                    placeholder="Enter your country Here "
                    defaultValue={formData.country}
                    onChange={handleInputChange}
                    name="country"
                  /> */}
                </div>
                <div className="w-full md:w-1/2 px-3  md:mb-0">
                  <label className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                    Pincode
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      className={`inputs appearance-none block w-full  text-gray-700 border  border-gray-200  rounded py-[10px] px-4 mb-3 leading-tight  ${
                        editmode ? "bg-white" : "bg-gray-100"
                      } focus:outline-none focus:border-gray-500`}
                      type="number"
                      placeholder="Enter your pincode Here "
                      defaultValue={formData.pincode}
                      onChange={handleInputChange}
                      // disabled={!editmode && formData.pincode !== ""}
                      disabled={editmode ? false : true}
                      name="pincode"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Refer & earn
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none ${
                        editmode ? "bg-white" : "bg-gray-100"
                      } focus:border-gray-500`}
                      id="grid-password"
                      type="text"
                      value={formData.refer}
                      onChange={handleInputChange}
                      // disabled={!editmode && formData.address !== ""}
                      disabled={
                        editmode &&
                        !sessionStorage.getItem("investorReferalLink")
                          ? false
                          : true
                      }
                      name="refer"
                      placeholder="Enter referal code"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%] flex md:justify-end  justify-center pr-[20px] pt-[5px]">
                <button
                  type="submit"
                  onClick={() => {
                    validatePhone();
                    handleEditmode();
                  }}
                  className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] w-[150px] h-[38px] md:rounded-[10px] hover:bg-black duration-200"
                >
                  <h4 className="px-[30px]"> Confirm</h4>
                </button>
              </div>
              {/* <ToastContainer position="bottom-right" /> */}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
