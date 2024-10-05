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
}export default class kyc{
  static pan = async (data) => {
      await checkLoginInvestor();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/kyc/verify_and_add_pan`, data , token);
          
          return res.data;
        } catch (error) {
          
            return error.data;

        }
      };
    static aadhar = async (data) => {
      await checkLoginInvestor();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/kyc/verify_and_add_aadhar`, data , token);
          return res.data;
        } catch (error) {
          
            return error.data;

        }
      };

    static bank = async (data) => {
      await checkLoginInvestor();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/kyc/verify_and_add_bank`, data , token);
          return res.data;
        } catch (error) {
            return error.data;
        }
      };

    static other = async (data) => {
      await checkLoginInvestor();  
      try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/kyc/add_other`, data , token);
          return res.data;
        } catch (error) {
            return error.data;
        }
      };
}