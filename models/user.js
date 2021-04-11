const Sequelize = require("sequelize")
const sequelize = require('../db.js')

module.exports = sequelize.define("accounts", {
    userId: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: false,
    },
    userName: {
        type: Sequelize.STRING(500),
        allowNull: false,
        unique: true,
    },
    email: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    bio: {
        type: Sequelize.STRING(500),
        allowNull: true,
    },
    birthday: {
        type: Sequelize.DATE,
        allowNull: false,
    },
})