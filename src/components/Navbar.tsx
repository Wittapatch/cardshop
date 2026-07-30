import "./Navbar.css"
import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <header className="site-header">
            <div className="search-section">
                <NavLink to="/recommended" className="brand-frame" aria-label="CardShop home">
                    <span className="brand-name">Card<span>Shop</span></span>
                    <svg className="brand-icon" viewBox="0 0 40 36" aria-hidden="true">
                        <rect x="8" y="4" width="24" height="28" rx="4" />
                        <rect x="3" y="9" width="24" height="23" rx="4" />
                    </svg>
                </NavLink>
            </div>

            <nav className="category-bar" aria-label="Product categories">
                <div className="category-inner">
                    <NavLink
                        to="/recommended"
                        className={({isActive}) => (isActive ? "category-link active": "category-link")}
                    >
                        Recommended
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
