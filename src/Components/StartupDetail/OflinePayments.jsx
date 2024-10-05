import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SlArrowRight } from "react-icons/sl";
import { NavLink, useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import { FiCopy } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";

/**
 *
 * @param props.amount {amount:number}
 * @returns {JSX.Element}
 * @constructor
 */
function OflinePayments(props) {
  const gst = props.gst;
  const convenienceFee = props.convenienceFee;
  const payment = props.amount;

  const navigate = useNavigate();
  const [amount] = useState(payment);
  // const [amount, setAmount] = useState();
  const [reference, setReference] = useState("");
  const [accname, setAccname] = useState(false);
  const [accountno, setAccountno] = useState(false);
  const [focused, setfocused] = useState(false);
  const [ifsc, setifsc] = useState(false);

  const [isMember, setIsMember] = useState(false);

  const callback = props.callback;
  const changeType = props.changeType;
  const handlePayofflineClick = () => {
    // alert("id" + props.amount);
    if (reference === "") {
      toast.error("Please enter the Reference Id");
    } else {
      callback({ amount, reference, gst, convenienceFee });
    }
  };
  const handleChangePaymentMode = async (id) => {
    changeType("online");
  };

  const namenotify = () => {
    toast.success("Copied Name succesfully");
  };
  const accnotify = () => {
    toast.success("Copied Account number succesfully");
  };
  const ifcnotify = () => {
    toast.success("Copied IFSC code succesfully");
  };

  // const disabledbtn = () => {
  //   if (reference == 0) {
  //     toast.error("Please enter the Reference Id");
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  console.log("gst", gst);
  console.log("fee", convenienceFee);

  const getExtraAmount = () => {
    return Number(convenienceFee) + Number(gst);
  };

  console.log("extra", getExtraAmount);
  const handlefocus = (e) => {
    setfocused(true);
  };

  return (
    <div className="flex flex-col gap-y-7 relative">
      <Helmet defer={false}>
        <title>
          Offline Payment | Request Approval for Offline Transactions |
          Bizdateup
        </title>
        <meta
          name="description"
          content="Submit your offline payment request on Bizdateup. Our team will review and process your payment for offline transactions securely."
        />
        <meta
          name="keyword"
          content="offline payment, request approval, Bizdateup, offline transactions"
        />
      </Helmet>
      <div className="payinput">
        <h2 className="flex items-center gap-[6px] text-[#202054] text-[22px] not-italic font-[Inter] font-normal leading-[100%] mb-8">
          Investment Amount
        </h2>
        <p className="not-italic font-normal text-[13.33px] leading-4 flex items-center text-[#828F99] font-[Inter]">
          Use the below details to transfer money using RTGS, NEFT OR IMPS.
        </p>
      </div>

      <div>
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-3">
            <p className="flex items-center text-[#828F99]">Name</p>
            <div className="flex items-center justify-between">
              <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                BIZDATEUP TECHNOLOGIES PRIVATE LIMITED
              </label>
              <CopyToClipboard
                text="BIZDATEUP TECHNOLOGIES PRIVATE LIMITED"
                onCopy={() => setAccname(true)}
              >
                <button onClick={namenotify}>
                  <FiCopy />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="flex items-center text-[#828F99]">Account Number</p>
            <div className="flex items-center justify-between">
              <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                50000700057404
              </label>
              <CopyToClipboard
                text="50000700057404"
                onCopy={() => setAccountno(true)}
              >
                <button onClick={accnotify}>
                  <FiCopy />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <p className="flex items-center text-[#828F99]">IFSC</p>
            <div className=" flex items-center justify-between">
              <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                YESB0CMSNOC
              </label>
              <CopyToClipboard text="YESB0CMSNOC" onCopy={() => setifsc(true)}>
                <button onClick={ifcnotify}>
                  <FiCopy />
                </button>
              </CopyToClipboard>
            </div>
          </div>

          <div className="flex flex-col gap-y-3">
            <p className="flex items-center text-[#828F99]">
              Amount to be Paid
            </p>
            <div className="w-20">
              <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                ₹{amount}
              </label>
            </div>
          </div>
        </div>
      </div>

      {isMember === "yes" ? (
        ""
      ) : (
        <div className="flex w-full md:w-[364px] absolute md:left-[-19px] top-[430px] ">
          <div
            className={`w-[100%] md:w-[364px]  ${
              getExtraAmount().toString().length > 4
                ? " flex flex-col justify-center"
                : "flex  justify-between"
            }  items-center py-2 bg-[#13A772] mt-8 px-4 rounded-[7.3px]`}
          >
            <label className="text-white text-[12px] md:text-[14px] not-italic font-medium leading-[25.21px] font-[Inter]">
              You can save ₹{getExtraAmount()} with Premium
            </label>
            <a
              href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
              target="_blank"
            >
              <div className="text-white px-2 text-center text-[13px] md:text-[16px] not-italic font-normal leading-[25.21px] font-[Inter]">
                Join Now
              </div>
            </a>
          </div>
        </div>
      )}

      <div className="payinput mt-[92px]">
        <label className="mb-2">Please enter transaction refrence ID</label>
        <input
          className=""
          onChange={(e) => setReference(e.target.value)}
          value={reference}
          required
          placeholder="Enter your transaction id"
          onBlur={handlefocus}
          focused={focused.toString()}
        />
      </div>
      <div className="paybtn flex flex-col items-center gap-2">
        <button
          className=" bg-[#202054] p-3 items-center text-[#ffffff]"
          onClick={handlePayofflineClick}
        >
          <div className="flex justify-between">
            Pay Offline <SlArrowRight />
          </div>
        </button>
        <label
          className="flex items-center not-italic font-normal text-[13.33px] leading-4  text-center text-[#828F99] font-[Inter]"
          onClick={handleChangePaymentMode}
        >
          <IoIosArrowBack />
          Back to Online Payment
        </label>
      </div>
      <div>
        <p className=" not-italic font-normal text-[12px] leading-3 font-[Inter] text-[#828f99]">
          <span className="text-[#252552]">Note</span> : Your investment will be
          processed within 1-2 working days after payment.
        </p>
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default OflinePayments;
