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

const admin_controller = {
    admin: (req, res) => {
        res.render('admin', { allProducts })
    },
    create: (req, res) => {
       res.render('newProducts')
    },
    save: (req, res) => {
        const product = {
            "id": newId(),
            "name": req.body.name_new_product,
            "description": req.body.description_new_product,
            "image": "2.jpeg",
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
    show: (req, res) => {
        let id = req.params.id;
        let editProduct = allProducts.filter(product => product.id == id);
        res.render('productShow', { editProduct });
    },
    edit: (req, res) => {
        let id = req.params.id;
        let editProduct = allProducts.filter(product => product.id == id);
        res.render('editProducts', { editProduct });
    },
    update: (req, res) => {
        let id = req.params.id;

console.log(id);
console.log('///////////');
console.log('///////////');
console.log(allProducts);
console.log('///////////');
console.log(req.body);



        let editProduct = allProducts.map(product =>{
            if(product.id == id){
                return product = {
                    "name": req.body.name_edit_product,
                    "description": req.body.description_edit_product,
                    "image": "4.jpeg",
                    "category": req.body.category_edit_product,
                    "amount": req.body.amount_edit_product,
                    "typeAmount": req.body.type_amount_edit_product,
                    "price": req.body.price_edit_product,
                    "discount": req.body.discount_edit_product
                }
            }
            return product;
        })

        console.log(editProduct);
        console.log('///////////');

        let jsonProducts = JSON.stringify(editProduct, null, 4);
        fs.writeFileSync(productsFilePath, jsonProducts)

        res.redirect('/admin');
    },
    destroy: (req, res) => {
        let id = req.params.id;
        let productsContinue = allProducts.filter(product => product.id != id);

        allProducts = productsContinue;

        let jsonProducts = JSON.stringify(allProducts, null, 4);
        fs.writeFileSync(productsFilePath, jsonProducts)

        res.redirect('/admin');
    }
}

module.exports = admin_controller;