import React from "react";

function Dot({ activeindex, onclick, sliderdata }) {
  return (
    <div className="dots">
      {sliderdata.map((slide, index) => (
        <span
          key={index}
          className={`${activeindex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dot;
