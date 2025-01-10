import React, { useState, useEffect } from "react";
import VideoCarousel from "./VideoCarousel";
import SubmitForm from "./SubmitForm";
import SocialLinks from "./SocialLinks"
import NavBar from "./NavBar";
import "./App.css";

function MainPage() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleSmoothScroll = (e) => {
            e.preventDefault();
            const target = document.querySelector(e.target.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        };

        document.querySelectorAll(".nav-links a").forEach((link) => {
            link.addEventListener("click", handleSmoothScroll);
        });

        return () => {
            document.querySelectorAll(".nav-links a").forEach((link) => {
                link.removeEventListener("click", handleSmoothScroll);
            });
        };
    }, []);

    return (
        <div className="App">
            <NavBar />

            <main>
                <SubmitForm/>
                <VideoCarousel/>
                <SocialLinks/> {/* Use the SocialLinks component here */}
            </main>

            <footer>
                <p>&copy; 2025 Shahar Nutrition. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default MainPage;
