import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import Verification from "../modules/auth/pages/verification";
import Login from "../modules/auth/pages/login";
import Auth from "../modules/auth";
import Customer from "../modules/customer";
import HomeTile from "../modules/customer/pages/panel/homeTile";
import HomeList from "../modules/customer/pages/panel/homeList";
import Home from "../components/home";
import Page404 from "../components/page404/page404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
    },
    {
      path: "*",
      element: <Page404/>
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
            {
                path: "login",
                element: <Login/>,
            },
            {
                path: "verification",
                element: <Verification />,
            },
        ],
    },
    {
        path: "/panel",
        element: <Customer />,
        children: [
            {
                path: "profile",
                element: <HomeTile />,
            },
            {
                path: "new-profile",
                element: <HomeList />,
            },

        ],
    },
]);
function AppRoute() {
    return (
        <RouterProvider router={router} />
    )
}
export default AppRoute