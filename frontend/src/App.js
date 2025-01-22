import React, { useState } from "react";
import PreviewPage from "./preview";
import MainPage from "./mainPage";

function App() {
    const [showPreview, setShowPreview] = useState(true);

    const handleEnter = () => {
        setShowPreview(false);
    };

    return (
        <>
            {showPreview ? <PreviewPage onEnter={handleEnter} /> : <MainPage />}
        </>
    );
}

export default App;
