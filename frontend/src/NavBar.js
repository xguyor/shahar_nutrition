import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Recipes from "./Recipes";
import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [recipesOpen, setRecipesOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const openAbout = (event) => {
        event.preventDefault();
        setAboutOpen(true);
        setRecipesOpen(false);
        setMenuOpen(false);
    };

    const openRecipes = (event) => {
        event.preventDefault();
        setRecipesOpen(true);
        setAboutOpen(false);
        setMenuOpen(false);
    };

    const closeOverlays = () => {
        setAboutOpen(false);
        setRecipesOpen(false);
    };

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
                    <a href="#home" className="logo">🥗 Shahar Nutrition</a>

                    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <a href="#about" onClick={openAbout}>📖 אודות</a>
                        <a href="#recipes" onClick={openRecipes}>😋 מתכונים</a>
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </div>
                </div>
            </nav>

            {aboutOpen && <About closeOverlay={closeOverlays} />}
            {recipesOpen && <Recipes closeOverlay={closeOverlays} />}
        </>
    );
}

export default NavBar;
