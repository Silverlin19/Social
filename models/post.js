const Sequelize = require("sequelize")
const sequelize = require("../db")

module.exports = sequelize.define("Posts", {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: Sequelize.INTEGER(11),
        allownull: false
    },
    content: {
        type: Sequelize.STRING(500),
        allowNull: false
    } 
})