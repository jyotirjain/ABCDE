import React, { seReducer, useReducer } from "react";
import Assignment from "../../assets/images/assignment.png";
import Signup from "../../assets/images/signup.png";
import moment from 'moment'; import 'moment-timezone'; 
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import { details } from "./details";
function Listofstrtup(props) {
  const endpoint = process.env.REACT_APP_TEST_URL;
  const investedStartups = props.data;

  const initialState = props.data.reduce((acc, data) => {
    acc[data._id] = false;
    return acc;
  }, {});

  function reducer(state, action) {
    switch (action.type) {
      case "toggle":
        return { ...state, [action.payload]: !state[action.payload] };
      default:
        return state;
    }
  }

  const [itemStates, dispatch] = useReducer(reducer, initialState);

  function handlesubmit(id) {
    dispatch({ type: "toggle", payload: id });
  }

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

  return (
    <div className="w-[100%]">
      <div className=" shadow-[0px_1px_8px_rgba(0,0,0,0.15)] rounded-[10px] bg-white py-5 px-5">
        <h2 className="not-italic font-normal text-[19.33px] leading-[23px] text-[#252525] font-[Inter]">
          Startups you have invested in
        </h2>
        <div>
          {investedStartups.map((data, index) => {
            return (
              <div
                className="box-border relative  border rounded-[9.61586px] border-solid border-[#DDDDDD] bg-[#ffffff] px-4 py-4 my-5 "
                key={index}
              >
                <div className="flex  justify-between">
                  <div className="flex gap-4">
                    <div className="w-[45px] h-[45px] flex items-center justify-center rounded-[4.808px] border-[1.016px] border-solid border-[#DDD]">
                      <img
                        src={endpoint + "/v1/logo/" + data.logo}
                        alt=""
                        className="w-full object-contain"
                      />
                    </div>

                    <h2 className=" flex justify-start items-center not-italic font-normal text-xl leading-4 text-[#252525] font-[Inter]">
                      {data.registeredCompanyName}
                    </h2>
                  </div>

                  <button onClick={() => handlesubmit(data._id)} className="  ">
                    <IoIosArrowDown size={18} />
                  </button>
                </div>
                {/* {itemStates.find(state => state.id === data._id && state.show) && ( */}
                {itemStates[data._id] && (
                  <div className="">
                    <div className="">
                      <div className="grid  mt-4 sm:grid-cols-2 md:grid md:grid-cols-3  md:ml-[230px] mb-4 md:w-[477px] md:gap-x-24  gap-4">
                        <div className="flex flex-col items-start">
                          <label className="not-italic font-normal text-base leading-4 text-[#252525] font-[Inter]">
                            {moment(data.investedDate)
                              .utc()
                              .format("YYYY-MM-DD")}
                          </label>
                          <p className=" not-italic font-normal text-xs leading-4 text-[#828F99] font-[Inter]">
                            Date
                          </p>
                        </div>
                        <div>
                          <label className="not-italic font-normal text-base leading-4 text-[#252525] font-[Inter]">
                            ₹ {formatValuation(data.investedAmount)}
                          </label>
                          <p className=" not-italic font-normal text-xs leading-4 text-[#828F99] font-[Inter]">
                            Amount
                          </p>
                        </div>
                        <div>
                          <label className="not-italic font-normal text-base leading-4 text-[#252525] font-[Inter]">
                            ₹ {formatValuation(data.dealTerms?.valuation)}
                          </label>
                          <p className=" not-italic font-normal text-xs leading-4 text-[#828F99] font-[Inter]">
                            Valuation
                          </p>
                        </div>
                        <div>
                          <label className="not-italic font-normal text-base leading-4 text-[#252525] font-[Inter]">
                            ₹ {formatValuation(data.dealTerms?.targetAmount)}
                          </label>
                          <p className=" not-italic font-normal text-xs leading-4 text-[#828F99] font-[Inter]">
                            Target Amount
                          </p>
                        </div>
                        <div>
                          <label className="not-italic font-normal text-base leading-4 text-[#252525] font-[Inter]">
                            ₹ {formatValuation(data.totalRaised)}
                          </label>
                          <p className=" not-italic font-normal text-xs leading-4 text-[#828F99] font-[Inter]">
                            Raised Amount
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Listofstrtup;
