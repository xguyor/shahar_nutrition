import React, { useState, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Scroll effect to change navbar background
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector(".navbar");
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup to prevent memory leaks
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <a href="#home" className="logo">Shahar Nutrition</a>
                <div className="menu-icon" onClick={toggleMenu}>
                    ☰
                </div>
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                    <a href="#services">Services</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contact</a>
                    <a href="#plans">Plans</a>
                    <a href="#testimonials">Testimonials</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
