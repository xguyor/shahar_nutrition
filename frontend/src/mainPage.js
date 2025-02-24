import { useEffect } from "react";

function MainPage() {
    useEffect(() => {
        window.location.href = "/landingPage/index.html";
    }, []);

    return null; // or a loading message
}

export default MainPage;