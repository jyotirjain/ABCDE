import React, { useEffect, useState } from "react";
import upload from "../../assets/images/upload.png";
import Cta1 from "../../assets/images/cta/cta1.png";
import Cta2 from "../../assets/images/cta/cta2.png";
import { RightCircleOutlined } from "@ant-design/icons";
import "../../assets/css/styles.css";
import { useNavigate } from "react-router";
import StartupApis from "../../Apis/startupApis";
import Navbar from "../Navbar1/Navbar1";
import API from "../../Apis/startupApis";
import Footer2 from "../Footer2/Footer2";
import { toast, ToastContainer } from "react-toastify";
import Loader from "../loader/loader";
import { Helmet } from "react-helmet";
import CreatableSelect from "react-select/creatable";
import { Link } from "react-router-dom";
import LoaderApi from "../LoaderApi/LoaderApi";

function Startupform() {
  const refId = localStorage.getItem("StartupuserID");
  const method = localStorage.getItem("startupLoginMethod");
  const [email, setEmail] = useState(localStorage.getItem("startupLoginEmail"));
  const [phone, setPhone] = useState(localStorage.getItem("startupLoginEmail"));

  const [file, setFile] = useState();
  const initialvalue = {
    founderFirstName: "",
    founderLastName: "",
    emailOrPhone: localStorage.getItem("startupLoginEmail"),
    phone: localStorage.getItem("startupLoginPhone"),
    founderLinkedinUrl: "",
    registeredCompanyName: "",
    companyName: "",
    companyLinkedinUrl: "",
    website: "",
    fundraisingRounds: "",
    productDescription: "",
    tractionDescription: "",
    revenue: 0,
    teamCapacity: 0,
    companyBased: "",
    sector: "",
    pitchUpload: "",
    refer: sessionStorage.getItem("startupReferalLink"),
  };
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [anotherState, setAnotherState] = useState([]);

  const [startdetail, setstartupdetail] = useState(initialvalue);
  const [focused, setfocused] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await API.formFetch({ refId: refId });
      setstartupdetail(...startdetail, response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  useEffect(() => {
    // if (method !== "localSignup") {
    fetchData();
    // }
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;

    if (name === "pitchUpload") {
      // alert("Hello");
      toast.success("pitch Uploaded");

      setstartupdetail((old) => {
        return { ...old, [name]: e.target.files[0].toString("base64") };
      });
    } else {
      setstartupdetail({ ...startdetail, [name]: value });
    }
  };
  const handleSelectChange = (newValue) => {
    setSelectedOptions(newValue);
    const extractedValues = newValue.map((option) => option.value);
    setAnotherState(extractedValues);
  };

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

  const handlesubmit = async (e) => {
    e.preventDefault();

    // startdetail["refId"] = refId;
    const data = new FormData();
    data.append("file", file);
    data.append("refId", refId);
    data.append("tags", anotherState);
    // data.append(
    //   "emailOrPhone",
    //   startdetail?.emailOrPhone || startdetail?.email || email
    // );

    Object.keys(startdetail).forEach((key) =>
      data.append(key, startdetail[key])
    );

    const res = await StartupApis.StartupForm(data);

    if (res.code == 200) {
      // ImageInput.current.value = null;
      sessionStorage.removeItem("startupReferalLink");

      navigate("/startup/wait-for-approve");
    }
    // } else {
    //
    // }
  };

  const handlefocus = (e) => {
    setfocused(true);
  };

  const handlecta = () => {
    navigate("/learn");
  };

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB in bytes

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile && selectedFile.size > MAX_FILE_SIZE) {
      toast.error("File size is too large. Maximum size allowed is 10MB.");
      return;
    }

    setFile(selectedFile);
    toast.success("Pitch Uploaded");
  };

  return (
    <div>
      <Navbar verified={"true"} userType="startup" />
      <Helmet defer={false}>
        <title>Startup Form | Fundraising Application | Bizdateup</title>
        <meta
          name="description"
          content="Fill out the startup form to apply for fundraising on Bizdateup. Provide essential details about your business to get started with the investment process."
        />
        <meta
          name="keywords"
          content="startup form, fundraising application, Bizdateup, essential details, investment process"
        />
      </Helmet>
      <div className="startupform p-3 lg:p-6 ">
        {loading ? (
          <LoaderApi />
        ) : (
          <div className="w-[100%] md:max-w-[1300px] ">
            <h1 className="">Raise with Bizdateup</h1>
            <div className="flex gap-x-8 justify-center lg:w-[100%] ">
              <div className="profile-container w-[100%]  lg:w-[85%]">
                <label className=" not-italic font-normal text-base leading-6 text-[#252525] font-[Inter]">
                  Tell us a little about your company. This will help us
                  understand your business better.
                </label>
                <form className="form" onSubmit={handlesubmit}>
                  <div className="fullname flex flex-col md:flex md:flex-row md:gap-x-8">
                    <div className="nm w-[100%]">
                      <label>
                        First Name<span>*</span>
                      </label>
                      <input
                        className=""
                        name="founderFirstName"
                        placeholder="First Name"
                        value={startdetail?.founderFirstName}
                        onChange={handlechange}
                        required
                        onBlur={handlefocus}
                        focused={focused.toString()}
                      />
                    </div>
                    <div className="nm w-[100%]">
                      <label>
                        Last Name<span>*</span>
                      </label>
                      <input
                        className=""
                        name="founderLastName"
                        placeholder="Last Name"
                        value={startdetail?.founderLastName}
                        onChange={handlechange}
                        required
                        onBlur={handlefocus}
                        focused={focused.toString()}
                      />
                    </div>
                  </div>

                  <label>Email Id</label>
                  <input
                    name="emailOrPhone"
                    type="email"
                    placeholder="Enter your email address"
                    value={
                      startdetail?.emailOrPhone || startdetail?.email || email
                    }
                    disabled
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Phone Number</label>
                  <input
                    className="phone"
                    name="phone"
                    type="number"
                    placeholder="Enter Your Phone Number here"
                    pattern="/^\d{10}$/"
                    value={startdetail?.phone || phone}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Founder's Linkedin Profile URL</label>
                  <input
                    name="founderLinkedinUrl"
                    placeholder="Enter your Linkedin URL"
                    value={startdetail?.founderLinkedinUrl}
                    onChange={handlechange}
                    type="url"
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Registered Company name</label>
                  <input
                    name="registeredCompanyName"
                    placeholder="Enter registered your Company name here"
                    value={startdetail?.registeredCompanyName}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Company name</label>
                  <input
                    name="companyName"
                    placeholder="Enter your Company name here"
                    value={startdetail?.companyName}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Company Linkedin URL</label>
                  <input
                    name="companyLinkedinUrl"
                    placeholder="Enter your Company linkedin URL"
                    value={startdetail?.companyLinkedinUrl}
                    onChange={handlechange}
                    type="url"
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Company's website</label>
                  <input
                    name="website"
                    placeholder="Enter Your Company's Website"
                    value={startdetail?.website}
                    onChange={handlechange}
                    type="url"
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Describe your previous fundraising round</label>
                  <textarea
                    name="previousFundraisingRounds"
                    value={startdetail?.previousFundraisingRounds}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                    placeholder="Describe your previous fundraising round"
                  />

                  <label>Describe Your Product</label>
                  <textarea
                    name="productDescription"
                    value={startdetail?.productDescription}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                    placeholder="Describe your product"
                  />

                  <label>Describe traction</label>
                  <textarea
                    name="tractionDescription"
                    value={startdetail?.tractionDescription}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                    placeholder="Describe your previous fundraising round"
                  />

                  <label>Revenue</label>
                  <input
                    name="revenue"
                    placeholder="Enter your Revenue"
                    value={startdetail?.revenue}
                    onChange={handlechange}
                    type="number"
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Team capacity</label>
                  <input
                    name="teamCapacity"
                    placeholder="Enter team capacity"
                    value={startdetail?.teamCapacity}
                    onChange={handlechange}
                    type="number"
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Company Based</label>
                  <input
                    name="companyBased"
                    placeholder="Enter Your Base"
                    value={startdetail?.companyBased}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <label>Tags</label>
                  <CreatableSelect
                    defaultValue={anotherState}
                    isMulti
                    options={options}
                    value={selectedOptions}
                    onChange={handleSelectChange}
                    styles={colorStyles}
                    required
                  />

                  <label>Sector</label>
                  <input
                    name="sector"
                    placeholder="Enter your sector"
                    value={startdetail?.sector}
                    onChange={handlechange}
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />

                  <div className="upload">
                    <label className="lb">Upload your pitch</label>
                    <input
                      name="pitchUpload"
                      type="file"
                      accept=".pdf"
                      className="pdf"
                      // value={startdetail?.pitchUpload}
                      // onChange={handlechange}
                      onChange={handleFileChange}
                      required
                      // onBlur={handlefocus}
                      // focused={focused.toString()}
                    />
                    <label
                      className="uploadlabel"
                      onClick={() => document.querySelector(".pdf").click()}
                    >
                      <span>
                        <img src={upload} alt="" />
                      </span>
                      Max Size 10MB
                    </label>
                    <label className="text-green-500">
                      {file ? "File Uploaded!!!" : ""}{" "}
                    </label>
                  </div>

                  <label>Refer & earn</label>
                  <input
                    name="refer"
                    placeholder="Enter your refer & earn link here"
                    value={startdetail?.refer}
                    onChange={handlechange}
                    onBlur={handlefocus}
                    focused={focused.toString()}
                    disabled={
                      sessionStorage.getItem("startupReferalLink")
                        ? true
                        : false
                    }
                  />

                  <ToastContainer position="bottom-right" />
                  <button disabled={loading}>Submit</button>
                </form>
              </div>

              <div className=" hidden md:flex md:flex-col md:w-[310px] md:gap-y-8 ">
                <Link to="/learn">
                  <div className="cta ">
                    <div className="ctaimg bg-[#DEF7E7]">
                      <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                        See how we raised for other startups
                      </label>
                      <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                        CLosed deals or See how we are raising for others
                      </p>
                      <div className="flex justify-end mt-12">
                        <img src={Cta1} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center my-2 mx-5 py-1">
                      <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                        Learn Now
                      </label>
                      <RightCircleOutlined />
                    </div>
                  </div>
                </Link>

                <a
                  target="_blank"
                  href="https://calendly.com/bizdateup/bizdateup-investor-application?month=2023-06"
                >
                  <div className="cta  ">
                    <div className="ctaimg bg-[#E0A467] ">
                      <label className=" not-italic font-normal text-base leading-[19px] text-[#252525] font-[Inter]">
                        Talk with our startup manager now
                      </label>
                      <p className="w-[196px] not-italic font-normal text-[13.33px] leading-4 text-[#252525] font-[Inter]">
                        Learn more about us
                      </p>
                      <div className="flex justify-end mt-12  ">
                        <img src={Cta2} alt="" />
                      </div>
                    </div>
                    <div className="flex justify-between items-center my-2 mx-5 py-1">
                      <label className="not-italic font-normal text-[13.33px] leading-[100%] text-[#202054] font-[Inter]">
                        Learn Now
                      </label>
                      <RightCircleOutlined />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer2 />
    </div>
  );
}

export default Startupform;
