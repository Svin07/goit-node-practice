const express = require("express");
require("./app");
const { PORT } = require("./envConfig");

const app = express();

app.listen(PORT, () => {
  console.log("server run on port", PORT);
});

module.exports = app;
