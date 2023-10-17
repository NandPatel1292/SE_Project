// all imports
const express = require("express");
const dotenv = require("dotenv");

// all variables
const app = express();

// config
dotenv.config();

// all middleware uses
app.get("/", function (req, res) {
  res.send("Hello World!");
});

// error handeling
app.use((err, req, res, next) => {

})

// Server connect
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
