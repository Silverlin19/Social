const Sequelize = require("sequelize")

module.exports = sequelize.define("Posts", {
    owneracc: Sequelize.INTEGER(11),
    friendacc: Sequelize.INTEGER(11)  
})