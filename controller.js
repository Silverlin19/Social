require('express')
const bcrypt = require('bcryptjs');
const passport = require('passport')
const {Friend, Post, User} = require('./models')




const errHand = (err)=> {
    console.error("Error: ", err)
}

//User ineractive pages
async function doLogin(req,res){

  var accountPointer = await User.findOne({
    where: {email: `${req.body.email}`}
  }).catch(errHand)

  console.log(accountPointer)

  if (req.body.email == accountPointer.email || req.body.password == accountPointer.password) {
    res.cookie('userId', `${accountPointer.userId}`)

    res.redirect(`/user/${accountPointer.userName}/feed`)
  } else{res.redirect(`/login`)
  console.log('login failed')
}
        
}

async function doRegister (req,res){

var createUser = await User.create({ 
  name: `${req.body.name}`, 
  userName:`${req.body.userName}`,
  email: `${req.body.email}`, 
  password:`${req.body.password}`, 
  birthday: `${req.body.birthday}`,
  bio: `${req.body.bio}`
}).catch(errHand)

console.log(`account ${createUser.userName} has been created`)

res.redirect(`/login`)
    
    /*const { name, userName , email, password, password2 } = req.body;
    let errors = [];
  
    if (!name || !userName || !email || !password || !password2) {
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
        password,
        password2
      });
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            userNAme,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            userNAme,
            email,
            password
          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
                  res.redirect('/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }*/


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


    var userFriends = await Friend.findAll({ 
    where: { owneracc: userid.userId }, 
    include: [ { model: User , attributes: [] } ]
    }).catch(errHand)

    res.send(userFriends)
}

async function createUser (req,res){
    
    const { name, userNAme , email, password, password2 } = req.body;
    let errors = [];
  
    if (!name || !userName || !email || !password || !password2) {
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
        password,
        password2
      });
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            userNAme,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            userNAme,
            email,
            password
          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'You are now registered and can log in'
                  );
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

module.exports = { doGetUser , doLogin  , doRegister, doUpdateAccount , showFollowed , doFollow }