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

async function checkAdminLogin() {
  const authToken = localStorage.getItem('tokenAdmin');
  if (authToken) {
    token = { headers: { Authorization: `Bearer ${authToken}` } };
    tokenKey = `Bearer ${authToken}`;
  } else {
    //window.location.href = "/sign-in";
  }
}
export default class startup {
  static StartupForm = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/register`, data);

      return res.data;
    } catch (error) {

      return error.data;
    }
  };

  static action = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/action`, data, token);
      return res.data;
    } catch (error) {
      console.log("🚀 ~ file: admin.js:57 ~ startup ~ action= ~ error:", error)
      return error.data;

    }
  };

  static updateCommission = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/accelerator/update_commission`, data, token);
      return res.data;
    } catch (error) {
      console.log("🚀 ~ file: admin.js:70 ~ startup ~ updateCommission= ~ error:", error)
      return error.data;

    }
  };

  static activeStatus = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/activeStatus`, data, token);
      return res.data;
    } catch (error) {
      return error.data;

    }
  };
  static withdraw_status = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/withdraw_status`, data, token);
      return res.data;
    } catch (error) {
      return error.data;

    }
  };

  static delete = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/delete`, data, token);
      return res.data;
    } catch (error) {
      return error.data;
    }
  };

  static deleteCert = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/portfolio/remove_certificate`, data, token);
      return res.data;
    } catch (error) {
      return error.data;
    }
  };

  static login = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/auth/adminlogin`, data);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };

  static fetch = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/kyc/add_other`, data);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };  
  static addStatusupdate = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/startup_update/add`, data);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };

  static addLegal = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/invester_ledal/add`, data);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };
  static deleteLegal = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/invester_ledal/delete`, data);
      return res.data;
    } catch (error) {
      return error.data;
    }
  };

  static sendBroadCast = async (data) => {
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/admin/broadcast`, data);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };

  static addStartupPortfolio = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/startup_portfolio/add_multiple`, data);
      return res.data;
    } catch (error) {
      return error.data;
    }
  };

  static editStatusupdate = async (data) => {
    try {
      const res = await axios.put(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/startup_update/update`, data);
      return res.data;
    } catch (error) {

      return error.data;

    }
  };
  static startupUpddatesFetch = async (data) => {
    await checkAdminLogin();
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
  static startupUpddatesFetchAdmin = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/admin/fetchStartupUpdates', {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {

      return error.data;
    }
  };
  static startupUpddatesDelete = async (data) => {
    await checkAdminLogin();
    try {
      const res = await axios.delete(endpoint + process.env.REACT_APP_LINK_VERSION+`/deleteStartupUpdates`, {
        headers: { Authorization: tokenKey },
        params: data, // Pass data as query parameters
      });
      return res.data;
    } catch (error) {
      return error.data;
    }
  };

}