const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  db_host: process.env.DB_HOST,
  db_port: process.env.DB_PORT,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.API_KEY,
  port: process.env.PORT
};