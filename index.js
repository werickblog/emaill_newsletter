const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const logs = require("morgan");
const routes = require("./routes");

const PORT = process.env.PORT || 3200;

const app = express();

// Define json body reader
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// add routes
app.use("/api", routes);

// add loggers
app.use(logs("dev"));

app.listen(PORT, err => {
  if (err) {
    console.log("[SERVER]::ERROR:%s", err.message);
  } else {
    console.log("[SERVER]::LISTEN:%s", PORT);
  }
});
