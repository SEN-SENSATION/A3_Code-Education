const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("node-complete", "root", "ssdevelopers.xyz", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
