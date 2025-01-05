import React, { useState, useEffect } from "react";
import "./SubmitForm.css";

function SubmitForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        goals: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to save client information.");
                }
                return response.text();
            })
            .then((message) => {
                alert(message);
                setFormData({ name: "", email: "", phone: "", goals: "" });
            })
            .catch((error) => {
                console.error("Error:", error);
                alert("Failed to save client information.");
            });
    };

    // Spin transition effect on background change
    useEffect(() => {
        const formSection = document.querySelector(".form-section");
        const backgroundWrapper = document.querySelector(".background-wrapper");
        const observerOptions = {
            root: null,
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    backgroundWrapper.classList.add("full-page-bg");
                    formSection.classList.add("spin-transition");  // Add spin effect
                } else {
                    backgroundWrapper.classList.remove("full-page-bg");
                    formSection.classList.remove("spin-transition");  // Reset spin effect
                }
            });
        }, observerOptions);

        observer.observe(formSection);
    }, []);

    return (
        <>
            <div className="background-wrapper"></div> {/* Background */}
            <section className="form-section">
                <div className="form-card">
                    <h2>Get Started</h2>
                    <p>Sign up to receive personalized nutrition plans tailored for you!</p>
                    <form className="customer-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Full Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email Address"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number"
                        />
                        <textarea
                            name="goals"
                            value={formData.goals}
                            onChange={handleChange}
                            placeholder="Tell us your health goals..."
                            rows="4"
                        />
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SubmitForm;
