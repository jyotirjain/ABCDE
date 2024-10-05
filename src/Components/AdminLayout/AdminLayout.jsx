import React from "react";

import NavFirst from "./NavFirst";
import Admincontainer from "./admincontainer";

import Footer2 from "../Footer2/Footer2";

const AdminLayout = () => {
  const logout = () => {
    // Clear session storage
    sessionStorage.clear();

    // Redirect to the login page
    window.location.href = "/admin/login";
  };

  return (
    <>
      <section>
        <div className="w-[100%] flex justify-center bg-[#f2f2f2] font-[Inter]  md:p-0 p-[10px] ">
          <div className=" md:w-[100%] 2xl:w-[100%]  pb-[60px] px-[80px]  overflow-x-scroll ">
            <div className="flex justify-end mt-4">
              <button
                onClick={logout}
                className="px-3 py-2 bg-red-600 rounded-md "
              >
                Logout
              </button>
            </div>
            <div className="text-[#202054]">
              <h4 className="md:text-[30px] text-[24px] font-[400]  py-[25px]">
                Account
              </h4>
            </div>
            <div className="flex justify-center">
              <div className="md:block hidden">
                <NavFirst />
                {/* <Pending />
                <Approved />
                <Rejected /> */}
              </div>
              <div className="w-[90%]">
                <Admincontainer />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminLayout;
