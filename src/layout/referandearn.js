import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar1/Navbar1";

import { useNavigate } from "react-router";

import Footer2 from "../Components/Footer2/Footer2";
import Refer from "../Components/refer/refer";
import Investor from "../Components/refer/investor";
import Startup from "../Components/refer/startup";
import cta18 from "../assets/images/refer/cta18.svg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import API from "../Apis/accelerator";
import coins from "../assets/images/refer/coins.svg";
import referal from "../assets/images/refer/referal.svg";

import Referdata from "../Components/refer/referdata";
import Steps from "../Components/refer/steps";
import { toast } from "react-toastify";
import { SlArrowRightCircle } from "react-icons/sl";
import { Link } from "react-router-dom";

function Referandearn() {
  const userId = localStorage.getItem("authRefInvestor");
  const navigate = useNavigate();

  const [accelerator, setAccelerator] = useState({});
  const [investor, setInvestor] = useState({});
  const [amount, setReedemAmount] = useState(0);
  const [startup, setStartups] = useState({});
  const [withdraw, setWithdraws] = useState({});
  const [withdrawTotal, setWithdrawsTotal] = useState({});

  const [isChecked2, setIsChecked2] = useState(false);

  const [investorCommission, setInvestorCommission] = useState(0);
  const [startupCommission, setStartupsCommission] = useState(0);
  const [investorConfirmedCommission, setInvestorConfirmedCommission] =
    useState(0);
  const [startupConfirmedCommission, setStartupsConfirmedCommission] =
    useState(0);
  const isButtonDisabled = !isChecked2;
  const [reedemDisable, setReedemDisable] = useState(false);
  console.log(
    "🚀 ~ file: referandearn.js:41 ~ Referandearn ~ isButtonDisabled:",
    isButtonDisabled
  );
  console.log(
    "🚀 ~ file: referandearn.js:42 ~ Referandearn ~ reedemDisable:",
    reedemDisable
  );

  // State to track checkbox

  const fetchData = async () => {
    const res = await API.fetchRefAndEarn({ id: userId });

    if (!res.data.data) {
      navigate(-1);
    }
    setAccelerator(res.data.data);
    //
    const res2 = await API.invitee({ id: res.data?.data?.referal_code });

    setInvestor(res2.data?.data?.investors);
    setStartups(res2.data?.data?.startups);
    setWithdraws(res2.data?.data?.withdraws);

    setInvestorCommission(
      res2.data?.data?.investors?.reduce(
        (sum, item) => sum + item.totalCommission,
        0
      )
    );

    setStartupsCommission(
      res2.data?.data?.startups?.reduce(
        (sum, item) => sum + item.totalCommission,
        0
      )
    );

    setInvestorConfirmedCommission(
      res2.data?.data?.investors?.reduce(
        (sum, item) => sum + item.totalConfirmedCommission,
        0
      )
    );

    setStartupsConfirmedCommission(
      res2.data?.data?.startups?.reduce(
        (sum, item) => sum + item.totalConfirmedCommission,
        0
      )
    );

    const amountsByStatus = {};

    res2.data?.data?.withdraws.forEach((entry) => {
      if (!amountsByStatus[entry.status]) {
        amountsByStatus[entry.status] = 0;
      }
      amountsByStatus[entry.status] += parseFloat(entry.amount);
    });

    setWithdrawsTotal(amountsByStatus);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
    setReedemAmount(
      parseFloat(
        investorConfirmedCommission +
          startupConfirmedCommission -
          (withdrawTotal.approve + withdrawTotal.pending)
      ).toFixed(2)
    );
  };

  const handleRedeemAmountChange = (event) => {
    setReedemAmount(event.target.value);
  };

  const reedem = async () => {
    if (!isChecked2) {
      // Checkbox is not checked, show an error toast
      toast.error("Please check the checkbox before redeeming.");
      return; // Don't proceed further
    }
    setReedemDisable(true);
    const data = {
      acceleratorId: accelerator._id,
      amount: amount,
      totalCommission: parseFloat(
        investorConfirmedCommission + startupConfirmedCommission
      ).toFixed(2),
      redemable: (
        parseFloat(investorConfirmedCommission) +
        parseFloat(startupConfirmedCommission) -
        (parseFloat(withdrawTotal.approve ? withdrawTotal.approve : 0) +
          parseFloat(withdrawTotal.pending ? withdrawTotal.pending : 0))
      ).toFixed(2),
    };

    if (
      parseInt(amount) <=
        (
          parseFloat(investorConfirmedCommission) +
          parseFloat(startupConfirmedCommission) -
          (parseFloat(withdrawTotal.approve ? withdrawTotal.approve : 0) +
            parseFloat(withdrawTotal.pending ? withdrawTotal.pending : 0))
        ).toFixed(2) &&
      parseInt(amount) >= 10000
    ) {
      const res = await API.requestPaymnet(data);

      if (res.data?.message == "Success") {
        setReedemDisable(false);
        fetchData();
        setReedemAmount(0);
        setIsChecked2(false);
        toast.success("Payment Requested");
      }
    } else {
      setReedemDisable(false);
      parseInt(amount) < 10000
        ? toast.error("Minimum reedemeble amount is 10,000")
        : parseInt(amount) >
          (
            parseFloat(investorConfirmedCommission) +
            parseFloat(startupConfirmedCommission) -
            (parseFloat(withdrawTotal.approve ? withdrawTotal.approve : 0) +
              parseFloat(withdrawTotal.pending ? withdrawTotal.pending : 0))
          ).toFixed(2)
        ? toast.error("No Enough Balance")
        : toast.error("Somthing went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="py-4 md:py-8 bg-[#fafafa] flex justify-center">
        <div className="2xl:w-[65%] md:max-w-[1350px]  w-[90%]">
          <h1>Referral</h1>
          <div className="relative mb-4 h-[155px] md:h-[148px]  w-full inline-flex flex-col items-start gap-2 shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)] pl-6 md:pr-[388px] pr-[50px] pt-[26px] pb-16 rounded-[10px] bg-[#9797fe]">
            <h2 className="text-white text-[20px] md:text-[28px] not-italic font-medium leading-[normal] font-[Inter]">
              Earn 1% of what your referred investors invest{" "}
            </h2>
            <p className="text-white text-base not-italic font-normal leading-[100%] font-[Inter]">
              Share your personalized links to Investors and Startups which will
              register on the platform.
            </p>
            <img
              src={coins}
              className="absolute  w-[247px] md:w-fit bottom-0 right-2"
            />
          </div>
          <div className="md:flex md:flex-row flex flex-col w-full gap-6 mt-2">
            <div className="flex flex-col gap-6 md:gap-4 md:w-[78%]">
              <Refer
                data={accelerator}
                investor={investor}
                startup={startup}
                comission={{ investorCommission, startupCommission }}
                withdrawTotal={withdrawTotal}
              />
              <div className="referralbox md:hidden  ">
                <div className="flex flex-col justify-center relative w-full  rounded-[7.384px] h-[135px] bg-[#e9eff8] p-4">
                  <label className="text-[#9F9F9F] text-base not-italic font-normal leading-[100%] font-[Inter]">
                    Total referral
                  </label>

                  <label className="text-[#252525] text-2xl not-italic mt-3 font-medium leading-[100%] font-[Inter]">
                    ₹{" "}
                    {parseFloat(investorCommission + startupCommission).toFixed(
                      2
                    )}
                  </label>
                  <img
                    src={referal}
                    className="w-[120px] absolute bottom-0 right-0 "
                  />
                </div>
                <div>
                  <p className="text-[#828F99] mt-[5px] mb-3 text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] ">
                    Reward History
                  </p>
                  <div className="w-full flex flex-col justify-around h-[94px] box-border border-[0.738px] border-dashed border-[#DDD] rounded-[10px] p-[10px]">
                    <div className="flex items-center justify-between ">
                      <p className="text-[#828F99]  text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] ">
                        Earned by investor
                      </p>{" "}
                      <label className="text-sm not-italic font-medium leading-[normal] font-[Inter] color-[#252525]">
                        {/* ₹ {investor.length > 0 ? investor?.reduce((sum, item) => sum + item.totalCommission, 0) : 0} */}
                        ₹ {parseFloat(investorCommission).toFixed(2)}
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[#828F99]  text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] ">
                        Earned by startup
                      </p>{" "}
                      <label className="text-sm not-italic font-medium leading-[normal] font-[Inter] color-[#252525]">
                        ₹ {startupCommission}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <input
                      type="checkbox"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      className="reedemCheck"
                      // disabled={reedemDisable}
                    />
                    <label className="text-[#828F99]  text-[14px] not-italic font-normal leading-[100%] font-[Inter] ml-1">
                      {" "}
                      redeemable amount{" "}
                    </label>
                    <p className="text-[#828F99] text-[14px] not-italic font-normal leading-[100%] font-[Inter] ml-6">
                      ₹{" "}
                      {(
                        parseFloat(investorConfirmedCommission) +
                        parseFloat(startupConfirmedCommission) -
                        (parseFloat(
                          withdrawTotal.approve ? withdrawTotal.approve : 0
                        ) +
                          parseFloat(
                            withdrawTotal.pending ? withdrawTotal.pending : 0
                          ))
                      ).toFixed(2)}
                    </p>
                  </div>
                  <form>
                    <input
                      type="number"
                      onChange={(event) => handleRedeemAmountChange(event)}
                      value={amount}
                      disabled={reedemDisable}
                      className="mt-[10px]"
                      placeholder="Enter the Amount"
                    />
                  </form>

                  <button
                    onClick={() => reedem()}
                    disabled={isButtonDisabled || reedemDisable}
                    className="flex w-[258px] h-[35px] justify-center items-center gap-2.5 shrink-0 px-[19px] py-[5px] rounded-[10px] bg-[#202054] text-white text-base not-italic font-normal leading-[100%] font-[Inter] mt-6"
                  >
                    Redeem Rewards
                  </button>
                </div>
              </div>

              {investor.length == 0 && startup.length == 0 ? null : (
                <div className="profile-container">
                  <Referdata
                    investor={investor}
                    startup={startup}
                    withdraw={withdraw}
                  />
                </div>
              )}

              <Steps />
            </div>
            <div className="flex flex-col gap-4">
              <div className="referralbox hidden md:block ">
                <div className="flex flex-col justify-center relative w-full  rounded-[7.384px] h-[135px] bg-[#e9eff8] p-4">
                  <label className="text-[#9F9F9F] text-base not-italic font-normal leading-[100%] font-[Inter]">
                    Total referral
                  </label>

                  <label className="text-[#252525] text-2xl not-italic mt-3 font-medium leading-[100%] font-[Inter]">
                    ₹{" "}
                    {parseFloat(investorCommission + startupCommission).toFixed(
                      2
                    )}
                  </label>
                  <img
                    src={referal}
                    className="w-[120px] absolute bottom-0 right-0 "
                  />
                </div>
                <div>
                  <p className="text-[#828F99] mt-[5px] mb-3 text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] ">
                    Reward History
                  </p>
                  <div className="w-full flex flex-col justify-around h-[94px] box-border border-[0.738px] border-dashed border-[#DDD] rounded-[10px] p-[10px]">
                    <div className="flex items-center justify-between ">
                      <p className="text-[#828F99]  text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] ">
                        Earned by investor
                      </p>{" "}
                      <label className="text-sm not-italic font-medium leading-[normal] font-[Inter] color-[#252525]">
                        {/* ₹ {investor.length > 0 ? investor?.reduce((sum, item) => sum + item.totalCommission, 0) : 0} */}
                        ₹ {parseFloat(investorCommission).toFixed(2)}
                      </label>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-[#828F99]  text-[13.33px] not-italic font-normal leading-[100%] font-[Inter] ">
                        Earned by startup
                      </p>{" "}
                      <label className="text-sm not-italic font-medium leading-[normal] font-[Inter] color-[#252525]">
                        ₹ {startupCommission}
                      </label>
                    </div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <input
                      type="checkbox"
                      checked={isChecked2}
                      onChange={handleCheckboxChange2}
                      className="reedemCheck"
                      // disabled={reedemDisable}
                    />
                    <label className="text-[#828F99]  text-[14px] not-italic font-normal leading-[100%] font-[Inter] ml-1">
                      {" "}
                      redeemable amount{" "}
                    </label>
                    <p className="text-[#828F99] text-[14px] not-italic font-normal leading-[100%] font-[Inter] ml-6">
                      ₹{" "}
                      {(
                        parseFloat(investorConfirmedCommission) +
                        parseFloat(startupConfirmedCommission) -
                        (parseFloat(
                          withdrawTotal.approve ? withdrawTotal.approve : 0
                        ) +
                          parseFloat(
                            withdrawTotal.pending ? withdrawTotal.pending : 0
                          ))
                      ).toFixed(2)}
                    </p>
                  </div>
                  <form>
                    <input
                      type="number"
                      onChange={(event) => handleRedeemAmountChange(event)}
                      value={amount}
                      disabled={reedemDisable}
                      className="mt-[10px]"
                      placeholder="Enter the Amount"
                    />
                  </form>

                  <button
                    onClick={() => reedem()}
                    disabled={isButtonDisabled || reedemDisable}
                    className="flex w-[258px] h-[35px] justify-center items-center gap-2.5 shrink-0 px-[19px] py-[5px] rounded-[10px] bg-[#202054] text-white text-base not-italic font-normal leading-[100%] font-[Inter] mt-6"
                  >
                    Redeem Rewards
                  </button>
                </div>
              </div>
              <Link to="/Contactus">
                <div className=" lg:w-[302px] rounded-[10px] shadow-[0px_1px_12px_0px_rgba(0,0,0,0.15)]  bg-white  relative ">
                  <div className=" px-[22px] pt-[22px] flex  h-[124px] rounded-[10px] bg-[#9797FE] ">
                    <div className="w-[70%] ">
                      <h4 className="font-[400] leading-[18.75px] text-[#ffffff] text-[16px] pb-[7px]">
                        Discuss your commission{" "}
                      </h4>
                      <p className="font-[400] leading-[15.62px] text-[#ffffff] text-[13.33px] ">
                        Have a lot of investor base? Want more commission
                        percentage?
                      </p>
                    </div>
                    <div className=" flex ">
                      <img src={cta18} alt="" className=" ml-2 w-[100px]" />
                    </div>
                  </div>
                  <div className="accel flex justify-between items-center px-[25px] py-1">
                    <div>
                      <h4 className="font-[400] leading-[18.75px] text-[#252525] ">
                        Connect now{" "}
                      </h4>
                    </div>

                    <SlArrowRightCircle className="w-[15px] h-[15px]" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
}

export default Referandearn;
