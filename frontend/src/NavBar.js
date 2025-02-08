import React, { useState, useEffect } from "react";
import About from "./About";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openAbout = (event) => {
        event.preventDefault();
        setAboutOpen(true);
    };

    const closeAbout = () => {
        setAboutOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="navbar-container">
                    <a href="#home" className="logo">Shahar Nutrition</a>
                    <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
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
