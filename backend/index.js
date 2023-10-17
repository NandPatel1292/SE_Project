// all imports
const express = require("express");
const dotenv = require("dotenv");

// all variables
const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.PORT);

// config
dotenv.config();

// all middleware uses
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// error handeling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
})

// Server connect
app.listen(port, function () {
  console.log("Example app listening on port 3000!");
});
