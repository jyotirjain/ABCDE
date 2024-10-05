import React, { useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { IoCheckbox } from "react-icons/io5";
import ReactPaginate from "react-paginate";

function Investor({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 5; // Corrected: Use a number, not an array

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / dataPerPage);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  return (
    <div>
      <div className="export ">
        <table className="box-border w-[100%]  border shadow-[0px_1px_3px_rgba(0,0,0,0.25)] rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#ffffff]">
          <thead className="box-border w-[660px] h-[53px] border rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#f7f7f7]">
            <tr>
              <th>Sr</th>
              <th>Name</th>
              <th>Email</th>
              <th>KYC</th>
              <th>Investment</th>
              <th>Commission</th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((current, index) => (
              <tr key={index}>
                <td>{index + currentPage * dataPerPage - 4}</td>
                <td>{current.name}</td>
                <td>{current.email}</td>
                <td
                  className={`${
                    current.kyc ? "text-[#1F892C]" : "text-[#ff9100]"
                  } flex justify-center items-center h-full py-4 text-[15px] not-italic font-normal leading-[normal] font-[Inter]`}
                >
                  {current.kyc ? (
                    <IoCheckbox size={20} color="#1F892C" />
                  ) : (
                    <AiOutlineExclamationCircle size={20} color="#ff9100" />
                  )}
                </td>
                <td>{parseFloat(current.totalInvestmentAmount).toFixed(2)}</td>
                <td>{parseFloat(current.totalCommission).toFixed(2)}</td>
                {/* <td>10000</td> */}
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next"
          onPageChange={(data) => handlePageChange(data.selected + 1)}
          pageRangeDisplayed={5}
          pageCount={totalPages}
          previousLabel="prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="pagenum"
          activeLinkClassName=""
        />
      </div>
    </div>
  );
}

export default Investor;
