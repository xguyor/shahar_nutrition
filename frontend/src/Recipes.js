import React, { useEffect, useRef } from "react";
import "./Recipes.css";

function Recipes({ closeOverlay }) {
    const overlayRef = useRef(null);

    // ✅ Close Recipes when clicking outside the content
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                closeOverlay();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeOverlay]);

    return (
        <div className="recipes-overlay">
            <div ref={overlayRef} className="recipes-content">
                <h2>🍏 מתכונים בריאים 🍽️</h2>
                <p>כאן תוכלו למצוא מתכונים טעימים, מזינים וקלים להכנה!</p>

                {/* Placeholder for future recipe cards */}
                <div className="recipes-grid">
                    <div className="recipe-card">🥩 מתכון 1</div>
                    <div className="recipe-card">🍳 מתכון 2</div>
                    <div className="recipe-card">🍍 מתכון 3</div>
                    <div className="recipe-card">🏋️‍♀️ מתכון 4</div>
                </div>

                <p className="coming-soon">📢 בקרוב יתווספו עוד מתכונים בריאים!</p>
            </div>
        </div>
    );
}

export default Recipes;
