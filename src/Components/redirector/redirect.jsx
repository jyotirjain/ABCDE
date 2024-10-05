import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthApi from "../../Apis/authApis";
import { toast } from 'react-toastify';

function RedirectPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();
  
  useEffect(() => {
    const role = queryParams.get('role');
    const refId = queryParams.get('refid');
    const type = queryParams.get('type');
    const token = queryParams.get('token');
    
    (async () => {
      try {
        // const method = localStorage.getItem("loginMethod2");
        
        // Perform role-based redirection
        if (role === 'startup') {
        
          localStorage.removeItem("tokenStartup");
          const email = queryParams.get('email');
          if(refId==400 && type=="login"){
            const error = queryParams.get('error');
            navigate("/startup/login");
            if(error=="pending"){
            toast.error("your account is not yet verified!! Please Contact Customer Service.")
          }
            else if(error=="rejected"){
              
              navigate("/startup/login");
              toast.error("Your account is rejected!! Please Contact Customer Service.")
            }
            else{
              
              navigate("/startup/login");
              toast.error("Startup already registered and undergoing verification. Please wait.")
            }
          }
           else if(refId==400 && type=="signup"){
            navigate("/startup/signup");
            toast.error("Startup already exists. Please log in.")
          }

          localStorage.setItem("startupLoginEmail", email);
          localStorage.setItem("StartupuserID", refId);
          const response = await AuthApi.VerifySocialLogin({ refId }, token);

          if (response.code === 200) {
            localStorage.setItem('tokenStartup', response.data.token);
            if (type === "signup") {
              navigate("/Startup/form");
            } else {
              navigate("/startup/profile");
            }
          }
        } else if (role === 'investor') {
              localStorage.removeItem("authDataInvestor");
              localStorage.removeItem("authRefInvestor");

          if(refId==400 && type=="signup"){
            toast.error("Already Registered")
            navigate("/login");
          }
          else if(refId==400 && type=="login"){
            toast.error("Not Registered")
            navigate("/signup");
          }

          const response = await AuthApi.VerifySocialLogin({ refId }, token);

          if (response.status === "OK") {
            if (response.data.code === 200) {

              localStorage.setItem('tokenInvestor', response.data.token);
              localStorage.setItem('authDataInvestor', JSON.stringify(response.data.data));
              localStorage.setItem('authRefInvestor', response.data.refId);

              if (response.data.status.includes("profile")) {
                toast.error("Please complete your profile");
                navigate("/layoutprofile", { state: { data: response.data.refId } });
              } else if (response.data.status.includes("pan") || response.data.status.includes("aadhar")) {
                toast.error("Please complete your KYC details");
                navigate("/layoutprofile/kyc", { state: { data: response.data.refId } });
              } else if (response.data.status.includes("bank")) {
                toast.error("Please complete your bank details");
                navigate("/layoutprofile/bankdetail", { state: { data: response.data.refId } });
              } else if (response.data.status.includes("other")) {
                toast.error("Please complete your profile");
                navigate("/layoutprofile/others", { state: { data: response.data.refId } });
              } else {
                toast.success("Login Successfully");
                navigate("/investor/dashboard", { state: { data: response.data.refId } });
              }
              
            }
          }
        } else {
          // Handle unknown or invalid role
          
        }
      } catch (error) {
        
      }
    })();
  }, []);

  

  return null;
}

export default RedirectPage;
