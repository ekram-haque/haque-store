import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from '../src/layout/MainLayout.jsx'
import Home from '../src/pages/Home.jsx'
import Apps from '../src/pages/Apps.jsx'
import Installation from '../src/pages/Installation.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<MainLayout/>,
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
    ],
  }
]

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
