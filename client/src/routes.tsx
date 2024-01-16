import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { useAuth } from "./contexts/AuthContext";
import ErrorScreen from "./screens/error/ErrorScreen";
import MainLayout from "./layouts/Main/MainLayout";
import DashBoardScreen from "./screens/dashboard/DashBoardScreen";

const authRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LoginScreen />,
  }
]);

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: "/dashboard",
        element: <DashBoardScreen />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  const {user} = useAuth();
  const routeStack = user ? appRoutes : authRoutes;

  return (
    <RouterProvider router={appRoutes} />
  )
}

export default Routes;