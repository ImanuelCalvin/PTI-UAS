import React, { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle

    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false); // Close menu when a link is clicked
    };

    return (
        <header className="Header">
            <h1 style={{ paddingTop: '20px' }}>Betawi Now</h1>
            <div className="menu-icon" onClick={handleMenuToggle}>
                {isOpen ? "✖" : "☰"} {/* Toggle icon changes based on state */}
            </div>
            <nav className={`navigation ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <a href="/#tari" onClick={handleLinkClick}>Budaya</a>
                <a href="/#makan" onClick={handleLinkClick}>Makanan</a>
                <Link to="/about" onClick={handleLinkClick}>About Us</Link>
            </nav>
        </header>
    );
};

export default Navbar;
