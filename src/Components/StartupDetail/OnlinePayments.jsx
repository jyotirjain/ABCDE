import React, { useState, useEffect } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import { NavLink, useNavigate } from "react-router-dom";
import "../../assets/css/styles.css";
import { toast } from "react-toastify";
import premium from "../../assets/images/premium.svg";
import API from "../../Apis/investor";

/**
 *
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function Onlinepayments(props) {
  // let navigate = useNavigate();
  // const Offline = () => {
  //   navigate("/offlinepayment");
  // };

  const gst = props.gst;
  const convenienceFee = props.convenienceFee;
  const amount = props.amount;
  const navigate = useNavigate();
  const totalamount = props.totalamount;

  const [refId] = useState(localStorage.getItem("authRefInvestor"));

  const [isMember, setIsMember] = useState(false);

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [focused, setfocused] = useState(false);

  const [showPremiumSection, setShowPremiumSection] = useState(false);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const isButtonDisabled = !(isChecked1 && isChecked2);

  // const calculateConvenienceFee = () => {
  //   const fee = amount * 0.02;
  //   props.setConvenienceFee(fee);
  //
  //   props.setGst(fee * 0.18);
  //   setTds(fee * 0.1);
  //   total();
  // };

  // const total = () => {
  //   const value =
  //     Number(amount) + Number(convenienceFee) + Number(gst) + Number(tds);
  //   settotalamount(value);
  // };

  const callback = props.callback;
  const changeType = props.changeType;
  const paymentamount = props.paymentamount;
  const minimumInvestment = props.minimumInvestment;

  const authDataInvestor = JSON.parse(localStorage.getItem("authDataInvestor"));

  const member = authDataInvestor?.membership;

  console.log(member);

  function formatValuation(value) {
    if (value >= 10000000) {
      // Convert to Cores (Cr)
      return `${value / 10000000}cr`;
    } else if (value >= 100000) {
      // Convert to lakhs (L)
      return `${value / 100000}L`;
    } else if (value >= 1000) {
      // Convert to Thousands (K)
      return `${value / 1000}K`;
    } else {
      return value;
    }
  }

  const handlePayonlineClick = (e) => {
    e.preventDefault();
    if (amount < minimumInvestment) {
      toast.error(`Minimum Investment is ${minimumInvestment}`);
    } else if (amount % 1000 !== 0) {
      toast.error("Amount should be a multiple of 1000.");
    } else {
      callback({ totalamount, amount, convenienceFee, gst });
    }
  };

  const handleChangePaymentMode = async (e) => {
    e.preventDefault();
    if (isButtonDisabled) {
      toast.error("Accept the Terms and Condition Checkbox ");
    } else {
      if (amount < minimumInvestment) {
        toast.error("Minimum Investment is", minimumInvestment);
      } else if (amount % 1000 !== 0) {
        toast.error("Amount should be a multiple of 1000.");
      } else {
        // Clear the error state
        changeType("offline");
        paymentamount({ amount });
      }
    }
  };

  const handlepayment = () => {
    paymentamount({ amount });
  };

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    props.setAmount(newAmount);
    let gst;
    let fee;
    if (isMember === "yes") {
      fee = 0;
    } else {
      fee = Math.ceil(newAmount * 0.02);
    }
    props.setConvenienceFee(fee);
    if (isMember === "yes") {
      gst = 0;
    } else {
      gst = Math.ceil(fee * 0.18);
    }
    props.setGst(gst);
    // let tds;
    // if (isMember === "yes") {
    //   tds = 0;
    // } else {
    //   tds = Math.ceil(fee * 0.1);
    // }
    // setTds(tds);

    if (isMember === "yes") {
      props.setTotalAmount(Number(newAmount));
    } else {
      props.setTotalAmount(Number(newAmount) + Number(fee) + Number(gst));
    }

    if (newAmount > null) {
      setShowPremiumSection(true); // Show the Premium section
    } else {
      setShowPremiumSection(false); // Hide the Premium section
    }
  };

  const getTotalAmount = () => {
    if (isMember === "yes") {
      return Number(amount);
    } else {
      return Number(amount) + Number(convenienceFee) + Number(gst);
    }
  };

  const getExtraAmount = () => {
    return Number(convenienceFee) + Number(gst);
  };

  // props.onExtraAmountChange(getExtraAmount);

  const handlefocus = (e) => {
    setfocused(true);
  };

  async function checkPremium(expiryTimestamp) {
    let expiryTimestamp_mil = new Date(expiryTimestamp).getTime();
    const currentTimestamp = Date.now();

    if (expiryTimestamp_mil > currentTimestamp) {
      setIsMember("yes");
    } else {
      const resMem = await API.checkPremiumMember({ id: refId });
      if (
        resMem.data.code === 200 &&
        resMem.data.data.membership &&
        resMem.data.data.membership.isMember === "yes"
      ) {
        console.log("Yoo 2");
        expiryTimestamp_mil = new Date(
          resMem.data.data.membership.endDate
        ).getTime();
        console.log(expiryTimestamp_mil > currentTimestamp);
        if (expiryTimestamp_mil > currentTimestamp) {
          setIsMember("yes");
        } else {
          setIsMember("no");
        }
      }
    }
  }

  useEffect(() => {
    checkPremium(member?.endDate);
  }, [member]);

  return (
    <div className=" flex flex-col relative gap-y-8">
      <div className="payinput">
        <h2 className="flex items-center gap-[6px] text-[#202054] text-[22px] not-italic font-[Inter] font-normal leading-[100%]">
          I am ready to Invest
          {isMember === "yes" ? (
            <img src={premium} className="w-[18px]" alt="" />
          ) : null}
        </h2>
        <label className="pb-2 mt-8">Amount</label>
        <input
          placeholder={`Minimum amount ₹${minimumInvestment}`}
          onChange={handleAmountChange}
          type="number"
          value={amount}
        />
      </div>
      <div>
        <div className="border rounded-[10px] border-solid border-[#DDDDDD] bg-[#ffffff] p-3">
          <div>
            <div className="flex flex-col gap-y-6">
              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  Subscription Amount
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    {/* ₹{amount} */}
                    {amount ? `₹${amount}` : "₹0"}
                  </label>
                </div>
              </div>
              {/* <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  Convenience fee{" "}
                  <div className="iicon text-[#828F99]  cursor-pointer  ml-2 relative">
                    <div className="tooltip ">
                      A convenience fee of 2% is charged by Bizdateup for
                      sourcing deals and maintaining the platform
                    </div>
                    <AiFillInfoCircle />
                  </div>
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    ₹{convenienceFee}
                  </label>
                </div>
              </div> */}

              {/* Membership */}

              <div className="flex justify-between">
                <div className="flex  items-center gap-1 ">
                  <p className="flex items-center text-[#828F99]">
                    Fee{" "}
                    <div className="iicon text-[#828F99]  cursor-pointer  ml-2 relative">
                      <div className="tooltip ">
                        A convenience fee of 2% is charged by Bizdateup for
                        sourcing deals and maintaining the platform
                      </div>
                      <AiFillInfoCircle />
                    </div>
                  </p>
                  {isMember === "yes" ? (
                    <label className="w-[102px] flex justify-center items-center h-4 shrink-0 text-white text-center text-[10px] not-italic font-normal leading-[100%] rounded-[11.19px] bg-[#9797fe]">
                      Membership Waiver
                    </label>
                  ) : null}
                </div>

                <div className="w-20">
                  {isMember === "yes" ? (
                    <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                      ₹{convenienceFee}
                    </label>
                  ) : (
                    <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                      ₹{convenienceFee}
                    </label>
                  )}
                </div>
              </div>

              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  GST
                  <div className="iicon  cursor-pointer ml-2 relative">
                    <div className="tooltip">
                      (Inclusive of GST: 18%) As convenience fee is considered
                      as a revenue item in the company's accounts, 18% GST is
                      applicable.
                    </div>
                    <AiFillInfoCircle />
                  </div>
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    ₹{gst}
                  </label>
                </div>
              </div>
              {/*<div className="flex justify-between">*/}
              {/*  <p className="flex items-center text-[#828F99]">*/}
              {/*    TDS*/}
              {/*    <div className="iicon cursor-pointer ml-2 relative">*/}
              {/*      <div className="tooltip">*/}
              {/*        TDS (10%) has to be deducted at the rates prescribed by*/}
              {/*        the tax department.*/}
              {/*      </div>*/}
              {/*      <AiFillInfoCircle />*/}
              {/*    </div>*/}
              {/*  </p>*/}
              {/*  <div className="w-20">*/}
              {/*    <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">*/}
              {/*      ₹{tds}*/}
              {/*    </label>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
            <div className="border border-dashed border-[#828F99] mt-3 mb-2" />
            <div>
              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">Total</p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    {/* ₹{getTotalAmount()} */}
                    {getTotalAmount() ? `₹${getTotalAmount()}` : "₹0"}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form>
        <div className="flex flex-col gap-y-3">
          <div className="paymentterm flex gap-x-2 items-start">
            <input
              type="checkbox"
              checked={isChecked1}
              onChange={handleCheckboxChange1}
              className="termcheck mt-1"
              required
              onBlur={handlefocus}
              focused={focused.toString()}
              id="terms"
            />
            <label
              for="terms"
              className="not-italic font-normal text-[12px] leading-4 text-[#828F99] opacity-[0.99] font-[Inter] cursor-pointer"
            >
              I agree to the{" "}
              <NavLink
                className="text-[#202054]"
                target="_blank"
                to="/terms_of_use"
              >
                Terms of Use
              </NavLink>{" "}
              and have read and understand the{" "}
              <NavLink
                target="_blank"
                className="text-[#202054]"
                to="/privacy_policy"
              >
                Privacy Policy.
              </NavLink>
            </label>
          </div>
          <div className="paymentterm flex gap-x-2 items-center">
            <input
              type="checkbox"
              checked={isChecked2}
              onChange={handleCheckboxChange2}
              className="termcheck"
              required
              onBlur={handlefocus}
              focused={focused.toString()}
              id="risk"
            />
            <label
              for="risk"
              className="not-italic font-normal text-[12px] leading-3 text-[#828F99] opacity-[0.99] font-[Inter] cursor-pointer"
            >
              I bear to undertake the{" "}
              <NavLink className="text-[#202054]" to="/risk_investment">
                risk in investment.
              </NavLink>
            </label>
          </div>
        </div>
        {showPremiumSection || amount > 0 ? (
          isMember === "yes" ? (
            ""
          ) : (
            <div className="flex w-full md:w-[364px] absolute md:left-[-19px] top-[28rem] ">
              <div
                className={`w-[100%] md:w-[364px]  ${
                  getExtraAmount().toString().length > 4
                    ? " flex flex-col justify-center"
                    : "flex  justify-between"
                }  items-center py-2 bg-[#13A772] mt-0 mx-3 px-4 rounded-[7.3px]`}
              >
                <label className="text-white text-[12px] md:text-[13px]  not-italic font-medium leading-[25.21px] font-[Inter]">
                  You can save ₹{getExtraAmount() ? getExtraAmount() : "0"} with{" "}
                  Premium
                </label>
                <a
                  href="https://www.growth.bizdateup.com/bizdateup-premium-membership"
                  target="_blank"
                >
                  <div className="text-white px-2 text-center text-[13px] md:text-[15px] not-italic font-normal leading-[25.21px] font-[Inter]">
                    Join Now
                  </div>
                </a>
              </div>
            </div>
          )
        ) : null}

        <div className="paybtn mt-28  flex  flex-col gap-y-6 ">
          <button
            disabled={isButtonDisabled}
            className="bg-[#202054] p-3 items-center text-[#ffffff]"
            // onClick={(e) => {
            //   e.preventDefault();
            //   handlePayonlineClick();
            // }}
            onClick={handlePayonlineClick}
          >
            <div className="flex justify-center">Pay Online</div>
          </button>
          <button
            // disabled={isButtonDisabled}
            className="offpay bg-[#ffffff] p-3 items-center w-full h-[45px] border box-border rounded-[10px] border-solid border-[#dddddd]"
            onClick={handleChangePaymentMode}
          >
            <div className="flex justify-center">Pay Offline </div>
          </button>
        </div>
      </form>

      <div>
        <p className=" not-italic font-normal text-[12px] leading-3 font-[Inter] text-[#828f99]">
          <span className="text-[#252552]">Kindly note:</span> : Your investment
          will be processed within 1-2 working days after payment.
        </p>
      </div>
    </div>
  );
}

export default Onlinepayments;
