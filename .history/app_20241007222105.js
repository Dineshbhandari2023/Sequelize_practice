const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testDb", "root", "Dinesh@123", {
  host: "localhost",
  dialect: "mysql",
});

const User = sequelize.define("User", {
  Id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    type: Sequelize.INTEGER,
  },
});
