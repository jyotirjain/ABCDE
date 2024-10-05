import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/joy";
import Select from "react-select";

import MenuItem from "@mui/material/MenuItem";

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

const customSelectStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#121212",
    borderColor: state.isFocused ? "#008400" : "#666666",
    color: "#fafafa",
    "&:hover": {
      borderColor: "#008400",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#008400"
      : state.isFocused
      ? "#333"
      : "#121212",
    color: state.isSelected ? "#fafafa" : "#fafafa",
  }),
};
function Membershipmodal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [selectedInvestorName, setSelectedInvestorName] = useState(null);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRtl, setIsRtl] = useState(false);

  const [inputdata, setInputdata] = useState({
    selectedInvestor: "",
    startdate: "",
    enddate: "",
    amount: "",
  });

  function changehandle(e) {
    console.log(inputdata);
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const setSelectedInvestorHandler = (newValue) => {
    setSelectedInvestor(newValue.value);
    setSelectedInvestorName(newValue.label);
  };

  const callback = props.callback;
  const handleCallback = (newValue) => {
    const data = {
      selectedInvestor,
      amount: inputdata.amount,
      startdate: inputdata.startdate,
      enddate: inputdata.enddate,
    };
    callback(data);
    setInputdata({
      selectedInvestor: "",
      startdate: "",
      enddate: "",
      amount: "",
    });
    setOpen(false);
  };

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
        Add Membership
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add Membership
          </Typography>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Investor Name</Typography>

            <Select
              className="basic-single block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px] bg-black"
              classNamePrefix="Select Investor"
              // defaultValue={colourOptions[0]}
              name="name"
              isDisabled={isDisabled}
              defaultValue={selectedInvestor}
              // isLoading={isLoading}
              // isClearable
              isRtl={isRtl}
              isSearchable={isSearchable}
              options={props?.investors}
              // value={selectedInvestor}
              onChange={setSelectedInvestorHandler}
              // onChange={(event)=>{setSelectedInvestor(event.target.value)}}
              styles={customSelectStyles}
            />
          </div>

          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Subscription Start Date</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="date"
              name="startdate"
              onChange={changehandle}
              value={inputdata.startdate}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Subscription End Date</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="date"
              name="enddate"
              onChange={changehandle}
              value={inputdata.enddate}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption"> amount</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              name="amount"
              onChange={changehandle}
              value={inputdata.amount}
            />
          </div>

          <div className="flex gap-2 mt-2 justify-end">
            <Button
              variant="contained"
              onClick={handleCallback}
              sx={{
                background: "#90CAF9",
                ":hover": {
                  bgcolor: "#42A5F5",
                },
              }}
            >
              Add
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Membershipmodal;
