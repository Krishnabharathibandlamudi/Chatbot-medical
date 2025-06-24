const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getDepartment } = require("../symptomLogic");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/analyze", (req, res) => {
  const { symptoms } = req.body;
  const department = getDepartment(symptoms);
  res.json({ department });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
