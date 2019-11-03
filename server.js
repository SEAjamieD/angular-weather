require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

const app = express();
app.use(bodyParser.json());

const API_URL = "https://api.openweathermap.org/data/2.5";

// CREATE LINK TO ANGULAR BUILD DIRECTORY
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Initialize the app
const server = app.listen(process.env.PORT || 3000, function() {
  const port = server.address().port;
  console.log(`App running on port ${port}`);
});

// API ROUTES BELOW

// Generic error handler
function handleError(res, reason, message, code) {
  console.log(`ERROR: ${reason}`);
  res.status(code || 500).json({ error: message });
}

app.get("/api/test", function(req, res) {
  console.log("hit test");
});

app.get("/api/weather/:city", function(req, res) {
  console.log(`server getting weather for ${req.params.city}`);
  fetch(
    `${API_URL}/weather?q=${req.params.city},us&units=imperial&appid=${process.env.OPEN_WEATHER_API}`
  )
    .then(res => res.json()) // add check status in here for error handling
    .then(json => {
      res.status(200).send(json);
    });
});

app.get("/api/forecast/:city", function(req, res) {
  console.log(`server getting weather for ${req.params.city}`);
  fetch(
    `${API_URL}/forecast?q=${req.params.city},us&units=imperial&appid=${process.env.OPEN_WEATHER_API}`
  )
    .then(res => res.json()) // add check status in here for error handling
    .then(json => {
      res.status(200).send(json);
    });
});
