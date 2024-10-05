import React, { useEffect, useState } from "react";

import Approved from "./Approved";
import NavFirst from "./NavFirst";
import Pending from "./Pending";
import Rejected from "./Rejected";
import OflineModal from "./OflineModal";
import { BsSearch } from "react-icons/bs";
import API from "../../Apis/startupApis";
import paymentApi from "../../Apis/payment";
import { AiTwotoneDelete, AiOutlineCheck } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import masterApi from "../../Apis/investor";
import InvestmentDetailsModal from "./investmentDetailsModal";
import { dateRedable } from "../../script/helper";
import moment from "moment";
import "moment-timezone";
import { toast } from "react-toastify";
// import Select from 'react-select';

const Oflinepayment = ({ inputarr }) => {
  const [startups, setStartups] = useState(null);
  const [investors, setInvestors] = useState(null);
  const [pendingPayment, setPendingPayment] = useState(null);

  const INITIAL_STATE = [
    {
      id: "",
      date: " ",
      investor_Name: "",
      companyName: "",

      amount: "",
      Details: "",
      Action: "",
    },
  ];
  const capitalize = (word) => {
    return word[0].toUpperCase() + word.slice(1);
  };

  const fetchData = async () => {
    try {
      const response = await API.fetchStartupAndInvestor();

      if (response.code === 200) {
        setStartups(response.data.data.startups);
        setInvestors(response.data.data.investors);
        console.log("investor", investors);
      }
    } catch (error) {}
  };

  const handleOfflinePayment = async (amountBreakdown) => {
    try {
      // const response = await API.fetchStartupById({refId:startData})
      //
      //
      //  setstartups(response.data.data);
      const paymentdata = {
        order_amount: amountBreakdown.totalAmount,
        order_currency: "INR",
        order_note: "Test order",
        customer_id: amountBreakdown.selectedInvestor,
        customer_name: amountBreakdown.name,
        dateOfpayment: amountBreakdown.dateOfpayment,
        customer_email: "",
        customer_phone: "",
        startupId: amountBreakdown.selectedStartup,
        amount: amountBreakdown.totalAmount,
        reference: amountBreakdown.reference,
        convenienceFee: 0,
        tds: 0,
        gst: 0,
      };

      // alert(paymentdata);

      const response = await paymentApi.createOfflineOrderAdmin(paymentdata);
      //
      //

      if (response.data.code === 200 && response.data.data.order_id) {
        fetchOfflinePayment();
        // alert("Investment Successfull");
        toast.success(response.data.message);
      }
      if (response.data.code === 401) {
        toast.error(response.data.message);
      } else {
      }
    } catch (error) {
      toast.error("Error Occured");
      console.log(error.data);
    }
  };

  async function handleApprovedClick(id) {
    const data = {
      id: id,
      action: "accepted",
    };
    const res = await paymentApi.offlinePaymentVerify(data);

    if (res.code === 200) {
      fetchOfflinePayment();
      toast.success("Order Approved");
    }
  }

  async function handleRejectClick(id) {
    const data = {
      id: id,
      action: "rejected",
    };
    const res = await paymentApi.offlinePaymentVerify(data);

    if (res.code === 200) {
      fetchOfflinePayment();
      toast.success("Order Rejected");
    }
  }

  useEffect(() => {
    // setUserData();
    fetchData();
    fetchOfflinePayment();
  }, []);

  const fetchOfflinePayment = async () => {
    try {
      const response = await masterApi.fetchInvestorOfflinePayment();

      if (response.data.code === 200) {
        setPendingPayment(response.data.data);
        //  setStartups(response.data.data.startups);
        //  setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };
  const renderPendingPayment = () => {
    return pendingPayment?.map((item, i) => {
      return (
        <tr key={item._id}>
          <td className="border-[1px] px-[25px] py-[30px] ">{i + 1}</td>
          <td className="border-[1px] px-[30px]">
            {moment(item.dateOfpayment).tz("Asia/Kolkata").format("DD-MMM-YY")}
          </td>
          <td className="border-[1px] px-[30px]">{item.investorName}</td>
          <td className="border-[1px] px-[30px]">{item.companyName}</td>

          <td className="border-[1px] px-[30px]">
            {Number(item.amountBreakdown?.totalamount) +
              Number(item.amountBreakdown?.convenienceFee) +
              Number(item.amountBreakdown?.gst)}
          </td>
          {/* <td className="border-[1px] px-[30px]"> <investmentDetailsModal data={item} handleApprovedClickCallback={handleApprovedClick()} handleRejectClickCallback={handleRejectClick()}  /></td> */}
          <td className="border-[1px] px-[30px]">
            {" "}
            <InvestmentDetailsModal
              data={item}
              handleApprovedClickCallback={handleApprovedClick}
              handleRejectClickCallback={handleRejectClick}
            />
          </td>
          <td className="border-[1px] px-[10px]">
            {item.status === "pending" ? (
              <>
                <div className="bg-[#202054] text-[#ffffff] mx-[5px] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                  <h4
                    className="px-[25px] text-[11.2px]"
                    onClick={() => handleApprovedClick(item._id)}
                  >
                    Approved
                  </h4>
                </div>
                <div className="bg-[#db4242] text-[#ffffff] mx-[5px] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                  <h4
                    className="px-[25px] text-[11.2px]"
                    onClick={() => handleRejectClick(item._id)}
                  >
                    Reject
                  </h4>
                </div>
              </>
            ) : (
              <div>
                <h4>{item.status}</h4>
              </div>
            )}

            {/* <div className=" text-[rgb(25,0,255)]  pl-[20px] cursor-pointer">
              <AiOutlineCheck />
            </div>
            <div className=" text-[#FF0000] pl-[20px] cursor-pointer">
              <AiTwotoneDelete />
            </div> */}
          </td>
        </tr>
      );
    });
  };

  const renderHeader = () => {
    return (
      <thead>
        <tr>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">ID</th>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">
            Date
          </th>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">
            Investor Name
          </th>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">
            Company Name
          </th>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">
            Amount
          </th>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">
            Details
          </th>
          <th className="bg-[#F5F5F5] py-[30px] px-[15px] border-[1px]">
            Action
          </th>
        </tr>
      </thead>
    );
  };

  return (
    <section>
      <div className="md:ml-[25px]  w-[100%] rounded-[20px]">
        <div className="mb-[20px]">
          <div className="flex justify-between items-center">
            {/* Search Input */}
            <div className="relative w-[80%] text-gray-600 mr-[5px]">
              <input
                type="search"
                name="search"
                placeholder="Search here"
                className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-[12px] top-[10px]"
              >
                <div className="h-4 w-4 fill-current">
                  <BsSearch />
                </div>
              </button>
            </div>

            {/* Filter Input */}

            {/* Offline Payment Modal */}
            <div className="w-[20%] ml-[5px]">
              <div>
                <OflineModal
                  callback={handleOfflinePayment}
                  startups={startups}
                  investors={investors}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px]">
          <div className="md:px-[20px] px-[15px] py-[40px] ">
            <div>
              <div className="bg-white  w-[100%] md:rounded-[20px] pb-[25px]">
                <div className="px-[20px] py-[20px]">
                  <div className="w-[100%] overflow-x-auto">
                    <table className="w-full table-auto">
                      {renderHeader()}
                      <tbody>{renderPendingPayment()}</tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Oflinepayment;
