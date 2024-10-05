import axios from "axios";

const endpoint = process.env.REACT_APP_TEST_URL;

let token = null;

const config = {
  headers: { "content-type": "multipart/form-data" },
};

// const API = require("./apis");

async function checkLogin() {
  const authToken = localStorage.getItem("token");
  if (authToken) {
    token = { headers: { Authorization: `Bearer ${authToken}` } };
  } else {
    //window.location.href = "/sign-in";
  }
}
async function checkLoginInvestor() {
  const authToken = localStorage.getItem("tokenInvestor");
  if (authToken) {
    token = { headers: { Authorization: `Bearer ${authToken}` } };
  } else {
    //window.location.href = '/sign-in';
  }
}

export default class auth {
  static signupComplete = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.post(
        endpoint + process.env.REACT_APP_LINK_VERSION+`/auth/email-signup-complete`,
        data,
        token
      );
      return res.data;
    } catch (error) {
      return error.data;
    }
  };

  static RegisterOTPVerify = async (data) => {
    try {
      const tokenAuth = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(
        endpoint + process.env.REACT_APP_LINK_VERSION+`/auth/verify-register-otp`,
        data
      );
      return res.data;
      // return res.data.data.data[0].totalamount;
    } catch (error) {
      return error.data;
    }
  };

  static VerifySocialLogin = async (data, token) => {
    try {
      const tokenAuth = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.post(
        endpoint + process.env.REACT_APP_LINK_VERSION+`/auth/verify-socialLogin`,
        data,
        tokenAuth
      );
      return res.data;
    } catch (error) {
      return error.data;
    }
  };
}
