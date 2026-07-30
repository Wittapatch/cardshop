import type { Product } from "../pages/Recommended";
import "./Checkout.css"

type CheckoutCart = {
    cart: Product[];
    RemoveFromCart: (productIndex: number) => void;
}

export default function Checkout({cart, RemoveFromCart}: CheckoutCart) {

    let totalPrice = 0
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
    }

    function toGoogleForm() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSe9nmjiBGvThtpT8K283pA0ftvmnkRiYKm1IE87qed8xAERYg/viewform?usp=header";
    }

    return(
        <div className="checkout-container">
            <h2> Checkout </h2>
            {cart.length === 0 ? (
                <h3> Your cart is empty </h3>
            ): (
                <ul>
                     {cart.map((product, index) => (
                        <li key={`${product.name}-${index}`}>
                            <span>{product.name} {product.price}</span>
                            <button onClick={() => RemoveFromCart(index)}> Delete </button>
                        </li>
                    ))}
                </ul>
            )}
            <div className="checkout-footer">
                <strong>
                    Total: {new Intl.NumberFormat("th-TH", {
                        style: "currency",
                        currency: "THB",
                    }).format(totalPrice)}
                </strong>
                <button 
                    className="btn-pay" 
                    onClick={toGoogleForm}
                    disabled={cart.length === 0}
                    > 
                    Pay 
                </button>
            </div>
        </div>
    );
}
