import React from "react";
import "./preview.css"; // Add CSS for styling

function PreviewModal({ onEnter }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>Welcome to Shahar Nutrition</h1>
                <p>Discover personalized nutrition plans crafted to meet your health goals.</p>
                <button className="enter-btn" onClick={onEnter}>Explore Now</button>
            </div>
        </div>
    );
}

export default PreviewModal;
