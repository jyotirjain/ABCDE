import React from "react";
import { Select, Option } from "@material-tailwind/react";

import { useState, useEffect } from "react";
import CreatableSelect from "react-select/creatable";

import { useNavigate } from "react-router-dom";
import API from "../../Apis/kyc";
import investAPI from "../../Apis/investor";
import { ToastContainer, toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { Helmet } from "react-helmet";

const Others = () => {
  const refId = localStorage.getItem("authRefInvestor");
  const navigate = useNavigate();
  // occupation, investAmount, sector , linkedlnUrl
  const [occupation, setoccupation] = useState("");
  const [investAmount, setinvestAmount] = useState("");
  // const [investAmount, setinvestAmount] = useState("");
  const [investedFund, setinvestedFund] = useState("");
  const [sector, setsector] = useState();
  const [linkedlnUrl, setlinkedlnUrl] = useState("");

  // const [options, setOptions] = useState([]);
  // const [selected, setSelected] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [anotherState, setAnotherState] = useState([]);
  const [isDisabled, setisDisabled] = useState(false);
  

  useEffect(() => {
    async function fetchData() {
      const res = await investAPI.fetch(refId);

      if (res && res.code === 200) {
        if (res?.data?.data?.other?.status !== "incomplete") {
          setoccupation(res?.data?.data?.other?.occupation);
          setinvestAmount(res?.data?.data?.other?.investAmount);
          setlinkedlnUrl(res?.data?.data?.other?.linkedlnUrl);
          setinvestedFund(res?.data?.data?.other?.investedFund);
          const SelectedOptions = await res?.data?.data?.other?.sector?.map(
            (value) => ({
              label: `Option ${value}`,
              value: value,
            })
          );
          setSelectedOptions(SelectedOptions);
          setisDisabled(true);
        }
      }
    }
    fetchData();
  }, []);

  const handleAlert = () => {
    // alert("Data is Saved");
    toast.success("Data is Saved");
    navigate("/investor/dashboard ");
  };
  const handleoccupationInputChange = (event) => {
    const occuValue = event.target.value;
    setoccupation(occuValue);
  };
  const handleInvestAmountInputChange = (event) => {
    const investValue = event.target.value;

    setinvestAmount(investValue);
  };

  // Handle change event when options are selected/deselected
  const handleSelectChange = (newValue) => {
    setSelectedOptions(newValue);
    const extractedValues = newValue.map((option) => option.value);
    setAnotherState(extractedValues);
  };

  const handlelinkedlnUrlInputChange = (event) => {
    const linkedlnUrlValue = event.target.value;
    setlinkedlnUrl(linkedlnUrlValue);
  };
  const handleFundInvestChange = (event) => {
    const fund = event.target.value;
    setinvestedFund(fund);
    //
  };

  const addOther = async (e) => {
    e.preventDefault();

    const formData = {
      refId: refId,
      occupation: occupation,
      investAmount: investAmount,
      sector: anotherState,
      linkedlnUrl: linkedlnUrl,
      investedFund: investedFund,
    };

    const res = await API.other(formData);

    if (res?.code == 200) {
      
      if (res.data.status.includes("profile")) {
        toast.error("Profile is not completed");
        navigate("/layoutprofile");
      } else if (
        res.data.status.includes("pan") ||
        res.data.status.includes("aadhar")
      ) {
        toast.error("Kyc is required");
        navigate("/layoutprofile/kyc");
      } else if (res.data.status.includes("bank")) {
        toast.error("bank details is required");
        navigate("/layoutprofile/bankdetail");
      } else if (res.data.status.includes("other")) {
        toast.error("Others is required");
        navigate("/layoutprofile/others");
      } else {
        navigate("/investor/dashboard");
        toast.success("Profile Completed!");
      }
    } else {
      toast.error("Somthing Went Wrong");
    }
    return;
  };

  const options = [
    { value: "Healthcare", label: "Healthcare" },
    { value: "Technology", label: "Technology" },
    { value: "Retail", label: "Retail" },
    { value: "Fintech", label: "Fintech" },
    { value: "Ecommerce", label: "Ecommerce" },
    { value: "Artificial intelligence ", label: "Artificial intelligence " },
    { value: "Educational technology", label: "Educational technology" },
    { value: "Logistics", label: "Logistics" },
    { value: "Financial services", label: "Financial services" },
    { value: "Construction", label: "Construction" },
    { value: "Health technology ", label: "Health technology " },
    { value: "Education Entertainment ", label: "Education Entertainment " },
    { value: "Tourism", label: "Tourism" },
    { value: "Cloud computing ", label: "Cloud computing " },
    { value: "Big data ", label: "Big data " },
    { value: "Aerospace", label: "Aerospace" },
    { value: "Virtual reality", label: "Virtual reality" },
  ];

  const handleChange = (selectedOption, actionMeta) => {};
  const handleInputChange = (inputValue, actionMeta) => {};
  const colorStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "white" }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      return { ...styles, color: data.color };
    },
    multiValue: (styles, { data }) => {
      return {
        ...styles,

        backgroundColor: "#E1DDF8",

        color: "#E1DDF8",
      };
    },
    multiValueLabel: (styles, { data }) => {
      return {
        ...styles,
        color: "black",
      };
    },
    multiValueRemove: (styles, { data }) => {
      return {
        ...styles,
        color: "black",
        cursor: "pointer",
        ":hover": {
          color: "red",
        },
      };
    },
  };

  const handleWrapperClick = () => {
    if (isDisabled  == true ) {
      // Show the toast message when input is clicked in disabled mode
      toast.warn("Click on the edit button to edit the input.");
    }
  };
  return (
    <>
      <section>
      <Helmet defer={false}>
        <title>Profile Others | Additional Information | Bizdateup</title>
        <meta
          name="description"
          content=" Provide additional details in your Bizdateup profile. Enhance your investment experience by updating your preferences, interests, and more."
        />
        <meta
          name="keywords"
          content=" profile others, additional information, investment experience, preferences, interests, Bizdateup"
        />
      </Helmet>
        <div className="  bg-white md:w-[808px] sm:w-[100%] w-[100%] md:rounded-[20px]  ">
          <div className="md:px-[35px] px-[15px] py-[40px]">
            <div className="flex justify-between items-center mb-[15px] md:pr-[25px] ">
              <div className="pl-[20px] ">
                <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px]">
                  Others
                </h4>
              </div>
              <div className="">
                <button
                  className=" bg-[#F1F6FB] text-[#202054] md:px-6 md:py-[10px] py-[9px] px-2 rounded-[10px] hover:bg-[#f3f3fa] duration-200"
                  onClick={() => setisDisabled(false)}
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
            <form className="w-full ">
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    occupation here
                  </label>
                  <div onClick={handleWrapperClick}>
                    <select
                      onChange={(event) => handleoccupationInputChange(event)}
                      disabled={isDisabled ? true : false}
                      value={occupation}
                      id="bank_name"
                      className=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-gray-500 block w-full p-2.5 "
                    >
                      <option value="DEFAULT">select your occupation</option>
                      <option value="Self-employed"> Self-employed</option>
                      <option value="Business">Business</option>
                      <option value="Employee">Employee</option>
                      <option value="Unemployed">Unemployed</option>
                      <option value="Retired">Retired</option>
                      <option value="NRI">NRI</option>
                    </select>
                  </div>
                  {/* <input
                    className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    id="grid-password"
                    type="text"
                    onChange={(event) => handleoccupationInputChange(event)}
                    placeholder="Enter your occupation "
                    defaultValue={occupation}
                  /> */}
                </div>
              </div>
              <div className="flex flex-wrap mx-3 mb-7">
                <div className="w-full px-3">
                  <label
                    htmlFor="bank_name"
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                  >
                    invest amount
                  </label>
                  <div onClick={handleWrapperClick}>
                    <select
                      disabled={isDisabled ? true : false}
                      onChange={(event) => handleInvestAmountInputChange(event)}
                      value={investAmount}
                      id="bank_name"
                      className=" border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500  focus:border-gray-500 block w-full p-2.5"
                    >
                      <option value="DEFAULT">select your amount</option>
                      <option value="5K">up to ₹50,000</option>
                      <option value="5K-1L">₹50,000 to ₹ 1 Lakh</option>
                      <option value="1L-10L">₹ 1 Lakh to ₹10 Lakh</option>
                      <option value="10L-1CR">₹10 Lakh to ₹ 1 crore</option>
                      <option value="1CR+">₹1 crore and above</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[11px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Select your Preferred sector
                  </label>
                  {/* <CreatableSelect
                          options={options}
                          onChange={handleSectorInputChange}
                          onInputChange={handleInputChange}
                          isMulti
                          styles={colorStyles}
                        /> */}
                  <div onClick={handleWrapperClick}>
                    <CreatableSelect
                      isDisabled={isDisabled ? true : false}
                      defaultValue={anotherState}
                      isMulti
                      options={options}
                      value={selectedOptions}
                      onChange={handleSelectChange}
                      styles={colorStyles}
                      isOptionDisabled={(options) => options.disabled}
                      required
                    /> 
                  </div>
                </div>
              </div>

              <div className="w-full px-3  mx-3 ">
                <label
                  className="block uppercase tracking-wide  text-[#828F99] font-[400] leading-[11.72px] text-[11px] mb-[13px]"
                  htmlFor="grid-password"
                >
                  Have you invested before in startups
                </label>
                <div className="flex flex-wrap md:justify-start justify-center mb-6">
                  <div className="flex items-center mr-4 ">
                    <div onClick={handleWrapperClick}>
                      <input
                        id="inline-radio"
                        disabled={isDisabled ? true : false}
                        type="radio"
                        value="yes"
                        onChange={handleFundInvestChange}
                        checked={investedFund === "yes" ? true : false}
                        name="investedFund"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                      />
                    </div>

                    <label
                      htmlFor="inline-radio"
                      className="ml-2 md:text-sm font-medium text-gray-900 dark:text-gray-300 text-[12px]"
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <div onClick={handleWrapperClick}>
                      <input
                        id="inline-2-radio"
                        disabled={isDisabled ? true : false}
                        type="radio"
                        value="no"
                        name="investedFund"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                        onChange={handleFundInvestChange}
                        checked={investedFund === "no" ? true : false}
                      />
                    </div>

                    <label
                      htmlFor="inline-2-radio"
                      className="ml-2 md:text-sm font-medium text-gray-900 dark:text-gray-300 text-[12px]"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    linked URL
                  </label>
                  <div onClick={handleWrapperClick}>
                    <input
                      disabled={isDisabled ? true : false}
                      onChange={(event) => handlelinkedlnUrlInputChange(event)}
                      className="appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                      id="grid-password"
                      type="text"
                      defaultValue={linkedlnUrl}
                      placeholder="Enter your linked in URL"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[100%] flex md:justify-end justify-center md:pr-[20px] md:pt-[80px]">
                <button
                  onClick={(e) => addOther(e)}
                  className="bg-[#202054] text-[#ffffff] md:px-6 md:py-[9px] w-[200px] h-[38px] md:rounded-[10px] rounded-[6px] hover:bg-black duration-200"
                >
                  <h4 className="px-[30px]">
                    {/* <h4 className="px-[30px]" onClick={handleAlert}> */}{" "}
                    Save
                  </h4>
                </button>
              </div>
              <ToastContainer position="bottom-right" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Others;
