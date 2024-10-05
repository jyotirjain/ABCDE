import React, { useState } from "react";
import google from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import Slider from "../slider/slider";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../navbar/navbar";
import { Helmet } from "react-helmet";
import Loader from "../loader/loader";
import LoaderApi from "../LoaderApi/LoaderApi";

function Startuplogin() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const [focused, setfocused] = useState(false);
  const [loader, setloader] = useState(false);

  const handlefocus = (e) => {
    setfocused(true);
  };

  function validateEmailOrPhone(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    if (emailRegex.test(value)) {
      return "email";
    } else if (phoneRegex.test(value)) {
      return "phone";
    } else {
      return false;
    }
  }

  // const registerGoogle = () => {
  //   localStorage.removeItem("loginMethod2");
  //   localStorage.removeItem("loginMethod");
  //   localStorage.setItem("loginMethod2", "loginSocial");
  //   localStorage.setItem("loginMethod", "social");
  //   window.open(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/google`, "_self");
  // };
  const registerGoogle = () => {
    localStorage.setItem("loginMethod2", "signupGoogle");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/startup/google`,
      "_self"
    );
  };

  const registerFacebook = () => {
    localStorage.setItem("loginMethod2", "signupGoogle");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/startup/facebook`,
      "_self"
    );
  };

  function login() {
    // let item = { email };

    setloader(true);

    const emailOrPhone = validateEmailOrPhone(inputValue);
    if (emailOrPhone) {
      const apiEndpoint =
        emailOrPhone === "email"
          ? `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/email`
          : `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/phone`;
      fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [emailOrPhone]: inputValue, role: "startup" }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.data.refId && data.data.code == 200) {
            setloader(false);

            localStorage.setItem("StartupuserID", data.data.refId);
            localStorage.setItem("startupLoginMethod", "locallogin");

            navigate("/startup/otp/" + data.data.refId);
            toast.success("OTP sent Successfully");
          } else {
            setloader(false);
            toast.error(data.data.message);
            // toast.error("You had kept your form incomplete, Kindly register with the same email address.")
          }
        })
        .catch((error) => {
          setloader(false);
        });
    } else {
      // Handle invalid input value
      setloader(false);

      toast.error("Enter valid input");
    }
  }

  return (
    <div>
      {loader ? (
        <LoaderApi />
      ) : (
        <div className="login w-full md:w-[75%]">
          <Navbar />
          <Helmet defer={false}>
            <title>Startup Login</title>
            <meta name="description" content="Startup Login description" />
          </Helmet>
          <div className="login-box">
            <div className="container">
              <div className="title">
                <label>Login</label>
              </div>
              <input
                className="login"
                placeholder="Email Id"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                required
                onBlur={handlefocus}
                focused={focused.toString()}
              />
              <button className="otpbtn" onClick={() => login()}>
                Request OTP
              </button>
              <ToastContainer position="bottom-right" />
              <button className="btn" onClick={() => registerGoogle()}>
                <img src={google} alt="" />
                <div className="absolute left-32">Login with Google</div>
              </button>
              <button className="btn" onClick={() => registerFacebook()}>
                <img src={fb} alt="" />
                <div className="absolute left-32">Login with Facebook</div>
              </button>
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
      )}
    </div>
  );
}

export default Startuplogin;
