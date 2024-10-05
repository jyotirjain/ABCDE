import axios from 'axios';
const endpoint = process.env.REACT_APP_TEST_URL;

let token = null;

const config = {
  headers: {'content-type': 'multipart/form-data'},
};

const API = require('./apis');

async function checkLoginInvestor() {
  const authToken = localStorage.getItem('tokenInvestor');
  if (authToken) {
    token = {headers: {Authorization: `Bearer ${authToken}`}};
  } else {
    //window.location.href = '/sign-in';
  }
}
async function checkLoginAdmin() {
  const authToken = localStorage.getItem('tokenAdmin');
  if (authToken) {
    token = { headers: { Authorization: `Bearer ${authToken}` } };
  } else {
    //window.location.href = "/sign-in";
  }
}
export default class payment{

  static createOrder = async (data) => {
    await checkLoginInvestor();
    try { 
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/createOrder`, data , token);
      return res.data;
    } catch (error) {
        return error;
    }
  }; 

  static createOfflineOrder = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/createofflineOrder`, data , token);
      return res.data;
    } catch (error) {
        return error.data;
    }
  };

  static createOfflineOrderAdmin = async (data) => {
    await checkLoginAdmin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/createofflineOrder`, data , token);
      return res.data;
    } catch (error) {
        return error.data;
    }
  };

  static onlinePaymentVerify = async (data) => {
    await checkLoginInvestor();
    try {
      
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/payment/verifyPaymentOrder`, data , token);
      return res.data;
    } catch (error) {
      
        return error.data;
    }
  }; 

  static offlinePaymentVerify = async (data) => {
    await checkLoginAdmin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/payment/verifyOfflinePayment`, data , token);
      return res.data;
    } catch (error) {
      
        return error.data;

    }
  }; 

}

