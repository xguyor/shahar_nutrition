import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Recipes.css";

const recipeList = [
    {
        title: "🎃 דלורית ממולאת בבשר וטחינה",
        description: "🥘 **דלורית ממולאת בבשר וטחינה**\n\n" +
            "**🔹 מצרכים:**\n" +
            "🎃 דלורית אחת (בינונית)\n" +
            "-----------------------------\n" +
            "🥩 200 גרם בשר טחון\n" +
            "-----------------------------\n" +
            "🥄 1/2 כף טחינה גולמית\n" +
            "-----------------------------\n" +
            "🍋 חצי לימון סחוט\n" +
            "-----------------------------\n" +
            "🧂 מלח לפי הטעם\n" +
            "-----------------------------\n" +
            "🥫 רוטב עגבניות (אופציונלי)\n\n" +
            "**🔹 אופן ההכנה:**\n" +
            "🔪 **שלב 1:** חוצים את הדלורית ומנקים מגרעינים.\n\n" +
            "🔥 **שלב 2:** מכניסים לתנור על **230°C** למשך **40 דקות**, עד לריכוך מלא.\n\n" +
            "🍳 **שלב 3:** במחבת חמה, מטגנים את הבשר הטחון עד שהוא משחים (אפשר להוסיף רוטב עגבניות 🥫).\n\n" +
            "🥣 **שלב 4:** מערבבים טחינה עם מיץ לימון ומלח לקבלת רוטב חלק.\n\n" +
            "🥄 **שלב 5:** ממלאים את הדלורית הרכה בבשר ומזלפים מעל את הטחינה.\n\n" +
            "😋 **בתיאבון!**",
        videoUrl: "https://www.instagram.com/p/DFvPB1PIbcR/"
    },
    {
        title: "🥒 קישוא ופרגית",
        description: "🥘 **קישוא ופרגית ברוטב טחינה**\n\n" +
            "**🔹 מצרכים:**\n" +
            "🥒 2 קישואים גדולים\n" +
            "-----------------------------\n" +
            "🥚 4 ביצים\n" +
            "-----------------------------\n" +
            "🧀 מעט פרמז’ן מגורד\n" +
            "-----------------------------\n" +
            "🍗 פרגית צלויה\n" +
            "-----------------------------\n" +
            "🥗 עלי חסה\n" +
            "-----------------------------\n" +
            "🥄 1 כף טחינה דלילה\n\n" +
            "**🔹 אופן ההכנה:**\n" +
            "🔪 **שלב 1:** גרדו את הקישואים בפומפייה 🥒\n\n" +
            "🔥 **שלב 2:** תסחטו היטב את הנוזלים 💧\n\n" +
            "🍳 **שלב 3:** בקערה, ערבבו את הקישואים עם הביצים 🥚\n\n" +
            "🧀 **שלב 4:** הוסיפו את הפרמז’ן המגורד 🧀.\n\n" +
            "🥄 **שלב 5:** העבירו את התערובת לתבנית עם נייר אפייה 📄, ופזרו בעדינות.\n\n" +
            "🔥 **שלב 6:** אפו בתנור שחומם מראש ל-200 מעלות 🔥 למשך 20 דקות.\n\n" +
            "🔪 **שלב 7:** הוציאו מהתנור, חתכו את הלאפה לשניים 🥪 ותחתכו את הלאפה לשניים.\n\n" +
            "🍗 **שלב 8:** מלאו כל לאפה בפרגית 🍗, כף טחינה 🥄, וחסה 🥗.\n\n" +
            "😋 **בתיאבון!**\n",
        videoUrl: "https://www.instagram.com/p/DEVFolNIubx/"
    },
    {
        title: "🥮 חטיף חלבון ביתי, בריא וקל להכנה 🏋️‍♂️",
        description: "🥘 **חטיף חלבון בריא וטעים**\n\n" +
            "**🔹 מצרכים:**\n" +
            "🎃 דלורית שלמה\n" +
            "-----------------------------\n" +
            "🍌 3 בננות\n" +
            "-----------------------------\n" +
            "💪 3 סקופים אבקת חלבון (בטעם שוקולד, אני השתמשתי באבקה מחלב גראס פד וממתיק סטיביה )\n" +
            "-----------------------------\n" +
            "🧂 נגיעה של מלח\n" +
            "-----------------------------\n" +
            "🍫 חטיף בר טבעי בטעם תמר מג’הול, אגוזי לוז, קשיו ושברי קקאו\n\n" +
            "**🔹 אופן ההכנה:**\n" +
            "1️⃣ **שלב 1:** חותכים 🎃 דלורית שלמה ל-4 חלקים, מוציאים את התכולה, ומכניסים לתנור שחומם מראש ל-200 מעלות 🔥 למשך 40 דקות לפחות.\n\n" +
            "2️⃣ **שלב 2:** מוציאים את התוכן הרך מהדלעת ומועכים אותו יחד עם 🍌 3 בננות עד שהתערובת חלקה.\n\n" +
            "3️⃣ **שלב 3:** מוסיפים 3 סקופים של אבקת חלבון 💪, ומערבבים היטב.\n\n" +
            "4️⃣ **שלב 4:** מתבלים בנגיעה 🧂 של מלח ומעבירים את התערובת לתבנית.\n\n" +
            "5️⃣ **שלב 5:** 🍫 מוסיפים חטיף בר - בריא, מערבבים ומשטחים.\n\n" +
            "6️⃣ **שלב 6:** מכניסים למקפיא ❄️ לכמה שעות עד שהחטיף מתקשה.\n\n" +
            "המערכת של בר - בריא מכילה 100% רכיבים טבעיים, ללא גלוטן ומתאימים לטבעוניים.\n\n" +
            "לרכישה דרך האתר: 🏷️💻\n\n" +
            "בשיתוף עם @barbary_il\n",
        videoUrl: "https://www.instagram.com/p/DEDIHjpIuVB/"
    },
    {
        title: "🍽️ אוכל טעים ובריא ללא כימיקלים",
        description: "🥘 **האמונה שלי באוכל בריא**\n\n" +
            "אני מאמין שכדי להכין אוכל טעים ובריא לא צריך להשתמש במתכונים שמכילים כימיקלים שפיתחו במעבדה.\n\n" +
            "עדיף להתמקד ברכיבים איכותיים באוכל שאתם אוכלים ולא לנסות לחסוך בקלוריות בכל דרך אפשרית.\n\n" +
            "לעוד תוכן בנושא תזונה תמשיכו לעקוב🔔",
        videoUrl: "https://www.instagram.com/reel/DBGglQHI3pd/?igsh=NDFjMWFrYjF2bWZh"
    },
];

function Recipes({ closeOverlay }) {
    const navigate = useNavigate();
    const overlayRef = useRef(null);

    useEffect(() => {
        const loadInstagramScript = () => {
            if (!window.instgrm) {
                const script = document.createElement("script");
                script.async = true;
                script.src = "https://www.instagram.com/embed.js";
                document.body.appendChild(script);

                script.onload = () => {
                    // Process Instagram embeds for all recipes
                    window.instgrm.Embeds.process();
                };
            } else {
                window.instgrm.Embeds.process(); // If the script is already loaded, process the embeds immediately
            }
        };

        loadInstagramScript(); // Trigger script loading and processing
    }, []);

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
                {/* Separate Close Button and Title */}
                <div className="recipes-header">
                    <div className="close-container">
                        <button className="close-btn" onClick={closeOverlay || (() => navigate("/"))}>✖</button>
                    </div>
                    <h2 className="recipes-title">מתכונים בריאים 🍽️</h2>
                </div>

                <p>כאן תוכלו למצוא מתכונים טעימים, מזינים וקלים להכנה!</p>

                <div className="recipes-grid">
                    {recipeList.map((recipe, index) => (
                        <div
                            key={index}
                            className="recipe-card"
                            onClick={() => navigate(`/recipes/${index}`, {state: {recipe}})}
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
