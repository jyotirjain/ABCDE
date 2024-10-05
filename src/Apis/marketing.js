import axios from 'axios';
const endpoint = process.env.REACT_APP_TEST_URL;

let token = null;
let tokenKey = null;
const config = {
  headers: {'content-type': 'multipart/form-data'},
};
const API = require('./apis');
async function checkLoginInvestor() {
    const authToken = localStorage.getItem('tokenInvestor');
    if (authToken) {
      token = {headers: {Authorization: `Bearer ${authToken}`}};
      tokenKey = `Bearer ${authToken}`;
    } else {
      //window.location.href = '/sign-in';
    }
  }

  async function checkLoginStartup() {
    const authToken = localStorage.getItem('tokenStartup');
    if (authToken) {
      token = { headers: { Authorization: `Bearer ${authToken}` } };
      tokenKey = `Bearer ${authToken}`;
    } else {
      //window.location.href = "/sign-in";
    }
  }
  
  async function checkLoginAdmin() {
    const authToken = localStorage.getItem('tokenAdmin');
    if (authToken) {
      token = { headers: { Authorization: `Bearer ${authToken}` } };
      tokenKey = `Bearer ${authToken}`;
    } else {
      //window.location.href = "/sign-in";
    }
  }


export default class marketing{

    static addInterest = async (data) => {
        await checkLoginInvestor();
        try {
            const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/marketing/interest/add`, data , token);
            
            return res.data;
          } catch (error) {
            
              return error.data;
  
          }
      };

    static interestCheck = async (data) => {
        await checkLoginInvestor();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/marketing/interest/check', { headers: {Authorization:tokenKey},
            params: data, 
          });
          
          return res.data;
        } catch (error) {
          
          return error.data;
        }
      };

}

