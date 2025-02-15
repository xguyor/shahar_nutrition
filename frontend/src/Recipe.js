import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Recipe.css";

function Recipe({ title, description, videoUrl, closeOverlay }) {
    const overlayRef = useRef(null);
    const navigate = useNavigate(); // ✅ Initialize navigation

    // ✅ Close overlay when clicking outside the content
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                navigate("/recipes"); // ✅ Navigate back instead of closing everything
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [navigate]);

    return (
        <div className="recipe-overlay">
            <div ref={overlayRef} className="recipe-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <div className="video-container">
                    <iframe
                        src={videoUrl}
                        title="Recipe Video"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Recipe;