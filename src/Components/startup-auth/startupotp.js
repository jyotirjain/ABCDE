import React, { useRef, useState, useEffect } from "react";
import {
  Link,
  NavLink,
  useNavigate,
  useParams,
} from "react-router-dom";
import "../../assets/css/styles.css";
import Slider from "../slider/slider";
import AuthApi from "../../Apis/authApis";
import Navbar from "../navbar/navbar";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

function Startupotp() {
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [loader, setloader] = useState(false);

  const otp1Ref = useRef(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const refId = localStorage.getItem("StartupuserID");

  useEffect(() => {
    if (id != refId) {
      navigate("/Startup/login");
    }
  }, []);

  const verifyotp = async () => {
    setloader(true);
    const userOTP = otp1 + otp2 + otp3 + otp4;
    const method = localStorage.getItem("startupLoginMethod");

    const verifyOTP = await AuthApi.RegisterOTPVerify({ refId, code: userOTP });
   

    if (verifyOTP.code === 200) {
      setloader(false);
      localStorage.setItem("tokenStartup", verifyOTP.data.token);
      //
      setIsVerified(true);
      // window.location.reload();

      // window.location.reload();
      if (method == "localSignup") {
        navigate("/Startup/form");
        // window.location.reload();
      } else {
        navigate("/startup/profile/");
        window.location.reload();
      }
    } else {
      setloader(false);
     
      toast.error("Wrong OTP!");
      otp1Ref.current.focus();
      setOtp1("");
      setOtp2("");
      setOtp3("");
      setOtp4("");
    }
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
  };
  return (
    <div>
      {/* {loader ? (
        <Loader />
      ) : ( */}
      <div className="otp-page w-full md:w-[75%]">
        <Navbar />
        <Helmet defer={false}>
          <title>Startup OTP</title>
          <meta name="description" content="Startup OTP description" />
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
            />
            <input
              id="otp2"
              type="number"
              name="otp2"
              maxLength="1"
              value={otp2}
              onChange={(event) => handleInputChange(event, 2)}
              required
            />
            <input
              id="otp3"
              type="number"
              name="otp3"
              maxLength="1"
              value={otp3}
              onChange={(event) => handleInputChange(event, 3)}
              required
            />
            <input
              id="otp4"
              type="number"
              name="otp4"
              maxLength="1"
              value={otp4}
              onChange={(event) => handleInputChange(event, 4)}
              required
            />
          </div>
          <div className="time w-[360px]">
            <p className="text-[#828F99]">
              Didn’t receive OTP ?{" "}
              <Link className="rsnd text-[#202054] cursor-pointer">
                Resend OTP
              </Link>
            </p>
          </div>

          <button className="procedbtn" onClick={() => verifyotp()}>
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
              <NavLink className="text-[#202054]" to="/startup/signup">
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
        <div className=" md:block hidden">
          <Slider />
        </div>
      </div>
      {/* )} */}
    </div>
  );
}

export default Startupotp;
