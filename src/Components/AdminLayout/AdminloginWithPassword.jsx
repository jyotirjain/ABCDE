import React, { useState } from "react";
// import { login } from './api'; // import the login script from another file
import "./LoginForm.css";
import API from "../../Apis/admin";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {useDispatch} from "react-redux";
import {setType} from "../../reducer/authAdmin";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { phoneOrEmail: email, password };
    const result = await API.login(data); // call the login function from the api file
    console.log(result)
    
    
    if(result.data.status===200){
      localStorage.setItem("tokenAdmin", result.data.token);
      const role=result.data.role
      dispatch(setType({isAdmin:role !== "employee"}))
    localStorage.setItem("adminuserID", JSON.stringify(result.data.refId));
    navigate("/admin");
    }
    else{
      toast("Email and password didnt match");
    }
    
  };

  return (
    <div className="flex justify-center items-center h-[100vh]">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
