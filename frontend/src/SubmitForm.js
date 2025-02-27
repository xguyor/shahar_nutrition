import React, { useState, useEffect } from "react";
import "./SubmitForm.css";

function SubmitForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        goals: "",
    });

    const [showSuccess, setShowSuccess] = useState(false); // ✅ Success message state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbzaHmyzofnkHt_m_qnXrfM49wR5DOnxLVTv2prso6cUsb1pZVQGcSIJSMjfyzvhPFOp/exec";

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(GOOGLE_SHEET_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(formData),
        });

        // ✅ Show success message
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000); // ✅ Hide after 3 seconds

        // ✅ Clear form fields
        setFormData({ name: "", email: "", phone: "", goals: "" });
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
                    <h2>שגרו אליי את הפרטים שלכם</h2>
                    <form className="customer-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="שם מלא"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="אימייל"
                            required
                        />
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="מספר טלפון"
                        />
                        <textarea
                            name="goals"
                            value={formData.goals}
                            onChange={handleChange}
                            placeholder="מהן המטרות שלך בתכנית?"
                            rows="4"
                        />
                        <button type="submit">שלח!</button>
                    </form>
                </div>
            </section>

            {/* ✅ Success message */}
            {showSuccess && <div className="success-message show">✅ הטופס נשלח בהצלחה!</div>}
        </>
    );
}

export default SubmitForm;
