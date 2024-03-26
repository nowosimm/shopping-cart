import { Fragment, useState, useEffect } from 'react'
import Nav from "./Navigation";
import CartExample from "./ShoppingCart"
import { Outlet } from "react-router-dom";

export default function Root() {
    const [showCart, setShowCart] = useState(false)
    return <div className="bg-white">
        <Nav setShowCart={setShowCart} />
        <CartExample isOpen={showCart} onClose={setShowCart} />
        <Outlet />
    </div>
}