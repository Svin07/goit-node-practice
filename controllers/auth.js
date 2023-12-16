const authShemas = require("../shemas/authShemas");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");
const httpError = require("../helpers/httpError");
const { SECRET_KEY } = require("../envConfig");

const registerUsers = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({ message: "Email is already use" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ ...req.body, password: hashPassword });
    res.status(201).json({
      email: newUser.email,
      _id: newUser._id,
    });
  } catch (error) {
    next(error);
  }
};

const loginUsers = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw httpError(400, "Email or password is wrong");
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      throw httpError(400, "Email or password is wrong");
    }
    const payload = {
      id: user._id,
    };

    const token = JWT.sign(payload, SECRET_KEY, { expiresIn: "23h" });
    const newUser = await User.findByIdAndUpdate(
      user._id,
      { token },
      { select: "-token -createdAt -updatedAt -password" }
    );
    res.json({ newUser, token });
  } catch (error) {
    next(error);
  }
};
module.exports = { registerUsers, loginUsers };
