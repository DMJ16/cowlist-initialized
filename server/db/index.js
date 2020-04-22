// import mysql
const mysql = require("mysql");
// create tables
const configTables = require("./config.js");
// import Promise/bluebird
const Promise = require("bluebird");

// name the database
const database = "cowsDB";

// initialize connection to database
const connection = mysql.createConnection({
  user: "root",
  password: "",
});

// promisify the connection via bluebirds promisifyAll method
// set multiArgs to true so arrays are returned -- need single return
const db = Promise.promisifyAll(connection, { multiArgs: true });

// initialize async connection
// implicit as we invoke queries
// why is there no catch in Joe's solution code?
db.connectAsync()
  .then(() => `Connected to ${database} database`)
  // create database
  // Q: why do I not need ; at end of SQL statements
  .then(() => db.queryAsync(`CREATE DATABASE IF NOT EXISTS ${database}`))
  .then(() => db.queryAsync(`USE ${database}`))
  // Q: what is happening on this line?
  // A: creating tables
  .then(() => configTables(db));

module.exports = db;

// SEQUELIZE
// const Sequelize = require("sequelize");
// const Sequelize = new Sequelize("cows", "name", "description", {
//   host: "localhost",
//   dialect: "mysql",
// });
