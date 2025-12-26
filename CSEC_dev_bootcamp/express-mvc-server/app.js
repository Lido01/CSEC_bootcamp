const express = require("express");
const mainRoutes = require("./routes/mainRoutes");

const app = express();
const PORT = 3000;

// Middleware to handle JSON
app.use(express.json());

// Routes
app.use("/api", mainRoutes);

// Handle unknown routes (Bonus)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
