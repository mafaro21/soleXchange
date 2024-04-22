import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Auth from './pages/Auth.jsx'
import Category from './pages/Category.jsx'
import Admin from './admin/Admin.jsx'
import Product from './admin/Product.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/:brand",
    element: <Category />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/product",
    element: <Product />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
