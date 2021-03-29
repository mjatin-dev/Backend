const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

// connect to database
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
exports.connection = db;
