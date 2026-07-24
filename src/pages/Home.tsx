import "./Home.css"
import Navbar from "../components/Navbar";
import logoImage from "../assets/logo.jpg"
import ProductCard from "../components/ProductCard";
import Shopbutton from "../components/Shopbutton";
import Checkout from "../components/Checkout"; 
import {useState} from "react";

// Each file can only have one export default function
export default function Home() {

    const [cartCount, setCartCount] = useState(0);

    function addToCart() {
        setCartCount((currentCount) => currentCount + 1);
    }

    return(
        <>
            <Navbar/>
            
            <Shopbutton cartCount={cartCount} />


        </>
    );
}
