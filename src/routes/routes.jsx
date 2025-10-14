import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import Apps from "../pages/Apps.jsx";
import Installation from "../pages/Installation.jsx";
import RouteError from "../pages/RouteError.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <RouteError />,
    hydrateFallbackElement: <p>loading....</p>,
    children: [
      {
        path:'/',
        element:<Home/>,
        loader: () => fetch("/apps-data.json"),
      },
      {
        path: "/home",
        element: <Home />,
        loader: () => fetch("/apps-data.json"),
      },
      {
        path: "/apps",
        element: <Apps />,
        loader: () => fetch("/apps-data.json"),
      },
      {
        path: "/installation",
        element: <Installation />,
      },
      
    ],
  },
]);

export default router;
