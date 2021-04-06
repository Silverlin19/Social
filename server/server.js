const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
require("./db")
const expressLayouts = require('express-ejs-layouts')
const controller = require('./controller')

const PORT = process.env.PORT || 6960

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(expressLayouts)

app.use(expressLayouts)
app.set('view engine' , 'ejs')

//Routes
//homepage routes
app.get('/', (req,res) => {res.render('index')})
//app.post('/', controller.doLogin)
app.get('/register' , (req,res) => {
    res.render('register')
})
//app.post('/register', controller.doRegister)

app.get('/user/:userName/update' ,(res,req) => {
    res.render('update')
})
//app.post('/user/:userName/update', controller.doUpdateAccount)

//user routes
app.get('/user/feed', function (req,res) {res.send('sike bitch')})
//app.get('/user/:userName', controller.doGetUser)

//app.get('/user/:userName/friends', controller.showFollowed)


app.listen(PORT, function(){
    console.log(`server is running on port: ${PORT}`)
})


//Curl --data-urlencode “name=Kyle_Miller&password=Miller321&email=Kyle@tiptops.com&birthday=1997-02-13” -x POST localhost:6969/register/
//Curl --data-urlencode “name=Kyle_Miller&password=Miller321&email=Kyle@tiptops.com&birthday=1997-02-13” localhost:6969/register/