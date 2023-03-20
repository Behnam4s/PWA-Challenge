import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import Home from "../modules/customer/pages/panel/home.jsx";
import Auth from "../modules/auth/index.jsx";
import Login from "../modules/auth/pages/login/index.jsx";
import {Stack} from "@mui/material";
import Verification from "../modules/auth/pages/verification/index.jsx";

function AppRoute() {
    return (
        <Routes>
            {/*<Route path="home" element={<Home />} />*/}
            <Route path="/*" outlet element={<Auth/>}/>
            {/*  <Route path="login" element={<Login />} />*/}
            {/*  <Route path="verification" element={<Verification />} />*/}
            {/*</Route>*/}
            {/*<Route path="*" element={<NoMatch />} />*/}
        </Routes>
    )
}

export default AppRoute