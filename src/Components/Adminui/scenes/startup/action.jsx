import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import API from "../../../../Apis/startupApis";

function Action({ data }) {
  console.log("action", data);
  const [isApproved, setIsApproved] = useState(null);

  useEffect(() => {
    // This useEffect will be triggered whenever `isApproved` changes.
    // You can add any side effects here, if needed.
  }, [isApproved]);

  async function handleApprovedClick(id) {
    const data = {
      id: id,
      action: "accepted",
    };
    const res = await API.action(data);

    if (res.code === 200) {
      setIsApproved(true);
    }

    // Assuming `getData` is a separate function, you can call it here.
  }

  async function handleRejectClick(id) {
    const data = {
      id: id,
      action: "rejected",
    };
    const res = await API.action(data);

    if (res.code === 200) {
      setIsApproved(false);
    }

    // Assuming `getData` is a separate function, you can call it here.
  }

  return (
    <div>
      {data.row.details.status === "pending" ? (
        <div className="flex gap-4">
          {/* <Button
            variant="contained"
            sx={{
              background: "#90CAF9",
              ":hover": {
                bgcolor: "#42A5F5",
              },
            }}
            onClick={() => handleApprovedClick(data.row.details._id)}
          >
            Approved
          </Button> */}
          <AiFillCheckCircle
            className="cursor-pointer"
            size={25}
            onClick={() => handleApprovedClick(data.row.details._id)}
          />
          <MdCancel
            className="cursor-pointer"
            size={25}
            onClick={() => handleRejectClick(data.row.details._id)}
          />
          {/* <Button
            variant="contained"
            sx={{
              background: "#90CAF9",
              ":hover": {
                bgcolor: "#42A5F5",
              },
            }}
            onClick={() => handleRejectClick(data.row.details._id)}
          >
            Reject
          </Button> */}
        </div>
      ) : (
        <div>
          <h4>{data.row.details.status}</h4>
        </div>
      )}
    </div>
  );
}

export default Action;
