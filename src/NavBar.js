import React, { useState, useEffect } from "react";
import About from "./About";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openAbout = (event) => {
        event.preventDefault(); // Prevent default link behavior
        setAboutOpen(true);
    };

    const closeAbout = () => {
        setAboutOpen(false);
    };

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
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <a href="#home" className="logo">Shahar Nutrition</a>
                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </div>
                    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <a href="#about" onClick={openAbout}>אודות התכנית</a>
                    </div>
                </div>
            </nav>
            {aboutOpen && <About closeOverlay={closeAbout} />}
        </>
    );
}

export default NavBar;
