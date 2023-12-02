require("dotenv").config();

const envConfig = { PORT: process.env.PORT, DB_HOST: process.env.DB_HOST };

module.exports = envConfig;
