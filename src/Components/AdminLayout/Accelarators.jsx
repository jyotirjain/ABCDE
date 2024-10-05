import React, { PureComponent } from "react";
import "./styles.css";
import axios from "axios";
import ReactPaginate from "react-paginate";

// import DetailModal from "./DetailModal";
import Commission from "./CommissionModal";

// import { CSVLink } from "react-csv";

import { BsSearch } from "react-icons/bs";

export class Accelarators extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      offset: 0,
      tableData: [],
      orgtableData: [],
      originalUsers: [],
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this.handlePageClick.bind(this);
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

  // loadMoreData() {
  //   const { orgtableData, offset, perPage } = this.state;

  //   const slice = orgtableData.data.slice(offset, offset + perPage);

  //   this.setState({
  //     pageCount: Math.ceil(orgtableData.data.length / perPage),
  //     tableData: slice,
  //   });
  // }
  loadMoreData() {
    const { orgtableData, offset, perPage } = this.state;

    const slice = orgtableData.slice(offset, offset + perPage);

    this.setState({
      pageCount: Math.ceil(orgtableData.length / perPage),
      tableData: slice,
    });
  }

  componentDidMount() {
    console.log("component mount");
    this.getData();
  }

  getData() {
    console.log("component mount");
    // alert("component mount");
    axios
      .get(`${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/accelerator/list`)
      .then((res) => {
        var data = res.data.data.data;
        console.log(
          "🚀 ~ file: Accelarators.jsx:62 ~ Accelarators ~ axios.get ~ res:",
          data
        );

        // var slice = data.slice(
        //   this.state.offset,
        //   this.state.offset + this.state.perPage
        // );

        // this.setState({
        //   pageCount: Math.ceil(data.length / this.state.perPage),
        //   orgtableData: res.data,
        //   tableData: slice,
        // });

        this.setState({
          pageCount: Math.ceil(data.length / this.state.perPage),
          orgtableData: data, // Update orgtableData with the data array
        });
        this.loadMoreData();
      })
      .catch((e) => {
        // Added parentheses for catch function
        console.log(
          "🚀 ~ file: Accelarators.jsx:76 ~ Accelarators ~ axios.get ~ e:",
          e
        );
      });
  }

  render() {
    return (
      <>
        <section>
          <div className=" md:ml-[25px]   w-[100%] rounded-[20px]  ">
            <div className="mb-[20px] ">
              <div className="flex justify-between items-center  ">
                <div className="relative w-[80%] text-gray-600 mr-[5px]">
                  <input
                    type="search"
                    name="serch"
                    placeholder="Search here"
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
                
                <div className="w-[20%]  ml-[5px]">
                  <div>
                    <button className="bg-[#202054] text-[#ffffff] md:px-6 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                      {/* <CSVLink>Export</CSVLink> */}
                      <h4 className="px-[30px]"> Export</h4>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className=" bg-white  w-[100%] md:rounded-[20px] pt-[15px] pb-[25px] ">
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
                            <th className="px-[10px] py-[30px] border-[1px]">
                              Name
                            </th>
                            {/* <th className="px-[10px] py-[30px] border-[1px]">
                              Last name
                            </th> */}

                            <th className="px-[10px] py-[30px] border-[1px]">
                              Email
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Phone Number
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Gender
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Referral no.
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Commission rate
                            </th>

                            {/* <th className="px-[15px] py-[30px] border-[1px]">
                              Details
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Startup
                            </th> */}
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Commission
                            </th>
                            <th className="px-[15px] py-[30px] border-[1px]">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.tableData.map((tdata, i) => (
                            <tr key={i}>
                              <td className="border-[1px] px-[25px]  ">
                                {i +
                                  1 +
                                  this.state.currentPage * this.state.perPage}
                              </td>
                              <td className="border-[1px] px-[40px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.name}
                              </td>
                              {/* <td className=" border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                Jadhav
                              </td> */}

                              <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.AcceleratorInfo.email}
                              </td>
                              <td className="border-[1px] px-[50px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.AcceleratorInfo.phone}
                              </td>
                              <td className="border-[1px] px-[40px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.AcceleratorInfo.gender}
                              </td>
                              <td className="border-[1px] px-[60px]  text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                {tdata.referal_code}
                              </td>
                              <td className="border-[1px] px-[90px] text-[13.33px] font-[400] leading-[15.62px] text-[#828F99]">
                                Investor:{" "}
                                {tdata.rate?.length > 0
                                  ? tdata.rate[tdata.rate.length - 1]
                                      .investorRate
                                  : "N/A"}
                                Startup:{" "}
                                {tdata.rate?.length > 0
                                  ? tdata.rate[tdata.rate.length - 1]
                                      .startupRate
                                  : "N/A"}
                              </td>

                              {/* <td className="border-[1px] px-[20px] py-[20px]">
                                <DetailModal />
                              </td>
                              <td className="border-[1px] px-[20px]">
                                <DocumentModal />
                              </td> */}
                              <td className="border-[1px] px-[20px] ">
                                <div className="bg-[#202054] text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                                  <h4 className="px-[25px] text-[11.2px]">
                                    <Commission
                                      id={tdata._id}
                                      commission={{
                                        investorRate:
                                          tdata.rate?.length > 0
                                            ? tdata.rate[tdata.rate.length - 1]
                                                .investorRate
                                            : 0,
                                        startupRate:
                                          tdata.rate?.length > 0
                                            ? tdata.rate[tdata.rate.length - 1]
                                                .startupRate
                                            : 0,
                                      }}
                                    />
                                  </h4>
                                </div>
                              </td>

                              <td className="border-[1px] px-[20px]">
                                <div className="bg-[#202054] text-[#ffffff] md:px-1 md:py-[7px] py-[9px] px-12 rounded-[10px] hover:bg-black duration-200">
                                  <h4 className="px-[25px] text-[11.2px]">
                                    delete
                                  </h4>
                                </div>
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

export default Accelarators;
