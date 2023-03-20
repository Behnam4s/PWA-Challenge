import React from 'react'
// import AuthRoute from "./routes";
import {Box, Button} from "@mui/material";
import Login from "./pages/login";
import AuthRoute from "./routes/index.jsx";
import {Link, Outlet } from "react-router-dom";

function Auth() {
  return (
    <Box component={'section'} sx={{ height: '100%'}}>
      <Outlet />
    </Box>
  )
}

export default Auth