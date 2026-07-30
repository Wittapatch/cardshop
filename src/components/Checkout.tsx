import type { Product } from "../pages/Recommended";
import "./Checkout.css"

type CheckoutCart = {
    cart: Product[];
    RemoveFromCart: (productIndex: number) => void;
    onClose: () => void;
}

export default function Checkout({cart, RemoveFromCart, onClose}: CheckoutCart) {

    let totalPrice = 0
    for (const product of cart) {
        totalPrice = totalPrice + product.price;
    }

    function toGoogleForm() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSe9nmjiBGvThtpT8K283pA0ftvmnkRiYKm1IE87qed8xAERYg/viewform?usp=header";
    }

    return(
        <section
            className="checkout-container"
            role="dialog"
            aria-modal="true"
            aria-labelledby="checkout-title"
        >
            <div className="checkout-header">
                <div>
                    <span>Your selection</span>
                    <h2 id="checkout-title">Shopping cart</h2>
                </div>
                <button
                    className="checkout-close"
                    aria-label="Close shopping cart"
                    onClick={onClose}
                >
                    ×
                </button>
            </div>
            {cart.length === 0 ? (
                <div className="checkout-empty">
                    <span aria-hidden="true">◇</span>
                    <h3>Your cart is empty</h3>
                    <p>Add a card to see it here.</p>
                </div>
            ): (
                <ul>
                     {cart.map((product, index) => (
                        <li key={`${product.name}-${index}`}>
                            <div>
                                <strong>{product.name}</strong>
                                <span>฿{product.price.toLocaleString()}</span>
                            </div>
                            <button
                                aria-label={`Remove ${product.name}`}
                                onClick={() => RemoveFromCart(index)}
                            >
                                Remove
                            </button>
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
                    Continue
                </button>
            </div>
        </section>
    );
}
