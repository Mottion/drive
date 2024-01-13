import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />,
  }
]);

const Routes: React.FC = () => {
  return(
    <RouterProvider router={router} />
  )
}

export default Routes;