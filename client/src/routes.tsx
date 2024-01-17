import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginScreen from "./screens/login/LoginScreen";
import { useAuth } from "./contexts/AuthContext";
import ErrorScreen from "./screens/error/ErrorScreen";
import MainLayout from "./layouts/Main/MainLayout";
import DashBoardScreen from "./screens/dashboard/DashBoardScreen";
import NewUserScreen from "./screens/newUser/NewUserScreen";
import ManageUsersScreen from "./screens/manageUsers/ManageUsersScreen";
import ManagePermissionsScreen from "./screens/managePermissions/ManagePermissionsScreen";

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
      {
        path: "/newUser",
        element: <NewUserScreen />,
      },
      {
        path: "/manageUsers",
        element: <ManageUsersScreen />,
      },
      {
        path: "/managePermissions",
        element: <ManagePermissionsScreen />,
      },
    ],
  },
]);

const Routes: React.FC = () => {
  const {user} = useAuth();
  const routeStack = user ? appRoutes : authRoutes;

  return (
    <RouterProvider router={routeStack} />
  )
}

export default Routes;