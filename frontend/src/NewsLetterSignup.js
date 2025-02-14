import React, { useState, useEffect } from "react";
import "./NewsLetterSignup.css";

const NewsLetterSignup = () => {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isSubmitted) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isSubmitted]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            setIsSubmitted(true);
            setError('');
            console.log('Email submitted:', email);
        } else {
            setError('Please enter a valid email address');
        }
    };

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    };

    return (
        <div className="newsletter-overlay">
            <div className="newsletter-signup">
                <h2>Sign up for our Newsletter</h2>
                {isSubmitted ? (
                    <p className="success-message">Thank you for signing up!</p>
                ) : (
                    <form onSubmit={handleSubmit} className="newsletter-form">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="email-input"
                            required
                        />
                        <button type="submit" className="submit-btn">
                            Subscribe
                        </button>
                        {error && <p className="error-message">{error}</p>}
                    </form>
                )}
            </div>
        </div>
    );
};

export default NewsLetterSignup;
