// const app = require("./server");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const contactsRouter = require("./router/api/contacts.js");
const authRouter = require("./router/api/auth.js");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/contacts", contactsRouter);

app.use("/api/auth", authRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found" });
});
app.use((err, req, res, next) => {
  const { status = 500, message = "Server error!" } = err;
  res.status(status).json({ message });
});

module.exports = app;
