import React from "react";
import { useState } from "react";
import ReactPaginate from "react-paginate";

function Startupaccdata({data}) {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = useState(5);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / dataPerPage);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = data.slice(indexOfFirstData, indexOfLastData);

  return (
    <div>
      <div className="export">
        <table className="box-border w-[100%] h-[227px] border shadow-[0px_1px_3px_rgba(0,0,0,0.25)] rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#ffffff]">
          <thead className="box-border w-[660px] h-[53px] border rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#f7f7f7]">
            <tr className="">
              <th>Sr</th>
              <th>Date</th>
              <th>Name of Investor</th>
              <th>Mode of Payment</th>
              <th>Amount</th>
              <th>refer</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((current) => (
              <tr key={current.id}>
                <td>{current.id}</td>
                <td>{current.Date}</td>
                <td>{current.Invester}</td>
                <td>{current.Mode}</td>
                <td>{current.Amount}</td>
                <td>1000</td>
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

export default Startupaccdata;
