import React, { PureComponent } from "react";
import "./styles.css";
import axios from "axios";
import ReactPaginate from "react-paginate";

import DetailModal from "./DetailModal";
import DocumentModal from "./DocumentModal";
import API from "../../Apis/startupApis";
import adminAPI from "../../Apis/admin";

import { BsSearch } from "react-icons/bs";
import exportFromJSON from "export-from-json";
import { toast } from "react-toastify";

export class Startup extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      originalUsers: [],
      searchTerm: "",
      perPage: 10,
      currentPage: 0,
      isApproved: null,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.exportDataToCSV = this.exportDataToCSV.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
  }

  exportDataToCSV() {
    const { tableData } = this.state;
    const fileName = "Startup";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: tableData, fileName, exportType });
  }

  handlePageClick = (e) => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset,
      },
      () => {
        this.loadMoreData();
      }
    );
  };

  loadMoreData() {
    const data = this.state.orgtableData;

    const slice = data.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );

    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/startup`
      )
      .then((res) => {
        var data = res.data.data.data;
        console.log("data", data);

        var slice = data.slice(
          this.state.offset,
          this.state.offset + this.state.perPage
        );

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: data,
          tableData: slice,
          originalUsers: data,
        });
      });
  }

  handleViewClick(id) {
    // alert(id);
  }

  componentDidUpdate(prevState) {
    if (this.state.isApproved !== prevState.isApproved) {
      
    }
  }

  async handleApprovedClick(id) {
    const data = {
      id: id,
      action: "accepted",
    };
    const res = await API.action(data);

    this.getData();

    if (res.code === 200) {
      this.setState({
        isApproved: true,

        // action: "accepted",
      });
      toast.success("Startup Approved");
    }
  }

  async handleRejectClick(id) {
    const data = {
      id: id,
      action: "rejected",
    };
    const res = await API.action(data);

    this.getData();

    if (res.code === 200) {
      this.setState({
        isApproved: false,
        // action: "rejected",
      });
      toast.success("Startup Rejected");
    }
  }

  async handleRefresh(){
    this.getData();
  }

  async handleActiveStatus(id, action) {
    const data = {
      id: id,
      action: action,
    };
    const res = await adminAPI.activeStatus(data);

    this.getData();

    if (res.code === 200) {
      // this.setState({
      //   isApproved: false,
      //   // action: "rejected",
      // });
      // toast.success("Startup Active Status Changed ");
      toast.success(res.data.message);
    }
  }

  handleLiveChange = (id, value) => {
    // Update the state or perform any other necessary actions
    const updatedTableData = this.state.tableData.map((item) => {
      if (item._id === id) {
        return { ...item, live: value };
      }
      return item;
    });

    this.setState({
      tableData: updatedTableData,
    });
  };

  // async handleDeleteClick(id) {
  //   const data = {
  //     id: id,
  //   };
  //   const res = await API.delete(data);
  // }

  handleFilter(e) {
    const value = e.target.value;
    this.setState({ searchTerm: value });

    if (value === "") {
      this.setState({ tableData: this.state.originalUsers });
    } else {
      const filteredData = this.state.originalUsers.filter((item) => {
        const isLive = item.activeStatus?.status === "live";
        const isClosed = item.activeStatus?.status === "closed";
        const isAccepted = item.status === "accepted";
        const isRejected = item.status === "rejected";

        if (
          (value === "live" && isLive) ||
          (value === "closed" && isClosed) ||
          (value === "accepted" && isAccepted) ||
          (value === "rejected" && isRejected)
        ) {
          return true;
        }
        return false;
      });

      this.setState({ tableData: filteredData });
    }
  }

  render() {
    return (
      <>
        <section>
          <div className=" md:ml-[25px]  w-[100%] rounded-[20px]  ">
            <div className="mb-[20px]">
              <div className="flex justify-between items-center  ">
                <div className="relative  w-[80%] text-gray-600 mr-[5px]">
                  <input
                    type="search"
                    name="serch"
                    placeholder="Search here"
                    value={this.state.searchTerm}
                    onChange={this.handleFilter}
                    className="bg-white h-[40px] w-full px-5 pr-10  rounded-[10px] text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-[12px] top-[10px] "
                  >
                    <div className="h-4 w-4 fill-current ">
                      <BsSearch />
                    </div>
                  </button>
                </div>
                <div className="w-[20%] mx-[7px]">
                  <div className="w-full">
                    <select
                      value={this.state.searchTerm}
                      onChange={this.handleFilter}
                      className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                    >
                      <option value="">Default</option>
                      <option value="live">Live Startups</option>
                      <option value="closed">Closed Startups</option>
                      <option value="accepted">Accepted Startups</option>
                      <option value="rejected">Rejected Startups</option>
                    </select>
                  </div>
                </div>
                <div className="w-[20%]  ml-[5px]">
                  <div>
                    <button
                      onClick={this.exportDataToCSV}
                      className="bg-[#202054] text-[#ffffff] md:px-6 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200"
                    >
                      <h4 className="px-[30px]">Export</h4>
                    </button>
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
                            <th className="py-[30px] px-[30px] border-[1px]">
                              Id
                            </th>

                            <th className="px-[15px] py-[30px] border-[1px]">
                              Company{" "}
                            </th>
                            <th className="px-[10px] py-[30px] border-[1px]">
                              Email
                            </th>

                            <th className="px-[15px] py-[30px] border-[1px]">
                              Details
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Portfolio
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Pitch
                            </th>

                            <th className="px-[15px] py-[30px] border-[1px]">
                              Action
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Live deals
                            </th>
                            <th className="px-[10px] py-[30px] border-[1px]">
                              Full name
                            </th>

                            <th className="px-[15px] py-[30px] border-[1px]">
                              Phone Number
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.tableData.map((tdata, i) => (
                            <tr key={i}>
                              <td className="border-[1px] px-[25px]">
                                {i +
                                  1 +
                                  this.state.currentPage * this.state.perPage}
                              </td>

                              <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.registeredCompanyName}
                              </td>
                              <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.email}
                              </td>

                              <td className="border-[1px] px-[20px]">
                                <DetailModal data={tdata} />
                              </td>
                              <td className="border-[1px] px-[20px]">
                                <DocumentModal
                                  id={tdata._id}
                                  tdatas={tdata}
                                  portfolio={tdata.portfolio}
                                  callback={this.getData}
                                />
                              </td>
                              <td className="border-[1px] px-[20px]">
                                <div className="bg-[#202054] text-[#ffffff] mx-[5px] md:px-1 mt-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                                  <h4
                                    className="px-[25px] text-[11.2px]"
                                    onClick={() => {
                                      window.open(
                                        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/pitch/${tdata.pitch}`,
                                        "_blank"
                                      );
                                    }}
                                  >
                                    View
                                  </h4>
                                </div>
                              </td>

                              <td className="flex justify-between items-center py-[25px] border-[1px] px-[20px]">
                                {tdata.status === "pending" ? (
                                  <>
                                    <div className="bg-[#202054] text-[#ffffff] mx-[5px] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                                      <h4
                                        className="px-[25px] text-[11.2px]"
                                        onClick={() =>
                                          this.handleApprovedClick(tdata._id)
                                        }
                                      >
                                        Approved
                                      </h4>
                                    </div>
                                    <div className="bg-[#202054] text-[#ffffff] mx-[5px] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                                      <h4
                                        className="px-[25px] text-[11.2px]"
                                        onClick={() =>
                                          this.handleRejectClick(tdata._id)
                                        }
                                      >
                                        Reject
                                      </h4>
                                    </div>
                                  </>
                                ) : (
                                  <div>
                                    <h4>{tdata.status}</h4>
                                  </div>
                                )}
                              </td>
                              <td className="border-[1px] px-[20px] ">
                                <div className="flex justify-between gap-4">
                                  <div className="flex">
                                    <input
                                      type="radio"
                                      name={`live-${i}`} // Use a unique name for each radio button group
                                      value="Live"
                                      checked={
                                        tdata.activeStatus?.status === "live"
                                      } // Set the checked attribute dynamically
                                      // onChange={() =>
                                      //   this.handleLiveChange(tdata._id, "Live")
                                      // } // Add an onChange handler
                                      onChange={() =>
                                        this.handleActiveStatus(
                                          tdata._id,
                                          "live"
                                        )
                                      }
                                      readOnly
                                    />
                                    <label>Yes</label>
                                  </div>
                                  <div className="flex">
                                    <input
                                      type="radio"
                                      name={`live-${i}`} // Use the same unique name for each radio button group
                                      value="closed"
                                      checked={
                                        tdata.activeStatus?.status === "closed"
                                      } // Set the checked attribute dynamically
                                      onChange={() =>
                                        this.handleActiveStatus(
                                          tdata._id,
                                          "closed"
                                        )
                                      }
                                    />
                                    <label>No</label>
                                  </div>
                                </div>
                              </td>

                              <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.founderFirstName +
                                  " " +
                                  tdata.founderLastName}
                              </td>

                              <td className="border-[1px] px-[50px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.phone}
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
                        pageCount={this.state.pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={5}
                        onPageChange={this.handlePageClick}
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
        </section>
      </>
    );
  }
}

export default Startup;