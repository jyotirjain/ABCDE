import React, { useState } from "react";
import "../../assets/css/styles.css";
import google from "../../assets/images/google.png";
import fb from "../../assets/images/fb.png";
import Slider from "../slider/slider";
import { NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../navbar/navbar";
import AuthApi from "../../Apis/authApis";

function AdminLogin() {
  // const [email, setemail] = useState("");
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [focused, setfocused] = useState(false);

  const handlefocus = (e) => {
    setfocused(true);
  };

  function validateEmailOrPhone(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(value)) {
      return "email";
    } else {
      return false;
    }
  }

  async function login() {
    localStorage.setItem("loginMethod2", "login");
    localStorage.setItem("loginMethod", "local");

    inputValue["role"] = "admin";

    const emailOrPhone = validateEmailOrPhone(inputValue.email);
    if (emailOrPhone) {
      const apiEndpoint =
        emailOrPhone === "email"
          ? `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/email`
          : `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/auth/login/phone`;

      const AdminLoginApi = await AuthApi.LocalLogin(
        apiEndpoint,
        JSON.stringify(inputValue),
        { headers: { "Content-Type": "application/json" } }
      );

      if (AdminLoginApi.code === 200) {
        localStorage.setItem('token', AdminLoginApi.data.token);
        navigate("/statistics");
      }
      // if(

      // )
      // const response = await fetch(apiEndpoint, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ [emailOrPhone]: inputValue }),
      // });
      // const data = await response.json();
      // 
      // 
      // navigate("/otp", { state: { data: data.data } });
      window.location.reload();
    } else {
      // Handle invalid input value
      toast.error("Enter Valid Input");
    }
  }

  return (
    <div className="login w-[75%]">
      <Navbar/>
      <div className="login-box">
        <div className="container">
          <div className="title">
            <label>Admin Login</label>
          </div>
          <input
            className="login"
            placeholder="Phone or Email"
            type="text"
            value={inputValue.email}
            onChange={(e) =>
              setInputValue((old) => {
                return {
                  ...old,
                  email: e.target.value,
                };
              })
            }
            required
            onBlur={handlefocus}
            focused={focused.toString()}
          />
          <input
            className="login"
            placeholder="Password"
            type="password"
            value={inputValue.password}
            onChange={(e) =>
              setInputValue((old) => {
                return {
                  ...old,
                  password: e.target.value,
                };
              })
            }
            required
            onBlur={handlefocus}
            focused={focused.toString()}
          />
          <button className="otpbtn" onClick={() => login()}>
            Login
          </button>
          <ToastContainer position="bottom-right" />
          {/* <button className="btn" onClick={registerGoogle}>
            <img src={google} alt="" />
            <div className="absolute left-32">Login with Google</div>
          </button>
          <button className="btn">
            <img src={fb} alt="" />
            <div className="absolute left-32">Login with Facebook</div>
          </button>
          <div className="terms ">
            <p>
              By signing up I agree to Republic's Terms of Service and Privacy
              Policy.
            </p>
          </div>
          <div className="sep my-2"></div>
          <div className="redirect">
            <p>
              Don't have an account ?{" "}
              <NavLink to="/signup">Sign up instead</NavLink>
            </p>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center">
        <p className="absolute bottom-0 ">
          2023 © Bizdateup. All Copyrights reserved.
        </p>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default AdminLogin;
