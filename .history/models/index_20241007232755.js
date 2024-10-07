const dbConfig = require("../app");

const sequelize = dbConfig.sequelize;
const Sequelize = dbConfig.Sequelize;

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

