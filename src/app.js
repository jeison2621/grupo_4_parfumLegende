const express = require('express');
const path = require('path');
const main_routes = require('./routes/main_routes'); 
const products_routes = require('./routes/products_routes'); 
const admin_routes = require('./routes/admin_routes');
const user_routes = require('./routes/user_routes')
const methodOverride = require('method-override');    
const app = express();

//Implementación EJS
app.set('view engine', 'ejs'); 
app.set('views', (path.resolve(__dirname, './views')));

//Definiendo carpeta pública
app.use(express.static(path.resolve(__dirname, './public')));

//Configuración para usar PUT, DELETE
app.use(methodOverride("_method"));

//Configuración para caprurar la información del formulario
app.use(express.urlencoded( { extended: false } ));
app.use(express.json());


//Configuración de rutas
app.use('/', main_routes);
app.use('/products', products_routes);
app.use('/admin', admin_routes);
app.use('/user',  user_routes); 

app.use((req, res, next) => {
    res.status(404).send('not-foud');
})

module.exports = app;