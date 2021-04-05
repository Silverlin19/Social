const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')
require("./db")
const controller = require('./controller')

const PORT = 6969

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//Routes
//homepage routes
app.get('/', function (req,res) {res.send('hello world')})
app.post('/', controller.doLogin)
app.get('/register', controller.showRegister)
app.post('/register', controller.doRegister)

app.post('/user/:userName/update', controller.doUpdateAccount)

//user routes
app.get('/user/feed', function (req,res) {res.send('sike bitch')})
app.get('/user/:userName', controller.doGetUser)

app.get('/user/:userName/friends', controller.showFollowed)


app.listen(PORT, function(){
    console.log(`server is running on port: ${PORT}`)
})


//Curl --data-urlencode “name=Kyle_Miller&password=Miller321&email=Kyle@tiptops.com&birthday=1997-02-13” -x POST localhost:6969/register/
//Curl --data-urlencode “name=Kyle_Miller&password=Miller321&email=Kyle@tiptops.com&birthday=1997-02-13” localhost:6969/register/