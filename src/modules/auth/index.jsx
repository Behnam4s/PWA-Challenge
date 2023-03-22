import React from 'react'
import {Box} from "@mui/material";
import {Outlet } from "react-router-dom";

function Auth() {
  return (
    <Box component={'section'} sx={{ height: '100vh'}}>
      <Outlet />
    </Box>
  )
}

export default Auth