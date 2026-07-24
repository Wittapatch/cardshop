import "./Shopbutton.css"
import Checkout from "./Checkout";
import {useState} from "react";

type ShopbuttonProp = {
    cartCount: number;
};


export default function Shopbutton({cartCount}: ShopbuttonProp) {
    const [showCheckOut, setshowCheckOut] = useState(false);
    
    function handleCheckout() {
        setshowCheckOut((current) => !current);
    }

    return(
        <> 
            <div className="btn-container">
                <button className="shop-btn" onClick={handleCheckout}>Shop</button>
                {cartCount > 0 && (
                    <span className="cart-count">
                        {cartCount}
                    </span>
                )}
            </div>
            {showCheckOut && <Checkout/>}
        </>
    );
}