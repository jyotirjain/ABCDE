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
export default class investor {

  static fetch = async (data) => {
    try {

      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/investor/fetchbyid`, { refId: data });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };
  static fetchbyInvestorByproviderId = async (data) => {
    try {


      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/investor/fetchbyInvestorByproviderId`, { providerId: data });


      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static startupFetch = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/startupsInvestorView', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static startupUpddatesFetch = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchStartupUpdates', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static investmentByInvestor = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/investment/investmentbyinvestor', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };


  static startupUpddateFetch = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchStartupUpdate', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static getStartupsClosedView = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/getStartupsClosedView', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static totalInvestmentbyinvestor = async (data) => {
    await checkLoginInvestor();
    try {
      // 
      // const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/investment/totalInvestmentbyinvestor',token, {
      //   params: data, // Pass data as query parameters
      // });
      const res = await axios.get(`${endpoint}${process.env.REACT_APP_LINK_VERSION}/investment/totalInvestmentbyinvestor`, {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });


      return res.data.data.data[0].totalamount;
    } catch (error) {
      return error.data;
    }
  };
  static getPortfolio = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/investment/portfolio', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data.data.data;
    } catch (error) {

      return error.data;
    }
  };
  static getStartupPortfolio = async (data) => {
    await checkLoginStartup();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/investment/getStartupPortfolio', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data.data.data;
    } catch (error) {

      return error.data;
    }
  };

  static fetchInvestormasterdata = async () => {
    await checkLoginAdmin();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/investment/masterdata', {
        headers: { Authorization: tokenKey },
        // params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static fetchRequestedReedem = async () => {
    await checkLoginAdmin();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/admin/reedem_list', {
        headers: { Authorization: tokenKey },
        // params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };


  static withdraw_status = async (data) => {
    // await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/withdraw_status`, data, token);
      return res.data;
    } catch (error) {
      return error.data;

    }
  };

  static getMembership = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/investor/membership`, data, token);
      return res.data;
    } catch (error) {
      return error.data;
    }
  };



  static fetchInvestorOfflinePayment = async () => {
    await checkLoginAdmin();
    try {
      // 
      // 
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/investment/offlinependingdata', {
        headers: { Authorization: tokenKey },
        // params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static premiumMember = async () => {
    await checkLoginAdmin();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/membership/fetchMembers', {
        headers: { Authorization: tokenKey },
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static checkPremiumMember = async (data) => {
    await checkLoginInvestor();
    try {
     
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/membership/checkMember', {
        headers: { Authorization: tokenKey },
        params: data,
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static CreateAccelerator = async (data) => {
    await checkLoginInvestor();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/accelerator/create`, data, token);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };

}

