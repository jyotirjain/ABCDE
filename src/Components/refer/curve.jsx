import React from "react";

function Curve(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={66}
      height={15}
      viewBox="0 0 66 15"
      fill="none"
      {...props}
    >
      <path
        d="M.923 14.099c25.072-17.372 39.135-15.944 64.21 0"
        stroke="#AEAEFF"
        strokeWidth={1.73541}
        strokeDasharray="4.34 4.34"
      />
    </svg>
  );
}

export default Curve;
