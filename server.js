const express = requre("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// Initialize the app
const server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log(`App running on port ${port}`);
});

// API ROUTES BELOW

// Generic error handler
const handleError = (res, reason, message, code) => {
  console.log(`ERROR: ${reason}`);
  res.status(code || 500).json({ error: message });
};

app.get("/api/test", function(req, res) {
  console.log("api hit");
});
