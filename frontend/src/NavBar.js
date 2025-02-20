import React, { useState, useEffect, useRef } from "react";
import About from "./About";
import Recipes from "./Recipes";
import NewsLetterSignup from "./NewsLetterSignup";

import "./NavBar.css";

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);
    const [recipesOpen, setRecipesOpen] = useState(false);
    const [newsletterOpen, setNewsletterOpen] = useState(false);
    const navRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false); // ✅ Ensures menu always closes
    };

    const openAbout = (e) => {
        e.preventDefault();
        setAboutOpen(true);
        setRecipesOpen(false);
        setNewsletterOpen(false);
        closeMenu();
    };

    const openRecipes = (e) => {
        e.preventDefault();
        setRecipesOpen(true);
        setAboutOpen(false);
        setNewsletterOpen(false);
        closeMenu(); // ✅ Close menu after click
    };

    const openNewsletter = (e) => {
        e.preventDefault();
        setNewsletterOpen(true);
        setAboutOpen(false);
        setRecipesOpen(false);
        closeMenu(); // ✅ Close menu after click
    };

    const closeOverlays = () => {
        setAboutOpen(false);
        setRecipesOpen(false);
        setNewsletterOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                closeMenu(); // ✅ Close menu when clicking outside
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <>
            <nav ref={navRef} className="navbar">
                <div className="navbar-container">
                    <p className="navbar-text"> שחר אור - shahar nutrition</p>
                    <div className="navbar-image"/>
                    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
                        <a href="#about" onClick={openAbout}>📖 אודות</a>
                        <a href="#recipes" onClick={openRecipes}>🍽️ מתכונים</a>
                        <a href="#newsletter" onClick={openNewsletter}>📩 ידיעון שבועי</a>
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        ☰
                    </div>
                </div>
            </nav>

            {aboutOpen && <About closeOverlay={closeOverlays} />}
            {recipesOpen && <Recipes closeOverlay={closeOverlays} />}
            {newsletterOpen && <NewsLetterSignup closeOverlay={closeOverlays} />}
        </>
    );
}

export default NavBar;
