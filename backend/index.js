// all imports
const express = require("express");
const authRouter = require("./routers/authRouter");
const { connect } = require("./utils/database");

// import the dotenv
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv").config();
}

// all variables
const app = express();
const port = process.env.PORT || 3000;

// config
app.use(express.json());

// all middleware uses
// user router
app.use("/api/auth", authRouter);

// error handeling
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    message,
  });
});

// Server connect
app.listen(port, async () => {
  // connect to database
  await connect();

  // console.log
  console.log("Example app listening on port 3000!");
});
