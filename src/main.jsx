import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from './components/Product.jsx';
import HomePage from './components/HomePage';
import Root from "./components/Root";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "product/:productName", element: <Product /> },
      // { path: "ShoppingCart", element: <ShoppingCart/>},
      { index: true, element: <HomePage /> },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);