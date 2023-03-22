// import React from 'react'
// import {Link, Route, Routes} from "react-router-dom";
// import Home from "../modules/customer/pages/panel/homeTile.jsx";
// import Auth from "../modules/auth/index.jsx";
// import Login from "../modules/auth/pages/login/index.jsx";
// import {Stack} from "@mui/material";
// import Verification from "../modules/auth/pages/verification/index.jsx";
//
// function AppRoute() {
//     return (
//         <Routes>
//             <Route path="home" element={<Home />} />
//             <Route path="/"  element={<Auth/>}/>
//         </Routes>
//     )
// }
//
// export default AppRoute
import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Verification from "../modules/auth/pages/verification";
import Login from "../modules/auth/pages/login";
import Auth from "../modules/auth";
// import LoginManagement from "../components/loginManagement/index.jsx";
import HomeTile from "../modules/customer/pages/panel/homeTile";
import HomeList from "../modules/customer/pages/panel/homeList";

const router = createBrowserRouter([
    // {
    //     path: "/",
    //     element: <LoginManagement />,
    //
    // },
    {
        path: "/",
        element: <Auth />,
        children: [
            {
                path: "*",
                element: <Login/>,
            },
            {
                path: "verification",
                element: <Verification />,
            },

        ],
    },
    {
        path: "homeTile",
        element: <HomeTile />,

    },{
        path: "homeList",
        element: <HomeList />,

    },
]);
function AppRoute() {
    return (
        <RouterProvider router={router} />
    )
}

export default AppRoute