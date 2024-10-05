import React, { useState } from "react";
import API from "../../Apis/admin";
import { toast } from "react-toastify";

function CommissionModal({ id, portfolio }) {
  const [showModal, setShowModal] = useState(false);

  const [inputdata, setInputdata] = useState({
    id: id,
    startupRate: portfolio?.startupRate,
    investorRate: portfolio?.investorRate,
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const handleAdd = async () => {
    console.log(
      "🚀 ~ file: CommissionModal.jsx:19 ~ handleAdd ~ inputdata:",
      inputdata
    );
    const res = await API.updateCommission(inputdata);
    toast.success(res?.data?.message);
    console.log("🚀 ~ file: CommissionModal.jsx:19 ~ handleAdd ~ res:", res);
    setShowModal(false);
  };

  return (
    <>
      <section>
        <div
          className="bg-[#202054] cursor-pointer text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
          type="button"
          onClick={() => setShowModal(true)}
        >
          <h4 className="px-[25px] text-[11.2px]"> View</h4>
        </div>
        {showModal ? (
          <>
            {/* Modal code starts here */}
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-[1000px] my-6 mx-auto">
                {/* Modal content */}
                <div className="border-0 rounded-lg pt-[15px] shadow-lg relative flex flex-col w-full h-[600px] bg-white outline-none focus:outline-none overflow-y-auto">
                  {/* Modal header */}
                  <div className="flex items-center justify-between p-5 border-solid border-slate-200 rounded-t">
                    <h4 className="text-[19px] px-[20px] font-[400] text-[#202054] leading-[28.8px]">
                      Commission
                    </h4>
                    <div
                      className="ml-auto leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="flex items-center justify-center cursor-pointer text-black h-5 w-5 text-2xl outline-none focus:outline-none">
                        ×
                      </span>
                    </div>
                  </div>
                  {/* Modal body */}
                  <div className="relative p-6 flex-auto pb-[px]">
                    <div className="flex mx-3 mb-6">
                      <div className="flex flex-col w-full">
                        <div className="w-full px-3 mb-2 relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Startup Commission
                          </label>
                          <input
                            className="appearance-none block text-gray-700 border border-gray-200 rounded w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="startup-commission"
                            type="number"
                            placeholder="Enter startup commission here"
                            name="startupRate"
                            onChange={changehandle}
                            value={inputdata?.startupRate}
                          />
                        </div>
                        <div className="w-full px-3 mb-2 relative">
                          <label className="flex justify-start uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]">
                            Investor Commission
                          </label>
                          <input
                            className="appearance-none block text-gray-700 border border-gray-200 rounded w-full py-[10px] px-4 leading-tight focus:outline-none bg-white focus:border-gray-500"
                            id="investor-commission"
                            type="number"
                            placeholder="Enter investor commission here"
                            name="investorRate"
                            onChange={changehandle}
                            value={inputdata?.investorRate}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="w-[100%] flex md:justify-end justify-center pr-[25px]">
                      <div
                        className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                        onClick={handleAdd}
                      >
                        <h4 className="px-[30px]">Submit</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal backdrop */}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </section>
    </>
  );
}

export default CommissionModal;
