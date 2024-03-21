import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from "./components/Navigation";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from './components/Product.jsx';
import HomePage from './components/HomePage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
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