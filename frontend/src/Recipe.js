import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Recipe.css";

function Recipe() {
    const overlayRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [expanded, setExpanded] = useState(false); // ✅ Controls text expansion

    const recipe = location.state?.recipe;

    // ✅ Disable background scrolling when the modal is open
    useEffect(() => {
        document.body.classList.add("modal-open");
        return () => {
            document.body.classList.remove("modal-open");
        };
    }, []);

    // ✅ Redirect if no recipe found
    useEffect(() => {
        if (!recipe) {
            navigate("/recipes");
        }
    }, [recipe, navigate]);

    // ✅ Close overlay when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                navigate("/recipes");
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navigate]);

    // ✅ Load Instagram embed script dynamically
    useEffect(() => {
        if (!window.instgrm) {
            const script = document.createElement("script");
            script.async = true;
            script.src = "https://www.instagram.com/embed.js";
            document.body.appendChild(script);

            script.onload = () => {
                if (window.instgrm) {
                    window.instgrm.Embeds.process();
                }
            };
        } else {
            window.instgrm.Embeds.process();
        }
    }, []);

    if (!recipe) {
        return <div className="error-message">❌ מתכון לא נמצא!</div>;
    }

    return (
        <div className="recipe-overlay">
            <div ref={overlayRef} className="recipe-content">
                <button className="close-btn" onClick={() => navigate("/recipes")}>✖</button>
                <h2>{recipe.title}</h2>

                {/* ✅ Clickable Text to Expand */}
                <p className={`recipe-text ${expanded ? "expanded" : ""}`} onClick={() => setExpanded(!expanded)}>
                    {recipe.description}
                </p>

                {/* ✅ Instagram Video Embed */}
                <div className="video-container">
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={recipe.videoUrl}
                        data-instgrm-version="14"
                    ></blockquote>
                </div>
            </div>
        </div>
    );
}

export default Recipe;
