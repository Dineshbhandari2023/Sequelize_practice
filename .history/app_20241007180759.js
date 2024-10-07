const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TestDb", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});
