import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

function Onlinepayment(props) {
  // let navigate = useNavigate();
  // const Offline = () => {
  //   navigate("/offlinepayment");
  // };
  const { amount, type } = props;

  const payonlineHandler = async () => {};
  const [amount2, setAmount] = useState();
  const [convenienceFee, setConvenienceFee] = useState(0);
  const [gst, setGst] = useState(0);
  const [tds, setTds] = useState(0);
  // const [totalamount, settotalamount] = useState();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const handleCheckboxChange1 = (event) => {
    setIsChecked1(event.target.checked);
  };

  const handleCheckboxChange2 = (event) => {
    setIsChecked2(event.target.checked);
  };

  const isButtonDisabled = !(isChecked1 && isChecked2);

  // const calculateConvenienceFee = () => {
  //   const fee = amount * 0.02;
  //   setConvenienceFee(fee);
  //
  //   setGst(fee * 0.18);
  //   setTds(fee * 0.1);
  //   total();
  // };

  // const total = () => {
  //   const value =
  //     Number(amount) + Number(convenienceFee) + Number(gst) + Number(tds);

  //   settotalamount(value);
  // };

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);

    const fee = newAmount * 0.02;
    setConvenienceFee(fee);
    setGst(fee * 0.18);
    setTds(fee * 0.1);
  };

  const getTotalAmount = () => {
    return Number(amount) + Number(convenienceFee) + Number(gst) + Number(tds);
  };

  return (
    <div className="flex flex-col gap-y-10">
      <div className="payinput">
        <div className="flex justify-between">
          <h1>I Want To Invest</h1>
        </div>
        <label>Amount</label>
        <input
          placeholder="Minimum amount ₹30,000"
          type="number"
          value={amount}
          onChange={handleAmountChange}
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
                    ₹{amount}
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  Convenience fee <AiFillInfoCircle />
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    ₹{convenienceFee}
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  GST
                  <AiFillInfoCircle />
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    ₹{gst}
                  </label>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  TDS
                  <AiFillInfoCircle />
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    ₹{tds}
                  </label>
                </div>
              </div>
            </div>
            <div className="border border-dashed border-[#828F99] my-4 " />
            <div>
              <div className="flex justify-between">
                <p className="flex items-center text-[#828F99]">
                  Total
                  <AiFillInfoCircle />
                </p>
                <div className="w-20">
                  <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                    ₹{getTotalAmount()}
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-3">
        <div className="paymentterm flex gap-x-2 items-center">
          <input
            type="checkbox"
            checked={isChecked1}
            onChange={handleCheckboxChange1}
            className="termcheck"
          />
          <p className="not-italic font-normal text-[12px] leading-3 text-[#828F99] opacity-[0.99] font-[Inter]">
            I agree to the{" "}
            <NavLink className="text-[#202054]" to="/terms_of_use">
              Terms of Use
            </NavLink>{" "}
            and have read and understand the{" "}
            <NavLink className="text-[#202054]" to="/privacy_policy">
              Privacy Policy.
            </NavLink>
          </p>
        </div>
        <div className="paymentterm flex gap-x-2 items-center">
          <input
            type="checkbox"
            checked={isChecked2}
            onChange={handleCheckboxChange2}
            className="termcheck"
          />
          <p className="not-italic font-normal text-[12px] leading-3 text-[#828F99] opacity-[0.99] font-[Inter]">
            I bear to undertake the{" "}
            <NavLink className="text-[#202054]" to="/Riskinvestment">
              risk
            </NavLink>{" "}
            in investment.
          </p>
        </div>
      </div>
      <div className="paybtn flex flex-col gap-y-6 ">
        <button
          disabled={isButtonDisabled}
          className=" bg-[#202054] p-3 items-center text-[#ffffff]"
          onClick={payonlineHandler}
        >
          <div className="flex justify-between">
            Pay Online <SlArrowRight />
          </div>
        </button>
        <NavLink
          className="offpay bg-[#ffffff] p-3 items-center w-full h-[45px] border box-border rounded-[10px] border-solid border-[#dddddd]"
          to="/investnow/offlinepayment"
        >
          <div className="flex justify-between">
            Pay Offline <SlArrowRight />{" "}
          </div>
        </NavLink>
      </div>
      <div>
        <p className=" not-italic font-normal text-[12px] leading-3 font-[Inter] text-[#828f99]">
          <span className="text-[#252552]">Note</span> : The Lorem ipum filling
          text is used by graphic designers, programmers with the aim of
          occupying the spaces of a website, an advertising product or an
          editoriall text is not yet ready.
        </p>
      </div>
    </div>
  );
}

export default Onlinepayment;
