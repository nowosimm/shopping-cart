import { useParams, useOutletContext } from "react-router-dom";
import { useState } from "react";

import sourdough from "./images/sourdough.jpeg"
import french from "./images/french.jpeg"
import ciabatta from "./images/ciabatta.jpeg"
import focaccia from "./images/focaccia.jpeg"

import chocolateChipCookie from "./images/chocolateChipCookie.jpeg"
import japaneseCheesecake from "./images/japaneseCheesecake.jpeg"
import matchaRollCake from "./images/matchaRollCake.jpeg"
import strawberryCake from "./images/strawberryCake.jpeg"


const products = {
    sourdough: {
        name: "Sourdough Loaf",
        imageSrc: sourdough,
        description: "It's from whole foods",
        price: 8,
        // quantity: 1,
    },
    french: {
        name: "French Baguette",
        imageSrc: french,
        description: "Not from france",
        price: 5
        // quantity: 1,
    },
    ciabatta: {
        name: "Ciabatta Rolls",
        imageSrc: ciabatta,
        description: "Good and yummy",
        price: 8,
        // quantity: 1,
    },
    focaccia: {
        name: "Focaccia",
        imageSrc: focaccia,
        description: "so yummy mmmmhmmm",
        price: 11,
        // quantity: 1,
    },
    chocolateChipCookie: {
        name: "Chocolate Chip Cookie",
        imageSrc: chocolateChipCookie,
        description: "topped with flakey salt",
        price: 4,
        // quantity: 1,
    },
    japaneseCheesecake: {
        name: "Japanese Cheesecake",
        imageSrc: japaneseCheesecake,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien.",
        price: 5,
        // quantity: 1,
    },
    matchaRoll: {
        name: "Matcha Roll",
        imageSrc: matchaRollCake,
        description: "light and airy",
        price: 5,
        // quantity: 1,
    },
    strawberryCake: {
        name: "Strawberry Cake",
        imageSrc: strawberryCake,
        description: "fresh and yum",
        price: 6,
        // quantity: 1,
    }
}

let productIdCounter = 1;

const Product = ({}) => {
    const { productName } = useParams();
    const [cartContents, setCartContents, setShowCart] = useOutletContext();
    const [quantity, setQuantity] = useState(1);

    const product = products[productName];

    function subtractQuantity() {
        if(quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1)
        }
    }

    function addQuantity() {
        if(quantity < 5) {
            setQuantity(prevQuantity => prevQuantity + 1)
        }
    }

    function addToCart() {
        var newItem = { ...product };
        newItem.id = productIdCounter++;
        newItem.quantity = quantity;
        setCartContents([...cartContents, newItem])
        setQuantity(1)
        setShowCart(true)
    }

    return (
        <div className="m-20 flex justify-center">
            <div>
                <img className="rounded-lg h-auto max-w-lg" src={product.imageSrc} />
            </div>

            <div className="flex flex-col max-w-md ml-7 justify-between">

                <div>
                    <div className="justify-between flex-row flex items-center mb-8">
                        <h1 className="text-2xl max-w-48">{product.name}</h1>
                        <p className="text-base mr-3">${product.price}</p>
                    </div>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien</p>
                </div>

                <div className="flex justify-center">

                    <div className="flex mr-5">
                        <button className=" bg-rose-200 rounded-l-full px-2.5  hover:bg-rose-300" onClick={subtractQuantity}>-</button>
                        <div className="w-10 flex justify-center items-center bg-rose-200">{quantity}</div>
                        <button className= "bg-rose-200  rounded-r-full px-2.5  hover:bg-rose-300" onClick={addQuantity}>+</button>
                    </div>

                    <button
                            className="text-base bg-rose-200 p-1 w-36  hover:bg-rose-300 rounded-full"
                            onClick={addToCart}>Add to Cart
                    </button>


                </div>
            </div>
        </div>
    );
};

export default Product;