import React from "react";
import "../../assets/css/styles.css";
import gogle from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import gmail from "../../assets/images/gmail.png";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Slider from "../slider/slider";

import Navbar from "../navbar/navbar";

import { Helmet } from "react-helmet";
import Loader from "../loader/loader";
import { motion, AnimatePresence } from "framer-motion";

// import {useHistory} from 'react-router-dom';

function Signup(user) {
  const [inputValue, setInputValue] = useState("");

  const [focused, setfocused] = useState(false);

  const [visible, setvisible] = useState(false);
  const [loader, setloader] = useState(false);

  const navigate = useNavigate();

  // const Registerurl = "/email-signup";

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

  async function registerEmailorPhone() {
    setloader(true);
    localStorage.setItem("loginMethod", "local");
    localStorage.setItem("loginMethod2", "signup");
    const emailOrPhone = validateEmailOrPhone(inputValue);
    if (emailOrPhone) {
      const apiEndpoint =
        emailOrPhone === "email"
          ? `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/email-signup`
          : `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/phone-signup`;
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [emailOrPhone]: inputValue, role: "investor" }),
      });
      const data = await response.json();

      if (data.data.code === 200) {
        setloader(false);
        localStorage.setItem("investoruserID", data.data.data.refId);
        navigate("/otp/" + data.data.data.refId);
        toast.success("OTP Sent");
      } else if (
        data.data.code === 401 &&
        data.data.message === "ALREADY_EXIST"
      ) {
        setloader(false);
        toast.error("User already exists. Please log in.");
      } else {
        setloader(false);
        // alert(data.data.message)
      }

      // ...
    } else {
      setloader(false);
      // Handle invalid input value
      toast.error("Enter Valid Input");
    }
  }

  const registerGoogle = () => {
    localStorage.setItem("loginMethod2", "signupGoogle");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/investor/google`,
      "_self"
    );
  };
  const registerFacebook = () => {
    localStorage.setItem("loginMethod2", "signupGoogle");
    localStorage.setItem("loginMethod", "social");
    window.open(
      `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/investor/facebook`,
      "_self"
    );
  };

  // async function registerFacebook(){
  //   const apiEndpoint = '';
  //   const response = await fetch(apiEndpoint, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     // body: JSON.stringify({ [emailOrPhone]: inputValue }),
  //   });
  //   const data = await response.json();

  // }

  const handlefocus = (e) => {
    setfocused(true);
  };

  return (
    <div>
      {loader ? (
        <Loader />
      ) : (
        <div className="sign-up w-full md:w-[75%] ">
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
            <button className="btn " onClick={() => setvisible(true)}>
              <img src={gmail} alt="" />
              <div className="absolute left-32">Signup with Email</div>
            </button>
            <AnimatePresence>
              {visible && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-full"
                >
                  <input
                    className="input-email "
                    type="text"
                    value={inputValue}
                    placeholder="Email Id"
                    onChange={(e) =>
                      setInputValue(e.target.value.toLowerCase())
                    }
                    required
                    onBlur={handlefocus}
                    focused={focused.toString()}
                  />
                  <button
                    type="submit"
                    className="otpbtn"
                    onClick={registerEmailorPhone}
                  >
                    Request OTP
                  </button>
                  <ToastContainer position="bottom-right" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="terms transition-all duration-150 ">
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
                <NavLink to="/login" className="text-[#202054]">
                  Log in
                </NavLink>
              </p>
            </div>
          </div>
          <div className="flex justify-center ">
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

export default Signup;
