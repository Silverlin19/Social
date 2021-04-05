module.exports = async () => { 
    const Post = require("./models/post")/*pointer to posts table*/
    const User = require("./models/user")/*pointer to accounts table*/

    const errHand = (err)=> {
        console.error("Error: ",)
    }

//create user

    const createUser = await User.create({ 
        name: `${name}`, 
        email: `${email}`, 
        password:`${password}`, 
        birthday: `${birthday}`, 
        bio: `${bio}`,
    }).catch(errHand)

//create post

    const createPost = await Post.create({ 
        content: `${content}`, 
        userId: user.userId,
    }).catch(errHand) 

//find user

    const findUser = await User.findOne({
        where: {name: `${namevariable}`}
    }).catch(errHand)

//find user and post

    const userPosts = await User.findOne({ 
        where: { name: `${name}` }, 
        include: [ { model: Post, as: "Posts" } ] 
    }).catch(errHand)
    
//find post

    const findPosts = await Post.findAll({
        where: { userId: `${userIdVariable}`}
    }).catch(errHand)

//search post global must require Op from sequelize

    const searchPosts= await Post.findAll({
        where: { [Op.like]: `${searchVariable}` }
    })

}

async function showFollowed(req,res){

    var userid = await User.findOne({
        where: {name: `${req.params.userName}`}
    }).catch(errHand)

    var userFriends = await Friend.findAll({ 
    where: { owneracc: userid.userId }, 
    include: [ { model: account, as: "" } ] 
}).catch(errHand)

}