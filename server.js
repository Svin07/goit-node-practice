const express = require("express");

const { PORT, DB_HOST } = require("./envConfig");

const { default: mongoose } = require("mongoose");

const app = require("./app");

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("server run on port", PORT);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
