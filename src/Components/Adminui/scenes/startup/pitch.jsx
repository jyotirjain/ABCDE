import { Button } from "@mui/material";
import React from "react";

function Pitch({ data }) {
  console.log(data);
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => {
          window.open(
            `${process.env.REACT_APP_TEST_URL}${process.env.REACT_APP_LINK_VERSION}/pitch/${data.details.pitch}`,
            "_blank"
          );
        }}
        sx={{
          background: "#90CAF9",
          ":hover": {
            bgcolor: "#42A5F5",
          },
          color: "#252525",
        }}
      >
        Pitch
      </Button>
    </div>
  );
}

export default Pitch;
