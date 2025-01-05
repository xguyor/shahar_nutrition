import React from "react";
import "./SocialLinks.css";  // Optional for specific styling

function SocialLinks() {
    return (
        <section className="social-links">
            <h2>Connect With Us</h2>
            <div className="icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    Facebook
                </a>
                <a href="https://www.instagram.com/shahar_nutrition/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
            </div>
        </section>
    );
}

export default SocialLinks;
