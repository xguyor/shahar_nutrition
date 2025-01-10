import React from "react";
import "./About.css";

function About({ closeOverlay }) {
    const handleClickOutside = (event) => {
        // Check if the clicked element is the overlay itself
        if (event.target.classList.contains("overlay")) {
            closeOverlay(); // Close the overlay
        }
    };

    return (
        <div className="overlay overlay-active" onClick={handleClickOutside}>
            <div className="overlay-content">
                <button className="close-btn" onClick={closeOverlay}>
                    ×
                </button>
                <h2>About the Nutrition Program</h2>
                <p>
                    Welcome to Shahar Nutrition! This program is designed to help you achieve
                    a balanced and sustainable lifestyle through personalized nutrition
                    guidance and support. Our focus is on creating long-term results while
                    empowering you to make healthier choices.
                </p>
            </div>
        </div>

    );
}

export default About;
