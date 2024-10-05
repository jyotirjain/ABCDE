import React, { useState, useEffect } from "react";
import Cta1 from "../../assets/images/cta/cta1.png";
import { RightCircleOutlined } from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";

function Riskinvest(props) {
const navigate = useNavigate();
const [authenticated, setAuthenticated] = useState(false);
useEffect(() => {
  // alert("Hello");
  async function isAuthenticated() {
    // 
    const authToken = localStorage.getItem('token');
    
    if (authToken) {
      // 
      
      setAuthenticated(true)
      return true;
    } 
    else {
      return false;
    }
  }

  isAuthenticated();
  if(!authenticated){
  if(props.data=="investor"){
    navigate("/login");
  }
  else if(props.data=="startup")
  {
    navigate("/Startup/login");
  }
  else{
    navigate("/Admin/login");
  }}
  else{
    navigate(props.url);
  }
    // 
}, []); 
  return (
    <div className="static">
      {/* <h1>Risk of Investment</h1> */}
      <div className="flex gap-x-8">
        <div className="static-container">
        You are unauthorized
        </div>
        
      </div>
    </div>
  );
}

export default Riskinvest;
