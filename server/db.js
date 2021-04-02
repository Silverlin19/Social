// touch this and you become un-alive just turn back now you don't need to touch it or even think about this file - kyle
// I'll explain what this is and what it's for but don't touch it is probably our most important file - also kyle
const path = require ('path')
const dbPath = path.resolve(__dirname, 'db/DB.sql')

const knex = require('knex')({
    client: 'mysql',
    connection: {
        filename: dbPath,
    },
    useNullAsDefault: true
})

module.exports = knex