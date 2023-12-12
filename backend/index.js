// package imports
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// file imports
const { connect } = require("./utils/database");
const authRouter = require("./routers/authRouter");
const userRouter = require("./routers/userRouter");
const productRouter = require("./routers/productRouter");
const billRouter = require("./routers/billRouter");

// import the dotenv
if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv").config();
}

// all variables
const app = express();
const port = process.env.PORT || 3000;

// config
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// all middleware uses
// auth router
app.use("/api/auth", authRouter);

// user router
app.use("/api/user", userRouter);

// product router
app.use("/api/product", productRouter);

// bill router
app.use("/api/bill", billRouter);

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
  console.log(`Server listening on port ${port}!`);
});
