require('express')
const {Friend, Post, User} = require('./models')
const errHand = (err)=> {
    console.error("Error: ", err)
}

async function getUser (userName){
    var user = await User.findOne({
        where: {userName: `${userName}`}
    }).catch(errHand);

    return { name: `${user.name}`, bio: `${user.bio}`, birthday: `${user.birthday}`, userName: `${user.userName}`}
}

async function getUserByEmail (email){
    var user = await User.findOne({
        where: {email: `${email}`}
    }).catch(errHand);

    return { name: `${user.name}`, email: `${user.email}`, password: `${user.password}`, userName: `${user.userName}`}
}
module.exports = {getUser, getUserByEmail}
