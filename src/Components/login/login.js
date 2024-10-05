import React, { useState } from "react";
import "../../assets/css/styles.css";
import google from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import Slider from "../slider/slider";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../navbar/navbar";
import { Helmet } from "react-helmet";
// import Loader from "../loader/loader";
import LoaderApi from "../LoaderApi/LoaderApi";

function Login() {
  // const [email, setemail] = useState("");
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

  const registerGoogle = () => {
    localStorage.removeItem("loginMethod2");
    localStorage.removeItem("loginMethod");
    localStorage.setItem("loginMethod2", "logingoogle2");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/investor/google`,
      "_self"
    );
  };
  const registerFacebook = () => {
    localStorage.removeItem("loginMethod2");
    localStorage.removeItem("loginMethod");
    localStorage.setItem("loginMethod2", "logingoogle2");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/investor/facebook`,
      "_self"
    );
  };

  async function login() {
    setloader(true);
    localStorage.setItem("loginMethod", "local");
    localStorage.setItem("loginMethod2", "login");

    const emailOrPhone = validateEmailOrPhone(inputValue);
    if (emailOrPhone) {
      const apiEndpoint =
        emailOrPhone === "email"
          ? `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/email`
          : `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/phone`;
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [emailOrPhone]: inputValue, role: "investor" }),
      });
      const data = await response.json();

      if (data.code === 200) {
        setloader(false);
        // if(data.data.code === 200)
        // alert(data.data.refId);
        localStorage.setItem("investoruserID", data.data.refId);
        if (data.data?.refId) {
          navigate("/otp/" + data.data.refId);
          toast.success("OTP sent Successfully");
        } else {
          // Handle invalid input value
          toast.error("User Not Found");
        }
      }
      // navigate("/otp", { state: { data:data.data }});
    } else {
      setloader(false);
      // Handle invalid input value
      toast.error("Enter Valid Input");
    }
  }

  return (
    <div>
      {loader ? (
        <LoaderApi />
      ) : (
        <div className="login md:w-[75%] w-full ">
          <Navbar />
          <Helmet defer={false}>
            <title>
              Invest in Startups and Join the Startup Revolution | Bizdateup
            </title>
            <meta
              name="description"
              content="Discover the power of startup investing with Bizdateup. Invest in promising startups, diversify your portfolio, and be part of the entrepreneurial journey. Join now!"
            />
            <meta
              name="keyword"
              content="startup investing, invest in startups, diversify portfolio, join startup revolution, Bizdateup"
            />
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
                onChange={(e) => setInputValue(e.target.value.toLowerCase())}
                required
                onBlur={handlefocus}
                focused={focused.toString()}
              />
              <button type="submit" className="otpbtn" onClick={() => login()}>
                Request OTP
              </button>
              <ToastContainer position="bottom-right" />
              <button className="btn" onClick={registerGoogle}>
                <img src={google} alt="" />
                <div className="absolute left-32">Login with Google</div>
              </button>
              <button className="btn" onClick={registerFacebook}>
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
                  <NavLink className="text-[#202054]" to="/signup">
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
          <div className="md:block hidden">
            <Slider />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
