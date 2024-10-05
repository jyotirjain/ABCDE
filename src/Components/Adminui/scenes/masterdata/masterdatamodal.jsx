import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SvgIcon, TextField } from "@mui/material";
import { Input, styled } from "@mui/joy";
import { bgcolor } from "@mui/system";
import theme from "../../theme";

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

const StyledInput = styled(TextField)`
  color: #fafafa;
  width: 100%;
  border-radius: 4px;
  padding: 10px 0px;
  appearance: "none";
  &:focus {
    border-color: #008400; // Customize the focus style
  }
`;

function Masterdatamodal({ data }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            {data.details.firstName + " " + data.details.lastName} ({" "}
            {data.details.email} )
          </Typography>
          <div className="flex flex-col md:flex-row gap-4 mt-2">
            <div className="md:w-1/2">
              <div>
                <Typography variant="caption">Aadhar Card</Typography>

                <StyledInput
                  type="text"
                  placeholder="Enter your Aadhar Card"
                  value={data.details.aadhar.aadharNo}
                />
              </div>
              <div>
                <Typography variant="caption">Account no.</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your Account No."
                  value={data.details.bank.accountNumber}
                />
              </div>
              <div>
                <Typography variant="caption">IFSC</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your IFSC code"
                  value={data.details.bank.ifsc}
                />
              </div>
            </div>
            <div className=" md:w-1/2">
              <div>
                <Typography variant="caption">Pan Card no.</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your Pan Card"
                  value={data.details.pan.panNo}
                />
              </div>
              <div>
                <Typography variant="caption">Bank Name</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your Bank Name"
                  value={data.details.bank.bankName}
                />
              </div>
              <div>
                <Typography variant="caption">Account type</Typography>
                <StyledInput
                  type="text"
                  placeholder="Enter your Account Type"
                  value={data.details.bank.accountType}
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
            >
              Approved
            </Button>
            <Button variant="contained" color="error">
              Reject
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Masterdatamodal;
