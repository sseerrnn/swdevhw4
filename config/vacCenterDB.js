const mysql = require("mysql");

var connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Anavitjed1$",
  database: "vacCenter",
});
console.log("Connected to vacCenterDB");

module.exports = connection;
