import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Apps from "../pages/Apps.jsx";
import Installation from "../pages/Installation.jsx";
import AppInfo from "../pages/AppInfo.jsx";
import RouteError from "../pages/RouteError.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RouteError />,
    hydrateFallbackElement: <p>loading....</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      {
        path: "/apps/:id",
        element: <AppInfo />,
      },
    ],
  },
]);

export default router;
