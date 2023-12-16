require("dotenv").config();

const envConfig = {
  PORT: process.env.PORT,
  DB_HOST: process.env.DB_HOST,
  SECRET_KEY: process.env.SECRET_KEY,
};

module.exports = envConfig;
