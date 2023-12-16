const registerUsers = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // const user= await User
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUsers };
