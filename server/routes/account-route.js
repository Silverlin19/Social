//https://expressjs.com/en/guide/routing.html express routing guide

//not all the routes we need just a starting point will need a route for every export.*function* from controller.js

const express = require('express')
const accountRoutes = require ('./../controller/controller.js')
const bio = require ('../controller/bio.js')

const router = express.Router()

router.get('/all', accountRoutes.accountAll)

router.post('/create', accountRoutes.accountCreate)

router.put('/delete', accountRoutes.accountDelete)

router.post('/update', accountRoutes.accountUpdate)

router.get('/bio', bio.fetchBio)

module.exports = router