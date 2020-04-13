const Sequelize = require("sequelize");
const squelize = require("../utils/database");

const todo = squelize.define("Todo", {
  id: {
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  done: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  
});

module.exports = todo;
