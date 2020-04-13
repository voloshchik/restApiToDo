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
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = todo;
