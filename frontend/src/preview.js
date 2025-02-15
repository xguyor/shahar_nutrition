import React from "react";
import "./preview.css"; // Import updated CSS

function PreviewModal({ onEnter }) {
    return (
        <div className="modal-overlay">
            <div className="modal-content initial">
                <h1>רוצה להיות בריא יותר?</h1>
                <p>כנס ותגלה כל מה שאתה צריך כדי לנהל אורח חיים בריא יותר, בזול ובקלות!</p>
                <button className="enter-btn" onClick={onEnter}>לחצו פה</button>
            </div>
        </div>
    );
}

export default PreviewModal;