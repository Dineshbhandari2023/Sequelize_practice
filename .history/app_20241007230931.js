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
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isNumeric: true,
      len: [10, 15],
    },
  },{
    timestamps: false,
  }
});

sequelize.sync();
