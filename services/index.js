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

exports.insert = function (tablename, values) {
  return new Promise((resolve, reject) => {
    let query = `INSERT INTO ${tablename} SET ${values}`;
    console.log(query);
    // execute the insert statment
    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      }
      // get inserted id
      resolve(results.insertId);
    });
  });
};

exports.fetchAndwhere = function (tableName, condition = "", orderBy) {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM ${tableName}  ${condition} ORDER BY ${orderBy}`;
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};

exports.fetchwithprojection = function (tableName, values, condition = "") {
  return new Promise((resolve, reject) => {
    let query = `SELECT ${values} FROM ${tableName}  ${condition}`;
    console.log(query);
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};

exports.fetchAndwhereWithLimit = function (
  tableName,
  condition = "",
  orderBy = "",
  limit = ""
) {
  return new Promise((resolve, reject) => {
    let query = `SELECT * FROM ${tableName}  ${condition} ORDER BY ${orderBy} limit ${limit}`;
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};

exports.joinTable = function (
  tableNameFirst,
  tableNameSecond,
  valuesFirst,
  valuesSecond,
  join,
  condition,
  where = "",
  orderBy = "",
  limit = ""
) {
  return new Promise((resolve, reject) => {
    let query = `SELECT ${valuesFirst},${valuesSecond} FROM ${tableNameFirst} ${join}
          ${tableNameSecond} ON ${condition} ${where} ${orderBy} ${limit}`;
    console.log(query);
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};

exports.fetchDistinct = function (tableName, values, groupby) {
  return new Promise((resolve, reject) => {
    let query = `SELECT Distinct ${values} FROM ${tableName}  GROUP BY ${groupby}`;
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};

exports.update = function (tableName, condition, values) {
  return new Promise((resolve, reject) => {
    let query = `UPDATE  ${tableName} SET ${values} ${condition}`;
    console.log(query);
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};

exports.deleteData = function (tableName, condition) {
  return new Promise((resolve, reject) => {
    let query = `DELETE FROM ${tableName} WHERE ${condition}`;
    // execute the select statment
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      }
      // get data
      resolve(results);
    });
  });
};
