import React, { PureComponent } from "react";
import "./styles.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import moment from "moment";
import "moment-timezone";
import exportFromJSON from "export-from-json";
import {
  BsCheckSquareFill,
  BsFillExclamationCircleFill,
  BsSearch,
} from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import Masterdatamodal from "./masterdatamodal";
import MasterDetailsModal from "./masterDetailsModal";

export class Invester extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      originalUsers: [],
      searchTerm: "",
      perPage: 50,
      currentPage: 0,
      filterValue: "", // New state variable for selected filter
      dateFilter: "",
      roleValue: "",
      customStartDate: null, // New state variable for custom date range start
      customEndDate: null, // New state variable for custom date range end
    };
    this.handlePageClick = this.handlePageClick.bind(this);
    this.exportDataToCSV = this.exportDataToCSV.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleDateFilter = this.handleDateFilter.bind(this);
    this.handleRoleFilter = this.handleRoleFilter.bind(this);
    this.handleCustomDateChange = this.handleCustomDateChange.bind(this);
  }

  exportDataToCSV() {
    const { tableData } = this.state;
    const fileName = "Masterdata";
    const exportType = exportFromJSON.types.csv;

    exportFromJSON({ data: tableData, fileName, exportType });
  }

  loadMoreData() {
    const data = this.state.originalUsers;

    const slice = data?.slice(
      this.state.offset,
      this.state.offset + this.state.perPage
    );
    this.setState({
      pageCount: Math.ceil(data.length / this.state.perPage),
      tableData: slice,
    });
  }

  handlePageClick(e) {
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
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios
      .get(
        `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/investors`
      )
      .then((res) => {
        var data = res.data.data.data;

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

  handleSearch(e) {
    const value = e.target.value;
    this.setState({ searchTerm: value }, () => {
      this.performSearch();
    });
  }

  performSearch() {
    const { searchTerm, originalUsers } = this.state;
    const filteredData = originalUsers.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({ tableData: filteredData });
  }

  handleFilter(e) {
    const value = e.target.value;
    this.setState({ filterValue: value }, () => {
      this.applyFilter();
    });
  }

  applyFilter() {
    const { filterValue, originalUsers } = this.state;
    let filteredData = originalUsers;

    if (filterValue === "complete") {
      filteredData = originalUsers.filter(
        (item) =>
          item.aadhar.status === "verified" &&
          item.pan.status === "verified" &&
          item.bank.status === "verified"
      );
    } else if (filterValue === "incomplete") {
      filteredData = originalUsers.filter(
        (item) =>
          item.aadhar.status === "pending" &&
          item.pan.status === "pending" &&
          item.bank.status === "pending"
      );
    } else if (filterValue === "invested") {
      filteredData = originalUsers.filter((item) => item.investment === "yes");
    } else if (filterValue === "not_invested") {
      filteredData = originalUsers.filter((item) => item.investment === "no");
    }

    this.setState({ tableData: filteredData });
  }

  handleDateFilter(e) {
    const value = e.target.value;
    this.setState({ dateFilter: value }, () => {
      this.applyDateFilter();
    });
  }

  applyDateFilter() {
    const { dateFilter, originalUsers, customStartDate, customEndDate } =
      this.state;
    const currentDate = moment();

    let filteredData = originalUsers;

    if (dateFilter === "today") {
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isSame(currentDate, "day")
      );
    } else if (dateFilter === "last7days") {
      const last7Days = moment().subtract(7, "days");
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isAfter(last7Days)
      );
    } else if (dateFilter === "thismonth") {
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isSame(currentDate, "month")
      );
    } else if (dateFilter === "lastmonth") {
      const lastMonth = moment().subtract(1, "month");
      filteredData = originalUsers.filter((item) =>
        moment(item.created_at).isSame(lastMonth, "month")
      );
    } else if (dateFilter === "custom") {
      if (customStartDate && customEndDate) {
        filteredData = originalUsers.filter((item) =>
          moment(item.created_at).isBetween(
            moment(customStartDate).startOf("day"),
            moment(customEndDate).endOf("day")
          )
        );
      }
    }

    this.setState({ tableData: filteredData });
  }

  handleCustomDateChange(date, isStartDate) {
    if (isStartDate) {
      this.setState({ customStartDate: date }, () => {
        this.applyDateFilter(); // Reapply the filter when the custom start date changes
      });
    } else {
      this.setState({ customEndDate: date }, () => {
        this.applyDateFilter(); // Reapply the filter when the custom end date changes
      });
    }
  }

  handleRoleFilter(e) {
    const value = e.target.value;
    this.setState({ selectedRole: value }, () => {
      this.applyRoleFilter();
    });
  }

  applyRoleFilter() {
    const { selectedRole, originalUsers } = this.state;
    let filteredData = originalUsers;

    if (selectedRole === "investor") {
      filteredData = originalUsers.filter((item) => item.role === "investor");
    } else if (selectedRole === "startup") {
      filteredData = originalUsers.filter((item) => item.role === "startup");
    }

    this.setState({ tableData: filteredData });
  }

  render() {
    return (
      <>
        <section>
          <div className="md:ml-[25px]  w-[100%] rounded-[20px]">
            <div className="mb-[20px]">
              <div className="flex justify-between items-center">
                <div className="relative w-[80%] text-gray-600 mr-[5px]">
                  <input
                    type="search"
                    name="search"
                    placeholder="Search here"
                    value={this.state.searchTerm}
                    onChange={this.handleSearch}
                    className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="absolute right-[12px] top-[10px]"
                  >
                    <div className="h-4 w-4 fill-current">
                      <BsSearch />
                    </div>
                  </button>
                </div>
                <div className="w-[20%] mx-[7px]">
                  <div className="w-full">
                    <select
                      value={this.state.dateFilter}
                      onChange={this.handleDateFilter}
                      className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                    >
                      <option value="">Select Date Filter</option>
                      <option value="today">Today</option>
                      <option value="last7days">Last 7 days</option>
                      <option value="thismonth">This Month</option>
                      <option value="lastmonth">Last Month</option>
                      <option value="custom">Custom date range</option>
                    </select>
                  </div>
                </div>

                {this.state.dateFilter === "custom" && (
                  <div className="w-[20%] mx-[7px]">
                    <div className="w-full">
                      <input
                        type="date"
                        value={this.state.customStartDate}
                        onChange={(e) =>
                          this.handleCustomDateChange(e.target.value, true)
                        }
                        className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                )}
                {this.state.dateFilter === "custom" && (
                  <div className="w-[20%] mx-[7px]">
                    <div className="w-full">
                      <input
                        type="date"
                        value={this.state.customEndDate}
                        onChange={(e) =>
                          this.handleCustomDateChange(e.target.value, false)
                        }
                        className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                      />
                    </div>
                  </div>
                )}
                <div className="w-[20%] mx-[7px]">
                  <div className="w-full">
                    <select
                      value={this.state.filterValue}
                      onChange={this.handleFilter}
                      className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                    >
                      <option value="">Default</option>
                      <option value="complete">KYC Complete</option>
                      <option value="incomplete">KYC Incomplete</option>
                      <option value="invested">Invested</option>
                      <option value="not_invested">Not Invested</option>
                    </select>
                  </div>
                </div>
                <div className="w-[20%] mx-[7px]">
                  <div className="w-full">
                    <select
                      value={this.state.selectedRole}
                      onChange={this.handleRoleFilter}
                      className="bg-white h-[40px] w-full px-5 pr-10 rounded-[10px] text-sm focus:outline-none"
                    >
                      <option value="">Default role</option>
                      <option value="investor">Users</option>
                      <option value="startup">Startup</option>
                    </select>
                  </div>
                </div>
                <div className="w-[20%] ml-[5px]">
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
            <div className="bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px]">
              <div className="md:px-[20px] px-[15px]  py-[20px]">
                <div className="w-[100%]">
                  <div className="w-[100%]">
                    <div className="overflow-x-auto">
                      <table border="1" className="w-[100%] text-start">
                        <thead>
                          <tr>
                            <th className="py-[30px] px-[30px] border-[1px]">
                              Id
                            </th>
                            <th className="py-[5px] px-[30px] border-[1px]">
                              Date
                            </th>
                            <th className="px-[10px] py-[30px] border-[1px]">
                              Full name
                            </th>

                            <th className="px-[10px] py-[30px] border-[1px]">
                              Email
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Phone
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              KYC
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Invested
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Name of Investor
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              details
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.tableData
                            .filter((item) => {
                              if (this.state.filterValue === "") {
                                return true;
                              } else if (
                                this.state.filterValue === "complete"
                              ) {
                                return (
                                  item.aadhar.status === "verified" &&
                                  item.pan.status === "verified" &&
                                  item.bank.status === "verified"
                                );
                              } else if (
                                this.state.filterValue === "incomplete"
                              ) {
                                return (
                                  item.aadhar.status === "pending" &&
                                  item.pan.status === "pending" &&
                                  item.bank.status === "pending"
                                );
                              } else if (
                                this.state.filterValue === "invested"
                              ) {
                                return item.other.investedFund === "yes";
                              } else if (
                                this.state.filterValue === "not_invested"
                              ) {
                                return item.other.investedFund === "no";
                              } else {
                                return false;
                              }
                            })
                            .map((tdata, i) => (
                              <tr key={i}>
                                <td className="border-[1px] px-[25px]">
                                  {i +
                                    1 +
                                    this.state.currentPage * this.state.perPage}
                                </td>
                                <td className="border-[1px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  {moment(tdata.created_at)
                                    .utc()
                                    .format("DD MMM YY")}
                                </td>
                                <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  {tdata.firstName || tdata.lastName
                                    ? tdata.firstName + " " + tdata.lastName
                                    : "Not Available"}
                                </td>

                                <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  {tdata.email ? tdata.email : "Not Available"}
                                </td>
                                <td className="border-[1px] px-[50px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  {tdata.phone ? tdata.phone : "Not Available"}
                                </td>
                                <td className="border-[1px] px-[50px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  {tdata.aadhar.status === "verified" &&
                                  tdata.pan.status === "verified" &&
                                  tdata.bank.status === "verified" ? (
                                    <BsCheckSquareFill color="#008400" />
                                  ) : (tdata.aadhar.status === "verified" ||
                                      tdata.pan.status === "verified" ||
                                      tdata.bank.status === "verified") &&
                                    !(
                                      tdata.aadhar.status === "pending" &&
                                      tdata.pan.status === "pending" &&
                                      tdata.bank.status === "pending"
                                    ) ? (
                                    <BsFillExclamationCircleFill color="#E94E0B" />
                                  ) : tdata.aadhar.status === "pending" &&
                                    tdata.pan.status === "pending" &&
                                    tdata.bank.status === "pending" ? (
                                    <GiCancel color="#F70000" />
                                  ) : null}
                                </td>
                                <td className="border-[1px] px-[50px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  {tdata.investment
                                    ? tdata.investment
                                    : "Not Available"}
                                </td>
                                <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  <MasterDetailsModal data={tdata} />
                                </td>
                                <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                  <Masterdatamodal data={tdata} />
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

export default Invester;
