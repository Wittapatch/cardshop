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
            {showDetails && (
                <button
                    className="btn-video"
                    onClick={(event) => {
                        event.stopPropagation();
                        setShowVideo(true);
                    }}
                >
                    Video
                </button>
            )}

            {showVideo && (
                    <div
                        className="video-popup"
                        onClick = {(event) => {
                            event.stopPropagation();
                            setShowVideo(false); 
                        }}
                    >
                        <div
                            className="video-window"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                className="video-close"
                                onClick={() => setShowVideo(false)}
                            >
                                ×
                            </button>

                            <h2>{name}</h2>

                            <video controls autoPlay muted>
                                <source src={video} type="video/mp4"/>
                                Your Browser doesn't support videos.
                            </video>

                        </div>

                    </div>
            )}
            <button 
                className="btn-addproduct"
                onClick={(event) => {
                    event.stopPropagation();
                    onAddToCart();
                }}
            > 
                Buy 
            </button>
        </article>
    );
}
