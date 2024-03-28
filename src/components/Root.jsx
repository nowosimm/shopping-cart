import { Fragment, useState, useEffect } from 'react'
import Nav from "./Navigation";
import ShoppingCart from "./ShoppingCart"
import { Outlet } from "react-router-dom";

export default function Root() {
    const [showCart, setShowCart] = useState(false)
    // const [quantity, setQuantity] = useState(1);
    const [cartContents, setCartContents] = useState([
        // {
        //   id: 3,
        //   name: 'Kibby',
        //   href: '#',
        //   color: 'Blue',
        //   price: '$32.00',
        //   quantity: 10,
        //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
        //   imageAlt:
        //     'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
        // },
      ])

    return <div className="bg-white">
        <Nav setShowCart={setShowCart} cartContents={cartContents} />
        <ShoppingCart 
            cartContents={cartContents}
            setCartContents={setCartContents}
            isOpen={showCart}
            onClose={setShowCart} />
        <Outlet context={[ cartContents, setCartContents, setShowCart]} />
    </div>
}