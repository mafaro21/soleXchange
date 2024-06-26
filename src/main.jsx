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
import MyAccount from './pages/MyAccount.jsx'
import Error from './pages/404.jsx'
import Error500 from './pages/500.jsx'

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
    path: "/brand/:brand",
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
  {
    path: "/:userName",
    element: <MyAccount />,
    // errorElement: <Error />,
  },
  {
    path: '/404',
    element: <Error />,
  },
  {
    path: '/500',
    element: <Error500 />,
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
