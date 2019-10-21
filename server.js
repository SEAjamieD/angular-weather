const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// CREATE LINK TO ANGULAR BUILD DIRECTORY
const distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Initialize the app
const server = app.listen(process.env.PORT || 8080, function() {
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
  res.status(200).json("api hit");
});
