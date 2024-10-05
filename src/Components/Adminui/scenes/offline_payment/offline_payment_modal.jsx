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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#333" : "#121212",
    color: state.isSelected ? "white" : "#fafafa",
  }),
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#121212",
    borderColor: state.isFocused ? "#008400" : "#333",
  }),
};

function Offline_payment_modal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectedInvestor, setSelectedInvestor] = useState(null);
  const [selectedInvestorName, setSelectedInvestorName] = useState(null);
  const [selectedStartup, setSelectedStartup] = useState(null);

  const [showModal, setShowModal] = useState(false);
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isRtl, setIsRtl] = useState(false);
  const [inputarr, setInputarr] = useState([]);

  const [inputdata, setInputdata] = useState({
    name: "",
    startupName: "",
    totalamount: "",
    dateOfpayment: "",
    TransactionId: "",
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  let { totalamount, dateOfpayment, TransactionId } = inputdata;
  function changhandle() {
    setInputarr([...inputarr, { totalamount, dateOfpayment, TransactionId }]);

    setInputdata({
      totalamount: "",
      dateOfpayment: "",
      TransactionId: "",
      dateOfpayment: "",
    });
  }

  const setSelectedInvestorHandler = (newValue) => {
    setSelectedInvestor(newValue.value);
    setSelectedInvestorName(newValue.label);
  };

  const setSelectedStartupHandler = (newValue) => {
    setSelectedStartup(newValue.value);
  };

  console.log("investor", selectedInvestor);
  console.log("startup", selectedStartup);

  const callback = props.callback;
  const handleCallback = (newValue) => {
    const data = {
      selectedInvestor,
      selectedStartup,
      name: selectedInvestorName,
      totalAmount: inputdata.totalamount,
      date: inputdata.dateOfpayment,
      reference: inputdata.TransactionId,
      dateOfpayment: inputdata.dateOfpayment,
    };
    callback(data);
    setInputdata({
      totalamount: "",
      dateOfpayment: "",
      TransactionId: "",
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
        Add Transaction
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Add Transactions
          </Typography>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Investor Name</Typography>

            <Select
              className="basic-single block uppercase tracking-wide text-[#fafafa] font-[400] leading-[11.72px] text-[12px] mb-[5px] bg-black"
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
              styles={customStyles}

              // onChange={(event)=>{setSelectedInvestor(event.target.value)}}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Startup Name</Typography>

            <Select
              className="basic-single block uppercase tracking-wide text-[#828F99] font-[400] leading-[11.72px] text-[10px] mb-[5px]"
              classNamePrefix="select statrtup"
              // defaultValue={colourOptions[0]}
              defaultValue={selectedStartup}
              isDisabled={isDisabled}
              // isLoading={isLoading}
              // isClearable={isClearable}
              isRtl={isRtl}
              isSearchable={isSearchable}
              name="startupName"
              // value={selectedStartup}
              options={props?.startups}
              onChange={setSelectedStartupHandler}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption"> Total amount</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              name="totalamount"
              onChange={changehandle}
              value={inputdata.totalamount}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Date of payment</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="date"
              name="dateOfpayment"
              onChange={changehandle}
              value={inputdata.dateOfpayment}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">transaction ID</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              placeholder="Enter your Investor Commission in Percentage"
              name="TransactionId"
              onChange={changehandle}
              value={inputdata.TransactionId}
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
              Add Transaction
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Offline_payment_modal;
