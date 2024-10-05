import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { styled } from "@mui/joy";
import API from "../../../../Apis/admin";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", // Set width to 90% of the viewport
  maxWidth: 800, // Set a maximum width
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

function Accelaratormodal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("comm", data);

  const [inputdata, setInputdata] = useState({
    id: data.commission._id,
    startupRate:
      data.commission?.rate[data.commission.rate.length - 1]?.startupRate,
    investorRate:
      data.commission?.rate[data.commission.rate.length - 1]?.investorRate,
  });

  function changehandle(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value });
  }

  const handleAdd = async () => {
    console.log(
      "🚀 ~ file: CommissionModal.jsx:19 ~ handleAdd ~ inputdata:",
      inputdata
    );
    const res = await API.updateCommission(inputdata);
    console.log("🚀 ~ file: CommissionModal.jsx:19 ~ handleAdd ~ res:", res);
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
            Commission
          </Typography>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Startup Commission</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              placeholder="Enter your Startup Commission in Percentage"
              name="startupRate"
              onChange={changehandle}
              value={inputdata?.startupRate}
            />
          </div>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">Investor Commission</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="text"
              placeholder="Enter your Investor Commission in Percentage"
              name="investorRate"
              onChange={changehandle}
              value={inputdata?.investorRate}
            />
          </div>

          <div className="flex gap-2 mt-2 justify-end">
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
              Add Commission
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Accelaratormodal;
