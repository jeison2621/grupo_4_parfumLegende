const fs = require('fs')
const path = require('path');

const productsFilePath = path.resolve(__dirname, '../model/products_model.json');
let allProducts = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const newId = () => {
    let ultimo = 0;
    allProducts.forEach(product => {
        if (product.id > ultimo) {
            ultimo = product.id;
        }
    });
    return ultimo + 1
}

const products_controller = {
    newProducts: (req, res) => {
        res.render('newProducts')
    },
    store: (req, res) => {
        const product = {
            "id": newId(),
            "name": req.body.name_new_product,
            "description": req.body.description_new_product,
            "image": "1.jpeg",
            "category": req.body.category_new_product,
            "amount": req.body.amount_new_product,
            "typeAmount": req.body.type_amount_new_product,
            "price": req.body.price_new_product,
            "discount": req.body.discount_new_product
        }

        allProducts.push(product)

        let jsonProducts = JSON.stringify(allProducts, null, 4);
        fs.writeFileSync(productsFilePath, jsonProducts)

        res.redirect('/products')
    },
    editProducts: (req, res) => {
        let id = req.params.id;
        let editProduct = allProducts.filter(product => product.id == id);
        res.render('editProducts', { editProduct });
    },
    productCart: (req, res) => {
        res.render('productCart');
    },
    productDetail: (req, res) => {
        let id = req.params.id;
        let productDetail = allProducts.filter(product => product.id == id);
        res.render('productDetail', { productDetail });
    },
    products: (req, res) => {
        res.render('products', { allProducts });
    },
    update: (req, res) => {
        let id = req.params.id;
        let idProduct = allProducts.map(product => {
            product.id == id
        })

        const productDetail = {
            ...idProduct
        }

        allProducts.push(productDetail)

        let jsonProducts = JSON.stringify(allProducts, null, 4);
        fs.writeFileSync(productsFilePath, jsonProducts)

        res.render('productDetail', { productDetail });
    }
}

module.exports = products_controller;