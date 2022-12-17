// config env

require('dotenv').config();

module.exports = {
  DB_USERNAME: process.env.DB_USERNAME,
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
};
