import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import {Box} from "@mui/material";

function LoginManagement() {
  const [user, setUser] = useState(true);
  return (
        user &&
        <Navigate to="/auth/login" replace={true} />

  )
}

export default LoginManagement