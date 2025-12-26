// Home route
exports.home = (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Express MVC Server 🚀",
  });
};

// About route
exports.about = (req, res) => {
  res.json({
    success: true,
    message: "This is a simple Express.js backend using MVC pattern",
  });
};

// Contact route
exports.contact = (req, res) => {
  res.json({
    success: true,
    email: "contact@example.com",
    phone: "+1234567890",
  });
};

// Dynamic data route
exports.getTime = (req, res) => {
  res.json({
    success: true,
    currentTime: new Date().toLocaleString(),
  });
};

// POST route (JSON input)
exports.echoData = (req, res) => {
  const data = req.body;

  // Simple validation (Bonus)
  if (!data || Object.keys(data).length === 0) {
    return res.status(400).json({
      success: false,
      message: "No JSON data provided",
    });
  }

  res.json({
    success: true,
    receivedData: data,
  });
};
