const { Router, json } = require("express");
const Contact = require("../../models/contacts");
const { addContactValidation } = require("../../middlewares/contacts");

const contactsRouter = Router();

contactsRouter.get("/", async (req, res, next) => {
  try {
    console.log("success");
    res.status(204).json(null);
  } catch (error) {
    next(error);
  }
});

contactsRouter.post("/", addContactValidation, async (req, res, next) => {
  try {
    console.log("success");
    const result = await Contact.create(req.body);
    res.status(204).json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = contactsRouter;
