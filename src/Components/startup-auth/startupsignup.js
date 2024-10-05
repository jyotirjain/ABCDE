import React, { useState } from "react";
import gogle from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import gmail from "../../assets/images/gmail.png";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Slider from "../slider/slider";
import Navbar from "../navbar/navbar";
import { Helmet } from "react-helmet";
import Loader from "../loader/loader";
import LoaderApi from "../LoaderApi/LoaderApi";

function Startupsignup() {
  const [inputValue, setInputValue] = useState("");

  const [focused, setfocused] = useState(false);

  const [visible, setvisible] = useState(false);
  const [loader, setloader] = useState(false);

  const navigate = useNavigate();

  const Registerurl = "/email-signup";

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
  //   localStorage.setItem('loginMethod2', "signupSocial");
  //   localStorage.setItem('loginMethod', 'social');
  //   window.open(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/google`, "_self");
  // };
  // const registerGoogle = () => {
  //   localStorage.setItem('loginMethod2', "signupSocial");
  //   localStorage.setItem('loginMethod', 'social');
  //   window.open(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/google`, "_self");
  // };
  const registerGoogle = () => {
    localStorage.setItem("loginMethod2", "signup");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/startup/google`,
      "_self"
    );
  };
  const registerFacebook = () => {
    localStorage.setItem("loginMethod2", "signup");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/startup/facebook`,
      "_self"
    );
  };

  async function register() {
    setloader(true);
    const emailOrPhone = validateEmailOrPhone(inputValue);

    if (emailOrPhone) {
      const apiEndpoint =
        emailOrPhone === "email"
          ? `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/email-signup`
          : `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/phone-signup`;
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [emailOrPhone]: inputValue, role: "startup" }),
      });
      const data = await response.json();

      if (data.data.code === 200) {
        localStorage.setItem("StartupuserID", data.data.data.refId);
        localStorage.setItem("startupLoginMethod", "localSignup");
        emailOrPhone === "email"
          ? localStorage.setItem("startupLoginEmail", inputValue)
          : localStorage.setItem("startupLoginPhone", inputValue);
        toast.success(data.data.data.message);
        navigate("/startup/otp/" + data.data.data.refId);
      } else if (
        data.data.code === 401 &&
        data.data.message === "ALREADY_EXIST"
      ) {
        setloader(false);
        toast.error("User already exists. Please log in.");
      } else {
        toast.error(data.data.data.message);
      }

      // ...
    } else {
      // Handle invalid input value
      setloader(false);
      toast.error("Enter Valid Input");
    }
  }

  const handlefocus = (e) => {
    setfocused(true);
  };

  return (
    <div>
      {loader ? (
        <LoaderApi/>
      ) : (
        <div className="sign-up w-full md:w-[75%] ">
          <Navbar />
          <Helmet defer={false}>
            <title>Startup Signup</title>
            <meta name="description" content="Startup Signup description" />
          </Helmet>
          <div className="container   ">
            <div className="title">
              <label>Sign up</label>
            </div>

            <button className="btn" onClick={registerGoogle}>
              <img src={gogle} alt="" />
              <div className="absolute left-32">Signup with Google</div>
            </button>
            <button className="btn" onClick={registerFacebook}>
              <img src={fb} alt="" />
              <div className="absolute left-32">Signup with Facebook</div>
            </button>
            <button className="btn" onClick={() => setvisible(true)}>
              <img src={gmail} alt="" />
              <div className="absolute left-32">Signup with Email</div>
            </button>
            {visible && (
              <div className="w-full">
                <input
                  className="input-email"
                  type="text"
                  value={inputValue}
                  placeholder="Email Id"
                  onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                  required
                  onBlur={handlefocus}
                  focused={focused.toString()}
                />
                <button className="otpbtn" onClick={register}>
                  Request OTP
                </button>
                <ToastContainer position="bottom-right" />
              </div>
            )}

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
            <div className="sep"></div>
            <div className="redirect">
              <p>
                Don’t have an account ?{" "}
                <NavLink className="text-[#202054]" to="/startup/login">
                  Log in
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
      )}
    </div>
  );
}

export default Startupsignup;
