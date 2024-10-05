import { Switch } from "@mui/material";
import React, { useState } from "react";
import API from "../../../../Apis/startupApis";
import adminAPI from "../../../../Apis/admin";

const switchStyle = {
  borderRadius: 2,
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#42A5F5",
  },
  "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
    backgroundColor: "#90CAF9",
  },
  "&:hover .MuiSwitch-switchBase": {
    color: "#42A5F5",
  },
};

function ActiveStatus({ data }) {
  const [isLive, setIsLive] = useState(
    data.details.activeStatus.status === "live"
  );

  // Function to handle the switch change and update the status through the API
  const handleSwitchChange = () => {
    // Toggle between 'Live' and 'Closed' when the switch is clicked
    setIsLive(!isLive);

    // Determine the action based on the current state
    const action = isLive ? "closed" : "live";

    // Assuming data.id is available in your 'data' prop
    const id = data.details._id;

    // Make the API call to update the status
    const updateStatus = async () => {
      try {
        const res = await adminAPI.activeStatus({ id, action });
        if (res.code === 200) {
          // Status updated successfully
          // You can add further logic here if needed
        } else {
          // Handle API errors
        }
      } catch (error) {
        // Handle any API call errors
        console.error("Error updating status:", error);
      }
    };

    updateStatus();
  };
  console.log("active", data);
  return (
    <div>
      <Switch
        checked={isLive}
        onChange={handleSwitchChange}
        color="primary"
        sx={switchStyle}
      />
    </div>
  );
}

export default ActiveStatus;
