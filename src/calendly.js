import React, { useEffect } from "react";
import { useHistory, useNavigate } from "react-router-dom";

const RedirectToCalendly = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the specified URL
    window.location.href = "https://calendly.com/prince-r14/30min";
  }, []);

  // Render null or any loading message if needed
  return null;
};

export default RedirectToCalendly;
