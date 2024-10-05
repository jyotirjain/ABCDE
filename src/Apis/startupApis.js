import axios from "axios";
const endpoint = process.env.REACT_APP_TEST_URL;
let token = null;
let tokenKey = null;
const config = {
  headers: { "content-type": "multipart/form-data" },
};
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
async function checkLoginInvestor() {
  const authToken = localStorage.getItem('tokenInvestor');
  if (authToken) {
    token = {headers: {Authorization: `Bearer ${authToken}`}};
    tokenKey = `Bearer ${authToken}`;
  } else {
    //window.location.href = '/sign-in';
  }
}
export default class startup{

    static StartupForm = async (data) => {
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/register`, data);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };


    static addStartUpPortfolio = async (data) => {
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/portfolio/add`, data);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };


    static generalDetails = async (data) => {
      await checkLoginStartup();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/general-details`, data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
    static teamAdd = async (data) => {
      await checkLoginStartup();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/team`, data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
    static teanmUpdate = async (data) => {
      await checkLoginStartup();
        try {
          const res = await axios.put(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/team`, data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
    static mentorAdd = async (data) => {
      await checkLoginStartup();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/mentor`, data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
    static mentorUpdate = async (data) => {
      await checkLoginStartup();
        try {
          const res = await axios.put(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/mentor`, data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static mentorDelete = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.delete(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/mentor`, { headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
    static teamDelete = async (data) => {
      await checkLoginStartup();
        try {
          const res = await axios.delete(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/team`,{ headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static faqAdd = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/faq`,data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static faqUpdate = async (data) => {
        await checkLoginStartup();
          try {
            const res = await axios.put(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/faq`,data , token);
            return res.data;
          } catch (error) {
            return error.data;
          }
        };
      static eventAdd = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/events`,data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static faqDelete = async (data) => {
        await checkLoginStartup();
          try {
            const res = await axios.delete(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/faq`,{ headers: {Authorization:tokenKey},
            params: data, // Pass data as query parameters
          });
            return res.data;
          } catch (error) {
            return error.data;
          }
        };
    static dealTermsAdd = async (data) => {
      await checkLoginStartup();  
      try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/deal-terms`,data , token);
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
    static action = async (data) => {
      await checkLoginAdmin();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/action` ,data , token);
          return res.data;
        } catch (error) {
            return error.data;
        }
      }; 
    static delete = async (data) => {
      await checkLoginAdmin();
        try {
          const res = await axios.post(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/delete`,data , token);
          return res.data;
        } catch (error) {
            return error.data;
        }
      };
    static fetchStartupById = async (data) => {

        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/fetchStartupById`,{
            params: data // Pass data as query parameters
          });
          return res.data;
        } catch (error) {
            return error.data;
        }
      }; 
    static fetchStartupByType = async (data) => {
      await checkLoginInvestor();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/fetchStartupByType`, { headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
            return error.data;
        }
      };
       
    static fetchStartupAndInvestor = async (data) => {
      await checkLoginAdmin();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+`/startup/fetchStartupAndInvestor`,{ headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
            return error.data;
        }
      };
  
      static teamFetch = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchTeams', { headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static profileFetch = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchProfile', { headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static formFetch = async (data) => {

        await checkLoginStartup();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchForm', { headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static mentorFetch = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchMentors',{ headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static faqFetch = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchFaq', { headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
      static dealTermFetch = async (data) => {
        await checkLoginStartup();
        try {
          const res = await axios.get(endpoint + process.env.REACT_APP_LINK_VERSION+'/fetchDealTerm',{ headers: {Authorization:tokenKey},
          params: data, // Pass data as query parameters
        });
          return res.data;
        } catch (error) {
          return error.data;
        }
      };
}