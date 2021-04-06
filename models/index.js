const Post = require('./post')
const User = require("./user")
const Friend = require('./friend')

User.belongsToMany(User, {as: "FriendId" , through: Friend , foreignKey: "friendacc"})
User.belongsToMany(User, { as: "Friend", through: Friend , foreignKey: "userId"})
User.hasMany(Post, {as: "Post" , foreignKey: 'userid' })

module.exports = { Post, User, Friend }