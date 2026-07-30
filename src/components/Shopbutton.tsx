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
                <button className="shop-btn" onClick={() => setshowCheckOut((current) => !(current))}>Shop</button>
                {cart.length > 0 && (
                    <span className="cart-count">
                        {cart.length}
                    </span>
                )}
            </div>
            {showCheckOut && <Checkout
                cart={cart}
                RemoveFromCart={RemoveFromCart}
            />}
        </>
    );
}