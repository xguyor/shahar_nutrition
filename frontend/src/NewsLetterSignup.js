import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewsLetterSignup.css";

const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycby4Tp-pzPC_vco8QCVVA698d_c5urEe_A5xiWyFo3Kq8zEWDfgHey5YSi6zX169EuEv-Q/exec";

const NewsLetterSignup = ({ closeOverlay }) => {
    useEffect(() => {
        window.location.href = "/newsletter/index.html";
    }, []);

    return null; // or a loading message
};

export default NewsLetterSignup;
