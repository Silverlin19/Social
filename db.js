const Sequelize = require("sequelize");

const sequelize = new Sequelize("heroku_67514816a5564ab", "bbec476499053a", "8923a034", {
    host: 'us-cdbr-east-03.cleardb.com',
    dialect: "mysql"});

module.exports = sequelize;
global.sequelize = sequelize;

