require('express')
const {Friend, Post, User} = require('./models')
const errHand = (err)=> {
    console.error("Error: ", err)
}

async function getUser (userName){
    return await User.findOne({
        where: {userName: `${userName}`}
    }).catch(errHand);
    
}

async function getUserByName (name){
    return await User.findOne({
        where: {name: `${name}`}
    }).catch(errHand);
    
}

async function getUserByEmail (email){
    return await User.findOne({
        where: {email: `${email}`}
    }).catch(errHand);

}

async function getPostsByUserId (userId){
    return await Post.findAll({
        where: {userId: `${userId}`}
    }).catch(errHand);
 
}

module.exports = { getUser, getUserByEmail , getPostsByUserId , getUserByName }
