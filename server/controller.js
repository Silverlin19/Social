require('express')
const Post = require('./models/post')
const User = require("./models/user")
const Friend = require('./models/friend')
const errHand = (err)=> {
    console.error("Error: ", err)
}

//User ineractive pages
async function doLogin(req,res){
    //make login function
        res.cookie('userId', `${req.body.userId}`).send('cookie set')
        res.redirect(`/user/${req.body.name}/feed`)
}

async function showRegister (req,res){
    
}

async function doRegister (req,res){
    
    var createUser = await User.create({ 
        name: `${req.body.name}`, 
        email: `${req.body.email}`, 
        password:`${req.body.password}`, 
        birthday: `${req.body.birthday}`,
        bio: `${req.body.bio}`
    }).catch(errHand)

    console.log(`account ${createUser} has been created`)

    res.redirect('/user/:userName/feed')
}

async function doUpdateAccount (req,res){
    
    var accountPointer = await User.findOne({
        where: {name: `${req.params.userName}`}
    }).catch(errHand)
    
    if (req.body.name != null){accountPointer.name = req.body.name}
    if (req.body.password != null){accountPointer.password = req.body.password}
    if (req.body.email != null){accountPointer.email = req.body.email}
    if (req.body.bio != null){accountPointer.bio = req.body.bio}
    if (req.body.userName != null){accountPointer.userName = req.body.userName}

    accountPointer = await accountPointer.save()

    res.send('slurped')
}

async function doFollowUser (req,res){

}

//API = doFunctionName
async function doGetUser(req,res){
        var user = await User.findOne({
            where: {name: `${req.params.userName}`}
        }).catch(errHand);

        res.json(user)
    }

async function doFollow(req,res){

    var followPointer = await User.findOne({
        where: {name: `${req.params.userName}`}
    })

    var follow = await Friend.create()

}

async function showFollowed(req,res){

    var userid = await User.findOne({
        where: {name: `${req.params.userName}`}
    }).catch(errHand)

    Friend.hasMany(User, {as: "User" , foreignKey: 'friendacc' })
    User.belongsTo(Friend, { as: "Friend" , foreignKey: "userId"})

    var userFriends = await Friend.findAll({ 
    where: { owneracc: userid.userId }, 
    include: [ { model: User , attributes: [] } ] 
    }).catch(errHand)
    res.send(userFriends)
}


async function doExample (req,res){
    
        //function goes here

    }    

module.exports = { doGetUser , doLogin , showRegister , doRegister, doUpdateAccount , showFollowed , doFollow }