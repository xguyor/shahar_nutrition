import React, { useState } from "react";
import "./VideoCarousel.css";  // Add CSS for styling

const videos = [
    "https://www.youtube.com/embed/623a-tQ0TaY",  // Example Video 1
    "https://www.youtube.com/embed/GXAderCGS0E",  // Example Video 2
    "https://www.youtube.com/embed/on7tMuVOK58",  // Example Video 3
];

function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="carousel-container">
            <h2>תוכן מיוטיוב</h2>
            <div className="video-wrapper">
                <iframe
                    src={videos[currentIndex]}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <button className="carousel-btn left" onClick={prevVideo}>❮</button>
                <button className="carousel-btn right" onClick={nextVideo}>❯</button>
            </div>
        </div>
    );
}

export default VideoCarousel;
