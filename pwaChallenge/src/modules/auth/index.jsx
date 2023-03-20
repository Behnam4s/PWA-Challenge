import React from 'react'
// import AuthRoute from "./routes";
import {Box, Button} from "@mui/material";
import Login from "./pages/login";
import AuthRoute from "./routes/index.jsx";
import {Link} from "react-router-dom";

function Auth() {
  return (
    <Box component={'section'} sx={{ height: '100%'}}>
        {/*<Button>*/}
        {/*    <Link to={'/login'}>{'ورود به همسا'}</Link>*/}
        {/*</Button>*/}
        <AuthRoute/>
    </Box>
  )
}

export default Auth