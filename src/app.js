const express = require('express');
const path = require('path');
const main_routes = require('./routes/main_router'); 
const methodOverride = require('method-Override');      //Enviar datos de un formulario mediante put o delete
const app = express();

//implementacion EJs
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
app.use('/editProducts', main_routes);

module.exports = app;