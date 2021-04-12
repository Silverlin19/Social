/*jshint esversion: 6 */
const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
//cookiesValidation
const expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
// cookies end

const helmet = require('helmet')
require("./db")
const expressLayouts = require('express-ejs-layouts')
const controller = require('./controller')
const cookieParser = require('cookie-parser');
const sequelize = require('./db');
const PORT = process.env.PORT || 6969



 
const sequelizeSessionStore = new SessionStore({
    db: sequelize,
});

// cookies end



const app = express()

// app.use(SessionStore({
//     key: 'userId',
//     secret: 'delta',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {    
//     expires: 60*60*24*7
//     }
// }))
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy-Report-Only',
    "default-src 'self'; font-src 'self' https://use.fontawesome.com/releases/v5.6.3/css/all.css; img-src 'self' https://images.unsplash.com; script-src 'self' https://apis.google.com/js/platform.js https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js https://apis.google.com/js/platform.js https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js; style-src 'self' https://fonts.googleapis.com https://bootswatch.com/4/slate/bootstrap.min.css; frame-src 'self' https://www.youtube.com https://youtube.com;"
  );
  next();
});
app.use(cors({
    origin: ["http://localhost:6969"],
    methods: ["GET" , "POST"],
    credentials: true
}))
app.use(cookieParser());
//cookies
app.use(expressSession({
        key: 'userId',
    secret: 'delta',
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
}));//
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cookieParser())
app.use(bodyParser.json())

app.use(expressLayouts)
app.set('view engine' , 'ejs')

// Static Files
app.use("/Assets", express.static(__dirname + '/Assets'));

//Routes
//home routes
app.get('/', (req,res) => {res.render('register')})
//app.post('/', controller.doLogin)

//register
app.get('/register' , (req,res) => {
    res.render('register')
})
app.post('/register', controller.createUser)
//login
app.get('/login' , (req,res) => {
    res.render('login')
})
app.post('/login', controller.doLogin)
//spot
app.get('/music' , (req,res) => {
    res.render('spot')
})
app.post('/login', controller.doLogin)

//app.get('/bio', controller.doBio)


//Spotify API music section
app.get('/user/:userName/Music' , (req,res) => {
    res.render('spot')
});
app.post('/login', controller.doLogin)

//user bypass
app.get('/user/:userName', controller.userPage)
app.post('/user/:userName', controller.doPost)
//feed of post from user and followed
app.get('/user/:userName/feed', controller.userPage)
app.post('/search' , controller.searchUser)


//settings
app.get('/user/:userName/settings' ,controller.doGetBio)
app.post('/user/:userName/settings', controller.doUpdateAccount)

app.get('/memes' , (req,res) => {
    res.render('reddit')
})

app.get('/delete/:userName', controller.deleteUserPage)
app.post('/delete/:userName', controller.deleteUser)

//app.get('/user/:userName/friends', controller.showFollowed)

app.listen(PORT, function(){
    console.log(`server is running on port: ${PORT}`)
})

//Curl --data-urlencode “name=Kyle_Miller&password=Miller321&email=Kyle@tiptops.com&birthday=1997-02-13” -x POST localhost:6969/register/
//Curl --data-urlencode “name=Kyle_Miller&password=Miller321&email=Kyle@tiptops.com&birthday=1997-02-13” localhost:6969/register/