// const app = require("./server");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const contactsRouter = require("./router/api/contacts.js");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/api/contacts", contactsRouter);

module.exports = app;
