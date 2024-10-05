import { useState, useEffect } from "react";
import API from "../../Apis/kyc";
import investAPI from "../../Apis/investor";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import LoaderApi from "../LoaderApi/LoaderApi";
import { Verified } from "@mui/icons-material";

function Tabs() {
  const navigate = useNavigate();
  const [toggleState, setToggleState] = useState(1);
  const [pan, setPan] = useState("");
  const [aadhar, setAadhar] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isaadharDisabled, setIsaadharDisabled] = useState(false);
  const [ispanDisabled, setIspanDisabled] = useState(false);

  const [placeholder1, setplaceholder1] = useState();
  const [placeholder2, setplaceholder2] = useState();
  const [loader, setLoader] = useState();

  const refId = localStorage.getItem("authRefInvestor");

  async function fetchData() {
    const res = await investAPI.fetch(refId);
    // if (
    //   (res.data.data.aadhar.status && res.data.data.pan.status) == "verified"
    // ) {
    //   setIsDisabled(true);
    //   setplaceholder1 = res.data.data.aadhar.aadharNo;
    //
    //   setplaceholder2 = res.data.data.pan.panNo;
    // } else {
    //   setIsDisabled(false);
    //   setplaceholder1 = "Enter your Aadhar card number here ";
    //
    //   setplaceholder2 = "Enter your PAN Card number Here ";
    // }

    if (res && res.code == 200) {
      setFirstName(res.data.data.firstName);
      setLastName(res.data.data.lastName);

      if (res.data.data.pan.status === "verified") {
        setPan(res.data.data.pan.panNo);
        setIspanDisabled(true);
      }
      if (res.data.data.aadhar.status === "verified") {
        setAadhar(res.data.data.aadhar.aadharNo);
        setIsaadharDisabled(true);
      }
        
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  // const addKyc = async (e) => {
  //   e.preventDefault();
  //   // const userData = JSON.parse(localStorage.getItem('auth'));
  //
  //   setLoader(true);
  //   if (toggleState == 2) {
  //     // PAN Card validation
  //     if (!pan || pan.trim() === "") {
  //       toast.error("Please enter your PAN Card number");
  //       return;
  //     }

  //     const panRegex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
  //     if (!panRegex.test(pan)) {
  //       toast.error("Invalid PAN Card number format");
  //       return;
  //     }
  //   } else {
  //     // Aadhar card validation
  //     if (!aadhar || aadhar.trim() === "") {
  //       toast.error("Please enter your Aadhar card number");
  //       return;
  //     }

  //     const aadharRegex = /^\d{12}$/;
  //     if (!aadharRegex.test(aadhar)) {
  //       toast.error("Invalid Aadhar card number format");
  //       return;
  //     }

  //     const formData = {
  //       panNo: pan,
  //       refId: refId,
  //       firstName: firstName,
  //       lastName: lastName,
  //     };

  //     const res = await API.pan(formData);

  //     if (res.code == 200) {
  //       toast.success("Pan Card Verified");
  //       setLoader(false);

  //       //         navigate("/bankdetail", { state: { data: res.data.refId } });

  //       if (res.data.status.includes("profile")) {
  //         navigate("/layoutprofile/");
  //       } else if (res.data.status.includes("aadhar")) {
  //         setToggleState(1);
  //       } else if (res.data.status.includes("bank")) {
  //         navigate("/layoutprofile/bankdetail");
  //       } else if (res.data.status.includes("other")) {
  //         navigate("/layoutprofile/others");
  //       } else {
  //         navigate("/investor/dashboard");
  //       }
  //     } else {
  //       setLoader(false);
  //       toast.error("Error in verifying");
  //     }
  //     // toast.error("Error in verifying");
  //     setLoader(false);
  //     return;
  //   }
  //   // else{
  //   const formData = {
  //     aadhar,
  //     refId,
  //   };

  //   const res = await API.aadhar(formData);

  //   if (res.code == 200) {
  //     setLoader(false);
  //     toast.success("Aadhar card verified");
  //     if (res.data.status.includes("profile")) {
  //       navigate("/layoutprofile");
  //     } else if (res.data.status.includes("pan")) {
  //       setToggleState(2);
  //     } else if (res.data.status.includes("bank")) {
  //       navigate("/layoutprofile/bankdetail");
  //     } else if (res.data.status.includes("other")) {
  //       navigate("/layoutprofile/others");
  //     } else {
  //       navigate("/investor/dashboard");
  //     }
  //   } else {
  //     setLoader(false);
  //     toast.error("Error in verifying");
  //   }

  //   // }
  // };

  const addKyc = async (e) => {
    e.preventDefault();
    // const userData = JSON.parse(localStorage.getItem('auth'));
    if (toggleState == 2) {
      const panRegex = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
      if (!panRegex.test(pan)) {
        toast.error("Invalid PAN Card number format");
        return;
      }
      const formData = {
        panNo: pan,
        refId: refId,
        firstName: firstName,
        lastName: lastName,
      };
      try {
        const res = await API.pan(formData);
        if (res.code === 200) {
          toast.success("Pan Card Verified");
          setIspanDisabled(true);

          if (res.data.status.includes("profile")) {
            navigate("/layoutprofile");
          } else if (res.data.status.includes("aadhar")) {
            setToggleState(1);
          } else if (res.data.status.includes("bank")) {
            navigate("/layoutprofile/bankdetail");
          } else if (res.data.status.includes("other")) {
            navigate("/layoutprofile/others");
          } else {
            navigate("/investor/dashboard");
          }
        } else {
          toast.error("Error in verifying PAN Card");
        }
      } catch (error) {
        toast.error("API Error: Failed to verify PAN Card");
      }
      // toast.error("Error in verifying");
      return;
    } else {
      const aadharRegex = /^\d{12}$/;
      if (!aadharRegex.test(aadhar)) {
        toast.error("Invalid Aadhar card number format");
        return;
      }
      const formData = {
        aadhar,
        refId,
      };
      try {
        const res = await API.aadhar(formData);
        if (res.code === 200) {
          setIsaadharDisabled(true);
          toast.success("Aadhar card verified");

          if (res.data.status.includes("profile")) {
            navigate("/layoutprofile");
          } else if (res.data.status.includes("pan")) {
            setToggleState(2);
          } else if (res.data.status.includes("bank")) {
            navigate("/layoutprofile/bankdetail");
          } else if (res.data.status.includes("other")) {
            navigate("/layoutprofile/others");
          } else {
            navigate("/investor/dashboard");
          }
        } else {
          toast.error("Error in verifying Aadhar Card");
        }
      } catch (error) {
        toast.error(" Failed to verify Aadhar Card");
      }

      // toast.error("Error in verifying");
    }
  };

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handlePanInputChange = (event) => {
    const panValue = event.target.value;
    setPan(panValue);
  };

  const handleAadharInputChange = (event) => {
    const aadharValue = event.target.value;
    setAadhar(aadharValue);
  };

  // const handlekyc = (e) => {
  //   e.preventDefault();
  //   if (aadhar == "" && pan =="") {
  //     toast.error("enter field value");
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  return (
    <>
      <section>
        {/* {loader ? (
          <LoaderApi />
        ) : ( */}
        <div className="w-[100%]">
          <div className="flex flex-col relative break-all  ">
            <div className="flex justify-start items-center md:w-[60%] w-[100%] h-[70px] md:pb-[15px] ">
              <div className="w-[100px] flex justify-start items-center ">
                <button
                  className={
                    toggleState === 1
                      ? "  border-[#202052] border-b-[4px] duration-600 w-[100%] py-[10px] text-[#202054] font-[400] leading-[18.75px]  "
                      : " w-[100%] py-[10px] text-[#828F99] font-[400] leading-[18.75px]"
                  }
                  onClick={() => toggleTab(1)}
                >
                  Aadhar card
                </button>
              </div>
              <div className="w-[100px] flex justify-center items-center">
                <button
                  className={
                    toggleState === 2
                      ? "  border-[#202052] border-b-[4px] duration-600 w-[100%] py-[10px]  text-[#202054] font-[400] leading-[18.75px] "
                      : " w-[100%] py-[10px]  text-[#828F99] font-[400] leading-[18.75px]"
                  }
                  onClick={() => toggleTab(2)}
                >
                  PAN card
                </button>
              </div>
            </div>

            <div className="w-[100%] md:pt-[50px] pt-[45px]">
              <form action="">
                <div
                  className={toggleState === 1 ? " duration-600  " : "hidden"}
                >
                  <div className="flex flex-wrap  mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[9px]"
                        htmlFor="grid-password"
                      >
                        Aadhar card number
                      </label>
                      <input
                        className={`inputs appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-[7px] px-4 mb-3 leading-tight focus:outline-none ${
                          isaadharDisabled ? "bg-gray-100" : "bg-white"
                        } focus:border-gray-500`}
                        id="grid-password"
                        type="number"
                        placeholder={placeholder1}
                        defaultValue={aadhar}
                        onChange={(event) => handleAadharInputChange(event)}
                        disabled={isaadharDisabled}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end items-center pr-[8px] mt-[50px]">
                    <button
                      disabled={isaadharDisabled}
                      onClick={(e) => addKyc(e)}
                      className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[8px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                    >
                      <h4 className="px-[30px] font-[Inter]"> Confirm</h4>
                    </button>
                  </div>
                </div>

                <div className={toggleState === 2 ? " duration-600" : "hidden"}>
                  <div className="flex flex-wrap mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[9px]"
                        htmlFor="grid-password"
                      >
                        PAN Card number
                      </label>
                      <input
                        className={`inputs appearance-none block w-full  text-gray-700 border border-gray-300 rounded py-[7px] px-4 mb-3 leading-tight focus:outline-none ${ispanDisabled ? "bg-gray-100" : "bg-white"} focus:border-gray-500`}
                        id="grid-password"
                        defaultValue={pan}
                        placeholder={placeholder2}
                        onChange={(event) => handlePanInputChange(event)}
                        disabled={ispanDisabled}
                      />
                    </div>
                  </div>
                  <div className="flex justify-center md:justify-end items-center pr-[8px] mt-[50px]">
                    <button
                      disabled={ispanDisabled}
                      onClick={(e) => addKyc(e)}
                      className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[8px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                    >
                      <h4 className="px-[30px]"> Confirm</h4>
                    </button>
                  </div>
                </div>

                {/* <ToastContainer position="bottom-right" /> */}
              </form>
            </div>
          </div>
        </div>
        {/* )} */}
      </section>
    </>
  );
}

export default Tabs;
