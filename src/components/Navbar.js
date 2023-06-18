import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import Logo from "../resources/Logo.svg";

const Navbar = () => {
    return (
        <div className="nav-root">
            <nav className="nav-container">
                <div className="nav-wrapper">
                    <Link to="/">
                        <img src={Logo} className="logo-image" alt="Logo" />
                    </Link>
                    <ul className="link-container">
                        <li className="nav-link">
                            <NavLink to="/" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/about-us" className="nav-link">
                                About Us
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to="/contact-us" className="nav-link">
                                Contact Us
                            </NavLink>
                        </li>
                        <button className="login-btn">Log In</button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
