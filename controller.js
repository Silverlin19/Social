require('express')
const bcrypt = require('bcryptjs');
const passport = require('passport')
const {Friend, Post, User} = require('./models')
const accounts = require('./accounts')




const errHand = (err)=> {
    console.error("Error: ", err)
}

async function userPage(req,res) {
  myUser = await accounts.getUser(req.params.userName)
  
  res.render('user',{data:myUser})
}

//User ineractive pages
async function doLogin(req,res){

  myUser = await accounts.getUserByEmail(req.body.email)
  
  if (req.body.email == myUser.email || req.body.password == myUser.password) {
    res.cookie('userId', `${myUser.userId}`)
    res.cookie('userbio', `${myUser.userbio}`)
    res.cookie('userName', `${myUser.userName}`)

    res.redirect(`/user/${myUser.userName}/feed`)

  } else{res.redirect(`/login`)
  console.log('login failed')
}

}

async function doUpdateAccount (req,res){


    if (req.body.name != null){user.doGetUser.name = req.body.name}
    if (req.body.password != null){user.doGetUser.password = req.body.password}
    if (req.body.email != null){user.doGetUser.email = req.body.email}
    if (req.body.bio != null){user.doGetUser.bio = req.body.bio}
    if (req.body.userName != null){user.doGetUser.userName = req.body.userName}

    user.doGetUser = await user.doGetUser.save()

    res.send('slurped')
}

async function doPost (req,res){

  /*var user = await User.findOne({
    where: {userName: `${req.params.userName}`}
  }).catch(errHand)
*/
  const createPost = await Post.create({ 
    content: `${req.body.content}`, 
    userId: `${user.doGetUser.userId}`,
}).catch(errHand)

}

async function doFollowUser (req,res){

}

//API = doFunctionName
/*async function doGetUser(req,res){
        var user = await User.findOne({
            where: {userName: `${req.params.userName}`}
        }).catch(errHand);
        var data = { name: `${user.name}`, bio: `${user.bio}`, birthday: `${user.birthday}`, userName: `${user.userName}`}
        
        console.log(data)
        res.render('user',{data:data})
    }
*/
    async function doGetBio(req,res){
      var user = await User.findOne({
          where: {userName: `${req.params.userName}`}
      }).catch(errHand);
      var data = { name: `${user.name}`, bio: `${user.bio}`, birthday: `${user.birthday}`, userName: `${user.userName}`}
      
      console.log(data)
      res.render('bio',{data:data})
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


    var userFriends = await Friend.findAll({ 
    where: { owneracc: userid.userId }, 
    include: [ { model: User , attributes: [] } ]
    }).catch(errHand)

    res.send(userFriends)
}

async function createUser (req,res){
    
    const { name, userName , email, birthday, password, password2 } = req.body;
    let errors = [];
  
    if (!name || !userName || !email || !birthday|| !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        userName,
        email,
        birthday,
        password,
        password2
      });
    } else {
      User.findOne({where:{email: `${email}`} }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            userName,
            email,
            birthday,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            userName,
            email,
            birthday,
            password
          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }

}

async function doExample (req,res){
    
        //function goes here

    }    

module.exports = {  doLogin  , doUpdateAccount , showFollowed , doFollow, doPost, createUser , doGetBio,userPage}