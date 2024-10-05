import React, { useState, useEffect } from "react";
// import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";
import "../../../assets/css/styles.css";
import upload from "../../../assets/images/upload.png";
import API from "../../../Apis/startupApis";
import axios from "axios";
import Upload from "antd/es/upload/Upload";
import { Space } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { ImagetoBase64 } from "../../../utility/imagetoBase64";

function Startup() {
  const endpoint = process.env.REACT_APP_TEST_URL;
  const [refId] = useState(localStorage.getItem("StartupuserID"));
  const navigate = useNavigate();
  const [imagedata, setImagedata] = useState({
    image: "",
  });

  const [logo, setLogo] = useState({});
  const [banner, setBanner] = useState({});
  const [formData, setFormData] = useState({
    companyDetails: "",
    shortDescription: "",
    raisedFund: "",
    sector: "",
    stage: "",
    keyHighlights: {
      keyHighlight1: "",
      keyHighlight2: "",
      keyHighlight3: "",
    },
    founderFirstName: "",
    founderLastName: "",
    email: "",
    phone: "",
    companyBased: "",
    youtubeVideoUrl: "",
  });

  const fetchData = async () => {
    try {
      const response = await API.profileFetch({ refId: refId });

      const {
        companyDetails,
        registeredStartupName,
        companyName,
        shortDescription,
        raisedFund,
        sector,
        stage,
        keyHighlights,
      } = response.data.data;
      const {
        founderFirstName,
        founderLastName,
        email,
        phone,
        companyBased,
        youtubeVideoUrl,
      } = response.data.data;

      setFormData((prevFormData) => ({
        ...prevFormData,
        companyDetails,
        shortDescription,
        registeredStartupName,
        companyName,
        raisedFund,
        sector,
        stage,
        keyHighlights: {
          ...prevFormData.keyHighlights,
          ...keyHighlights,
        },
        founderFirstName,
        founderLastName,
        email,
        phone,
        companyBased,
        youtubeVideoUrl,
      }));
    } catch (error) {}
    // } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (logo=="" || banner == "") {
      toast.error("Please upload both logo and banner images");
      return;
    }

    const newField = { refId: refId };

    // }
    // else{

    //   newField = {"refId": user.refId}
    // // }

    const newFormData = { ...formData, ...newField };
    // const data = new FormData();
    // data.append("refId", refId);
    // data.append("file", logo);
    // data.append("file2", banner);
    // data.append("shortDescription", formData.shortDescription);
    // data.append("raisedFund", formData.raisedFund);
    // data.append("sector", formData.sector);
    // data.append("stage", formData.stage);
    // data.append("founderFirstName", formData.founderFirstName);
    // data.append("keyHighlights", formData.keyHighlights);
    // data.append("founderLastName", formData.founderLastName);
    // data.append("email", formData.email);
    // data.append("phone", formData.phone);
    // data.append("companyBased", formData.companyBased);
    // data.append("youtube", formData.youtube);

    //
    //
    const res = await API.generalDetails(newFormData);

    if (res.data.code == 200) {
      // alert("Profile Updated Successfully");
      toast.success("Profile Updated Successfully");
      navigate("pitch");
    } else {
    }
  };

  // const handleLogoChange = async (event, { file }) => {
  //   const data = await ImagetoBase64(event.target.files[0]);
  //

  //   setImagedata((preve) => {
  //     return {
  //       ...preve,
  //       image: data,
  //     };
  //   });

  //   setImagedata((pre) => {
  //     return { ...pre, [file.uid]: file };
  //   });
  //   setLogo((pre) => {
  //     return { ...pre, [file.uid]: file };
  //   });

  //   const getFileObject = (progress) => {
  //     return {
  //       name: file.name,
  //       uid: file.uid,
  //       progress: progress,
  //     };
  //   };

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("refId", refId);

  //   axios
  //     .post(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/logo`, formData, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("tokenStartup")}`,
  //       },
  //       onUploadProgress: (event) => {
  //         setLogo((pre) => {
  //           return { ...pre, [file.uid]: getFileObject(event.progress) };
  //         });
  //       },
  //     })
  //     .then((response) => {
  //       toast.success("logo uploaded successfully!");
  //       // navigate("/profile/pitch");
  //     })
  //     .catch((error) => {
  //       // Show an error message to the user
  //       // alert("There was an error uploading the file.");
  //       toast.error("There was an error uploading the file.");
  //     });
  // };

  // const handleLogoChange = async ({ file }) => {
  //   setLogo((pre) => {
  //     return { ...pre, [file.uid]: file };
  //   });

  //   const getFileObject = (progress) => {
  //     return {
  //       name: file.name,
  //       uid: file.uid,
  //       progress: progress,
  //     };
  //   };

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append("refId", refId);

  //   axios.post(
  //     `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/logo`,
  //     formData,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem('tokenStartup')}`,
  //       },
  //       onUploadProgress: (event) => {

  //         setLogo((pre) => {
  //           return { ...pre, [file.uid]: getFileObject(event.progress) };
  //         });
  //       },
  //     }
  //   ).then((response) => {

  //       toast.success("logo uploaded successfully!");
  //       // navigate("/profile/pitch");
  //     })
  //     .catch((error) => {

  //       // Show an error message to the user
  //       // alert("There was an error uploading the file.");
  //       toast.error("There was an error uploading the file.");
  //     });
  // };

  const handleLogoChange = ({ file }) => {
    setLogo((pre) => {
      return { ...pre, [file.uid]: file };
    });

    const getFileObject = (progress) => {
      return {
        name: file.name,
        uid: file.uid,
        progress: progress,
      };
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("refId", refId);

    axios
      .post(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/logo`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenStartup")}`,
        },
        onUploadProgress: (event) => {
          setLogo((pre) => {
            return { ...pre, [file.uid]: getFileObject(event.progress) };
          });
        },
      })
      .then((response) => {
        toast.success("logo uploaded successfully!");
        // navigate("/profile/pitch");
      })
      .catch((error) => {
        // Show an error message to the user
        // alert("There was an error uploading the file.");
        toast.error("There was an error uploading the file.");
      });
  };

  const handleBannerChange = ({ file }) => {
    setBanner((pre) => {
      return { ...pre, [file.uid]: file };
    });

    const getFileObject = (progress) => {
      return {
        name: file.name,
        uid: file.uid,
        progress: progress,
      };
    };

    const formData = new FormData();
    formData.append("file", file);
    formData.append("refId", refId);

    axios
      .post(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup/banner`, formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tokenStartup")}`,
        },
        onUploadProgress: (event) => {
          setLogo((pre) => {
            return { ...pre, [file.uid]: getFileObject(event.progress) };
          });
        },
      })
      .then((response) => {
        // alert("banner uploaded successfully!");
        toast.success("banner uploaded Successfully");
        // navigate("/profile/pitch");
      })
      .catch((error) => {
        // Show an error message to the user
        // alert("There was an error uploading the file.");
        toast.error("There was an error uploading the file.");
      });
  };

  const handleKeyHighlightChange = (event, key) => {
    const { value, name } = event.target;
    setFormData((prevState) => {
      return {
        ...prevState,
        keyHighlights: {
          ...prevState.keyHighlights,
          [name]: value,
        },
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="startup">
      <h2>Startup Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex md:flex-row md:gap-5">
          {/* <Space direction="horizontal">
            <Upload
              showUploadList={false}
              single
              customRequest={handleLogoChange}
            >
              {logo ? (
                <label className="logo-box">
                  <img src={imagedata.image ? imagedata.image : upload} />
                  <p>Max 10MB</p>
                  Company logo
                </label>
              ) : (
                <label className="logo-box">
                  <img
                    className="w-full h-full"
                    src={"https://www.bizdateup.com/v0/logo/" + formData?.logo}
                  />
                </label>
              )}
            </Upload>
          </Space> */}

          <Space direction="horizontal">
            <Upload
              showUploadList={false}
              single
              customRequest={handleLogoChange}
            >
              {logo ? (
                <label className="logo-box">
                  <img
                    src={imagedata.image ? imagedata.image : upload}
                    alt=""
                  />
                  <p>Max 10MB</p>
                  Company logo
                </label>
              ) : (
                <label className="logo-box">
                  <img
                    className="w-full h-full"
                    src={"https://www.bizdateup.com/v1/logo/" + formData?.logo}
                    alt=""
                  />
                </label>
              )}
            </Upload>
          </Space>

          <div className="comnm md:w-[80%]">
            {/* <div className="regiestered">{formData.registeredCompanyName}</div> */}

            <input
              className="w-full focus:outline-none focus:border-[#202054]"
              placeholder="company detail"
              name="companyDetails"
              required
              value={formData.companyDetails}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <label>Registered Startup Name</label>
        <input
          name="registeredStartupName"
          value={formData.registeredStartupName}
          required
          onChange={handleInputChange}
        />
        <label>Short Description</label>
        <textarea
          name="shortDescription"
          value={formData.shortDescription}
          required
          onChange={handleInputChange}
        />
        <div className="mid-content flex flex-col md:flex md:flex-row ">
          <div className="radio">
            <label>Have you raised Fund before</label>
            <div>
              <label className="radiobtn mr-7">
                <input
                  type="radio"
                  name="raisedFund"
                  value="yes"
                  onChange={handleInputChange}
                  checked={formData.raisedFund === "yes" ? true : false}
                  // checked={true}
                />
                <span></span>
                Yes
              </label>
              <label className="radiobtn ">
                <input
                  type="radio"
                  name="raisedFund"
                  value="no"
                  onChange={handleInputChange}
                  // checked={true}
                  checked={formData.raisedFund === "no" ? true : false}
                />
                <span></span>
                No
              </label>
            </div>
          </div>
          <div className="sector md:w-[80%]">
            <label>Please Select your sector</label>
            <input
              placeholder="Please Select your Sector"
              disabled
              name="sector"
              value={formData.sector}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <label>Stage of Startup</label>

        <textarea
          name="stage"
          value={formData.stage}
          onChange={handleInputChange}
          required
        />

        <label>Key Highlight1</label>
        <input
          name="keyHighlight1"
          value={formData.keyHighlights?.keyHighlight1}
          required
          onChange={handleKeyHighlightChange}
        />

        <label>Key Highlight2</label>
        <input
          name="keyHighlight2"
          value={formData.keyHighlights?.keyHighlight2}
          onChange={handleKeyHighlightChange}
          required
        />

        <label>Key Highlight3</label>
        <input
          name="keyHighlight3"
          value={formData.keyHighlights?.keyHighlight3}
          onChange={handleKeyHighlightChange}
          required
        />

        <div className="fullname w-full flex flex-col md:flex md:flex-row gap-x-4">
          <div className="nm w-[100%]">
            <label>First Name</label>

            <input
              name="founderFirstName"
              value={formData.founderFirstName}
              onChange={handleInputChange}
              disabled
            />
          </div>
          <div className="nm w-[100%]">
            <label>Last Name</label>
            <input
              name="founderLastName"
              value={formData.founderLastName}
              onChange={handleInputChange}
              disabled
            />
          </div>
        </div>

        <label>Email Id</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          disabled
        />

        <label>Mobile number</label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          disabled
        />

        <label>Company Based</label>
        <input
          name="companyBased"
          value={formData.companyBased}
          onChange={handleInputChange}
          disabled
        />

        <label>Upload Banner</label>
        <Space direction="horizontal">
          <Upload
            showUploadList={false}
            single
            customRequest={handleBannerChange}
          >
            <label className="logo-box">
              <img src={upload} alt="upload" />
              <p>Max 10MB</p>
              Banner
            </label>
          </Upload>
        </Space>

        <ToastContainer position="bottom-right" />
        <label>Youtube</label>
        <input
          name="youtubeVideoUrl"
          value={formData.youtubeVideoUrl}
          onChange={handleInputChange}
          required
          type="url"
        />
        <button>Confirm</button>
      </form>
    </div>
  );
}

export default Startup;
