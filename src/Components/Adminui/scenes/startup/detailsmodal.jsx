import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SvgIcon, TextField } from "@mui/material";
import { styled } from "@mui/joy";

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

const StyledInput = styled(TextField)`
  color: #fafafa;
  width: 100%;
  border-radius: 4px;
  padding: 10px 0px;
  appearance: none;

  &:focus {
    border-color: #008400; // Customize the focus style
  }
`;

function Detailsmodal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("details", data);
  const [inputdata, setInputdata] = useState({
    founderFirstName: data.details.founderFirstName,
    founderLastName: "",
    registeredCompanyName: "",
    email: "",
    phone: "",
    shortDescription: "",
    revenue: "",
    dealTerms: {
      valuation: "",
      targetAmount: "",
    },
    stage: "",
    raisedFundsBefore: false,
    youtubeVideoUrl: data.details.youtubeVideoUrl,
    keyHighlights: {
      keyHighlight1: "",
      keyHighlight2: data.details.keyHighlights?.keyHighlight2,
      keyHighlight3: "",
    },
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    setInputdata({
      founderFirstName: data.details.founderFirstName,
      founderLastName: data.details.founderLastName,
      registeredCompanyName: data.details.registeredCompanyName,
      email: data.details.email,
      phone: data.details.phone,
      shortDescription: data.details.shortDescription,
      revenue: data.details.revenue,
      dealTerms: {
        valuation: data.details?.dealTerms?.valuation || "",
        targetAmount: data.details?.dealTerms?.targetAmount || "",
      },
      stage: data.details.stage,
      raisedFundsBefore: data.details.raisedFundsBefore || false,
      youtubeVideoUrl: data.details.youtubeVideoUrl,
      keyHighlights: {
        keyHighlight1: data.details.keyHighlights?.keyHighlight1 || "",
        keyHighlight2: data.details.keyHighlights?.keyHighlight2 || "",
        keyHighlight3: data.details.keyHighlights?.keyHighlight3 || "",
      },
    });
  }, [data]);
  function handleSubmit() {
    // You can perform actions here, such as sending the updated data to a server
    console.log("Submitting data:", inputdata);

    // Close the modal after submission
    handleClose();
  }

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
          <div className="md:flex md:flex-row  gap-4">
            <div className="md:w-1/2">
              <div className="flex flex-col mt-6 gap-2 ">
                <Typography variant="caption">Upload Profile</Typography>
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
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <div className="flex  mt-6 gap-2 ">
                <div>
                  <Typography variant="caption">First Name</Typography>
                  <StyledInput
                    type="text"
                    placeholder="Enter your IFSC code"
                    name="founderFirstName"
                    value={inputdata.founderFirstName}
                    onChange={changehandle}
                  />
                </div>
                <div>
                  <Typography variant="caption">Last Name</Typography>
                  <StyledInput
                    type="text"
                    placeholder="Enter your IFSC code"
                    value={data.details.founderLastName}
                    onChange={changehandle}
                  />
                </div>
              </div>

              <div>
                <Typography variant="caption">
                  Registered Company Name
                </Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.registeredCompanyName}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Email Id</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.email}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Phone no.</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.phone}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Description</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.shortDescription}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Revenue</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.revenue}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Valuations</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details?.dealTerms?.valuation}
                  onChange={changehandle}
                />
              </div>
            </div>
            <div className=" md:w-1/2">
              <div className="flex flex-col mt-6 gap-2 ">
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
                  <VisuallyHiddenInput type="file" />
                </Button>
              </div>
              <div className="mt-6">
                <Typography variant="caption">how much funds</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details?.dealTerms?.targetAmount}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Stage of Startup</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.stage}
                  onChange={changehandle}
                />
              </div>
              <div className="w-full px-3 mb-[21px]">
                <Typography variant="caption">
                  Have you Raised Funds before ?
                </Typography>

                <div className="md:flex mt-[30px] items-center flex-wrap grid grid-cols-2 gap-8">
                  <div className="flex items-center mr-4 px-3">
                    <input
                      id="inline-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="inline-radio"
                      className="ml-2  text-sm font-medium text-[#252525] dark:text-gray-300 "
                    >
                      Yes
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      id="inline-2-radio"
                      type="radio"
                      value=""
                      name="inline-radio-group"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
                    />
                    <label
                      htmlFor="inline-2-radio"
                      className="ml-2 text-sm font-medium text-[#252525] dark:text-gray-300"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
              <div>
                <Typography variant="caption">Youtube Link</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.youtubeVideoUrl}
                  name="youtubeVideoUrl"
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Key Highlight 1</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.keyHighlights?.keyHighlight1}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Key Highlight 2</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  name="keyHighlight2"
                  value={inputdata?.keyHighlight2}
                  onChange={changehandle}
                />
              </div>
              <div>
                <Typography variant="caption">Key Highlight 3</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.keyHighlights?.keyHighlight3}
                  onChange={changehandle}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-1">
            <Button
              variant="contained"
              sx={{
                background: "#90CAF9",
                ":hover": {
                  bgcolor: "#42A5F5",
                },
              }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Detailsmodal;
