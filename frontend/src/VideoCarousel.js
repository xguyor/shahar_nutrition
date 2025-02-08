import React, { useState, useEffect } from "react";
import "./VideoCarousel.css";

const CHANNEL_ID = "UCTD8JBEtEbuQULxAG-w5mSQ"; // 🔹 Replace with your actual YouTube Channel ID
const PROXY_URL = "https://api.allorigins.win/get?url="; // ✅ Free CORS Proxy

function VideoCarousel() {
    const [videos, setVideos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchYouTubeVideos = async () => {
            try {
                const response = await fetch(`${PROXY_URL}${encodeURIComponent(`https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`)}`);
                const data = await response.json();

                // ✅ Parse XML manually
                const parser = new DOMParser();
                const xmlDoc = parser.parseFromString(data.contents, "text/xml");
                const entries = xmlDoc.getElementsByTagName("entry");

                let videoList = [];
                for (let i = 0; i < entries.length; i++) {
                    const id = entries[i].getElementsByTagName("yt:videoId")[0]?.textContent;
                    const title = entries[i].getElementsByTagName("title")[0]?.textContent;
                    const thumbnail = `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
                    const url = `https://www.youtube.com/embed/${id}`;

                    videoList.push({ id, title, thumbnail, url });
                }

                if (videoList.length > 0) {
                    setVideos(videoList);
                }
            } catch (error) {
                console.error("Error fetching YouTube videos:", error);
            }
        };

        fetchYouTubeVideos();
    }, []);

    const nextVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    const prevVideo = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
    };

    return (
        <div className="carousel-container">
            <h2>תוכן מיוטיוב 🎥</h2>

            {/* ✅ Show One Video at a Time */}
            {videos.length > 0 && (
                <div className="video-wrapper">
                    <iframe
                        src={videos[currentIndex].url}
                        title="YouTube Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    {/* ✅ Previous & Next Buttons */}
                    <button className="carousel-btn left" onClick={prevVideo}>❮</button>
                    <button className="carousel-btn right" onClick={nextVideo}>❯</button>
                </div>
            )}
        </div>
    );
}

export default VideoCarousel;
