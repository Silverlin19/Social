//https://expressjs.com/en/guide/routing.html express routing guide

//not all the routes we need just a starting point will need a route for every export.*function* from controller.js

const express = require('express')

const accountRoutes = require ('./../controllers/controller.js')

const router = express.Router()

router.get('/all', accountRoutes.accountAll)

router.post('/create', accountRoutes.accountCreate)

router.put('/delete', accountRoutes.accountDelete)

router.put('/update', accountRoutes.accountUpdate) /* might need to do a .post instead of a .put I'm not sure will need to test or possibly ask TA */

module.exports = router