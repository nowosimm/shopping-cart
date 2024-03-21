import { useParams } from "react-router-dom";

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
        src: sourdough,
        description: "It's from whole foods",
        price: "$8"
    },
    french: {
        name: "French Baguette",
        src: french,
        description: "Not from france",
        price: "$5"
    },
    ciabatta: {
        name: "Ciabatta Rolls",
        src: ciabatta,
        description: "Good and yummy",
        price: "$8"
    },
    focaccia: {
        name: "Focaccia",
        src: focaccia,
        description: "so yummy mmmmhmmm",
        price: "$11"
    },
    chocolateChipCookie: {
        name: "Chocolate Chip Cookie",
        src: chocolateChipCookie,
        description: "topped with flakey salt",
        price: "$4"
    },
    japaneseCheesecake: {
        name: "Japanese Cheesecake",
        src: japaneseCheesecake,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien.",
        price: "$5"
    },
    matchaRoll: {
        name: "Matcha Roll",
        src: matchaRollCake,
        description: "light and airy",
        price: "$5 / slice"
    },
    strawberryCake: {
        name: "Strawberry Cake",
        src: strawberryCake,
        description: "fresh and yum",
        price: "$6 / slice"
    }

}

const Product = () => {
    const { productName } = useParams();

    const product = products[productName];

    return (
        <div className="m-20 flex justify-center">
            <div>
                <img className="rounded-lg h-auto max-w-lg" src={product.src} />
            </div>

            <div className="flex flex-col justify-between max-w-md ml-6 ">
                <div >
                    <h1 className="text-2xl mb-6 max-w-48">{product.name}</h1>
                    <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien</p>
                </div>

                <div className="flex justify-between">
                    <p className="text-base">{product.price}</p>
                    <button className="text-base">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;