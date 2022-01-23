const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override'); 
//Aqui requiero los paquetes para trabajar lo referido a session y cookies
const session = require('express-session');
const cookieParser = require('cookie-parser');
const acceso = require('./middlewares/acceso');

//Definiendo carpeta pública
app.use(express.static(path.resolve(__dirname, './public')));

//Implementación EJS
app.set('view engine', 'ejs'); 
app.set('views', (path.resolve(__dirname, './views')));

//Configuración para caprurar la información del formulario
app.use(express.urlencoded( { extended: false } ));

//Configuración para usar PUT, DELETE
app.use(methodOverride("_method"));

app.use(session({
    secret : 'topSecret',
    resave: true,
    saveUninitialized: true,
}));

//Aqui coloco el Middleware para activar lo referido a las cookies
app.use(cookieParser());
//Middleware de aplicación que se encarga de controlar si el usuario está logueado o no.
app.use(acceso);
app.use(express.json());

const main_routes = require('./routes/main_routes'); 
const products_routes = require('./routes/products_routes'); 
const admin_routes = require('./routes/admin_routes');
const user_routes = require('./routes/user_routes') 



//Configuración de rutas
app.use('/', main_routes);
app.use('/products', products_routes);
app.use('/admin', admin_routes);
app.use('/user',  user_routes); 


app.use((req, res, next) => {
    res.status(404).send('not-foud');
})

module.exports = app;