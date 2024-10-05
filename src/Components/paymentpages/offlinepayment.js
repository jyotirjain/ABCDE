import React, { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { SlArrowRight } from "react-icons/sl";

function Offlinepayment(props) {
  const { amount, type } = props;

  const [amount2, setAmount] = useState();
  const [accname, setAccname] = useState(false);
  const [accountno, setAccountno] = useState(false);
  const [ifsc, setifsc] = useState(false);

  const handleAmountChange = (event) => {
    const newAmount = event.target.value;
    setAmount(newAmount);
  };

  return (
    <div className="flex flex-col gap-y-8">
      <div className="payinput">
        <h1>I Want To Invest</h1>
        <label>Amount</label>
        <input
          disabled
          className="cursor-not-allowed"
          type="number"
          value={amount}
          onChange={handleAmountChange}
          placeholder="Minimum amount ₹30,000"
        />
      </div>
      <div>
        <div className="flex flex-col gap-y-7">
          <div className="flex flex-col gap-y-4">
            <p className="flex items-center text-[#828F99]">Name</p>
            <div className="w-20">
              <CopyToClipboard text="Bizdateup" onCopy={() => setAccname(true)}>
                <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                  Bizdateup
                </label>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="flex items-center text-[#828F99]">IFSC</p>
            <div className="w-20">
              <CopyToClipboard text="kkbb555555" onCopy={() => setifsc(true)}>
                <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                  kkbb555555
                </label>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="flex items-center text-[#828F99]">Account Number</p>
            <div className="w-20">
              <CopyToClipboard
                text="4854685166"
                onCopy={() => setAccountno(true)}
              >
                <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                  4854685166
                </label>
              </CopyToClipboard>
            </div>
          </div>
          <div className="flex flex-col gap-y-4">
            <p className="flex items-center text-[#828F99]">
              Amount to be Paid
            </p>
            <div className="w-20">
              <label className="not-italic font-normal text-[16px] leading-4 text-[#252525] font-[Inter]">
                ₹30000
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="payinput">
        <label>Please enter transaction refrence ID</label>
        <input placeholder="Reference ID" />
      </div>
      <div className="paybtn">
        <button className="bg-[#202054] p-3 items-center text-[#ffffff]">
          <div className="flex justify-between">
            Pay Offline <SlArrowRight />
          </div>
        </button>
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

export default Offlinepayment;
