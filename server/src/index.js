require("dotenv").config();
const express = require("express");
const cors = require("cors");

openaiRoutes = require("./routes/openaiRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the AutoCorrect API");
});

app.use(openaiRoutes);

app.listen(5000, () => console.log("Server running on port 5000", URL = "http://localhost:5000/"));
