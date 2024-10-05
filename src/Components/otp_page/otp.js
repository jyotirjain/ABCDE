import React, { useRef, useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/css/styles.css";
import Navbar from "../navbar/navbar";
import Slider from "../slider/slider";
// import MyContext from '../../myContext';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

function Otp() {
 

  const { id } = useParams();
  const refId = localStorage.getItem("investoruserID");
  const navigate = useNavigate();
  useEffect(() => {
    if (id != refId) {
      navigate("/login");
    }
  }, []);

  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  

  const otp1Ref = useRef(null);

  const [invalidotp, setinvalidotp] = useState(false);

  const verifyotp = async () => {
    const userOTP = otp1 + otp2 + otp3 + otp4;

    const reqData = {
      code: userOTP,
      refId,
    };

    fetch(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/verify-register-otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reqData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "OK") {
          const loginMethod = localStorage.getItem("loginMethod");
          const loginMethod2 = localStorage.getItem("loginMethod2");

          if (loginMethod === "local" && loginMethod2 === "signup") {
            localStorage.removeItem("tokenInvestor");
            localStorage.removeItem("authDataInvestor");
            localStorage.removeItem("authRefInvestor");

            setIsVerified(true);
            localStorage.setItem(
              "authDataInvestor",
              JSON.stringify(data.data)
            );
            localStorage.setItem("authRefInvestor", data.data.refId);
            localStorage.setItem("tokenInvestor", data.data.token);
            navigate("/layoutprofile/", { state: { data: data } });
          } else {
            if (data.data.code == "200") {
              localStorage.removeItem("tokenInvestor");
              localStorage.removeItem("authDataInvestor");
              localStorage.removeItem("authRefInvestor");
              localStorage.setItem("tokenInvestor", data.data.token);
              localStorage.setItem(
                "authDataInvestor",
                JSON.stringify(data.data.data)
              );
              localStorage.setItem("authRefInvestor", data.data.refId);
              if (data.data.status.includes("profile")) {
                toast.error("Please complete your profile");
                navigate("/layoutprofile/", {
                  state: { data: data.data.refId },
                });
              } else if (
                data.data.status.includes("pan") ||
                data.data.status.includes("aadhar")
              ) {
                toast.error("Please complete your KYC details");
                navigate("/layoutprofile/kyc", {
                  state: { data: data.data.refId },
                });
              } else if (data.data.status.includes("bank")) {
                toast.error("Please complete your bank details");
                navigate("/layoutprofile/bankdetail", {
                  state: { data: data.data.refId },
                });
              } else if (data.data.status.includes("other")) {
                toast.error("Please complete your profile");
                navigate("/layoutprofile/others", {
                  state: { data: data.data.refId },
                });
              } else {
                toast.success("Login Successfully");
                navigate("/investor/dashboard", {
                  state: { data: data.data.refId },
                });
              }
              // window.location.reload();
            }
            // navigate("/dashboard", { state: { data:data }});
            // setIsVerified(true);
          }
        } else {
          toast.error("Wrong OTP!");
          
          otp1Ref.current.focus();
          setOtp1("");
          setOtp2("");
          setOtp3("");
          setOtp4("");
          setinvalidotp(true);
        }
      })
      .catch((error) => {});
  };

  const handleInputChange = (event, inputNum) => {
    const inputVal = event.target.value;

    switch (inputNum) {
      case 1:
        setOtp1(inputVal);
        if (inputVal.length === 1) {
          otp1Ref.current.blur();
          document.getElementById("otp2").focus();
        }
        break;
      case 2:
        setOtp2(inputVal);
        if (inputVal.length === 1) {
          document.getElementById("otp3").focus();
        } else {
          otp1Ref.current.focus();
        }
        break;
      case 3:
        setOtp3(inputVal);
        if (inputVal.length === 1) {
          document.getElementById("otp4").focus();
        } else {
          document.getElementById("otp2").focus();
        }
        break;
      case 4:
        setOtp4(inputVal);
        if (inputVal.length === 0) {
          document.getElementById("otp3").focus();
        }
        break;
      default:
        break;
    }
    setinvalidotp(false);
  };

  return (
    <div className="otp-page w-full md:w-[75%] ">
      <Navbar />
      <Helmet defer={false}>
        <title>
          OTP Verification | Secure Login and Registration | Bizdateup
        </title>
        <meta
          name="description"
          content="Safeguard your account with OTP verification during login and registration. Ensure secure access to your Bizdateup account and protect your investment data."
        />
        <meta
          name="keywords"
          content="OTP verification, secure login, secure registration, Bizdateup account, protect investment data"
        />
      </Helmet>
      <div className="container">
        <div className="title">
          <label>OTP</label>
        </div>

        <div className="lb">
          <p> Enter 4-digit OTP</p>
        </div>

        <div className="otp-field">
          <input
            ref={otp1Ref}
            id="otp1"
            type="number"
            name="otp1"
            maxLength="1"
            value={otp1}
            onChange={(event) => handleInputChange(event, 1)}
            autoFocus
            required
            className={invalidotp ? "invalid-otp" : ""}
          />
          <input
            id="otp2"
            type="number"
            name="otp2"
            maxLength="1"
            value={otp2}
            onChange={(event) => handleInputChange(event, 2)}
            required
            className={invalidotp ? "invalid-otp" : ""}
          />
          <input
            id="otp3"
            type="number"
            name="otp3"
            maxLength="1"
            value={otp3}
            onChange={(event) => handleInputChange(event, 3)}
            required
            className={invalidotp ? "invalid-otp" : ""}
          />
          <input
            id="otp4"
            type="number"
            name="otp4"
            maxLength="1"
            value={otp4}
            onChange={(event) => handleInputChange(event, 4)}
            required
            className={invalidotp ? "invalid-otp" : ""}
          />
        </div>
        <div className="time w-[360px]">
          <p className="text-[#828F99]">
            Didn’t receive OTP ?{" "}
            <span className="rsnd text-[#202054] cursor-pointer">
              Resend OTP
            </span>
          </p>
        </div>

        <button className="procedbtn" type="submit" onClick={() => verifyotp()}>
          Proceed
        </button>
        {isVerified && <p>OTP verified!</p>}
        <div className="terms ">
          <p>
            By signing up I agree to Bizdateup's{" "}
            <NavLink className="text-[#202054]" to="/terms_of_use">
              Terms of Use
            </NavLink>{" "}
            and{" "}
            <NavLink className="text-[#202054]" to="/privacy_policy">
              Privacy Policy.
            </NavLink>
          </p>
        </div>
        <div className="sep my-2"></div>
        <div className="redirect">
          <p>
            Don't have an account ?{" "}
            <NavLink className="text-[#202054]" to="/signup">
              Sign up instead
            </NavLink>
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <p className="absolute bottom-0 ">
          2023 © Bizdateup. All Copyrights reserved.
        </p>
      </div>
      <div className="md:block hidden">
        <Slider />
      </div>
    </div>
  );
}

export default Otp;
