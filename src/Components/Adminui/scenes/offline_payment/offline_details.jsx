import React from "react";
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
  // height: 500,
  // overflowY: "scroll",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Offline_details({ data, handleApprovedClick, handleRejectClick }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(data);

  const handleapprovedClick = handleApprovedClick;
  const handlerejectClick = handleRejectClick;

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
        Details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" component="h2">
            Investment Details for order #{data.details.orderId}
          </Typography>
          <div className="flex gap-4 mt-2">
            <div className="w-1/2">
              <div>
                <Typography variant="caption">Order Id</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter your last name here "
                  value={data.details.orderId}
                />
              </div>
              <div>
                <Typography variant="caption">Transaction no.</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter your last name here "
                  value={data.details.reference}
                />
              </div>
              <div>
                <Typography variant="caption">Total Amount</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  placeholder="Enter your last name here "
                  value={data.details.amountBreakdown.totalamount}
                />
              </div>
            </div>
            <div className=" w-1/2">
              <div>
                <Typography variant="caption">Name of Investor</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter your last name here "
                  value={data.details.investorName}
                />
              </div>
              <div>
                <Typography variant="caption">Startup Name</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter your last name here "
                  value={data.details.companyName}
                />
              </div>
              <div>
                <Typography variant="caption">Invested at</Typography>
                <input
                  className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
                  type="text"
                  placeholder="Enter your last name here "
                  value={data.details.createdAt}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-1 gap-2">
            <Button
              variant="contained"
              sx={{
                background: "#90CAF9",
                ":hover": {
                  bgcolor: "#42A5F5",
                },
              }}
              onClick={() => handleapprovedClick(data.details._id)}
            >
              Approved
            </Button>
            <Button
              onClick={() => handlerejectClick(data.details._id)}
              variant="contained"
              color="error"
            >
              Reject
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Offline_details;
