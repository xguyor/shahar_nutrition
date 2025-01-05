const express = require("express");
const cors = require("cors");  // Import cors
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());  // Enable CORS for all routes

app.post("/submit", (req, res) => {
    const { name, email, phone, goals } = req.body;

    const formattedData = `
  Name: ${name}
  Email: ${email}
  Phone: ${phone || "N/A"}
  Goals: ${goals || "N/A"}
  -------------------------------
  `;
    console.log("Received Data:", req.body);  // Log incoming data

    const filePath = path.join(__dirname, "leads.txt");

    fs.appendFile(filePath, formattedData, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
            return res.status(500).send("Failed to save client information.");
        }
        res.send("Client information saved successfully!");
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
