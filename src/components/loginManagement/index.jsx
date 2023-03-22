import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import {Box} from "@mui/material";

function LoginManagement() {
  const [user, setUser] = useState(true);
  const navigate = useNavigate();
  return (
        user &&
      navigate('../../modules/auth/pages/login')
  )
}

export default LoginManagement