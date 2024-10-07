const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TestDb", "root", "Dinesh@123", {
  host: "localhost",
  dialect: "mysql",
});

const func = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

func();
