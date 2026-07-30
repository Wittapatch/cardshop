import "./ProductCard.css"
import {useRef, useState} from "react";

type ProductCardProps = {
    name: string;
    description: string;
    image: string;
    price: number;
    stock: number;
    video: string;
    onAddToCart: () => void; 
}

export default function ProductCard ({
    name,
    description,
    image,
    price,
    stock,
    video,
    onAddToCart,
}: ProductCardProps) {

    const [showDetails, setShowDetails] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [showVideo, setShowVideo] = useState(false);

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
        <>
            <article
                className="product-card"
                onClick={handleCardClick}
                onDoubleClick={handleDoubleClick}
                onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        handleCardClick();
                    }
                }}
                tabIndex={0}
                aria-label={`View details for ${name}`}
            >
                <div className="product-media">
                    <img className="product-img" src={image} alt={name} />
                    <div className="product-shade" />

                    <span className="stock-badge">
                        {stock > 0 ? `${stock} in stock` : "Sold out"}
                    </span>

                    <span className="product-price">
                        ฿{price.toLocaleString()}
                    </span>

                    <div className={showDetails ? "product-details product-details-visible" : "product-details"}>
                        <span className="details-label">Card details</span>
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <div className="details-meta">
                            <strong>฿{price.toLocaleString()}</strong>
                            <span>{stock} available</span>
                        </div>
                    </div>

                    {showDetails && (
                        <button
                            className="btn-video"
                            onClick={(event) => {
                                event.stopPropagation();
                                setShowVideo(true);
                            }}
                        >
                            <span aria-hidden="true">▶</span> Watch
                        </button>
                    )}

                    <button 
                        className="btn-addproduct"
                        onClick={(event) => {
                            event.stopPropagation();
                            onAddToCart();
                        }}
                        disabled={stock === 0}
                    >
                        Add
                    </button>
                </div>

                <h3 className="product-name">{name}</h3>
            </article>

            {showVideo && (
                <div
                    className="video-popup"
                    onClick={(event) => {
                        event.stopPropagation();
                        setShowVideo(false); 
                    }}
                >
                    <div
                        className="video-window"
                        onClick={(event) => event.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`${name} video`}
                    >
                        <button
                            className="video-close"
                            aria-label="Close video"
                            onClick={() => setShowVideo(false)}
                        >
                            ×
                        </button>

                        <h2>{name}</h2>

                        <video controls autoPlay muted>
                            <source src={video} type="video/mp4"/>
                            Your browser doesn't support videos.
                        </video>
                    </div>
                </div>
            )}
        </>
    );
}
