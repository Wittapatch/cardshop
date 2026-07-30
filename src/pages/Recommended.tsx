import "./Recommended.css"
import logoImage from "../assets/logo.jpg"
import LogoImage from "../assets/Logo.png"
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
        image: LogoImage,
        price: 10000,
        stock: 5,
        video: "/videos/testvideo.mp4",
    },
    {
        name: "Dragon Card",
        description: "A powerful collectible Dragon card.",
        image: logoImage,
        price: 5000,
        stock: 8,
        video: "/videos/testvideo.mp4",
    },
    {
        name: "Tiger Card",
        description: "A fast and fierce Tiger card.",
        image: logoImage,
        price: 2500,
        stock: 12,
        video: "/videos/testvideo.mp4",
    },
    {
        name: "Phoenix Card",
        description: "A legendary Phoenix card.",
        image: logoImage,
        price: 8000,
        stock: 3,
        video: "/videos/testvideo.mp4",
    },
    {
        name: "Phoenix Card",
        description: "A legendary Phoenix card.",
        image: logoImage,
        price: 8000,
        stock: 3,
        video: "/videos/testvideo.mp4",
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
            <section className="catalog-heading">
                <p className="catalog-eyebrow"> Season's collection</p>
                <div className="catalog-title-row">
                    <h1>Recommended cards</h1>
                    <span>{recommendedProducts.length} cards </span>
                </div>
                <p className="catalog-subtitle">
                    Best card collection in the world
                </p>
            </section>
            <div className="product-grid">
                {recommendedProducts.map((product, index) => (
                    <ProductCard
                        key={`${product.name}-${index}`}
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
