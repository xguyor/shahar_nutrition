import React from "react";
import { FaYoutube, FaTiktok, FaFacebook } from "react-icons/fa"; // Import icons
import { BsInstagram } from "react-icons/bs"; // Bootstrap Instagram icon

import "./SocialLinks.css";

function SocialLinks() {
    return (
        <section className="social-links">
            <h2>בואו תעקבו ברשתות</h2>
            <div className="icons">
                <a href="https://www.youtube.com/@Shahar_nutrition" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="icon youtube"/>
                </a>
                <a href="https://www.instagram.com/shahar_nutrition/" target="_blank" rel="noopener noreferrer">
                    <BsInstagram className="icon instagram"/>
                </a>
                <a href="https://www.tiktok.com/@shahar_nutrition" target="_blank" rel="noopener noreferrer">
                    <FaTiktok className="icon tiktok"/>
                </a>
                <a href="https://www.facebook.com/shaharnutrition" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="icon facebook"/>
                </a>
            </div>
        </section>
    );
}

export default SocialLinks;
