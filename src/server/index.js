const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const { analyze } = require("./mockAPI.js");

// Using cors
app.use(cors());

// Configure env files
dotenv.config();

const PORT = process.env.PORT || 3000;
const API_KEY = process.env.API_KEY;

// Read the JSON file
app.use(express.static('dist'));
app.use(express.json());
// Handle POST request to /analyze endpoint
app.post("/", async (req, res) => {
  const { URI } = req.body;
  
  // Check if URI is missing or empty
  if (!URI) {
    return res.status(400).send({ msg: "URL is required", code: 400 });
  }

  try {
    const analysisResult = await analyze(URI, API_KEY);
    const { code, msg, sample } = analysisResult;

    if (code == 212) {
      return res.status(400).send({ msg: msg, code: 212 });
    } else if (code == 100) {
      return res.status(400).send({ msg: "Invalid URL", code: 100 });
    }

    return res.status(200).send({ msg: msg, sample: sample, code: code });
  } catch (error) {
    console.error("Error in analysis:", error);
    return res.status(500).send({ msg: "Internal server error", code: 500 });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
