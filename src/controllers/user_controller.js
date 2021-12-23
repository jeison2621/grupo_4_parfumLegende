const model = require('../model/users_model.json')
const fs = require('fs')
const path = require('path');
const res = require('express/lib/response');
const { validationResult } = require('express-validator')


const productsFilePath = path.resolve(__dirname, '../model/users_model.json');
let allProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

fs.writeFileSync(path.resolve(__dirname, '../model/users_model.json'), JSON.stringify(model, null, 4),
    { encoding: "utf-8" })

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
        const product = {

            "id": newId(),
            "name": req.body.name,
            "lastname": req.body.lastname, 
            "email": req.body.email,
            "password": req.body.password,
            "Role": 1
        }

        allProducts.push(product)

        let jsonProducts = JSON.stringify(allProducts, null, 4);
        fs.writeFileSync(productsFilePath, jsonProducts)

        res.redirect('/login')
    },

    insert: (req, res) => {


        let { name, lastname, email, password } = req.body;
        model.push({ "name": name, "email": email, "password": password, "lastname": lastname })

        fs.writeFileSync(path.join(__dirname, '../model/users_model.json'),
            JSON.stringify(model, null, 4),
            { encoding: "utf-8" })

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
        res.redirect('/login');


    },


}

module.exports = user_controller;
