import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Recipe.css";

function Recipe() {
    const overlayRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    const recipe = location.state?.recipe; // ✅ Get recipe from navigation state

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
                navigate("/recipes"); // ✅ Go back to Recipes
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

    // ✅ Show error if recipe is missing
    if (!recipe) {
        return <div className="error-message">❌ מתכון לא נמצא!</div>;
    }

    return (
        <div className="recipe-overlay">
            <div ref={overlayRef} className="recipe-content">
                {/* ✅ Header with Close Button */}
                <div className="recipe-header">
                    <h2>{recipe.title}</h2>
                    <button className="close-btn" onClick={() => navigate("/recipes")}>✖</button>
                </div>

                {/* ✅ Clickable Text to Expand */}
                <p className={`recipe-text ${expanded ? "expanded" : ""}`} onClick={() => setExpanded(!expanded)}>
                    {recipe.description.split("\n").map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
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
