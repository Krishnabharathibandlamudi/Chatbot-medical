const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const { getDepartment } = require("./symptomLogic");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from /public
app.use(express.static(path.join(__dirname, "../public")));

// Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.post("/analyze", (req, res) => {
  const { symptoms } = req.body;
  const department = getDepartment(symptoms);
  res.json({ department });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
