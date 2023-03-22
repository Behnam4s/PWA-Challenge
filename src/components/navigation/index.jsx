import React from 'react'
import {Link} from "react-router-dom";
import {Typography} from "@mui/material";

function Navigation() {
    const menuItem = [
        {
            to: 'auth',
            name: 'ورود',
        },
        {
            to: 'auth/register',
            name: 'ثبت نام',
        },
    ]
  return (
            menuItem.map((item)=>(
                <Typography key={item.to}>
                    <Link to={item.to}>{item.name}</Link>
                </Typography>
            ))
  )
}

export default Navigation