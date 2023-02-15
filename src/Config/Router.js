import {
    createBrowserRouter, Navigate
} from "react-router-dom";

import RenderLayout from "./RenderLayout";
import DashboardPage from "../Page/DashboardPage";
import CarPage from "../Page/CarPage";
import LoginPage from "../Page/LoginPage";

export const router = createBrowserRouter([
    {
        path: "/Dashboard",
        element: <RenderLayout children={<DashboardPage />} />,
    },
    {
        path: "/ListCar",
        element: <RenderLayout children={<CarPage />} />,
    },
    {
        path: "/",
        element: <LoginPage/>
    },
    {
        path: "/*",
        element: <Navigate to="dashboard" replace />
    },

   
]);

