import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // ✅ Create a reference for the navbar
    const navRef = useRef(null);

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

    // ✅ Close menu if clicking outside of the navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false); // Close menu when clicking outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="navbar-container">
                    <a href="#home" className="logo">Shahar Nutrition</a>

                    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <a href="#about" onClick={openAbout}>אודות התכנית</a>
                    </div>

                    <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            </nav>
            {aboutOpen && <About closeOverlay={closeAbout} />}
        </>
    );
}

export default NavBar;
