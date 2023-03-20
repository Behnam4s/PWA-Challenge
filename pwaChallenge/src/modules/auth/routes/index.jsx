import React from 'react'
import {Link, Route, Routes} from "react-router-dom";
import Login from "../pages/login/index.jsx";
import Verification from "../pages/verification/index.jsx";

function AuthRoute() {
    return (
        <Routes>
                <Route path="login" element={<Login />} />
                <Route path="verification" element={<Verification />} />
        </Routes>
    )
}

export default AuthRoute