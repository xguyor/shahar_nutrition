import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import PreviewPage from "./preview";
import MainPage from "./mainPage";
import NewsLetterSignup from "./NewsLetterSignup";
import Recipes from "./Recipes";
import Recipe from "./Recipe";

function App() {
    const [showPreview, setShowPreview] = useState(true);

    const handleEnter = () => {
        setShowPreview(false);
    };

    return (
        <Router>
            <Routes>
                {/* ✅ Default Route: Shows Preview or Main Page */}
                <Route
                    path="/"
                    element={showPreview ? <PreviewPage onEnter={handleEnter} /> : <MainPage />}
                />

                {/* ✅ Direct Route for Newsletter Signup */}
                <Route path="/newsletter" element={<NewsLetterSignup />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/recipes/:id" element={<Recipe />} />

                {/* ✅ Redirect Unknown Routes to Home */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
