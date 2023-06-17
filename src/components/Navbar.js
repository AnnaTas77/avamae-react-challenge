import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../resources/Logo.svg";

const Navbar = () => {
    return (
        <nav className="nav-container">
            <div className="nav-wrapper">
                <Link to="/">
                    <img src={Logo} className="logo-image" alt="Logo" />
                </Link>
                <ul className="link-container">
                    <li className="nav-link">
                        <NavLink to="/" class>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/about-us">About Us</NavLink>
                    </li>
                    <li className="nav-link">
                        <NavLink to="/contact-us">Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
