import axios from 'axios';
const endpoint = process.env.REACT_APP_TEST_URL;

let token = null;
let tokenKey = null;
const config = {
  headers: { 'content-type': 'multipart/form-data' },
};
const API = require('./apis');
async function checkLoginInvestor() {
  const authToken = localStorage.getItem('tokenInvestor');
  if (authToken) {
    token = { headers: { Authorization: `Bearer ${authToken}` } };
    tokenKey = `Bearer ${authToken}`;
  } else {
    //window.location.href = '/sign-in';
  }
}

export default class Accelerator {

  static fetchRefAndEarn = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/accelerator/fetchdata', { headers: { Authorization: tokenKey }, params: data });

      return res.data;
    } catch (error) {

      return error.data;

    }
  };
  static verifyAccelerator = async (data) => {
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/accelerator/verify', { params: data });
      return res.data;
    } catch (error) {
      return error.data;
    }
  };
  static invitee = async (data) => {
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/accelerator/invitee', { params: data });
      return res.data;
    } catch (error) {
      return error.data;
    }
  };
  static requestPaymnet = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/accelerator/request_payment`, data, token);
      return res.data;
    } catch (error) {
      return error.data;

    }
  };
}

