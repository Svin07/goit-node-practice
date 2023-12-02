const Joi = require("joi");

const addContactSchema = Joi.object({
  name: Joi.string().required(),
  phone: Joi.string().required(),
  date: Joi.string().required(),
});

const addContactValidation = async (req, res, next) => {
  try {
    const { error } = addContactSchema.validate(req.body);
    if (error) {
      throw error;
    }
  } catch (error) {
    next(error);
  }
};
module.exports = { addContactValidation };
