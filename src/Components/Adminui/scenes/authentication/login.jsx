import React, { useState } from "react";
import { tokens } from "../../theme";
import { Box, Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router";
import API from "../../../../Apis/admin";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setType } from "../../../../reducer/authAdmin";

function Login() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { phoneOrEmail: email, password };
    const result = await API.login(data); // call the login function from the api file
    console.log(result);

    if (result.data.status === 200) {
      localStorage.setItem("tokenAdmin", result.data.token);
      const role = result.data.role;
      dispatch(setType({ isAdmin: role !== "employee" }));
      localStorage.setItem("adminuserID", JSON.stringify(result.data.refId));
      navigate("/adminui/");
    } else {
      toast("Email and password didnt match");
    }
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Box
        backgroundColor={colors.primary[400]}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="500px"
        p="20px"
      >
        <Typography id="modal-modal-title" variant="h4" component="h2">
          Login
        </Typography>
        <form className="flex w-full" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 gap-2 w-full ">
            <Typography variant="caption">Email</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              placeholder="Enter your Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mt-2 gap-2 w-full ">
            <Typography variant="caption">Password</Typography>
            <input
              className="appearance-none block  text-[#fafafa] border  border-gray-500  rounded w-full py-[10px] px-4 mb-3 leading-tight  bg-[#121212] focus:outline-none focus:border-gray-200"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
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
              type="submit"
              onSubmit={handleSubmit}
            >
              Login
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
}

export default Login;
