require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./src/routes");
const errorMiddleware = require("./src/middlewares/error-middleware");
const app = express();
const PORT = Number(process.env.PORT) || 3001;

//add middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Example app listening on PORT=${PORT}!`));
  } catch (e) {
    console.log(e);
  }
};

start();
