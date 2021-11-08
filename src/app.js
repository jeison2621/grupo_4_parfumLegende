const express = require('express');
const path = require('path');
const main_routes = require('./routes/main_router'); 
const methodOverride = require('method-Override');
const app = express();

app.set('view engine', 'ejs'); 

app.set('views', (path.join(__dirname, './views')));

//app.set('views', './src/views');

app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride("_method"));

app.use('/', main_routes);
app.use('/login', main_routes);
app.use('/register', main_routes);
app.use('/productCart', main_routes);
app.use('/productDetail', main_routes);

app.use('/newProducts', main_routes);

module.exports = app;