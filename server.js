const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 5000; // Use environment PORT for deployment

// Middleware
app.use(express.json());
app.use(cors());

// Serve the React build files
const clientBuildPath = path.join(__dirname, "build");
app.use(express.static(clientBuildPath));

// API route
app.post("/submit", (req, res) => {
    const { name, email, phone, goals } = req.body;

    const formattedData = `
  Name: ${name}
  Email: ${email}
  Phone: ${phone || "N/A"}
  Goals: ${goals || "N/A"}
  -------------------------------
  `;
    console.log("Received Data:", req.body);

    const filePath = path.join(__dirname, "leads.txt");

    fs.appendFile(filePath, formattedData, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).send("Failed to save client information.");
        }
        res.send("Client information saved successfully!");
    });
});

// Catch-all route to serve React app for other requests
app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
