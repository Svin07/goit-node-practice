const express = require("express");
const { registerUsers, loginUsers } = require("../../controllers/auth");
const router = express.Router();

// signup

router.post("/register", registerUsers);
router.post("/login", loginUsers);

module.exports = router;
