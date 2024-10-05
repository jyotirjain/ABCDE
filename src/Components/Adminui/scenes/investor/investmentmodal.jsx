import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { SvgIcon } from "@mui/material";
import { styled } from "@mui/joy";
import API from "../../../../Apis/admin";
import { toast } from "react-toastify";

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

function Investmentmodal(props, callback) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [investmentData] = useState(props.data);
  console.log("data", investmentData);
  const handleApprovedClickCallback = props.handleApprovedClickCallback;
  const handleRejectClickCallback = props.handleRejectClickCallback;

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please select an image to submit.");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("id", investmentData.sharecertificate._id);
    try {
      const res = API.addLegal(formData);
      if (res) {
        callback();
        toast.success(res.data.message);
        toast.success("Legal Document Successfully Updated");
      }

      if (res.code === 200) {
        toast.success(res.data.message);
        toast.success("Legal Document Successfully Updated");
      }
    } catch (error) {
      console.log("err", error);
    }
  };

  const handleDelete = (e) => {
    e.preventDefault();
    const res = API.deleteLegal({
      id: props.data._id,
      fileName: props.data.legal,
    });
    if (res) {
      callback();
    }
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
            {investmentData.investorName} data
          </Typography>
          <div className="flex flex-col mt-6 gap-2 ">
            <Typography variant="caption">INVESTOR</Typography>
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
                accept="image/*"
                onChange={handleImageChange}
              />
            </Button>
          </div>

          <div className="flex gap-2 mt-2 justify-end">
            {investmentData?.sharecertificate?.legal ? (
              <Button
                variant="contained"
                sx={{
                  background: "#90CAF9",
                  ":hover": {
                    bgcolor: "#42A5F5",
                  },
                }}
              >
                <a
                  className="w-full h-full"
                  target="_blank"
                  href={`https://bizdateupbucket.s3.ap-south-1.amazonaws.com/${investmentData?.sharecertificate?.legal}`}
                >
                  View
                </a>
              </Button>
            ) : null}

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
              Add Certificate
            </Button>
            <Button onClick={handleDelete} variant="contained" color="error">
              Delete add Certificate
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Investmentmodal;
