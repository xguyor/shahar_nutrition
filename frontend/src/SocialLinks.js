import React from "react";
import "./SocialLinks.css";  // Optional for specific styling

function SocialLinks() {
    return (
        <section className="social-links">
            <h2>Connect With Us</h2>
            <div className="icons">
                <a href="https://www.youtube.com/@Shahar_nutrition" target="_blank" rel="noopener noreferrer">
                    YouTube
                </a>
                <a href="https://www.instagram.com/shahar_nutrition/" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <a href="https://www.tiktok.com/@shahar_nutrition" target="_blank" rel="noopener noreferrer">
                    TikTok
                </a>
            </div>
        </section>
    );
}

export default SocialLinks;
