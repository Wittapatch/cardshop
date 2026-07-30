import "./ProductCard.css"
import {useRef, useState} from "react";

type ProductCardProps = {
    name: string
    description: string
    image: string
    price: number
    stock: number
    onAddToCart: () => void; 
}

export default function ProductCard ({
    name,
    description,
    image,
    price,
    stock,
    onAddToCart,
}: ProductCardProps) {

    const [showDetails, setShowDetails] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    function handleCardClick() {
        setShowDetails(true);

        if (timerRef.current != null) {
            clearTimeout(timerRef.current);
        }

        timerRef.current = setTimeout(() => {
            setShowDetails(false)
            timerRef.current = null;
        }, 5000);
    }

    function handleDoubleClick() {
        onAddToCart();
    }

    return (
        <article className="product-card" onClick={handleCardClick} onDoubleClick={handleDoubleClick}>
            <img className="product-img" src={image} alt={name} />
            <div className="product-info">
                <p>฿{price.toLocaleString()}</p>
            </div>

            <div className={showDetails ? "product-details product-details-visible": "product-details"}>
                <h1>{name}</h1>
                <p>{description}</p>
                <p>Price: ฿{price.toLocaleString()}</p>
                <p>In stock: {stock}</p>
            </div>

            <button 
                className="btn-addproduct"
                onClick={(event) => {
                    event.stopPropagation();
                    onAddToCart();
                }}
            > 
            Buy </button>
        </article>
    );
}
