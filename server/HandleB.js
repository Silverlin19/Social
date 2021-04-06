/*jshint esversion: 6 */

const express = require('express');
const app = express();
const expbs = require('express-handlebars');


app.engine('hbs', expbs({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

//routing 
app.get('/',(req,res) => {
    res.render('index');
});

app.get('/about',(req,res) => {
    res.render('about');
});

app.listen (8080, () =>{

    console.log('server is starting aat port ', 8080 );

});