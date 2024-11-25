const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Allow requests from React app
app.use(express.json());

// API endpoint
app.get("/api/message", (req, res) => {
    res.json({ message: "Hello from Node.js backend!" });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
