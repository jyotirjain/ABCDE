import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import AuthApi from "../../Apis/authApis";
import { toast } from 'react-toastify';
import API from "../../Apis/accelerator";
function Referal() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const navigate = useNavigate();
    const [referToState, SetReferTo] = useState('');
    const [referLink, setReferLink] = useState('');
    const { redirect } = useParams();
    console.log("🚀 ~ file: referal.jsx:11 ~ Referal ~ redirect:", redirect)

    useEffect(() => {
        const token = queryParams.get('token');
        const firstTwo = redirect.slice(0, 2);
        const other = redirect.slice(2);

        SetReferTo(firstTwo);
        setReferLink(other);



        (async () => {
            try {
                // const method = localStorage.getItem("loginMethod2");
                const res = await API.verifyAccelerator({ id: other });
                console.log("🚀 ~ file: referal.jsx:29 ~ res:", res)
                if (firstTwo === 'su') {
                    // localStorage.setItem("StartupuserID", refId);
                    // const response = await AuthApi.VerifySocialLogin({ refId }, token);

                    // if (response.code === 200) {
                    //     localStorage.setItem('tokenStartup', response.data.token);
                    //     if (type === "signup") {
                    navigate("/startup/signup");
                    sessionStorage.setItem("startupReferalLink", other)
                    //     } else {
                    //         navigate("/startup/profile");
                    //     }
                    // }
                } else if (firstTwo === 'in') {
                    // const response = await AuthApi.VerifySocialLogin({ refId }, token);

                    // if (response.status === "OK") {
                    //     if (response.data.code === 200) {
                    navigate("/signup");
                    sessionStorage.setItem("investorReferalLink", other)

                    //     }
                    // }
                } else {
                    // Handle unknown or invalid role

                }
            } catch (e) { console.log(e) }
            {

            }
        })();
    }, []);

    return null;
}

export default Referal;
