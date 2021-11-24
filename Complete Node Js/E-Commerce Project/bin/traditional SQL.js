const mySql = require("mysql2");

const pool = mySql.createPool({
  host: "localhost",
  user: "root",
  database: "node-complete",
  password: "ssdevelopers.xyz",
});

module.exports = pool.promise();
