import React from "react";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../Apis/kyc";
import investAPI from "../../Apis/investor";
import { ToastContainer, toast } from "react-toastify";
import { MdEdit } from "react-icons/md";
import { BiShow, BiHide } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { Helmet } from "react-helmet";

const BankDetail = () => {
  const refId = localStorage.getItem("authRefInvestor");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConformPassword, setShowConformPassword] = useState(false);
  const [conbankNo, setconBankNo] = useState("");

  const [bankNo, setBankNo] = useState("");
  const [ifsc, setIfsc] = useState("");
  const [bankName, setBankName] = useState("DEFAULT");
  const [accountType, setAccountType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [showverified, setshowverified] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await investAPI.fetch(refId);

      // if (res.data.data.bank.status != "pending") {
      //   setIsDisabled(true);
      //   setshowverified(true)
      // } else {
      //   setIsDisabled(false);
      //   setshowverified(false)
      // }

      if (res && res.code == 200) {
        setFirstName(res.data.data.firstName);
        setLastName(res.data.data.lastName);
        if (res.data.data.bank.status != "pending") {
          setBankNo(res.data.data.bank.accountNumber);
          setIfsc(res.data.data.bank.ifsc);
          setAccountType(res.data.data.bank.accountType);
          setBankName(res.data.data.bank.bankName);
          setIsDisabled(true);
          setshowverified(true);
        }
      }
    }
    fetchData();
  }, []);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleShowConformPassword = () => {
    setShowConformPassword((preve) => !preve);
  };

  const handleBankNoInputChange = (event) => {
    const accountNoalue = event.target.value;
    setBankNo(accountNoalue);
  };

  const handleconBankNoInputChange = (event) => {
    const accountNoalue = event.target.value;
    setconBankNo(accountNoalue);
  };

  const handleBankNameChange = (event) => {
    const bankNameValue = event.target.value;
    setBankName(bankNameValue);
  };
  const handleAccountTypeChange = (event) => {
    const accType = event.target.value;

    setAccountType(accType);
  };

  const handleIfscInputChange = (event) => {
    const ifsc = event.target.value;
    setIfsc(ifsc);
  };

  const addBank = async (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem("auth"));

    const formData = {
      refId: refId,
      firstName,
      lastName,
      accountType,
      bankName,
      accountNumber: bankNo,
      ifsc: ifsc,
    };
    if (bankNo === conbankNo) {
      const res = await API.bank(formData);
      setIsDisabled(true);
      if (res.code == 200) {
        
        toast.success("Success");
        if (res.data.status.includes("profile")) {
          navigate("/layoutprofile");
        } else if (
          res.data.status.includes("pan") ||
          res.data.status.includes("aadhar")
        ) {
          navigate("/layoutprofile/kyc");
        } else if (res.data.status.includes("bank")) {
          navigate("/layoutprofile/bankdetail");
        } else if (res.data.status.includes("other")) {
          navigate("/layoutprofile/others");
        } else {
          navigate("/investor/dashboard");
        }
      }
      return;
    } else {
      setIsDisabled(false);
      toast.error("account number is not same as confirm account ");
    }
  };

  function editdisable() {
    toast.warn("You Cannot edit KYC Contact to Admin");
  }

  return (
    <>
      <section>
      <Helmet defer={false}>
        <title>Profile Bank Details | Secure Payment Information | Bizdateup</title>
        <meta
          name="description"
          content=" Safely manage your bank details in your Bizdateup profile. Update your payment information for smooth and secure investment transactions."
        />
        <meta
          name="keywords"
          content=" profile bank details, secure payment information, Bizdateup, investment transactions"
        />
      </Helmet>
        <div className=" bg-white md:w-[808px] sm:w-[100%] w-[100%] rounded-[20px]  ">
          <div className="md:px-[35px] px-[15px] py-[40px]">
            <div className="flex justify-between items-center mb-[15px] md:pr-[25px] ">
              <div className="pl-[20px] md:flex md:flex-row justify-center items-center">
                <div>
                  <h4 className="text-[19px] font-[400] text-[#202054] leading-[28.8px]">
                    Bank Details
                  </h4>
                </div>
                {showverified ? (
                  <div className="md:mr-[20px] gap-2 flex justify-center items-center rounded-[10px] md:ml-[20px] px-[10px] bg-[#E6F6E8] text-[#1F892C] ro">
                    <AiFillCheckCircle />
                    <p className="font-[Inter] pl-[3.2px] font-[400]  leading-[24px]">
                      Bank Details Verified
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="">
                <button
                  onClick={() => editdisable()}
                  className=" bg-[#F1F6FB] text-[#202054] md:px-6 md:py-[10px] py-[9px] px-2 rounded-[10px] hover:bg-[#f3f3fa] duration-200"
                >
                  <h4 className="md:px-[30px] px-[10px] flex justify-evenly items-center text-[16px] font-[400] text-[#202054] leading-[18.75px]">
                    Edit
                    <span className="pl-[7px]">
                      <MdEdit />
                    </span>
                  </h4>
                </button>
                {/* <ToastContainer position="bottom-right" /> */}
              </div>
            </div>
            <form className="w-full ">
              <div className="flex flex-wrap mx-3 mb-7">
                <div className="w-full px-3">
                  <label
                    htmlFor="bank_name"
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                  >
                    Bank name
                  </label>
                  <select
                    onChange={(event) => handleBankNameChange(event)}
                    value={bankName}
                    disabled={isDisabled}
                    id="bank_name"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-gray-500 block w-full p-2.5 bg-[#ffffff] "
                  >
                    {/* <option value="DEFAULT">Choose your Bank</option>
                    <option value="US">kotak Mahindra Bank</option>
                    <option value="CA">Axis Bank</option>
                    <option value="">State Bank of India</option> */}
                    <option value="DEFAULT">Choose your Bank</option>
                    <option value="ACBL">Abhyudaya Co-op Bank Ltd </option>
                    <option value="SD">Abu Dhabi Commercial Bank Ltd</option>
                    <option value="NP">National Bank of Abu Dhabi PJSC </option>
                    <option value="AB">AB Bank Ltd.</option>
                    <option value="AM">Ahmedabad Mercantile Co-op Bank</option>
                    <option value="ALB">Allahabad Bank</option>
                    <option value="ANB">Andhra Bank</option>
                    <option value="ADB">Antwerp Diamond Bank Mumbai</option>
                    <option value="ANZ">
                      "Australia and New Zealand Banking Group Limited"
                    </option>
                    <option value="AFS">Axis Bank</option>
                    <option value="BOF">Bank Of America</option>
                    <option value="BOB">Bank Of Bahrain And Kuwait</option>
                    <option value="BOBF">Bank of Baroda</option>
                    <option value="BOC">Bank Of Ceylon</option>
                    <option value="BOI">Bank of India</option>
                    <option value="BOM">Bank Of Maharashtra</option>
                    <option value="BONS">Bank Of Nova Scotia</option>
                    <option value="BOTM">
                      Bank Of Tokyo-Mitsubishi Ufj Ltd
                    </option>
                    <option value="BII">Bank Internasional Indonesia</option>
                    <option value="BBP">Barclays Bank Plc</option>
                    <option value="BCCB">
                      Bassein Catholic Co-op Bank Ltd
                    </option>
                    <option value="BCB">Bharat Co-op Bank (Mumbai) Ltd</option>
                    <option value="BNP">BNP Paribas</option>
                    <option value="CB">Canara Bank</option>
                    <option value="CSB">Catholic Syrian Bank Ltd</option>
                    <option value="CBI">Central Bank of India</option>
                    <option value="CCB">Chinatrust Commercial Bank</option>
                    <option value="CI">Citibank India</option>
                    <option value="CCBL">Citizencredit Co-op Bank Ltd</option>
                    <option value="CUB">City Union Bank Ltd</option>
                    <option value="CBF">Corporation Bank</option>
                    <option value="CCIB">Cosmos Co-op Bank Ltd</option>
                    <option value="CAC">
                      Credit Agricole Corp and Investment Bank
                    </option>
                    <option value="CBA">Commonwealth Bank of Australia</option>
                    <option value="DBSB">DBS Bank</option>
                    <option value="DB">Dena Bank</option>
                    <option value="DBAG">Deutsche Bank Ag</option>
                    <option value="DCB">Development Credit Bank</option>
                    <option value="BHABL">Dhanlaxmi Bank Ltd</option>
                    <option value="DICG">Dicgc</option>
                    <option value="DB">Doha Bank</option>
                    <option value="DNS">
                      Dombivli Nagari Sahakari Bank Ltd
                    </option>
                    <option value="EI">Export-Import Bank of India</option>
                    <option value="FBL">Federal Bank Ltd</option>
                    <option value="FBL">Firstrand Bank Ltd</option>
                    <option value="GBC">Greater Bombay Co-op Bank Ltd</option>
                    <option value="HDFC">HDFC Bank</option>
                    <option value="HSBC">HSBC</option>
                    <option value="HSBC">HSBC Bank Oman S.A.O.G.</option>
                    <option value="ICIC">ICICI Bank</option>
                    <option value="IDBI">IDBI Bank</option>
                    <option value="IDFC">IDFC Bank Limited</option>
                    <option value="INB">Indian Bank</option>
                    <option value="IOB">Indian Overseas Bank</option>
                    <option value="IND">IndusInd Bank Ltd.</option>
                    <option value="IACB">
                      Industrial and Commercial Bank of China Ltd.
                    </option>
                    <option value="IVB">ING Vysya Bank</option>
                    <option value="IBK">Industrial Bank of Korea</option>
                    <option value="JK">Jammu & Kashmir Bank Ltd.</option>
                    <option value="JS">Janakalyan Sahakari Bank Ltd</option>
                    <option value="JSB">Janata Sahkari Bank Ltd Pune</option>
                    <option value="JCB">Jpmorgan Chase Bank</option>
                    <option value="KC">
                      Kalupur Commercial Co-op Bank Ltd
                    </option>
                    <option value="KJ">Kalyan Janata Sahakari Bank Ltd</option>
                    <option value="KC">Kapole Co-op Bank</option>
                    <option value="KBL">Karnataka Bank Ltd.</option>
                    <option value="KSC">Karnataka State Co-op Apex Bank</option>
                    <option value="KVB">Karur Vysya Bank</option>
                    <option value="KMB">Kotak Mahindra Bank</option>
                    <option value="KHB">KEB Hana Bank</option>
                    <option value="KTB">Krung Thai Bank PCL Mumbai</option>
                    <option value="LVB">Lakshmi Vilas Bank Ltd</option>
                    <option value="MCB">Mahanagar Co-op Bank Ltd</option>
                    <option value="MSC">
                      Maharashtra State Co-operative Bank Limited
                    </option>
                    <option value="MBP">Mashreq Bank Psc</option>
                    <option value="MUC">Mehsana Urban Co-op Bank Ltd</option>
                    <option value="MCB">Mizuho Corporate Bank Ltd</option>
                    <option value="NB">Nainital Bank Ltd</option>
                    <option value="NIC">New India Co-op Bank Ltd</option>
                    <option value="NCB">Nkgsb Co-op Bank Ltd</option>
                    <option value="NNSB">
                      Nutan Nagarik Sahakari Bank Ltd
                    </option>
                    <option value="OIB">Oman International Bank Saog</option>
                    <option value="OBOFC">Oriental Bank of Commerce</option>
                    <option value="PJSB">
                      Parsik Janata Sahakari Bank Ltd
                    </option>
                    <option value="PAM">
                      Punjab and Maharashtra Bank Ltd.
                    </option>
                    <option value="PNB">Punjab National Bank</option>
                    <option value="PNSB">Punjab & Sind Bank</option>
                    <option value="QNB">Qatar National Bank(QPSC)</option>
                    <option value="RNSBL">
                      Rajkot Nagarik Sahakari Bank Ltd
                    </option>
                    <option value="RBL">Ratnakar Bank Ltd</option>
                    <option value="RBOI">Reserve Bank Of India</option>
                    <option value="RBOS">Royal bank of scotland</option>
                    <option value="RI">Rabobank International</option>
                    <option value="SBER">Sberbank</option>
                    <option value="SCB">Saraswat Co-operative Bank Ltd.</option>
                    <option value="SVC">Shamrao Vithal Co-op Bank Ltd</option>
                    <option value="SB">Shinhan Bank</option>
                    <option value="SG">Societe Generale</option>
                    <option value="SBL">Sonali Bank Ltd.</option>
                    <option value="SIB">South Indian Bank</option>
                    <option value="SCB">Standard Chartered Bank</option>
                    <option value="SBIO">
                      State Bank Of Bikaner And Jaipur
                    </option>
                    <option value="SBOH">State Bank of Hyderabad</option>
                    <option value="SBOI">State Bank of India</option>
                    <option value="SBIG">
                      SBI Global Factors Ltd(SBIGFL) factoring Unit
                    </option>
                    <option value="IF">
                      India Factoring and Finance Solutions Pvt. Ltd
                    </option>
                    <option value="IFCI">IFCI Factors Limited</option>
                    <option value="BMCB">
                      Bombay Mercantile Co-operative bank Limited
                    </option>
                    <option value="SBM">State Bank Of Mauritius Ltd</option>
                    <option value="SBOM">State Bank of Mysore</option>
                    <option value="SBP">State Bank Of Patiala</option>
                    <option value="SBT">State Bank Of Travancore</option>
                    <option value="SBOS">State Bank of Saurashtra</option>
                    <option value="SMBC">
                      Sumitomo Mitsui Banking Corporation
                    </option>
                    <option value="SPCB">Surat Peoples Co-op Bank Ltd</option>
                    <option value="SB">Syndicate Bank</option>
                    <option value="TMBI">Tamilnad Mercantile Bank Ltd</option>
                    <option value="TJSB">
                      Thane Janta Sahakari Bank, Ltd.
                    </option>
                    <option value="TKU">The Karad Urban Co-op Bank Ltd</option>
                    <option value="TNMC">
                      The Nasik Merchants Co-op Bank Ltd
                    </option>
                    <option value="UBS">UBS AG</option>
                    <option value="UCO">UCO Bank</option>
                    <option value="UBOF">Union Bank of India</option>
                    <option value="UBOI">United Bank of India</option>
                    <option value="UOB">United Overseas Bank</option>
                    <option value="VB">Vijaya Bank</option>
                    <option value="WBSO">
                      West Bengal State Co-op Bank Ltd
                    </option>
                    <option value="WBC">Westpac Banking Corporation</option>
                    <option value="WB">Woori Bank</option>
                    <option value="YBF">Yes Bank</option>
                    <option value="ENB">Emirates NBD Bank PJSC</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Account number
                  </label>

                  <input
                    className="inputs appearance-none block w-full pr-8  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    id="grid-password"
                    type={"password"}
                    disabled={isDisabled}
                    onChange={(event) => handleBankNoInputChange(event)}
                    defaultValue={bankNo}
                    placeholder="Enter your Account Number  "
                  />
                </div>
              </div>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide  text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    Confirm Account number
                  </label>

                  <input
                    className="inputs appearance-none block w-full pr-8 text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none bg-white focus:border-gray-500"
                    id="grid-password"
                    type="number"
                    disabled={isDisabled}
                    onChange={(event) => handleconBankNoInputChange(event)}
                    defaultValue={conbankNo}
                    placeholder="Enter your Account Number  "
                  />
                </div>
              </div>
              <div className="flex flex-wrap mx-3 mb-6">
                <div className="w-full px-3">
                  <label
                    className="block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
                    htmlFor="grid-password"
                  >
                    IFSC code
                  </label>
                  <input
                    className={`appearance-none block w-full  text-gray-700 border border-gray-200 rounded py-[10px] px-4 mb-3 leading-tight focus:outline-none ${isDisabled ? "bg-gray-100" :"bg-white"} focus:border-gray-500`}
                    id="grid-password"
                    type="text"
                    defaultValue={ifsc}
                    disabled={isDisabled}
                    onChange={(event) => handleIfscInputChange(event)}
                    placeholder="Enter your IFSC code  "
                  />
                </div>
              </div>

              <div className="md:flex md:flex-wrap md:mx-3  md:justify-start justify-center ml-6 flex flex-col gap-2 md:gap-0  mb-6">
                <div className="flex items-center mr-4 md:px-3">
                  <input
                    id="inline-radio"
                    type="radio"
                    // value="acctype"
                    disabled={isDisabled}
                    value="saving"
                    onChange={(event) => handleAccountTypeChange(event)}
                    checked={accountType === "saving" ? true : false}
                    name="acctype"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="inline-radio"
                    className="ml-2 md:text-sm font-medium text-gray-900 dark:text-gray-300 text-[12px]"
                  >
                    Saving account
                  </label>
                </div>
                <div className="flex items-center mr-4 md:px-3">
                  <input
                    id="inline-2-radio"
                    type="radio"
                    // value="acctype"
                    value="current"
                    disabled={isDisabled}
                    onChange={(event) => handleAccountTypeChange(event)}
                    checked={accountType === "current" ? true : false}
                    name="acctype"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                  />
                  <label
                    htmlFor="inline-2-radio"
                    className="ml-2 md:text-sm font-medium text-gray-900 dark:text-gray-300 text-[12px]"
                  >
                    Currrent Account
                  </label>
                </div>
              </div>

              <div className="w-[100%] flex md:justify-end justify-center pr-[20px]  md:pt-[80px]">
                <button
                  onClick={(e) => addBank(e)}
                  disabled={isDisabled}
                  className="bg-[#202054] text-[#ffffff] md:px-4 md:py-[10px] w-[200px] h-[38px] md:rounded-[10px] rounded-[6px] hover:bg-black duration-200"
                >
                  <h4 className="px-[30px]"> Confirm</h4>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BankDetail;
