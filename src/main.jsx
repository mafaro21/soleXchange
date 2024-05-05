import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux'
import { store, persistor } from './state/Store.js'
import { PersistGate } from 'redux-persist/integration/react'
// import { persistStore } from 'redux-persist'
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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
