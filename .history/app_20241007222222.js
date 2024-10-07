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
  },
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
});
