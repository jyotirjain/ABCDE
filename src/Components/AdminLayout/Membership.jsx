import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ReactPaginate from "react-paginate";
import MembershipModal from "./MembershipModal";
import { Divider, Space, Tag } from "antd";

import Approved from "./Approved";
import NavFirst from "./NavFirst";
import Pending from "./Pending";
import Rejected from "./Rejected";
import API from "../../Apis/startupApis";
import ApiMember from "../../Apis/investor";
import { AiTwotoneDelete, AiOutlineCheck } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import masterApi from "../../Apis/investor";
import InvestmentDetailsModal from "./investmentDetailsModal";
import { dateRedable } from "../../script/helper";
import moment from "moment";
import "moment-timezone";
import { toast } from "react-toastify";

// import Select from 'react-select';

const ITEMS_PER_PAGE = 10;

const capitalize = (word) => {
  return word[0].toUpperCase() + word.slice(1);
};

const Membership = () => {
  const [users, setUsers] = useState({});
  const [searchdata, setsearchdata] = useState([]);
  const [filterval, setfilterval] = useState("");
  const [userdata, setUserData] = useState([]);

  const [startups, setStartups] = useState(null);
  const [investors, setInvestors] = useState(null);
  const [premiumMembers, setPremiumMembers] = useState([]);
  console.log("premiumMembers");
  console.log(premiumMembers);

  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(users.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const fetchData = async () => {
    try {
      const response = await API.fetchStartupAndInvestor();

      if (response.code === 200) {
        setStartups(response.data.data.startups);
        setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };

  const fetchMembers = async () => {
    try {
      const response = await masterApi.premiumMember();
      console.log("response");
      console.log(response);
      if (response.data.code === 200) {
        setPremiumMembers(response.data.data);
        //  setStartups(response.data.data.startups);
        //  setInvestors(response.data.data.investors);
      }
    } catch (error) {}
  };

  const handleMember = async (memberBreakdown) => {
    try {
      console.log(memberBreakdown);
      // const paymentdata = {
      //   order_amount: amountBreakdown.totalAmount,
      //   order_currency: "INR",
      //   order_note: "Test order",
      //   customer_id: amountBreakdown.selectedInvestor,
      //   customer_name: amountBreakdown.name,
      //   dateOfpayment: amountBreakdown.dateOfpayment,
      //   customer_email: "",
      //   customer_phone: "",
      //   startupId: amountBreakdown.selectedStartup,
      //   amount: amountBreakdown.totalAmount,
      //   reference: amountBreakdown.reference,
      //   convenienceFee: 0,
      //   tds: 0,
      //   gst: 0,
      // };
      const memberData = {
        refId: memberBreakdown.selectedInvestor,
        startdate: memberBreakdown.startdate,
        enddate: memberBreakdown.enddate,
        amount: memberBreakdown.amount,
      };

      const response = await ApiMember.getMembership(memberData);
      console.log(response);
      toast.success(response.data.message);
      fetchMembers();
      // if (response.data.code === 200 && response.data.data.order_id) {
      // fetchOfflinePayment();
      // }
    } catch (error) {}
  };

  useEffect(() => {
    // setUserData();
    fetchData();
    fetchMembers();
    // fetchOfflinePayment();
  }, []);

  return (
    <div>
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
            <button type="submit" className="absolute right-[12px] top-[10px]">
              <div className="h-4 w-4 fill-current">
                <BsSearch />
              </div>
            </button>
          </div>

          {/* Filter Input */}
         

          {/* Offline Payment Modal */}
          <div className="w-[20%] ml-[5px]">
            <div>
              <MembershipModal
                callback={handleMember}
                startups={startups}
                investors={investors}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px] ">
        <div className="md:px-[20px] px-[15px] py-[20px] ">
          <div className="w-[100%]">
            <div className="w-[100%] ">
              <div className=" overflow-x-auto">
                <table border="1" className="w-[100%] text-start ">
                  <thead>
                    <tr>
                      <th className="py-[30px] px-[30px] border-[1px]">Id</th>
                      <th className="px-[15px] py-[30px] border-[1px]">
                        Name{" "}
                      </th>
                      <th className="px-[15px] py-[30px] border-[1px]">
                        Start date
                      </th>
                      <th className="px-[15px] py-[30px] border-[1px]">
                        End date
                      </th>
                      <th className="px-[15px] py-[30px] border-[1px]">
                        Amount Paid
                      </th>
                      <th className="px-[10px] py-[30px] border-[1px]">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {premiumMembers?.map((item, i) => (
                      <tr key={i}>
                        <td className="border-[1px] px-[25px]">{i + 1}</td>
                        <td className="border-[1px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                          {item.firstName + " " + item.lastName}
                        </td>

                        <td className="border-[1px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                          {moment(item?.membership.startDate)
                            .utc()
                            .format("DD-MMM-YY")}
                        </td>
                        <td className="border-[1px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                          {moment(item?.membership.endDate)
                            .utc()
                            .format("DD-MMM-YY")}
                        </td>

                        <td className="flex justify-between items-center  border-[1px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                          ₹{item?.membership.amount}
                        </td>
                        <td className="border-[1px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                          {new Date(item?.membership.endDate).getTime() >
                          Date.now() ? (
                            <Tag color="green">Active</Tag>
                          ) : (
                            <Tag color="red">Expired</Tag>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-[50px]">
                <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={totalPages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  // onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeclassname={"active"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
