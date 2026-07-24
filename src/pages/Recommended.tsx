import "./Recommended.css"
import logoImage from "../assets/logo.jpg"
import ProductCard from "../components/ProductCard";
import Shopbutton from "../components/Shopbutton";
import {useState} from "react";

const recommendedProducts = [
    {
        name: "Gorilla Card",
        description: "A rare collectible Gorilla card.",
        image: logoImage,
        price: 10000,
        stock: 5,
    },
    {
        name: "Dragon Card",
        description: "A powerful collectible Dragon card.",
        image: logoImage,
        price: 5000,
        stock: 8,
    },
    {
        name: "Tiger Card",
        description: "A fast and fierce Tiger card.",
        image: logoImage,
        price: 2500,
        stock: 12,
    },
    {
        name: "Phoenix Card",
        description: "A legendary Phoenix card.",
        image: logoImage,
        price: 8000,
        stock: 3,
    },
];

export default function Recommended() {
    const [cartCount, setCartCount] = useState(0);

    function addToCart() {
        setCartCount((currentCount) => currentCount + 1);
    }

    return(
        <main className="recommended-page">
            <h2>Recommended for you</h2>
            <div className="product-grid">
                {recommendedProducts.map((product) => (
                    <ProductCard
                        key={product.name}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                        stock={product.stock}
                        onAddToCart={addToCart}
                    />
                ))}
            </div>
            <Shopbutton cartCount={cartCount} />
        </main>
    );
}
