const fs = require('fs')
const path = require('path');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const users    = db.User;
const products = db.Products;


const productsFilePath = path.resolve(__dirname, '../model/products_model.json');
let allProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const products_controller = {
    'list': (req,res)=>{
        db.Product.findAll()
            .then(products =>{
                console.log(products)
            })

    },

    products: (req, res) => {
        res.render('products', { allProducts })
    },
    newProducts: (req, res) => {
        res.render('newProducts')
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {
        let id = req.params.id;
        let productDetail = allProducts.filter(product => product.id == id);
        res.render('productDetail', { productDetail });
    }   
}

module.exports = products_controller;

products_controller.list()
