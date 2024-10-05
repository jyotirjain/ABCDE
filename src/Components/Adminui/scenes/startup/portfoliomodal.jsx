import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SvgIcon, TextField } from "@mui/material";
import { styled } from "@mui/joy";
import API from "../../../../Apis/startupApis";
import { toast } from "react-toastify";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Set width to 90% of the viewport
  maxWidth: 800, // Set a maximum width
  height: 500,
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const VisuallyHiddenInput = styled("input")`
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  bottom: 0;
  left: 0;
  white-space: nowrap;
  width: 1px;
`;

function Portfoliomodal({ id, data, callback }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log("data", data);

  const [file1, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  const [inputdata, setInputdata] = useState({
    id: id,
    currentAmount: data.details.portfolio?.currentAmount,
    currentValuation: data.details.portfolio?.currentValuation,
    expectedValuation: data.details.portfolio?.expectedValuation,
    currentRevenue: data.details.portfolio?.currentRevenue,
    ARR: data.details.portfolio?.ARR,
    MRR: data.details.portfolio?.MRR,
    nextRound: data.details.portfolio?.nextRound,
    profitable: data.details.portfolio?.profitable,
    shareprice: data.details.portfolio?.shareprice,
    exitStrategy: data.details.portfolio?.exitStrategy,
    sharecertificate: data.details.portfolio?.shareCertificate,
    certificate1: data.details.portfolio?.certificate1,
    certificate2: data.details.portfolio?.certificate2,
    updated_date: data.details.portfolio?.updatedDate,
  });

  console.log(
    "🚀 ~ file: DocumentModal.jsx:33 ~ DetailModal ~ inputdata:",
    inputdata
  );

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const deleteCert = async (element, file, id) => {
    console.log("🚀 ~ file: DocumentModal.jsx:35 ~ deleteCert ~ id:", id);
    console.log("🚀 ~ file: DocumentModal.jsx:35 ~ deleteCert ~ file:", file);
    console.log(
      "🚀 ~ file: DocumentModal.jsx:35 ~ deleteCert ~ element:",
      element
    );
    const res = await API.deleteCert({ element, file, id });
    if (res) {
      callback();
    }
    console.log("🚀 ~ file: DocumentModal.jsx:36 ~ deleteCert ~ res:", res);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    toast.success("Certificate Uploaded");
  };
  const handleFileChange2 = (event) => {
    setFile2(event.target.files[0]);
    toast.success("Certificate Uploaded");
  };

  const handleAdd = async () => {
    const files = [file1, file2];

    const data = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   data.append("files[]", files[i]);
    // }
    console.log(id);
    data.append("file1", file1);
    data.append("file2", file2);
    data.append("id", inputdata.id);
    data.append("currentAmount", inputdata.currentAmount);
    data.append("currentValuation", inputdata.currentValuation);
    data.append("expectedValuation", inputdata.expectedValuation);
    data.append("currentRevenue", inputdata.currentRevenue);
    data.append("ARR", inputdata.ARR);
    data.append("MRR", inputdata.MRR);
    data.append("nextRound", inputdata.nextRound);
    data.append("profitable", inputdata.profitable);
    data.append("shareprice", inputdata.shareprice);
    data.append("exitStrategy", inputdata.exitStrategy);

    const res = await API.addStartupPortfolio(data);

    if (res) {
      callback();
    }

    setFile(null);
    setOpen(false);
  };

  useEffect(() => {
    setInputdata({
      id: id,
      currentAmount: data.details.portfolio?.currentAmount,
      currentValuation: data.details.portfolio?.currentValuation,
      expectedValuation: data.details.portfolio?.expectedValuation,
      currentRevenue: data.details.portfolio?.currentRevenue,
      ARR: data.details.portfolio?.ARR,
      MRR: data.details.portfolio?.MRR,
      nextRound: data.details.portfolio?.nextRound,
      profitable: data.details.portfolio?.profitable,
      shareprice: data.details.portfolio?.shareprice,
      exitStrategy: data.details.portfolio?.exitStrategy,
      sharecertificate: data.details.portfolio?.shareCertificate,
      certificate1: data.details.portfolio?.certificate1,
      certificate2: data.details.portfolio?.certificate2,
      updated_date: data.details.portfolio?.updatedDate,
    });
  }, [data]);

  return (
    <div>
      <Button
        sx={{
          background: "#90CAF9",
          ":hover": {
            bgcolor: "#42A5F5",
          },
        }}
        onClick={handleOpen}
      >
        View
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Profile
          </Typography>
          <div className="md:flex md:flex-row gap-4">
            <div className="md:w-1/2">
              <div className="  mt-6  ">
                <div>
                  <Typography variant="caption">
                    Current amount invested of startup
                  </Typography>
                  <input
                    className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                    type="text"
                    placeholder="Enter your last name here "
                  />
                </div>
              </div>

              <div>
                <Typography variant="caption">Current Valuation</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here "
                  name="currentValuation"
                  onChange={changehandle}
                  value={inputdata?.currentValuation}
                />
              </div>
              <div>
                <Typography variant="caption">
                  Expected valuation for next round
                </Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="expectedValuation"
                  onChange={changehandle}
                  value={inputdata?.expectedValuation}
                />
              </div>
              <div>
                <Typography variant="caption"> Current revenue</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="currentRevenue"
                  onChange={changehandle}
                  value={inputdata.currentRevenue}
                />
              </div>
              <div>
                <Typography variant="caption"> ARR in %</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="ARR"
                  onChange={changehandle}
                  value={inputdata.ARR}
                />
              </div>
              <div>
                <Typography variant="caption"> MRR in %</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="MRR"
                  onChange={changehandle}
                  value={inputdata.MRR}
                />
              </div>
              <div>
                <Typography variant="caption"> Updated date</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="date"
                  placeholder="Enter here"
                  name="updated_date"
                  onChange={changehandle}
                  value={inputdata.updated_date}
                />
              </div>
            </div>
            <div className=" md:w-1/2">
              <div className="mt-6">
                <Typography variant="caption">
                  Expect time for next round (in months)
                </Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="nextRound"
                  onChange={changehandle}
                  value={inputdata.nextRound}
                />
              </div>
              <div>
                <Typography variant="caption">Profitable</Typography>
                <select
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  id="grid-last-name"
                  type="text"
                  placeholder="Enter here"
                  name="profitable"
                  onChange={changehandle}
                  value={inputdata.profitable}
                >
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <Typography variant="caption">Shares Price</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="shareprice"
                  onChange={changehandle}
                  value={inputdata.shareprice}
                />
              </div>
              <div>
                <Typography variant="caption">Exit Strategy</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter here"
                  name="exitStrategy"
                  onChange={changehandle}
                  value={inputdata.exitStrategy}
                />
              </div>

              <div className="flex flex-col my-1.5 gap-2 ">
                <Typography variant="caption">Upload banner</Typography>
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  variant="outlined"
                  color="neutral"
                  startDecorator={
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  }
                >
                  Upload a file
                  <VisuallyHiddenInput
                    type="file"
                    name="shareCertificate"
                    onChange={handleFileChange}
                  />
                </Button>
                {inputdata?.certificate1 && (
                  <div className="flex justify-around ">
                    <span
                      className="text-red-500 my-2 block cursor-pointer"
                      onClick={() => {
                        deleteCert("certificate1", inputdata?.certificate1, id);
                      }}
                    >
                      Delete
                    </span>
                    <a
                      className="text-blue-500 my-2 block cursor-pointer"
                      target="_blank"
                      href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${inputdata?.certificate1}`}
                      // onClick={() => viewFile(file2)}
                    >
                      View
                    </a>
                  </div>
                )}
              </div>
              <div className="flex flex-col mt-1 gap-2 ">
                <Typography variant="caption">Upload banner</Typography>
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  variant="outlined"
                  color="neutral"
                  startDecorator={
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  }
                >
                  Upload a file
                  <VisuallyHiddenInput
                    type="file"
                    placeholder="Enter here"
                    name="shareCertificate"
                    onChange={handleFileChange2}
                  />
                </Button>
                {inputdata?.certificate2 && (
                  <div className="flex justify-around">
                    <span
                      className="text-red-500 my-2 block cursor-pointer"
                      onClick={() => {
                        deleteCert("certificate2", inputdata?.certificate2, id);
                      }}
                    >
                      Delete
                    </span>

                    <a
                      className="text-blue-500 my-2 block cursor-pointer"
                      target="_blank"
                      href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${inputdata?.certificate2}`}
                    >
                      View
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <Button
              variant="contained"
              sx={{
                background: "#90CAF9",
                ":hover": {
                  bgcolor: "#42A5F5",
                },
              }}
              onClick={handleAdd}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Portfoliomodal;
