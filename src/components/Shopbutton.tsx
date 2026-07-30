import "./Shopbutton.css"
import Checkout from "./Checkout";
import {useState} from "react";
import type { Product } from "../pages/Recommended";


type ShopbuttonProp = {
    cart: Product[];
    RemoveFromCart: (productIndex: number) => void;
};

export default function Shopbutton({cart, RemoveFromCart}: ShopbuttonProp) {
    const [showCheckOut, setshowCheckOut] = useState(false);
    
    return(
        <> 
            <div className="btn-container">
                <button
                    className="shop-btn"
                    aria-label="Open shopping cart"
                    aria-expanded={showCheckOut}
                    onClick={() => setshowCheckOut((current) => !current)}
                >
                    <svg aria-hidden="true" viewBox="0 0 24 24">
                        <path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L20.5 8H7" />
                        <circle cx="10" cy="20" r="1" />
                        <circle cx="18" cy="20" r="1" />
                    </svg>
                    <span>Cart</span>
                </button>
                {cart.length > 0 && (
                    <span className="cart-count">
                        {cart.length}
                    </span>
                )}
            </div>
            {showCheckOut && (
                <div
                    className="checkout-backdrop"
                    onClick={() => setshowCheckOut(false)}
                />
            )}
            {showCheckOut && <Checkout
                cart={cart}
                RemoveFromCart={RemoveFromCart}
                onClose={() => setshowCheckOut(false)}
            />}
        </>
    );
}
