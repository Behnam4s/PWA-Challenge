import React from 'react'
import {Box} from "@mui/material";
import {Outlet } from "react-router-dom";

function Customer() {
  return (
    <Box>
        <Outlet />
    </Box>
  )
}

export default Customer