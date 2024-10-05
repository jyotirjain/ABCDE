import React1 from "react";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ReactPaginate from "react-paginate";

function Startup({ data }) {


  const [currentPage, setCurrentPage] = useState(1);
  
  const dataPerPage = 3; // Corrected: Use a number, not an array

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
        <table className="box-border w-[100%] border shadow-[0px_1px_3px_rgba(0,0,0,0.25)] rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#ffffff]">
          <thead className="box-border w-[660px] h-[53px] border rounded-[10px_10px_0px_0px] border-solid border-[#DDDDDD] bg-[#f7f7f7]">
            
            <tr>
              <th>Sr</th>

              <th>Startup</th>
              
              <th>Email</th>
              
              <th>Status</th>
              
              <th>Targets</th>
              
              <th>Total raised</th>
              
              <th>Commission</th>
            
            </tr>

          </thead>

          <tbody>
            {currentData?.map((current, index) => (
              <tr key={current.id}>
              
                <td>{index + currentPage * dataPerPage - 2}</td>
              
                <td>{current.name}</td>
              
                <td>{current.email}</td>

                <td className={`${current.activeStatus === "live" ? 'text-[#1F892C]' : 'text-[#FF0000]'} text-[#FF0000] text-[15px] not-italic font-normal leading-[normal] font-[Inter]`}>
                  {current.status==="pending"?"Pending":current.activeStatus}
                </td>

                <td>{current.target}</td>

                <td>{current.totalRaised}</td>

                <td>{parseFloat(current.totalCommission).toFixed(2)}</td>
              
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

export default Startup;