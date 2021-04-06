const Sequelize = require("sequelize")

module.exports = sequelize.define("friends", {
    userId: {type: Sequelize.INTEGER(11),
    references: {model: 'accounts' , key: 'id'}
    },
    friendId: {type: Sequelize.INTEGER(11),
    referneces: {model: 'accounts' , key: 'id'}}  
})