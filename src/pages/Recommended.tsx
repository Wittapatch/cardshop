import "./Recommended.css"
import logoImage from "../assets/logo.jpg"
import ProductCard from "../components/ProductCard";
import Shopbutton from "../components/Shopbutton";
import {useState} from "react"

export type Product = {
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    video: string;
};

const recommendedProducts: Product[] = [
    {
        name: "Gorilla Card",
        description: "A rare collectible Gorilla card.",
        image: logoImage,
        price: 10000,
        stock: 5,
        video: "/testvideo.mp4",
    },
    {
        name: "Dragon Card",
        description: "A powerful collectible Dragon card.",
        image: logoImage,
        price: 5000,
        stock: 8,
        video: "/testvideo.mp4",
    },
    {
        name: "Tiger Card",
        description: "A fast and fierce Tiger card.",
        image: logoImage,
        price: 2500,
        stock: 12,
        video: "/testvideo.mp4",
    },
    {
        name: "Phoenix Card",
        description: "A legendary Phoenix card.",
        image: logoImage,
        price: 8000,
        stock: 3,
        video: "/testvideo.mp4",
    },
];

export default function Recommended() {
    // Initially set it to an empty list
    const [cart, setCart] = useState<Product[]>([]);

    function addToCart(product: Product) {
        setCart((currentCart) => [...currentCart, product]);
    }

    function removeFromCart(productIndex: number) {
        setCart((currentCart) => currentCart.filter((_, index) => index !== productIndex))
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
                        video={product.video}
                        onAddToCart={() => addToCart(product)}
                    />
                ))}
            </div>
            <Shopbutton 
                cart={cart} 
                RemoveFromCart={removeFromCart}
            />
        </main>
    );
}
