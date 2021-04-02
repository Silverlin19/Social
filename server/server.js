const express = require('express')
const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

const ingredientsRouter = require('./routes/ingredients-route')

const PORT = process.env.PORT || 4001

const app = express()

app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/ingredient', ingredientsRouter)

app.use(function(err,req,res,next) {
    console.error(err.stack)
    res.status(500).send('something is broken')
})

app.use(function (req,res,next) {
    res.status(404).send('sorry we could not find that')
})

app.listen(PORT, function(){
    console.log(`server is running on port: ${PORT}`)
})
