const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TestDb", "root", "123", {
  host: "localhost",
  dialect: "mysql",
});

const func = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch {
    console.error("Unable to connect to the database:", error);
  }
};

func();
