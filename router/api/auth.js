const express = require("express");
const { registerUsers } = require("../../controllers/auth");
const router = express.Router();

// signup

router.post("/register", registerUsers);

module.exports = router;
