import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import MainPage from "./mainPage";
import NewsLetterSignup from "./NewsLetterSignup";

function App() {
    return (
        <Router>
            <Routes>
                {/* ✅ Default Route: Main Page */}
                <Route path="/" element={<MainPage />} />

                {/* ✅ Direct Route for Newsletter Signup */}
                <Route path="/newsletter" element={<NewsLetterSignup />} />

                {/* ✅ Redirect Unknown Routes to Home */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
}

export default App;
