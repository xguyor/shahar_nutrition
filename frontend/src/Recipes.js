import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Recipes.css";

const recipeList = [
    {
        title: "🥩 מתכון 1",
        description: "🥘 מתכון קל וטעים: דלורית ממולאת בבשר וטחינה\n" +
            "מצרכים:\n" +
            "🎃 דלורית אחת (בינונית)\n" +
            "🥩 200 גרם בשר טחון\n" +
            "🥄 1/2 כף טחינה גולמית\n" +
            "🍋 חצי לימון סחוט\n" +
            "🧂 מלח לפי הטעם\n" +
            "🥫 רוטב עגבניות ( לשיפור)\n" +
            "אופן הכנה:\n" +
            "🔪 חותכים את הדלורית לחצי ומנקים מגרעינים.\n" +
            "🔥 מכניסים לתנור על 230°C לכ-40 דקות, עד שהיא מתרככת.\n" +
            "🍳 במחבת חמה, מטגנים את הבשר הטחון עד שהוא שחום ( אני הוספתי רוטב עגבניות 🥫) .\n" +
            "🥣 מערבבים טחינה עם מיץ לימון ומלח לקבלת רוטב חלק.\n" +
            "🥄 ממלאים את הדלורית הרכה בבשר ומזלפים מעל את הטחינה.\n" +
            "\n" +
            "😋 בתיאבון!",
        videoUrl: "https://www.instagram.com/p/DFvPB1PIbcR/"
    },
    {
        title: "🍳 מתכון 2",
        description: "מתכון לחביתה בריאה",
        videoUrl: "https://www.instagram.com/video2"
    },
    {
        title: "🍍 מתכון 3",
        description: "מתכון לפירות",
        videoUrl: "https://www.instagram.com/video3"
    },
    {
        title: "🏋️‍♀️ מתכון 4",
        description: "מתכון לארוחה מאוזנת",
        videoUrl: "https://www.instagram.com/video4"
    },
];

function Recipes({ closeOverlay }) {
    const navigate = useNavigate();
    const overlayRef = useRef(null);

    // Close Recipes overlay when clicking outside
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
    }, [navigate]);


    return (
        <div className="recipes-overlay">
            <div ref={overlayRef} className="recipes-content">
                <h2>מתכונים בריאים 🍽️</h2>
                <p>כאן תוכלו למצוא מתכונים טעימים, מזינים וקלים להכנה!</p>

                <div className="recipes-grid">
                    {recipeList.map((recipe, index) => (
                        <div
                            key={index}
                            className="recipe-card"
                            onClick={() => navigate(`/recipes/${index}`, { state: { recipe } })}
                        >
                            {recipe.title}
                        </div>
                    ))}
                </div>

                <p className="coming-soon">📢 בקרוב יתווספו עוד מתכונים בריאים!</p>
            </div>
        </div>
    );
}

export default Recipes;
