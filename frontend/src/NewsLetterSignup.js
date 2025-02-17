import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsLetterSignup.css";

const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycby4Tp-pzPC_vco8QCVVA698d_c5urEe_A5xiWyFo3Kq8zEWDfgHey5YSi6zX169EuEv-Q/exec";

const NewsLetterSignup = ({ closeOverlay }) => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");
    const overlayRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (overlayRef.current && !overlayRef.current.contains(event.target)) {
                if (closeOverlay) {
                    closeOverlay();  // ✅ Close the modal if from navbar
                } else {
                    navigate("/");  // ✅ Navigate home if accessed via /newsletter
                }
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [closeOverlay, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(formData.email)) {
            fetch(GOOGLE_SHEET_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "no-cors",
                body: JSON.stringify(formData),
            });

            setIsSubmitted(true);
            setError("");
            console.log("Email submitted:", formData.email);

            setFormData({ firstName: "", lastName: "", email: ""});

            // ✅ Close the modal after submission (Optional)
            setTimeout(() => {
                closeOverlay();
            }, 3000);
        } else {
            setError("Please enter a valid email address");
        }
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    return (
        <div className="newsletter-overlay">
            <div ref={overlayRef} className="newsletter-signup">
                <h2>📝 רישום לידיעון השבועי שלנו</h2>
                {isSubmitted ? (
                    <p className="success-message">תודה על ההרשמה! מידע שימושי בדרך אליך!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <div className="name-container">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="שם פרטי"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="שם משפחה"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="כתובת אימייל"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <button type="submit" className="submit-btn">
                            לחץ להרשמה!
                        </button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default NewsLetterSignup;
