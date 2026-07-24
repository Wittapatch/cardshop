import "./Navbar.css"
import logoImage from "../assets/logo.jpg"
import { NavLink } from "react-router";

export default function Navbar() {
    return (
        <>
            <header>
                <div className="search-section">
                    <section id="searchPart">
                        <img className="logoimg" src={logoImage} alt="Logo Image" />
                        <form className="search-bar">
                            <input type="search" 
                            name="search" 
                            placeholder="Search cards"
                            aria-label="Search products"/>
                            <button type="submit"> Search </button>
                        </form>
                    </section>
                    <section id="accountPart">
                        <button> Sign in </button>
                        <button> Create an account </button>
                        <button> English </button>
                    </section>
                </div>


                <nav className="category-bar">

                    <NavLink
                        to="/recommended"
                        className={({isActive}) => (isActive ? "category-link active": "category-link")}
                    >
                        Recommended
                    </NavLink>

                    <NavLink
                        to="/mylist"
                        className={({isActive}) => (isActive ? "category-link active": "category-link")}
                    >
                        MyList
                    </NavLink>
                </nav>
            </header>
        </>
    );
}