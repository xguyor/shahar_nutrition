import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Recipes from "./Recipes"; // ✅ Import Recipes Component
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [recipesOpen, setRecipesOpen] = useState(false); // ✅ Add state for Recipes overlay
    const [scrolled, setScrolled] = useState(false);

    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openAbout = (event) => {
        event.preventDefault();
        setAboutOpen(true);
        setRecipesOpen(false); // ✅ Close Recipes if open
        setMenuOpen(false);
    };

    const openRecipes = (event) => {
        event.preventDefault();
        setRecipesOpen(true);
        setAboutOpen(false); // ✅ Close About if open
        setMenuOpen(false);
    };

    const closeOverlays = () => {
        setAboutOpen(false);
        setRecipesOpen(false);
    };

    // ✅ Close menu if clicking outside of the navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setMenuOpen(false);
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
                        <a href="#recipes" onClick={openRecipes}>מתכונים</a> {/* ✅ Opens Recipes Overlay */}
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </div>
                </div>
            </nav>

            {aboutOpen && <About closeOverlay={closeOverlays} />}
            {recipesOpen && <Recipes closeOverlay={closeOverlays} />} {/* ✅ Recipes Overlay */}
        </>
    );
}

export default NavBar;
