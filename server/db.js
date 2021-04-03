// touch this and you become un-alive just turn back now you don't need to touch it or even think about this file - kyle
// I'll explain what this is and what it's for but don't touch it is probably our most important file - also kyle

const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database:'mydb',
    },
})

knex.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });


module.exports = knex