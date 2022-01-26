const fs = require('fs')
const path = require('path');



const productsFilePath = path.resolve(__dirname, '../model/products_model.json');
let allProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const products_controller = {
   
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

