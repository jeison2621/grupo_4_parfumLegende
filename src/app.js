const express = require('express');
const path = require('path');
const main_routes = require('./routes/main_router'); 


const app = express();

app.set('view engine', 'ejs'); 
app.set('views', '../src'); 
app.use(express.static(path.join(__dirname, '../public')));



//app.use('/', require('./routes'));
app.use('/', main_routes);
app.use('/login', main_routes);

module.exports = app;