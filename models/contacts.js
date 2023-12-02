const { Schema, model } = require("mongoose");
const contactsSchema = new Schema();

const Contact = model("contact", contactsSchema);

module.exports = Contact;
