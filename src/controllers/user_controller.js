const model = require('../model/users_model.json')
const fs = require('fs')
const path = require('path');
const res = require('express/lib/response');
const bcrypt = require('bcryptjs');
const {
    validationResult
} = require('express-validator');


const productsFilePath = path.resolve(__dirname, '../model/users_model.json');
let allProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

fs.writeFileSync(path.resolve(__dirname, '../model/users_model.json'), JSON.stringify(model, null, 4), {
    encoding: "utf-8"
})

const newId = () => {
    let ultimo = 0;
    allProducts.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1
}



const user_controller = {
    save: (req, res) => {

        let errors = validationResult(req);
        if (errors.isEmpty()) {
            const user = {

                "id": newId(),
                "name": req.body.name,
                "lastname": req.body.lastname,
                "email": req.body.email,
                "password": bcrypt.hashSync(req.body.password, 10),
                "role": 1,
                "avatar": req.file ? req.file.filename : ''
            }

            /* se comenta codigo de productos, creando codigo de usuario*/

            /*allProducts.push(product)

            /*let jsonProducts = JSON.stringify(allProducts, null, 4);
            fs.writeFileSync(productsFilePath, jsonProducts)*/


            /*res.redirect('/login')*/

            let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../model/users_model.json'), {
                encoding: 'utf-8'
            });
            let users;
            if (archivoUsers == "") {
                users = [];
            } else {
                users = JSON.parse(archivoUsers);
            };

            users.push(user);
            usersJSON = JSON.stringify(users, null, 2);
            fs.writeFileSync(path.resolve(__dirname, '../model/users_model.json'), usersJSON);
            res.redirect('/user/login');

        } else {
            
            return res.render(path.resolve(__dirname, '../views/usuarios/registro'), {
                errors: errors.errors,
                old: req.body
            });
        }

    },

    insert: (req, res) => {

        let {
            name,
            lastname,
            email,
            password
        } = req.body;
        model.push({
            "name": name,
            "email": email,
            "password": password,
            "lastname": lastname
        })

        fs.writeFileSync(path.join(__dirname, '../model/users_model.json'),
            JSON.stringify(model, null, 4), {
                encoding: "utf-8"
            })

    },
    otra: (req, res) => {
        let archivoUsers = fs.readFileSync(path.resolve(__dirname, '../model/users_model.json'), {
            encoding: 'utf-8'
        });
        let users;
        if (archivoUsers == "") {
            users = [];
        } else {
            users = JSON.parse(archivoUsers);
        };
        let user = {
            "nombre": req.body.name,
            "apellido": req.body.lastname,
            "email": req.body.email,
            "password": req.body.password
        }
        console.log(req.body.name);
        console.log(user.nombre);


        if (archivoUsers == "") {
            users = [];
        } else {
            users = JSON.parse(archivoUsers);
        };

        users.push(user);
        usersJSON = JSON.stringify(users, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../model/users_model.json'), usersJSON);
        res.redirect('/user/login');


    },
    ingresar: (req, res) => {
        const errors = validationResult(req);

        if (errors.isEmpty()) {
            let archivoUsuarios = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../model/users_model.json')));
            let usuarioLogueado = archivoUsuarios.find(usuario => usuario.email == req.body.email); 
            //console.log(usuarioLogueado);
            
            //Como podemos modificar nuestros req.body
            delete usuarioLogueado.password;

            //console.log(usuarioLogueado);
            //console.log(req.session);
            //console.log(req.session.usuario);
            
            req.session.usuario = usuarioLogueado; //Guardar del lado del servidor
            //Aquí voy a guardar las cookies del usuario que se loguea
            if(req.body.recordarme){
              res.cookie('email',usuarioLogueado.email,{maxAge: 1000 * 60 * 60 * 24})
            }
            return res.redirect('/'); //Aquí ustedes mandan al usuario para donde quieran (Perfil- home - a donde deseen)

        } else {
            //Devolver a la vista los errores
            res.render(path.resolve(__dirname, '../views/usuarios/login'), {
                errors: errors.mapped(),
                old: req.body
            });
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.cookie('email',null,{maxAge: -1});
        res.redirect('/');
    }




}

module.exports = user_controller;