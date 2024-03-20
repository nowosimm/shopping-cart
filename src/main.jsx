import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import Nav from "./components/Navigation";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProductList from './components/ProductList';
import Product from './components/Product.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      { path: "product/:productName", element: <Product /> },

    ]
  },
  // {
  //   path: "ProductList",
  //   element: <ProductList />,
  // },
  // {
  //   path: "product/:productName",
  //   element: <Product />,
  // },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);